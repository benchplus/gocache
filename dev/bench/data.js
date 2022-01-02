window.BENCHMARK_DATA = {
  "lastUpdate": 1641103814594,
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
          "id": "1ddef07a410faeb052a5d70e09359a80ac98ae5f",
          "message": ":star:  new version",
          "timestamp": "2022-01-02T10:19:12+08:00",
          "tree_id": "cb48c00a3c0a8e292ba4bfe8c11e276d84c8770e",
          "url": "https://github.com/benchplus/gocache/commit/1ddef07a410faeb052a5d70e09359a80ac98ae5f"
        },
        "date": 1641099403975,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1327,
            "unit": "ns/op",
            "extra": "982498 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 134,
            "unit": "ns/op",
            "extra": "7781596 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1859,
            "unit": "ns/op",
            "extra": "722436 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 998949,
            "unit": "ns/op",
            "extra": "1456 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1305,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 905016,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2048158560,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 52004581258,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 38922186,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 24852713,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3120,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 129,
            "unit": "ns/op",
            "extra": "8715123 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3164,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3388,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3643,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2715163,
            "unit": "ns/op",
            "extra": "1130 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2219918951,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 147580602440,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 13960118,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 766355625,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 456,
            "unit": "ns/op",
            "extra": "2778156 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 52.3,
            "unit": "ns/op",
            "extra": "22903956 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 603,
            "unit": "ns/op",
            "extra": "2002154 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 611,
            "unit": "ns/op",
            "extra": "1906170 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 725,
            "unit": "ns/op",
            "extra": "1600912 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 442610,
            "unit": "ns/op",
            "extra": "2899 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1975891414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 29762521249,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9473142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 106920364,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 422,
            "unit": "ns/op",
            "extra": "2831574 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 79.1,
            "unit": "ns/op",
            "extra": "14936275 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 593,
            "unit": "ns/op",
            "extra": "2048934 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 571,
            "unit": "ns/op",
            "extra": "1966161 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 707,
            "unit": "ns/op",
            "extra": "1744178 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 430501,
            "unit": "ns/op",
            "extra": "2840 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2673981630,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 34146923307,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 29488015,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 136167336,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 808,
            "unit": "ns/op",
            "extra": "1447316 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 268,
            "unit": "ns/op",
            "extra": "4641102 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 839,
            "unit": "ns/op",
            "extra": "1482910 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4951503220,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1199,
            "unit": "ns/op",
            "extra": "899545 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 750466,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8276516723,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 71272701647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 335206681,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 63917149,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 731,
            "unit": "ns/op",
            "extra": "1589647 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.9,
            "unit": "ns/op",
            "extra": "13185037 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 823,
            "unit": "ns/op",
            "extra": "1485350 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 864,
            "unit": "ns/op",
            "extra": "1469037 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1441,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 775947,
            "unit": "ns/op",
            "extra": "1592 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3961969119,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 76116884014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 15408103,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 265642279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
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
          "id": "1ddef07a410faeb052a5d70e09359a80ac98ae5f",
          "message": ":star:  new version",
          "timestamp": "2022-01-02T10:19:12+08:00",
          "tree_id": "cb48c00a3c0a8e292ba4bfe8c11e276d84c8770e",
          "url": "https://github.com/benchplus/gocache/commit/1ddef07a410faeb052a5d70e09359a80ac98ae5f"
        },
        "date": 1641100036824,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 942,
            "unit": "ns/op",
            "extra": "1319085 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.6,
            "unit": "ns/op",
            "extra": "13841337 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1490,
            "unit": "ns/op",
            "extra": "780444 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1093510,
            "unit": "ns/op",
            "extra": "1462 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1202576 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 753023,
            "unit": "ns/op",
            "extra": "1887 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1690593563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 39835376881,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 10455388,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 23918965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2542,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 105,
            "unit": "ns/op",
            "extra": "12611564 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2704,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2711,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 2963,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2351117,
            "unit": "ns/op",
            "extra": "1363 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1706009257,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 117689534245,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8022951,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 526800981,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 349,
            "unit": "ns/op",
            "extra": "3513378 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28805247 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 484,
            "unit": "ns/op",
            "extra": "2480118 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 480,
            "unit": "ns/op",
            "extra": "2502622 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 587,
            "unit": "ns/op",
            "extra": "1961748 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 375237,
            "unit": "ns/op",
            "extra": "3074 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1706933355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 23006711414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8567681,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 54578292,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 304,
            "unit": "ns/op",
            "extra": "4100410 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 52.4,
            "unit": "ns/op",
            "extra": "20104335 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 460,
            "unit": "ns/op",
            "extra": "2819515 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 455,
            "unit": "ns/op",
            "extra": "2685380 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 528,
            "unit": "ns/op",
            "extra": "2248002 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 334861,
            "unit": "ns/op",
            "extra": "3739 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2001220602,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 26190166449,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 7105748,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 80144681,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1945537 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 189,
            "unit": "ns/op",
            "extra": "6136203 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 532,
            "unit": "ns/op",
            "extra": "2232498 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3134839310,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 928,
            "unit": "ns/op",
            "extra": "1187277 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 622398,
            "unit": "ns/op",
            "extra": "1869 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7070957021,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 59624394209,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 49041695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 211010921,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 553,
            "unit": "ns/op",
            "extra": "2140698 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 77.5,
            "unit": "ns/op",
            "extra": "15931144 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1849572 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 618,
            "unit": "ns/op",
            "extra": "1944882 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1094,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 564503,
            "unit": "ns/op",
            "extra": "2068 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3757615779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 72568200060,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 12332454,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 143033755,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
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
          "id": "1ddef07a410faeb052a5d70e09359a80ac98ae5f",
          "message": ":star:  new version",
          "timestamp": "2022-01-02T10:19:12+08:00",
          "tree_id": "cb48c00a3c0a8e292ba4bfe8c11e276d84c8770e",
          "url": "https://github.com/benchplus/gocache/commit/1ddef07a410faeb052a5d70e09359a80ac98ae5f"
        },
        "date": 1641100724672,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1078,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 102,
            "unit": "ns/op",
            "extra": "11943081 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1822,
            "unit": "ns/op",
            "extra": "631690 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1157659,
            "unit": "ns/op",
            "extra": "1329 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1128,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 796382,
            "unit": "ns/op",
            "extra": "1798 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1751017214,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 42543228086,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 15116767,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 38665278,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2837,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11081908 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3159,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2964,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3345,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2440288,
            "unit": "ns/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1734037756,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 121925882157,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8842043,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 554812186,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 348,
            "unit": "ns/op",
            "extra": "3439118 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28496467 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 489,
            "unit": "ns/op",
            "extra": "2371731 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 491,
            "unit": "ns/op",
            "extra": "2412889 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 585,
            "unit": "ns/op",
            "extra": "2018781 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 359415,
            "unit": "ns/op",
            "extra": "3615 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1930002074,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 24653651634,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8342359,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 74715334,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 328,
            "unit": "ns/op",
            "extra": "3667262 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20111593 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 468,
            "unit": "ns/op",
            "extra": "2668948 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 453,
            "unit": "ns/op",
            "extra": "2641659 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 530,
            "unit": "ns/op",
            "extra": "2230351 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 336694,
            "unit": "ns/op",
            "extra": "3740 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2120774878,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 26727652441,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8685724,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 80797156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 635,
            "unit": "ns/op",
            "extra": "1933959 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6102048 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 605,
            "unit": "ns/op",
            "extra": "1968171 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3085372313,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 996,
            "unit": "ns/op",
            "extra": "1148472 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 632824,
            "unit": "ns/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7351202081,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 59296855280,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 49952731,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 217633559,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 573,
            "unit": "ns/op",
            "extra": "2167312 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15957684 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 621,
            "unit": "ns/op",
            "extra": "1912666 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1952517 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1110,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 567302,
            "unit": "ns/op",
            "extra": "2182 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3465004938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 73111032548,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 9451710,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 164014231,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
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
          "id": "1ddef07a410faeb052a5d70e09359a80ac98ae5f",
          "message": ":star:  new version",
          "timestamp": "2022-01-02T10:19:12+08:00",
          "tree_id": "cb48c00a3c0a8e292ba4bfe8c11e276d84c8770e",
          "url": "https://github.com/benchplus/gocache/commit/1ddef07a410faeb052a5d70e09359a80ac98ae5f"
        },
        "date": 1641102069989,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1050,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.3,
            "unit": "ns/op",
            "extra": "12819100 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1663,
            "unit": "ns/op",
            "extra": "758102 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1145333,
            "unit": "ns/op",
            "extra": "1309 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1126,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 768790,
            "unit": "ns/op",
            "extra": "1368 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2064341293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 43117973198,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 10184759,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 24032174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2694,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11125929 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3258,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2968,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3486,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2308601,
            "unit": "ns/op",
            "extra": "1350 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1987875068,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 126889678719,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8338467,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 592293616,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 350,
            "unit": "ns/op",
            "extra": "3408405 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28813269 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 501,
            "unit": "ns/op",
            "extra": "2426668 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 500,
            "unit": "ns/op",
            "extra": "2396996 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 612,
            "unit": "ns/op",
            "extra": "2005191 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 360332,
            "unit": "ns/op",
            "extra": "3553 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1683764247,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 24831001507,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7281086,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 82700463,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 332,
            "unit": "ns/op",
            "extra": "3660650 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20116059 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 462,
            "unit": "ns/op",
            "extra": "2606215 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 460,
            "unit": "ns/op",
            "extra": "2601928 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 540,
            "unit": "ns/op",
            "extra": "2236224 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 338880,
            "unit": "ns/op",
            "extra": "3679 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2111256794,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 27478806140,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 91479544,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8593399,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 668,
            "unit": "ns/op",
            "extra": "1772902 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 202,
            "unit": "ns/op",
            "extra": "6052320 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 652,
            "unit": "ns/op",
            "extra": "1902878 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3081592854,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1073947 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 704194,
            "unit": "ns/op",
            "extra": "1678 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7654139478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 61543936004,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 62053213,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 268798667,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 560,
            "unit": "ns/op",
            "extra": "2134537 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15857809 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 643,
            "unit": "ns/op",
            "extra": "1879581 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 636,
            "unit": "ns/op",
            "extra": "1875471 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1185,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 578763,
            "unit": "ns/op",
            "extra": "2203 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3916246989,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 79327306776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 14794546,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 201809772,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
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
          "id": "1ddef07a410faeb052a5d70e09359a80ac98ae5f",
          "message": ":star:  new version",
          "timestamp": "2022-01-02T10:19:12+08:00",
          "tree_id": "cb48c00a3c0a8e292ba4bfe8c11e276d84c8770e",
          "url": "https://github.com/benchplus/gocache/commit/1ddef07a410faeb052a5d70e09359a80ac98ae5f"
        },
        "date": 1641103814078,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 882,
            "unit": "ns/op",
            "extra": "1212447 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 86.1,
            "unit": "ns/op",
            "extra": "11667582 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2072,
            "unit": "ns/op",
            "extra": "541065 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1115561,
            "unit": "ns/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1041,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 718819,
            "unit": "ns/op",
            "extra": "1800 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1707601807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 40842663278,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 14143406,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 20872559,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2437,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "10857151 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2679,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2832,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3083,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2106180,
            "unit": "ns/op",
            "extra": "1407 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1727959596,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 128232849414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 596016004,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 7478700,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 346,
            "unit": "ns/op",
            "extra": "3407724 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28830681 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 497,
            "unit": "ns/op",
            "extra": "2390961 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 490,
            "unit": "ns/op",
            "extra": "2426199 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 608,
            "unit": "ns/op",
            "extra": "2031488 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 357548,
            "unit": "ns/op",
            "extra": "3670 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1642485619,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 23870171334,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 6509289,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 68686171,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 330,
            "unit": "ns/op",
            "extra": "3634179 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20107489 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 460,
            "unit": "ns/op",
            "extra": "2485087 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 468,
            "unit": "ns/op",
            "extra": "2593822 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 539,
            "unit": "ns/op",
            "extra": "2228329 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 340523,
            "unit": "ns/op",
            "extra": "3716 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2122092266,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 26515661914,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 78189676,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 7193493,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 604,
            "unit": "ns/op",
            "extra": "2002527 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6105928 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 591,
            "unit": "ns/op",
            "extra": "2054104 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4615334439,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1017,
            "unit": "ns/op",
            "extra": "1083904 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 629330,
            "unit": "ns/op",
            "extra": "1809 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7088635435,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 60275537233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 46816361,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 221652604,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 562,
            "unit": "ns/op",
            "extra": "2188995 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15944820 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 614,
            "unit": "ns/op",
            "extra": "1969964 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 613,
            "unit": "ns/op",
            "extra": "1951251 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1090,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 560786,
            "unit": "ns/op",
            "extra": "2234 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3414735567,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 69259781544,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 30838368,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 133957821,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}