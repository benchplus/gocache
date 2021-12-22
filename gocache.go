package gocache

import (
	"math/rand"
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
