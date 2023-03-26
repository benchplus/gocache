package benchplus

import (
	"os"
	"runtime/debug"
	"sync"
	"testing"
	"time"

	"github.com/benchplus/gocache"
	"github.com/kpango/gache/v2"
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
	gocache.PrintMem()
	gocache.PrintRate()
}

func BenchmarkHeavyMixedInt_gache(b *testing.B) {
	gc := gache.New[int]().SetDefaultExpire(10 * time.Second)
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				gc.Set(gocache.Int64Key(int64(i)), i+1)
			}
			wg.Done()
		}()
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				gc.Get(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddMem()
}

func BenchmarkPutInt_gache(b *testing.B) {
	gc := gache.New[int]().SetDefaultExpire(10 * time.Second)
	// slen = 512
	for i := 0; i < b.N; i++ {
		gc.Set(gocache.Int64Key(int64(i)), i+1)
	}
}

func BenchmarkGetInt_gache(b *testing.B) {
	gc := gache.New[string]().SetDefaultExpire(10 * time.Second)
	// slen = 512
	gc.Set("0", "0")
	for i := 0; i < b.N; i++ {
		gc.Get("0")
	}
}

func BenchmarkPut1K_gache(b *testing.B) {
	gc := gache.New[[]byte]().SetDefaultExpire(10 * time.Second)
	// slen = 512
	for i := 0; i < b.N; i++ {
		gc.Set(gocache.Int64Key(int64(i)), gocache.Data1K)
	}
}

func BenchmarkPut1M_gache(b *testing.B) {
	gc := gache.New[[]byte]().SetDefaultExpire(10 * time.Second)
	// slen = 512
	for i := 0; i < b.N; i++ {
		gc.Set(gocache.Int64Key(int64(i)), gocache.Data1M)
	}
}

func BenchmarkPutTinyObject_gache(b *testing.B) {
	gc := gache.New[gocache.UserInfo]().SetDefaultExpire(10 * time.Second)
	// slen = 512
	for i := 0; i < b.N; i++ {
		gc.Set(gocache.Int64Key(int64(i)), gocache.UserInfo{})
	}
}

func BenchmarkChangeOutAllInt_gache(b *testing.B) {
	gc := gache.New[int]().SetDefaultExpire(10 * time.Second)
	// slen = 512
	for i := 0; i < b.N*1024; i++ {
		gc.Set(gocache.Int64Key(int64(i)), i+1)
	}
}

func BenchmarkHeavyReadInt_gache(b *testing.B) {
	gc := gache.New[int]().SetDefaultExpire(10 * time.Second)
	gocache.GCPause()

	// slen = 512
	for i := 0; i < 1024; i++ {
		gc.Set(gocache.Int64Key(int64(i)), i+1)
	}
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		wg.Add(1)
		go func() {
			for i := 0; i < 1024; i++ {
				gc.Get(gocache.Int64Key(int64(i)))
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWriteInt_gache(b *testing.B) {
	gc := gache.New[int]().SetDefaultExpire(10 * time.Second)
	gocache.GCPause()

	// slen = 512
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				gc.Set(gocache.Int64Key(int64(i+start)), i+1)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}

func BenchmarkHeavyWrite1K_gache(b *testing.B) {
	gc := gache.New[[]byte]().SetDefaultExpire(10 * time.Second)
	gocache.GCPause()

	// slen = 512
	var wg sync.WaitGroup
	for index := 0; index < 10000; index++ {
		start := index
		wg.Add(1)
		go func() {
			for i := 0; i < 8192; i++ {
				gc.Set(gocache.Int64Key(int64(i+start)), gocache.Data1K)
			}
			wg.Done()
		}()
	}
	wg.Wait()

	gocache.AddGCPause()
}
