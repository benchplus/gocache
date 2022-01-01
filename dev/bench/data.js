window.BENCHMARK_DATA = {
  "lastUpdate": 1641042960997,
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
          "id": "9c6a7b369113ad36060da639f3adf1f39a62899d",
          "message": ":octocat: add `GetV` and `PutV`",
          "timestamp": "2022-01-01T18:37:31+08:00",
          "tree_id": "1cda4df06b6980a3369f3c5e1b3136e8945e22cc",
          "url": "https://github.com/benchplus/gocache/commit/9c6a7b369113ad36060da639f3adf1f39a62899d"
        },
        "date": 1641036120030,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 85.1,
            "unit": "ns/op",
            "extra": "11845122 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1885,
            "unit": "ns/op",
            "extra": "763665 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1128405,
            "unit": "ns/op",
            "extra": "1200 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1094,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 705954,
            "unit": "ns/op",
            "extra": "1636 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1696268096,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 43000403920,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 14209596,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 36563944,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2630,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11072091 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2822,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2905,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3006,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2229968,
            "unit": "ns/op",
            "extra": "1288 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1765662848,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 117491588541,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 10362063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 533038376,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 476,
            "unit": "ns/op",
            "extra": "2393454 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.4,
            "unit": "ns/op",
            "extra": "26872200 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 531,
            "unit": "ns/op",
            "extra": "2216634 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 531,
            "unit": "ns/op",
            "extra": "2276768 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 645,
            "unit": "ns/op",
            "extra": "1812949 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 485294,
            "unit": "ns/op",
            "extra": "2668 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1795693187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 43197443908,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7529139,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 120985035,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 430,
            "unit": "ns/op",
            "extra": "2823960 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 62.2,
            "unit": "ns/op",
            "extra": "19151376 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 475,
            "unit": "ns/op",
            "extra": "2566138 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 468,
            "unit": "ns/op",
            "extra": "2561620 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 552,
            "unit": "ns/op",
            "extra": "2203101 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 444110,
            "unit": "ns/op",
            "extra": "2857 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2094327825,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 66739863805,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 6967942,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 229168517,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1863765 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6206341 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 560,
            "unit": "ns/op",
            "extra": "2073247 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3071933821,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 953,
            "unit": "ns/op",
            "extra": "1129731 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 604973,
            "unit": "ns/op",
            "extra": "1878 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7325838016,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 58823176290,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 48398205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 213338814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 566,
            "unit": "ns/op",
            "extra": "2197443 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15923445 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 611,
            "unit": "ns/op",
            "extra": "1977399 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 610,
            "unit": "ns/op",
            "extra": "1971730 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1132,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 565890,
            "unit": "ns/op",
            "extra": "2265 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3203195337,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 70667785658,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 10351662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 134897439,
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
          "id": "9c6a7b369113ad36060da639f3adf1f39a62899d",
          "message": ":octocat: add `GetV` and `PutV`",
          "timestamp": "2022-01-01T18:37:31+08:00",
          "tree_id": "1cda4df06b6980a3369f3c5e1b3136e8945e22cc",
          "url": "https://github.com/benchplus/gocache/commit/9c6a7b369113ad36060da639f3adf1f39a62899d"
        },
        "date": 1641038386177,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1179,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 115,
            "unit": "ns/op",
            "extra": "9954312 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1861,
            "unit": "ns/op",
            "extra": "833077 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1184026,
            "unit": "ns/op",
            "extra": "1191 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1290,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 848785,
            "unit": "ns/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2343678359,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 47791859865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 34325305,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 36563568,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3093,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 129,
            "unit": "ns/op",
            "extra": "9434194 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3182,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3116,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3632,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2909889,
            "unit": "ns/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2084534489,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 144916117916,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 10390272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 687831299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 591,
            "unit": "ns/op",
            "extra": "2017590 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 52.6,
            "unit": "ns/op",
            "extra": "22338252 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 663,
            "unit": "ns/op",
            "extra": "1813174 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 686,
            "unit": "ns/op",
            "extra": "1740602 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 801,
            "unit": "ns/op",
            "extra": "1486363 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 593232,
            "unit": "ns/op",
            "extra": "2162 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1872194951,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 51215895084,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8886873,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 133511665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 505,
            "unit": "ns/op",
            "extra": "2318924 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 76.1,
            "unit": "ns/op",
            "extra": "15964360 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 560,
            "unit": "ns/op",
            "extra": "2054341 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 564,
            "unit": "ns/op",
            "extra": "2062742 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 674,
            "unit": "ns/op",
            "extra": "1829377 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 522403,
            "unit": "ns/op",
            "extra": "2222 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2528933221,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 80584145574,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8548558,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 263307628,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 779,
            "unit": "ns/op",
            "extra": "1589344 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 235,
            "unit": "ns/op",
            "extra": "5103932 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 740,
            "unit": "ns/op",
            "extra": "1517204 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4692844922,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1219,
            "unit": "ns/op",
            "extra": "914197 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 758443,
            "unit": "ns/op",
            "extra": "1558 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8363589991,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 70712517959,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 81890464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 264381322,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 668,
            "unit": "ns/op",
            "extra": "1796919 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 89.2,
            "unit": "ns/op",
            "extra": "13312063 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 781,
            "unit": "ns/op",
            "extra": "1641403 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 738,
            "unit": "ns/op",
            "extra": "1610529 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1358,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 690515,
            "unit": "ns/op",
            "extra": "1844 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4456485745,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 85151041745,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 13869468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 188592738,
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
          "id": "e4d463d6a603cfeeb042d7d4cdfd28508d4f9a0d",
          "message": ":hamster: fix space for bigcache",
          "timestamp": "2022-01-01T19:54:27+08:00",
          "tree_id": "ce8554f515e0939a8294afa9e310d217c519a99f",
          "url": "https://github.com/benchplus/gocache/commit/e4d463d6a603cfeeb042d7d4cdfd28508d4f9a0d"
        },
        "date": 1641038670707,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1038,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.3,
            "unit": "ns/op",
            "extra": "12778188 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1706,
            "unit": "ns/op",
            "extra": "754201 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1163815,
            "unit": "ns/op",
            "extra": "1282 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1092,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 750625,
            "unit": "ns/op",
            "extra": "1698 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1742305183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 43137970684,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 13711023,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 31559339,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2609,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "10964870 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2731,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2837,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3226,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2228733,
            "unit": "ns/op",
            "extra": "1351 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1745051776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 119222708505,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8046188,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 526705467,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 495,
            "unit": "ns/op",
            "extra": "2488537 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.3,
            "unit": "ns/op",
            "extra": "26886742 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 535,
            "unit": "ns/op",
            "extra": "2173646 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 538,
            "unit": "ns/op",
            "extra": "2159733 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 646,
            "unit": "ns/op",
            "extra": "1836825 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 486141,
            "unit": "ns/op",
            "extra": "2624 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1748995886,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 42289422935,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7022182,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 98047939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 425,
            "unit": "ns/op",
            "extra": "2826297 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 62.3,
            "unit": "ns/op",
            "extra": "19213069 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 468,
            "unit": "ns/op",
            "extra": "2571004 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 467,
            "unit": "ns/op",
            "extra": "2582527 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 567,
            "unit": "ns/op",
            "extra": "2209537 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 432797,
            "unit": "ns/op",
            "extra": "2839 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2163920068,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 66856748270,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 7337490,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 212259690,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 600,
            "unit": "ns/op",
            "extra": "1953236 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6056396 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 564,
            "unit": "ns/op",
            "extra": "2140567 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3031148984,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1017,
            "unit": "ns/op",
            "extra": "1193582 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 625561,
            "unit": "ns/op",
            "extra": "1815 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7201520652,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 60250440432,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 44163255,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 217858801,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 551,
            "unit": "ns/op",
            "extra": "2165482 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15942150 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 621,
            "unit": "ns/op",
            "extra": "1924296 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 622,
            "unit": "ns/op",
            "extra": "1833308 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1110,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 565238,
            "unit": "ns/op",
            "extra": "2205 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3793585424,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 74767278456,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 13207261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 156741893,
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
          "id": "e4d463d6a603cfeeb042d7d4cdfd28508d4f9a0d",
          "message": ":hamster: fix space for bigcache",
          "timestamp": "2022-01-01T19:54:27+08:00",
          "tree_id": "ce8554f515e0939a8294afa9e310d217c519a99f",
          "url": "https://github.com/benchplus/gocache/commit/e4d463d6a603cfeeb042d7d4cdfd28508d4f9a0d"
        },
        "date": 1641041905986,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1373,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 136,
            "unit": "ns/op",
            "extra": "8915430 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2156,
            "unit": "ns/op",
            "extra": "522652 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 921782,
            "unit": "ns/op",
            "extra": "1526 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1400,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 977029,
            "unit": "ns/op",
            "extra": "1500 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2374697456,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 50312120996,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 30163654,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 41340560,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3076,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "8445392 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3476,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3617,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3778,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3038302,
            "unit": "ns/op",
            "extra": "1034 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2125227966,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 160232222520,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 9643907,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 766870859,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 600,
            "unit": "ns/op",
            "extra": "1981185 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 61.4,
            "unit": "ns/op",
            "extra": "19594026 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 682,
            "unit": "ns/op",
            "extra": "1776542 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 661,
            "unit": "ns/op",
            "extra": "1734128 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 830,
            "unit": "ns/op",
            "extra": "1486036 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 610817,
            "unit": "ns/op",
            "extra": "2029 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2088361871,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 44499178962,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9230811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 154870735,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 534,
            "unit": "ns/op",
            "extra": "2215682 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 86.5,
            "unit": "ns/op",
            "extra": "13164909 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 592,
            "unit": "ns/op",
            "extra": "1981356 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 592,
            "unit": "ns/op",
            "extra": "2034904 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 669,
            "unit": "ns/op",
            "extra": "1715776 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 555247,
            "unit": "ns/op",
            "extra": "2281 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2894602425,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 80455063074,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 10974189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 315012863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 795,
            "unit": "ns/op",
            "extra": "1455661 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 247,
            "unit": "ns/op",
            "extra": "4861633 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 796,
            "unit": "ns/op",
            "extra": "1423584 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3262082001,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1256,
            "unit": "ns/op",
            "extra": "913358 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 818307,
            "unit": "ns/op",
            "extra": "1473 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8856356177,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 68082953240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 60040512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 292245930,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 687,
            "unit": "ns/op",
            "extra": "1712575 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.1,
            "unit": "ns/op",
            "extra": "13481433 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 791,
            "unit": "ns/op",
            "extra": "1559870 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 777,
            "unit": "ns/op",
            "extra": "1546592 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1388,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 767164,
            "unit": "ns/op",
            "extra": "1804 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4405737091,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 79215677793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 280200096,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 21401759,
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
          "id": "a43d6163d27a6733eebce9ab328955137d9dc6eb",
          "message": ":herb: revert space param",
          "timestamp": "2022-01-01T21:03:26+08:00",
          "tree_id": "afbf4eb13c8bee990101ac36fdc86ba39449f656",
          "url": "https://github.com/benchplus/gocache/commit/a43d6163d27a6733eebce9ab328955137d9dc6eb"
        },
        "date": 1641042960306,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1198,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 108,
            "unit": "ns/op",
            "extra": "10500928 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1964,
            "unit": "ns/op",
            "extra": "790624 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1181157,
            "unit": "ns/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1266,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 818920,
            "unit": "ns/op",
            "extra": "1446 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2036400605,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 46601705903,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 38673129,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 35327383,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2907,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 122,
            "unit": "ns/op",
            "extra": "9713101 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3150,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3075,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3514,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2555240,
            "unit": "ns/op",
            "extra": "1276 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1958227239,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 134872291885,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 9184006,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 614403304,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 412,
            "unit": "ns/op",
            "extra": "2883690 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 47.1,
            "unit": "ns/op",
            "extra": "25994442 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 606,
            "unit": "ns/op",
            "extra": "1892596 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 599,
            "unit": "ns/op",
            "extra": "1905865 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 739,
            "unit": "ns/op",
            "extra": "1461386 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 434179,
            "unit": "ns/op",
            "extra": "3141 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1923400451,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 46215168664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8080905,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 117819464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 385,
            "unit": "ns/op",
            "extra": "3164379 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 63.7,
            "unit": "ns/op",
            "extra": "17049640 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 537,
            "unit": "ns/op",
            "extra": "2219847 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 542,
            "unit": "ns/op",
            "extra": "2228191 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 614,
            "unit": "ns/op",
            "extra": "1962484 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 396604,
            "unit": "ns/op",
            "extra": "3235 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2206070174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 49037479340,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8401319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 129353550,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 705,
            "unit": "ns/op",
            "extra": "1668866 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 226,
            "unit": "ns/op",
            "extra": "5456097 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 673,
            "unit": "ns/op",
            "extra": "1775899 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4749639914,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1168,
            "unit": "ns/op",
            "extra": "1016880 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 744726,
            "unit": "ns/op",
            "extra": "1574 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8234858949,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 65798316478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 68560399,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 240390276,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 651,
            "unit": "ns/op",
            "extra": "1856179 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 84.6,
            "unit": "ns/op",
            "extra": "14299996 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 716,
            "unit": "ns/op",
            "extra": "1682932 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 733,
            "unit": "ns/op",
            "extra": "1711440 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1220,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 642395,
            "unit": "ns/op",
            "extra": "2004 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4297041272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 83329330445,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 17090113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 211973795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}