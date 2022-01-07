package gocache

import (
	"encoding/binary"
	"fmt"
	"math/rand"
	"runtime"
	"runtime/debug"
	"strings"
	"time"
)

func D(d int64) []byte {
	var data [8]byte
	binary.LittleEndian.PutUint64(data[:], uint64(d))
	return data[:]
}

func Int64Key(d int64) string {
	return string(D(d))
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

func AddGCPause(name string) {
	pc, _, _, _ := runtime.Caller(1)
	name = strings.Replace(runtime.FuncForPC(pc).Name(), "_", "GC_", 1)
	name = name[strings.Index(name, "Benchmark"):]
	if _, ok := gcResult[name]; !ok {
		gcResult[name] = GCPause()
	}
}

func PrintGCPause() {
	for k, v := range gcResult {
		fmt.Printf("%s-2 1 %d ns/op\n", k, v)
	}
}
