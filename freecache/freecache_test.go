package benchplus

import (
	"fmt"
	"os"
	"runtime/debug"
	"sync"
	"testing"

	"github.com/benchplus/gocache"
	"github.com/coocood/freecache"
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

func BenchmarkPutInt_freecache(b *testing.B) {
	cache := freecache.NewCache(256 * 32 * 8)
	for i := 0; i < b.N; i++ {
		v := []byte(fmt.Sprint(i))
		cache.Set(v, v, 10)
	}
}

func BenchmarkGetInt_freecache(b *testing.B) {
	cache := freecache.NewCache(256 * 32 * 8)
	cache.Set([]byte("0"), []byte("0"), 10)
	for i := 0; i < b.N; i++ {
		cache.Get([]byte("0"))
	}
}

func BenchmarkPut1K_freecache(b *testing.B) {
	cache := freecache.NewCache(256 * 32 * 1024)
	for i := 0; i < b.N; i++ {
		cache.Set([]byte(fmt.Sprint(i)), gocache.Data1K, 10)
	}
}

func BenchmarkPut1M_freecache(b *testing.B) {
	cache := freecache.NewCache(256 * 32 * 1048576) // special case
	for i := 0; i < b.N; i++ {
		cache.Set([]byte(fmt.Sprint(i)), gocache.Data1M, 10)
	}
}

func BenchmarkPutTinyObject_freecache(b *testing.B) {
	cache := freecache.NewCache(256 * 32 * 100)
	for i := 0; i < b.N; i++ {
		data, _ := proto.Marshal(&gocache.UserInfo{})
		cache.Set([]byte(fmt.Sprint(i)), data, 10)
	}
}

func BenchmarkChangeOutAllInt_freecache(b *testing.B) {
	cache := freecache.NewCache(256 * 32 * 8)
	for i := 0; i < b.N*1024; i++ {
		v := []byte(fmt.Sprint(i))
		cache.Set(v, v, 10)
	}
}

func BenchmarkHeavyRead_freecache(b *testing.B) {
	gocache.GCPause()

	cache := freecache.NewCache(256 * 32 * 8)
	for i := 0; i < 1024; i++ {
		v := []byte(fmt.Sprint(i))
		cache.Set(v, v, 10)
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				cache.Get([]byte(fmt.Sprint(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyRead")
}

func BenchmarkHeavyWrite_freecache(b *testing.B) {
	gocache.GCPause()

	cache := freecache.NewCache(256 * 32 * 8)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				v := []byte(fmt.Sprint(i))
				cache.Set(v, v, 10)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause("HeavyWrite")
}
