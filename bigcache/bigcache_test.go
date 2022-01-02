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
		MaxEntriesInWindow: 256 * 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(fmt.Sprint(i), []byte(fmt.Sprint(i+1)))
	}
}

func BenchmarkGetInt_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 256 * 32,
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
		MaxEntriesInWindow: 256 * 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(fmt.Sprint(i), gocache.Data1K)
	}
}

func BenchmarkPut1M_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 256 * 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N; i++ {
		cache.Set(fmt.Sprint(i), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_bigcache(b *testing.B) {
	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 256 * 32,
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
		MaxEntriesInWindow: 256 * 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < b.N*1024; i++ {
		cache.Set(fmt.Sprint(i), []byte(fmt.Sprint(i+1)))
	}
}

func BenchmarkHeavyRead_bigcache(b *testing.B) {
	gocache.GCPause()

	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 256 * 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	for i := 0; i < 1024; i++ {
		cache.Set(fmt.Sprint(i), []byte(fmt.Sprint(i+1)))
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

	gocache.AddGCPause("HeavyRead")
}

func BenchmarkHeavyWrite_bigcache(b *testing.B) {
	gocache.GCPause()

	cache, _ := bigcache.NewBigCache(bigcache.Config{
		Shards:             256,
		LifeWindow:         10 * time.Second,
		MaxEntriesInWindow: 256 * 32,
		MaxEntrySize:       32,
		Verbose:            false,
	})
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 10240; i++ {
				cache.Set(fmt.Sprint(i), []byte(fmt.Sprint(i+1)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWrite")
}
