window.BENCHMARK_DATA = {
  "lastUpdate": 1640175401062,
  "repoUrl": "https://github.com/benchplus/gocache",
  "entries": {
    "gocache": [
      {
        "commit": {
          "author": {
            "email": "orca.zhang@yahoo.com",
            "name": "Orca",
            "username": "orca-zhang"
          },
          "committer": {
            "email": "orca.zhang@yahoo.com",
            "name": "Orca",
            "username": "orca-zhang"
          },
          "distinct": true,
          "id": "24e1dbfb393238edab5441fb6f0dc2d702a3a1d9",
          "message": ":wrench: fix",
          "timestamp": "2021-12-22T20:15:28+08:00",
          "tree_id": "39ed91f82bbb886af0ac3759a215e2feef787ba5",
          "url": "https://github.com/benchplus/gocache/commit/24e1dbfb393238edab5441fb6f0dc2d702a3a1d9"
        },
        "date": 1640175400615,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 667,
            "unit": "ns/op",
            "extra": "1807238 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 82.8,
            "unit": "ns/op",
            "extra": "14093347 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1844,
            "unit": "ns/op",
            "extra": "895345 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 965730,
            "unit": "ns/op",
            "extra": "1339 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1051,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 676357,
            "unit": "ns/op",
            "extra": "2295 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 829,
            "unit": "ns/op",
            "extra": "1214547 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 209,
            "unit": "ns/op",
            "extra": "5761777 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 855,
            "unit": "ns/op",
            "extra": "1549828 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 837,
            "unit": "ns/op",
            "extra": "1577514 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 999,
            "unit": "ns/op",
            "extra": "1508878 times\n2 procs"
          },
          {
            "name": "BenchmarkPutChangeOutAll_cacheLRU2",
            "value": 837763,
            "unit": "ns/op",
            "extra": "1641 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 918,
            "unit": "ns/op",
            "extra": "1552597 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 184,
            "unit": "ns/op",
            "extra": "6176250 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 990,
            "unit": "ns/op",
            "extra": "1425561 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 982,
            "unit": "ns/op",
            "extra": "1466580 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 984,
            "unit": "ns/op",
            "extra": "1128117 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 918873,
            "unit": "ns/op",
            "extra": "1572 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 571,
            "unit": "ns/op",
            "extra": "2209936 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 190,
            "unit": "ns/op",
            "extra": "6297177 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 931,
            "unit": "ns/op",
            "extra": "1209084 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 163,
            "unit": "ns/op",
            "extra": "7147644 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 943,
            "unit": "ns/op",
            "extra": "1336512 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 594142,
            "unit": "ns/op",
            "extra": "2436 times\n2 procs"
          }
        ]
      }
    ]
  }
}