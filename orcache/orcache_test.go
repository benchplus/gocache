package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/orca-zhang/orcache"
)

func TestMain(m *testing.M) {
	setup()
	code := m.Run()
	shutdown()
	os.Exit(code)
}

func setup() {
	debug.SetGCPercent(10)
	fmt.Println("GC pause for warmup: ", gocache.GCPause())
}

func shutdown() {
	gocache.PrintGCPause()
}

func BenchmarkPutInt_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}

func BenchmarkGetInt_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	cache.Put("0", 0)
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1K)
	}
}

func BenchmarkPut1M_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.UserInfo{})
	}
}

func BenchmarkChangeOutAllInt_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < b.N*1024; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}

func BenchmarkHeavyRead_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < 1024; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
	var wg sync.WaitGroup
	for index := 0; index < 1000000; index++ {
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
