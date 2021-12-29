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

var gcResult = make(map[string][]time.Duration, 0)

func AddGCPause(name string) {
	gcResult[name] = append(gcResult[name], GCPause())
}

func PrintGCPause() {
	for k, v := range gcResult {
		var sum int64 = 0
		for _, o := range v {
			sum += int64(o)
		}
		fmt.Printf("Benchmark%sGC_orcache-2 1 %f ns/op\n", k, float64(sum)/float64(len(v)))
	}
}
