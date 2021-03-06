package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/golang/protobuf/proto"
	"github.com/patrickmn/go-cache"
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

func BenchmarkHeavyMixedInt_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				c.Set(gocache.Int64Key(int64(i)), i+1, cache.DefaultExpiration)
			}
			wg.Done()
		}()
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				c.Get(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddMem()
}

func BenchmarkPutInt_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	for i := 0; i < b.N; i++ {
		c.Set(gocache.Int64Key(int64(i)), i+1, cache.DefaultExpiration)
	}
}

func BenchmarkGetInt_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	c.Set("0", "0", cache.DefaultExpiration)
	for i := 0; i < b.N; i++ {
		c.Get("0")
	}
}

func BenchmarkPut1K_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	for i := 0; i < b.N; i++ {
		c.Set(gocache.Int64Key(int64(i)), gocache.Data1K, cache.DefaultExpiration)
	}
}

func BenchmarkPut1M_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	for i := 0; i < b.N; i++ {
		c.Set(gocache.Int64Key(int64(i)), gocache.Data1M, cache.DefaultExpiration)
	}
}

func BenchmarkPutTinyObject_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	for i := 0; i < b.N; i++ {
		data, _ := proto.Marshal(&gocache.UserInfo{})
		c.Set(gocache.Int64Key(int64(i)), data, cache.DefaultExpiration)
	}
}

func BenchmarkChangeOutAllInt_gocache(b *testing.B) {
	c := cache.New(10*time.Second, 0)
	for i := 0; i < b.N*1024; i++ {
		c.Set(gocache.Int64Key(int64(i)), i+1, cache.DefaultExpiration)
	}
}

func BenchmarkHeavyReadInt_gocache(b *testing.B) {
	gocache.GCPause()

	c := cache.New(10*time.Second, 0)
	for i := 0; i < 1024; i++ {
		c.Set(gocache.Int64Key(int64(i)), i+1, cache.DefaultExpiration)
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				c.Get(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWriteInt_gocache(b *testing.B) {
	gocache.GCPause()

	c := cache.New(10*time.Second, 0)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				c.Set(gocache.Int64Key(int64(i+start)), i+1, cache.DefaultExpiration)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWrite1K_gocache(b *testing.B) {
	gocache.GCPause()

	c := cache.New(10*time.Second, 0)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				c.Set(gocache.Int64Key(int64(i+start)), gocache.Data1K, cache.DefaultExpiration)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkCacheHitRate_gocache(b *testing.B) {
	fmt.Println("no print")
	gocache.AddRate(0.0)
}
