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
	gocache.PrintGCPause()
}

func BenchmarkPutInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(fmt.Sprint(i), gocache.D(int64(i+1)))
	}
}

func BenchmarkGetInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       32,
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
		cache.Set(fmt.Sprint(i), gocache.Data1K)
	}
}

func BenchmarkGetIntMiss_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       21,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Get(fmt.Sprint(i))
	}
}

func BenchmarkPutTinyObject_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		data, _ := proto.Marshal(&gocache.UserInfo{})
		cache.Set(fmt.Sprint(i), data)
	}
}

func BenchmarkChangeOutAllInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N*1024; i++ {
		cache.Set(fmt.Sprint(i), gocache.D(int64(i+1)))
	}
}

func BenchmarkHeavyReadInt_bigcache(b *testing.B) {
	gocache.GCPause()

	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < 1024; i++ {
		cache.Set(fmt.Sprint(i), gocache.D(int64(i+1)))
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				cache.Get(fmt.Sprint(i))
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
		MaxEntrySize:       32,
		Verbose:            false,
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(fmt.Sprint(i+start), gocache.D(int64(i+1)))
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
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(fmt.Sprint(i), gocache.Data1K)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWrite1K")
}
*/
