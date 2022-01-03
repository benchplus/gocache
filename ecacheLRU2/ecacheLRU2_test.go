package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/orca-zhang/ecache"
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
}

func BenchmarkPutInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.PutV(fmt.Sprint(i), cache.I(int64(i+1)))
	}
}

func BenchmarkGetInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	cache.Put("0", 1)
	for i := 0; i < b.N; i++ {
		cache.GetV("0")
	}
}

func BenchmarkPut1K_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1K)
	}
}

func BenchmarkPut1M_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.UserInfo{})
	}
}

func BenchmarkChangeOutAllInt_ecacheLRU2(b *testing.B) {
	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < b.N*1024; i++ {
		cache.PutV(fmt.Sprint(i), cache.I(int64(i+1)))
	}
}

func BenchmarkHeavyReadInt_ecacheLRU2(b *testing.B) {
	gocache.GCPause()

	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	for i := 0; i < 1024; i++ {
		cache.PutV(fmt.Sprint(i), cache.I(int64(i+1)))
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				cache.GetV(fmt.Sprint(i))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyReadInt")
}

func BenchmarkHeavyWriteInt_ecacheLRU2(b *testing.B) {
	gocache.GCPause()

	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.PutV(fmt.Sprint(i), cache.I(int64(i+1)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWriteInt")
}

func BenchmarkHeavyWriteIntFull_ecacheLRU2(b *testing.B) {
	gocache.GCPause()

	cache := ecache.NewLRUCache(256, 16, 10*time.Second).LRU2(16)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 10240; i++ {
				cache.PutV(fmt.Sprint(i), cache.I(int64(i+1)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWriteIntFull")
}
