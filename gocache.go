package gocache

import (
	"fmt"
	"math/rand"
	"runtime"
	"runtime/debug"
	"time"
)

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
	if _, ok := gcResult[name]; !ok {
		gcResult[name] = GCPause()
	}
}

func PrintGCPause() {
	for k, v := range gcResult {
		fmt.Printf("Benchmark%sGC_orcache-2 1 %d ns/op\n", k, v)
	}
}
