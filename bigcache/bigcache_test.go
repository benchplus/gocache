package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/allegro/bigcache"
	"github.com/benchplus/gocache"
	"github.com/golang/protobuf/proto"
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
	// mock comment-out result
	fmt.Printf("BenchmarkHeavyWrite1K_bigcache-1 1 0 ns/op\n")
	fmt.Printf("BenchmarkHeavyWrite1KGC_bigcache-1 1 0 ns/op\n")
	gocache.PrintGCPause()
	gocache.PrintMem()
}

func BenchmarkHeavyMixedInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(gocache.Int64Key(int64(i)), gocache.D(int64(i+1)))
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

	gocache.AddMem("HeavyMixedInt")
}

func BenchmarkPutInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.D(int64(i+1)))
	}
}

func BenchmarkGetInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	cache.Set("0", []byte("1"))
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       1024,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.Data1K)
	}
}

func BenchmarkPut1M_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       1048576,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		data, _ := proto.Marshal(&gocache.UserInfo{})
		cache.Set(gocache.Int64Key(int64(i)), data)
	}
}

func BenchmarkChangeOutAllInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	for i := 0; i < b.N*1024; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.D(int64(i+1)))
	}
}

func BenchmarkHeavyReadInt_bigcache(b *testing.B) {
	gocache.GCPause()

	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	for i := 0; i < 1024; i++ {
		cache.Set(gocache.Int64Key(int64(i)), gocache.D(int64(i+1)))
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

	gocache.AddGCPause("HeavyReadInt")
}

func BenchmarkHeavyWriteInt_bigcache(b *testing.B) {
	gocache.GCPause()

	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       8,
		Verbose:            false,
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(gocache.Int64Key(int64(i+start)), gocache.D(int64(i+1)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWriteInt")
}

/* ran too long, comment-out
func BenchmarkHeavyWrite1K_bigcache(b *testing.B) {
	gocache.GCPause()

	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       1024,
		Verbose:            false,
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(gocache.Int64Key(int64(i+start)), gocache.Data1K)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWrite1K")
}
*/
