package gocache

import (
	"encoding/binary"
	"fmt"
	"math/rand"
	"runtime"
	"runtime/debug"
	"strconv"
	"strings"
	"time"
)

func D(d int64) []byte {
	var data [10]byte
	return data[:binary.PutVarint(data[:], int64(d))]
}

func Int64Key(d int64) string {
	return strconv.FormatInt(d, 10)
}

func randomString(n int) []byte {
	b := make([]byte, n)
	for i := range b {
		b[i] = byte(rand.Intn(26) + 'a')
	}
	return b
}

var Data1K = randomString(1024)
var Data1M = randomString(1048576)

var previousPause time.Duration

func GCPause() time.Duration {
	runtime.GC()
	var stats debug.GCStats
	debug.ReadGCStats(&stats)
	pause := stats.PauseTotal - previousPause
	previousPause = stats.PauseTotal
	return pause
}

var gcResult = make(map[string]time.Duration, 0)

func AddGCPause() {
	pc, _, _, _ := runtime.Caller(1)
	name := strings.Replace(runtime.FuncForPC(pc).Name(), "_", "GC_", 1)
	name = name[strings.Index(name, "Benchmark"):]
	if _, ok := gcResult[name]; !ok {
		gcResult[name] = GCPause()
	}
}

func PrintGCPause() {
	for k, v := range gcResult {
		fmt.Printf("%s-1 1 %d ns/op\n", k, v)
	}
}

func PrintMem() {
	for k, v := range memResult {
		fmt.Printf("%s-1 1 %d B\n", k, v)
	}
}

var memResult = make(map[string]uint64, 0)

func AddMem() {
	var ms runtime.MemStats
	runtime.ReadMemStats(&ms)
	pc, _, _, _ := runtime.Caller(1)
	name := strings.Replace(runtime.FuncForPC(pc).Name(), "_", "Mem_", 1)
	name = name[strings.Index(name, "Benchmark"):]
	if _, ok := memResult[name]; !ok {
		memResult[name] = ms.Sys
	}
}

var rateResult = make(map[string]float64, 0)

func AddRate(r float64) {
	var ms runtime.MemStats
	runtime.ReadMemStats(&ms)
	pc, _, _, _ := runtime.Caller(1)
	name := runtime.FuncForPC(pc).Name()
	name = name[strings.Index(name, "Benchmark"):]
	if _, ok := rateResult[name]; !ok {
		rateResult[name] = r
	}
}

func PrintRate() {
	for k, v := range rateResult {
		fmt.Printf("%s-1 1 %.2f %%\n", k, 100.*v)
	}
}
