package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/FishGoddess/cachego"
	"github.com/benchplus/gocache"
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

func BenchmarkHeavyMixedInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(gocache.Int64Key(int64(i)), i+1, cachego.WithSetTTL(10*time.Second))
			}
			wg.Done()
		}()
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Get(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddMem()
}

func BenchmarkPutInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), i+1, cachego.WithSetTTL(10*time.Second))
	}
}

func BenchmarkGetInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	cache.Set("0", 1, cachego.WithSetTTL(10*time.Second))
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.Data1K, cachego.WithSetTTL(10*time.Second))
	}
}

func BenchmarkPut1M_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.Data1M, cachego.WithSetTTL(10*time.Second))
	}
}

func BenchmarkPutTinyObject_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.UserInfo{}, cachego.WithSetTTL(10*time.Second))
	}
}

func BenchmarkChangeOutAllInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N*1024; i++ {
		cache.Set(gocache.Int64Key(int64(i)), i+1, cachego.WithSetTTL(10*time.Second))
	}
}

func BenchmarkHeavyReadInt_cachego(b *testing.B) {
	gocache.GCPause()

	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < 1024; i++ {
		cache.Set(gocache.Int64Key(int64(i)), i+1, cachego.WithSetTTL(10*time.Second))
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				cache.Get(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWriteInt_cachego(b *testing.B) {
	gocache.GCPause()

	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(gocache.Int64Key(int64(i+start)), i+1, cachego.WithSetTTL(10*time.Second))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWrite1K_cachego(b *testing.B) {
	gocache.GCPause()

	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(gocache.Int64Key(int64(i+start)), gocache.Data1K, cachego.WithSetTTL(10*time.Second))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkCacheHitRate_cachego(b *testing.B) {
	fmt.Println("no print")
	gocache.AddRate(0.0)
}
