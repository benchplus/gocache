package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"

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
}

func BenchmarkPutInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(fmt.Sprint(i), i+1, 10)
	}
}

func BenchmarkGetInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	cache.SetWithTTL("0", 1, 10)
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(fmt.Sprint(i), gocache.Data1K, 10)
	}
}

func BenchmarkPut1M_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(fmt.Sprint(i), gocache.Data1M, 10)
	}
}

func BenchmarkPutTinyObject_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(fmt.Sprint(i), gocache.UserInfo{}, 10)
	}
}

func BenchmarkChangeOutAllInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N*1024; i++ {
		cache.SetWithTTL(fmt.Sprint(i), i+1, 10)
	}
}

func BenchmarkHeavyReadInt_cachego(b *testing.B) {
	gocache.GCPause()

	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < 1024; i++ {
		cache.SetWithTTL(fmt.Sprint(i), i+1, 10)
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

func BenchmarkHeavyWriteInt_cachego(b *testing.B) {
	gocache.GCPause()

	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				cache.SetWithTTL(fmt.Sprint(i+start), i+1, 10)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWriteInt")
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
				cache.SetWithTTL(fmt.Sprint(i+start), gocache.Data1K, 10)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWrite1K")
}
