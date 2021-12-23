package benchplus

import (
	"fmt"
	"os"
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
}

func shutdown() {
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
