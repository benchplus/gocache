package benchplus

import (
	"fmt"
	"os"
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
}

func shutdown() {
}

func BenchmarkPutInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	for i := 0; i < b.N; i++ {
		cache.SetWithTTL(fmt.Sprint(i), i, 10)
	}
}

func BenchmarkGetInt_cachego(b *testing.B) {
	cache := cachego.NewCache(cachego.WithSegmentSize(256), cachego.WithMapSize(32))
	cache.SetWithTTL("0", 0, 10)
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
		cache.SetWithTTL(fmt.Sprint(i), i, 10)
	}
}
