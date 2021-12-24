package benchplus

import (
	"fmt"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/orca-zhang/orcache"
)

func BenchmarkPutInt_orcacheLRU2(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second).LRU2(1024)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}

func BenchmarkGetInt_orcacheLRU2(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second).LRU2(1024)
	cache.Put("0", 0)
	for i := 0; i < b.N; i++ {
		cache.Get("0")
	}
}

func BenchmarkPut1K_orcacheLRU2(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second).LRU2(1024)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1K)
	}
}

func BenchmarkPut1M_orcacheLRU2(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second).LRU2(1024)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_orcacheLRU2(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second).LRU2(1024)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), gocache.UserInfo{})
	}
}

func BenchmarkChangeOutAllInt_orcacheLRU2(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second).LRU2(1024)
	for i := 0; i < b.N*1024; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}
