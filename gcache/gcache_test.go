package benchplus

import (
	"os"
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
}

func shutdown() {
}

func BenchmarkPutInt_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N; i++ {
		cache.Set(i, i)
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

func BenchmarkPut1M_gcache(b *testing.B) {
	cache := gcache.New(256 * 32).LRU().Build()
	for i := 0; i < b.N; i++ {
		cache.Set(i, gocache.Data1M)
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
		cache.Set(i, i)
	}
}
