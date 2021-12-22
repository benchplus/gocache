package benchplus

import (
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/orca-zhang/cache"
)

func TestMain(m *testing.M) {
	setup()
	code := m.Run()
	shutdown()
	os.Exit(code)
}

func setup() {
}

func shutdown() {
}

func BenchmarkPutInt_cache(b *testing.B) {
	cache := cache.NewLRUCache(1024, 1024, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}

func BenchmarkGetInt_cache(b *testing.B) {
	cache := cache.NewLRUCache(1024, 1024, 10*time.Second)
	cache.Put("0", 0)
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_cache(b *testing.B) {
	cache := cache.NewLRUCache(1024, 1024, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1K)
	}
}

func BenchmarkPut1M_cache(b *testing.B) {
	cache := cache.NewLRUCache(1024, 1024, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_cache(b *testing.B) {
	cache := cache.NewLRUCache(1024, 1024, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.UserInfo{})
	}
}

func BenchmarkChangeOutAllInt_cache(b *testing.B) {
	cache := cache.NewLRUCache(1024, 1024, 10*time.Second)
	for i := 0; i < b.N*1024; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}
