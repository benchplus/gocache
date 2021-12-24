package benchplus

import (
	"fmt"
	"os"
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
}

func shutdown() {
}

func BenchmarkPutInt_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	for i := 0; i < b.N; i++ {
		cache.Put(fmt.Sprint(i), i)
	}
}

func BenchmarkGetInt_orcache(b *testing.B) {
	cache := orcache.NewLRUCache(256, 32, 10*time.Second)
	orcache.Put("0", 0)
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
