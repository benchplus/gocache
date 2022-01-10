package benchplus

import (
	"fmt"
	"math/rand"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/orca-zhang/ecache"
	"github.com/orca-zhang/ecache/stats"
)

func TestMain(m *testing.M) {
	setup()
	code := m.Run()
	shutdown()
	os.Exit(code)
}

func setup() {
	debug.SetGCPercent(10)
}

func shutdown() {
	gocache.PrintGCPause()
	gocache.PrintMem()
	gocache.PrintRate()
}

func BenchmarkHeavyMixedInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.PutInt64(gocache.Int64Key(int64(i)), int64(i+1))
			}
			wg.Done()
		}()
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.GetInt64(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddMem()
}

func BenchmarkPutInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.PutInt64(gocache.Int64Key(int64(i)), int64(i+1))
	}
}

func BenchmarkGetInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	cache.PutInt64("0", int64(1))
	for i := 0; i < b.N; i++ {
		cache.GetInt64("0")
	}
}

func BenchmarkPut1K_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.PutBytes(gocache.Int64Key(int64(i)), gocache.Data1K)
	}
}

func BenchmarkPut1M_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.PutBytes(gocache.Int64Key(int64(i)), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.Put(gocache.Int64Key(int64(i)), gocache.UserInfo{})
	}
}

func BenchmarkChangeOutAllInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N*1024; i++ {
		cache.PutInt64(gocache.Int64Key(int64(i)), int64(i+1))
	}
}

func BenchmarkHeavyReadInt_ecacheLRU2(b *testing.B) {
	gocache.GCPause()

	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < 1024; i++ {
		cache.PutInt64(gocache.Int64Key(int64(i)), int64(i+1))
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				cache.GetInt64(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWriteInt_ecacheLRU2(b *testing.B) {
	gocache.GCPause()

	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.PutInt64(gocache.Int64Key(int64(i+start)), int64(i+1))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWrite1K_ecacheLRU2(b *testing.B) {
	gocache.GCPause()

	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.PutBytes(gocache.Int64Key(int64(i+start)), gocache.Data1K)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkCacheRate_ecacheLRU2(b *testing.B) {
	rand.Seed(168888888888)
	cache := ecache.NewLRUCache(256, 21, 30*time.Second).LRU2(21)
	for i := 0; i < 100000; i++ {
		cache.PutInt64(gocache.Int64Key(int64(i)), int64(i+1))
	}
	cnt := 0
	cache.Walk(func(_ string, _ *interface{}, _ []byte, _ int64) bool {
		cnt++
		return true
	})
	fmt.Println(cnt)
	stats.Bind("x", cache)
	for i := 0; i < 100000; i++ {
		x := rand.Int63n(20000)
		if i&1 == 0 {
			cache.PutInt64(gocache.Int64Key(int64(x)), int64(x+1))
		} else {
			cache.Get(gocache.Int64Key(int64(x)))
		}
	}

	n, _ := stats.Stats().Load("x")
	s := n.(*stats.StatsNode)
	gocache.AddRate(float64(s.GetHit) / float64(s.GetHit+s.GetMiss))
}
