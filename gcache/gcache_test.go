package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"

	"github.com/benchplus/gocache"
	"github.com/bluele/gcache"
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

func BenchmarkPutInt_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N; i++ {
		cache.Set(i, i+1)
	}
}

func BenchmarkGetInt_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	cache.Set("0", "0")
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N; i++ {
		cache.Set(i, gocache.Data1K)
	}
}

func BenchmarkGetIntMiss_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N; i++ {
		cache.Get(fmt.Sprint(i))
	}
}

func BenchmarkPutTinyObject_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N; i++ {
		data, _ := proto.Marshal(&gocache.UserInfo{})
		cache.Set(i, data)
	}
}

func BenchmarkChangeOutAllInt_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N*1024; i++ {
		cache.Set(i, i+1)
	}
}

func BenchmarkHeavyReadInt_gcache(b *testing.B) {
	gocache.GCPause()

	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < 1024; i++ {
		cache.Set(i, i+1)
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

func BenchmarkHeavyWriteInt_gcache(b *testing.B) {
	gocache.GCPause()

	cache := gcache.New(256 * 32).LRU().Build()
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(i+start, i+1)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWriteInt")
}

func BenchmarkHeavyWrite1K_gcache(b *testing.B) {
	gocache.GCPause()

	cache := gcache.New(256 * 32).LRU().Build()
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.Set(i+start, gocache.Data1K)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWrite1K")
}
