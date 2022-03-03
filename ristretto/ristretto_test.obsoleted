package benchplus

import (
	"math/rand"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/dgraph-io/ristretto"
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

func BenchmarkHeavyMixedInt_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.SetWithTTL(gocache.Int64Key(int64(i)), int64(i+1), 1, 10*time.Second)
				cache.Wait()
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

func BenchmarkPutInt_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(gocache.Int64Key(int64(i)), int64(i+1), 1, 10*time.Second)
	}
	cache.Wait()
}

func BenchmarkGetInt_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	cache.SetWithTTL("0", 1, 1, 10*time.Second)
	cache.Wait()
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(gocache.Int64Key(int64(i)), gocache.Data1K, 1, 10*time.Second)
	}
	cache.Wait()
}

func BenchmarkPut1M_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(gocache.Int64Key(int64(i)), gocache.Data1M, 1, 10*time.Second)
	}
	cache.Wait()
}

func BenchmarkPutTinyObject_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(gocache.Int64Key(int64(i)), gocache.UserInfo{}, 1, 10*time.Second)
	}
	cache.Wait()
}

func BenchmarkChangeOutAllInt_ristretto(b *testing.B) {
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	for i := 0; i < b.N*1024; i++ {
		cache.SetWithTTL(gocache.Int64Key(int64(i)), int64(i+1), 1, 10*time.Second)
	}
	cache.Wait()
}

func BenchmarkHeavyReadInt_ristretto(b *testing.B) {
	gocache.GCPause()

	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	for i := 0; i < 1024; i++ {
		cache.SetWithTTL(gocache.Int64Key(int64(i)), int64(i+1), 1, 10*time.Second)
	}
	cache.Wait()
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

func BenchmarkHeavyWriteInt_ristretto(b *testing.B) {
	gocache.GCPause()

	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.SetWithTTL(gocache.Int64Key(int64(i+start)), int64(i+1), 1, 10*time.Second)
				cache.Wait()
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWrite1K_ristretto(b *testing.B) {
	gocache.GCPause()

	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 << 5, // number of keys to track frequency of (10M).
		MaxCost:     256 << 5, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.SetWithTTL(gocache.Int64Key(int64(i+start)), gocache.Data1K, 1, 10*time.Second)
				cache.Wait()
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkCacheHitRate_ristretto(b *testing.B) {
	rand.Seed(168888888888)
	cache, _ := ristretto.NewCache(&ristretto.Config{
		NumCounters: 256 * 42, // number of keys to track frequency of (10M).
		MaxCost:     256 * 42, // maximum cost of cache (1GB).
		BufferItems: 64,       // number of keys per Get buffer.
		Metrics:     true,
	})
	for i := 0; i < 100000; i++ {
		cache.Set(gocache.Int64Key(int64(i)), int64(i+1), 1)
	}
	cache.Wait()
	for i := 0; i < 100000; i++ {
		x := rand.Int63n(20000)
		if i&1 == 0 {
			cache.Set(gocache.Int64Key(int64(x)), int64(x+1), 1)
			cache.Wait()
		} else {
			cache.Get(gocache.Int64Key(int64(x)))
		}
	}

	gocache.AddRate(cache.Metrics.Ratio())
}
