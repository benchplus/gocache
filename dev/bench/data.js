window.BENCHMARK_DATA = {
  "lastUpdate": 1641113076181,
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
        "date": 1641105270622,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1082,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 91.5,
            "unit": "ns/op",
            "extra": "11694980 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1816,
            "unit": "ns/op",
            "extra": "716977 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1194606,
            "unit": "ns/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1176,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 814989,
            "unit": "ns/op",
            "extra": "1776 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1867922088,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 43328814491,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 56585453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 15143392,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2763,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11084146 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3221,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3171,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3493,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2401447,
            "unit": "ns/op",
            "extra": "1321 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1803028973,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 128627637644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 9828267,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 604426585,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 352,
            "unit": "ns/op",
            "extra": "3461907 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28800868 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 496,
            "unit": "ns/op",
            "extra": "2321414 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 497,
            "unit": "ns/op",
            "extra": "2405263 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 603,
            "unit": "ns/op",
            "extra": "1968567 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 359635,
            "unit": "ns/op",
            "extra": "3638 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1830991982,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 25508153423,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 16604326,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 84852526,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 331,
            "unit": "ns/op",
            "extra": "3589300 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.4,
            "unit": "ns/op",
            "extra": "20085684 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 475,
            "unit": "ns/op",
            "extra": "2592202 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 464,
            "unit": "ns/op",
            "extra": "2585152 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 551,
            "unit": "ns/op",
            "extra": "2190967 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 343375,
            "unit": "ns/op",
            "extra": "3698 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2193212412,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 28018840531,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 9032375,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 111061028,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1942082 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 206,
            "unit": "ns/op",
            "extra": "6124120 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 584,
            "unit": "ns/op",
            "extra": "2070508 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3043157485,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1042,
            "unit": "ns/op",
            "extra": "1125388 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 643166,
            "unit": "ns/op",
            "extra": "1798 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7596431645,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 61008663016,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 53922556,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 231307165,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 560,
            "unit": "ns/op",
            "extra": "2169439 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15797898 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 626,
            "unit": "ns/op",
            "extra": "1923440 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 623,
            "unit": "ns/op",
            "extra": "1926769 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1113,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 597941,
            "unit": "ns/op",
            "extra": "2216 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3867118671,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 79618576293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 10531794,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 200136984,
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
        "date": 1641105935297,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 882,
            "unit": "ns/op",
            "extra": "1228016 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.4,
            "unit": "ns/op",
            "extra": "12604312 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2080,
            "unit": "ns/op",
            "extra": "530859 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1113838,
            "unit": "ns/op",
            "extra": "1387 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1066,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 694911,
            "unit": "ns/op",
            "extra": "1467 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2022795808,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 41252966413,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 10295283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 21105947,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2447,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11077594 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2750,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2633,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 2902,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2104131,
            "unit": "ns/op",
            "extra": "1430 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1717570533,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 113898953596,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 7761246,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 521873985,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 348,
            "unit": "ns/op",
            "extra": "3493412 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28837242 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2478254 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 487,
            "unit": "ns/op",
            "extra": "2229718 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 582,
            "unit": "ns/op",
            "extra": "2024756 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 355063,
            "unit": "ns/op",
            "extra": "3656 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1776610344,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 24002434471,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 6464354,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 59845673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 331,
            "unit": "ns/op",
            "extra": "3673099 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "19004244 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 454,
            "unit": "ns/op",
            "extra": "2642642 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 457,
            "unit": "ns/op",
            "extra": "2632396 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 534,
            "unit": "ns/op",
            "extra": "2251264 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 338665,
            "unit": "ns/op",
            "extra": "3729 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2168504240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 25894239210,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 80370589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 30192389,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 593,
            "unit": "ns/op",
            "extra": "2028001 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 197,
            "unit": "ns/op",
            "extra": "6103809 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 517,
            "unit": "ns/op",
            "extra": "2295410 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3095356473,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 971,
            "unit": "ns/op",
            "extra": "1220304 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 608622,
            "unit": "ns/op",
            "extra": "1760 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7009990415,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 57059132765,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 48592240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 205065026,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 548,
            "unit": "ns/op",
            "extra": "2180859 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15938812 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 610,
            "unit": "ns/op",
            "extra": "1966183 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 610,
            "unit": "ns/op",
            "extra": "1978184 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1085,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 562270,
            "unit": "ns/op",
            "extra": "2248 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3208378730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 70623719995,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 8891848,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 121648238,
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
        "date": 1641106615306,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1336,
            "unit": "ns/op",
            "extra": "900958 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 134,
            "unit": "ns/op",
            "extra": "7700746 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2261,
            "unit": "ns/op",
            "extra": "575803 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1067335,
            "unit": "ns/op",
            "extra": "1375 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1450,
            "unit": "ns/op",
            "extra": "834547 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 1075319,
            "unit": "ns/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2410323104,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 55161842806,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 16439985,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 34023278,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3252,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 141,
            "unit": "ns/op",
            "extra": "8396517 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3671,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3494,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3748,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2954120,
            "unit": "ns/op",
            "extra": "1063 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2152217624,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 162945828089,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 11847742,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 797557311,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 470,
            "unit": "ns/op",
            "extra": "2397362 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 54.7,
            "unit": "ns/op",
            "extra": "20805615 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 628,
            "unit": "ns/op",
            "extra": "1940569 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 633,
            "unit": "ns/op",
            "extra": "1786315 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 766,
            "unit": "ns/op",
            "extra": "1583236 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 462724,
            "unit": "ns/op",
            "extra": "2834 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2257027348,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 31027629222,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8214037,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 96690768,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 425,
            "unit": "ns/op",
            "extra": "2768588 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 79.3,
            "unit": "ns/op",
            "extra": "15508622 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 596,
            "unit": "ns/op",
            "extra": "2023608 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 598,
            "unit": "ns/op",
            "extra": "2045000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 729,
            "unit": "ns/op",
            "extra": "1607438 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 450800,
            "unit": "ns/op",
            "extra": "2857 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2654732727,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 32811990770,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 11839933,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 112956662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 777,
            "unit": "ns/op",
            "extra": "1552632 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 256,
            "unit": "ns/op",
            "extra": "4579884 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1561773 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4809388573,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1213,
            "unit": "ns/op",
            "extra": "964462 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 772430,
            "unit": "ns/op",
            "extra": "1442 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8818094162,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 68476215841,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 258549355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 72876128,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 768,
            "unit": "ns/op",
            "extra": "1608379 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 92.9,
            "unit": "ns/op",
            "extra": "12698362 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 814,
            "unit": "ns/op",
            "extra": "1503639 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 828,
            "unit": "ns/op",
            "extra": "1498574 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1372,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 736275,
            "unit": "ns/op",
            "extra": "1725 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4681698697,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 80185865779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 203184445,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 21672262,
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
        "date": 1641112409435,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1317,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 118,
            "unit": "ns/op",
            "extra": "9420631 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1974,
            "unit": "ns/op",
            "extra": "662120 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1027799,
            "unit": "ns/op",
            "extra": "1208 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1314,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 965180,
            "unit": "ns/op",
            "extra": "1491 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2454002248,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 52711769050,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 21656439,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 31104692,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3140,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 131,
            "unit": "ns/op",
            "extra": "9255172 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3295,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3158,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3749,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2938906,
            "unit": "ns/op",
            "extra": "1156 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2332546061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 151783952494,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 7505045,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 682970783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 448,
            "unit": "ns/op",
            "extra": "2782873 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 55.7,
            "unit": "ns/op",
            "extra": "21603700 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 613,
            "unit": "ns/op",
            "extra": "1964194 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1988222 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1645588 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 449719,
            "unit": "ns/op",
            "extra": "2869 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2069727150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 28614829486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9132249,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 79565056,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 443,
            "unit": "ns/op",
            "extra": "2929171 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 78.7,
            "unit": "ns/op",
            "extra": "14815492 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 581,
            "unit": "ns/op",
            "extra": "2081252 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 596,
            "unit": "ns/op",
            "extra": "2098548 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 683,
            "unit": "ns/op",
            "extra": "1735659 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 434935,
            "unit": "ns/op",
            "extra": "3099 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2834175509,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 31818051557,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 12317770,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 104767020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 739,
            "unit": "ns/op",
            "extra": "1653811 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 239,
            "unit": "ns/op",
            "extra": "5012469 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 684,
            "unit": "ns/op",
            "extra": "1657471 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3230525987,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1235,
            "unit": "ns/op",
            "extra": "860698 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 789160,
            "unit": "ns/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8145679052,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 67398648434,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 241726736,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 59237155,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 718,
            "unit": "ns/op",
            "extra": "1661032 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.8,
            "unit": "ns/op",
            "extra": "13564509 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 792,
            "unit": "ns/op",
            "extra": "1405520 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 792,
            "unit": "ns/op",
            "extra": "1515643 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1351,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 724037,
            "unit": "ns/op",
            "extra": "1588 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4364624080,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 76588189007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 23052279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 197092388,
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
        "date": 1641113075580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1323,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 131,
            "unit": "ns/op",
            "extra": "7992517 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2320,
            "unit": "ns/op",
            "extra": "548672 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1003777,
            "unit": "ns/op",
            "extra": "1270 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1313,
            "unit": "ns/op",
            "extra": "998253 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 923846,
            "unit": "ns/op",
            "extra": "1400 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2769655486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 53859877283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 38568708,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 8408063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3097,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "8738208 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3394,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3368,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3869,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2757666,
            "unit": "ns/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2127345752,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 145372658639,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 19226938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 650724965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 443,
            "unit": "ns/op",
            "extra": "2712429 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 52.7,
            "unit": "ns/op",
            "extra": "22558687 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 610,
            "unit": "ns/op",
            "extra": "1901437 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 627,
            "unit": "ns/op",
            "extra": "1915981 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 726,
            "unit": "ns/op",
            "extra": "1526004 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 457769,
            "unit": "ns/op",
            "extra": "2872 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2167121002,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 28617884684,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 23432648,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 85401642,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 423,
            "unit": "ns/op",
            "extra": "2900134 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 79.3,
            "unit": "ns/op",
            "extra": "15905360 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 574,
            "unit": "ns/op",
            "extra": "2099920 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 573,
            "unit": "ns/op",
            "extra": "2092201 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 684,
            "unit": "ns/op",
            "extra": "1745586 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 430213,
            "unit": "ns/op",
            "extra": "3049 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2688125148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 31793092172,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 115765512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 11639647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 744,
            "unit": "ns/op",
            "extra": "1601440 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "5103406 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 688,
            "unit": "ns/op",
            "extra": "1786716 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4765847308,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1195,
            "unit": "ns/op",
            "extra": "994575 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 775541,
            "unit": "ns/op",
            "extra": "1498 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8578496143,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 67220339591,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 66618293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 254459777,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 689,
            "unit": "ns/op",
            "extra": "1695050 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 87.3,
            "unit": "ns/op",
            "extra": "13263163 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 787,
            "unit": "ns/op",
            "extra": "1477974 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 780,
            "unit": "ns/op",
            "extra": "1518865 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1331,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 749581,
            "unit": "ns/op",
            "extra": "1720 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4088229188,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 77060880010,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 13196395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 179663408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}