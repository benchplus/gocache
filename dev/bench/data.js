window.BENCHMARK_DATA = {
  "lastUpdate": 1641818042785,
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
          "id": "dc222bf46b71f639730f5be61167e56a0252e305",
          "message": ":pear: try",
          "timestamp": "2022-01-10T18:03:19+08:00",
          "tree_id": "861c02deb1cae2eac1fca5a385f45d466b758bfa",
          "url": "https://github.com/benchplus/gocache/commit/dc222bf46b71f639730f5be61167e56a0252e305"
        },
        "date": 1641812922072,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 39558005203,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 630,
            "unit": "ns/op",
            "extra": "1869752 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 97.8,
            "unit": "ns/op",
            "extra": "11669686 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1706,
            "unit": "ns/op",
            "extra": "812680 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 850704,
            "unit": "ns/op",
            "extra": "1302 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1164,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 628276,
            "unit": "ns/op",
            "extra": "1684 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1261115122,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 26865162295,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 5107572,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 22163498,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2576311584,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 57269220572,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2446,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 79.1,
            "unit": "ns/op",
            "extra": "15307642 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2723,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2978,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3070,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2529177,
            "unit": "ns/op",
            "extra": "970 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 0.94,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 49037875679,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 63124653712,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 1975424,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 186881203,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 219661722,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145051656,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 32544742529,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 329,
            "unit": "ns/op",
            "extra": "3646080 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 48.7,
            "unit": "ns/op",
            "extra": "24535194 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 289,
            "unit": "ns/op",
            "extra": "4216122 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 287,
            "unit": "ns/op",
            "extra": "4305386 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 690,
            "unit": "ns/op",
            "extra": "1693923 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 340098,
            "unit": "ns/op",
            "extra": "3453 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 125114199,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 19186350382,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 11464393352,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 69812130,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 29799276,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2633836,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145870856,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 42693362406,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 312,
            "unit": "ns/op",
            "extra": "3873884 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 65.6,
            "unit": "ns/op",
            "extra": "18150012 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 272,
            "unit": "ns/op",
            "extra": "4546276 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 270,
            "unit": "ns/op",
            "extra": "4511811 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 638,
            "unit": "ns/op",
            "extra": "1908738 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 319187,
            "unit": "ns/op",
            "extra": "3720 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1167053189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 21422403266,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 12693152353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2557434,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 77518186,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 34270636,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144855048,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 137103698924,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 485,
            "unit": "ns/op",
            "extra": "2409049 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "4876506 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 510,
            "unit": "ns/op",
            "extra": "2138050 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9392366572,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1001,
            "unit": "ns/op",
            "extra": "1148428 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 482964,
            "unit": "ns/op",
            "extra": "2516 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7238915703,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 40245434778,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 24319619112,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 42288337,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 177594080,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 77675501,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143544328,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 95421031404,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 756,
            "unit": "ns/op",
            "extra": "1555566 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.9,
            "unit": "ns/op",
            "extra": "16326699 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 847,
            "unit": "ns/op",
            "extra": "1425952 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 844,
            "unit": "ns/op",
            "extra": "1402182 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1517,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 784914,
            "unit": "ns/op",
            "extra": "1629 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4121672183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 92003388893,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 115304231740,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 351771232,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11847385,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 284947246,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 215800848,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 39310893447,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 693,
            "unit": "ns/op",
            "extra": "1604778 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.9,
            "unit": "ns/op",
            "extra": "14477737 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1191,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1201,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2198,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 862440,
            "unit": "ns/op",
            "extra": "2528 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1350837868,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 30539628558,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 35707522644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2468132,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 75406064,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 107416599,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145313800,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "5d82da1df5e12e0783d98df75897169fcae8a661",
          "message": ":pear: new version",
          "timestamp": "2022-01-10T18:50:09+08:00",
          "tree_id": "7cfcb9ae35acbfece1884ca243d1b52eb57a20cb",
          "url": "https://github.com/benchplus/gocache/commit/5d82da1df5e12e0783d98df75897169fcae8a661"
        },
        "date": 1641812992573,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 48482309291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 700,
            "unit": "ns/op",
            "extra": "1722330 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 111,
            "unit": "ns/op",
            "extra": "10735237 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2079,
            "unit": "ns/op",
            "extra": "643280 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 734951,
            "unit": "ns/op",
            "extra": "1382 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1296,
            "unit": "ns/op",
            "extra": "990115 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 737399,
            "unit": "ns/op",
            "extra": "1698 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1441621148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 31381854122,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 27059097,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 4707499,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 1881791696,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 63813602491,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2788,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 93.5,
            "unit": "ns/op",
            "extra": "12745605 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3164,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3180,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3607,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3062144,
            "unit": "ns/op",
            "extra": "844 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1131278178,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 50825324496,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 64673345167,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 220615864,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 247982788,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2812400,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145477640,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 36613207718,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 371,
            "unit": "ns/op",
            "extra": "3281164 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 61.4,
            "unit": "ns/op",
            "extra": "19088919 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 321,
            "unit": "ns/op",
            "extra": "3836246 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 328,
            "unit": "ns/op",
            "extra": "3660042 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 726,
            "unit": "ns/op",
            "extra": "1706862 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 388865,
            "unit": "ns/op",
            "extra": "3114 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1174661356,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 19652217535,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 11185941717,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 6541803,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 74079611,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 27238000,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145182728,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 42200571606,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 398,
            "unit": "ns/op",
            "extra": "3083256 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 90,
            "unit": "ns/op",
            "extra": "14010866 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 339,
            "unit": "ns/op",
            "extra": "3461682 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 339,
            "unit": "ns/op",
            "extra": "3577756 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 743,
            "unit": "ns/op",
            "extra": "1790666 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 389967,
            "unit": "ns/op",
            "extra": "2754 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1384343065,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 21587203957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 12551668283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3142501,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 98254248,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 36134192,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144068616,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 136341057125,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 448,
            "unit": "ns/op",
            "extra": "2552217 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 241,
            "unit": "ns/op",
            "extra": "4921111 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 505,
            "unit": "ns/op",
            "extra": "2159203 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 6349529647,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 969,
            "unit": "ns/op",
            "extra": "1068548 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 460489,
            "unit": "ns/op",
            "extra": "2266 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6836923698,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 37698179413,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 23754421573,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 44968156,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 190367034,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 66807973,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143675400,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 92671670110,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 783,
            "unit": "ns/op",
            "extra": "1508730 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 70.4,
            "unit": "ns/op",
            "extra": "17189758 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 859,
            "unit": "ns/op",
            "extra": "1389955 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 862,
            "unit": "ns/op",
            "extra": "1228773 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1484,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 802138,
            "unit": "ns/op",
            "extra": "1417 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3715806030,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 89491539492,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 127053642817,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15223199,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 307801910,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 406851262,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 215866384,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 42610305487,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 763,
            "unit": "ns/op",
            "extra": "1552419 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 86.3,
            "unit": "ns/op",
            "extra": "13340876 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1299,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1304,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2553,
            "unit": "ns/op",
            "extra": "989160 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 987517,
            "unit": "ns/op",
            "extra": "2360 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1387770050,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 29460150926,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 36956621265,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 95949211,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 106201112,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2387400,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145608712,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "5d82da1df5e12e0783d98df75897169fcae8a661",
          "message": ":pear: new version",
          "timestamp": "2022-01-10T18:50:09+08:00",
          "tree_id": "7cfcb9ae35acbfece1884ca243d1b52eb57a20cb",
          "url": "https://github.com/benchplus/gocache/commit/5d82da1df5e12e0783d98df75897169fcae8a661"
        },
        "date": 1641814669797,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 47146619087,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 698,
            "unit": "ns/op",
            "extra": "1575240 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 118,
            "unit": "ns/op",
            "extra": "9996568 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1674,
            "unit": "ns/op",
            "extra": "621247 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1227861,
            "unit": "ns/op",
            "extra": "878 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1407,
            "unit": "ns/op",
            "extra": "928960 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 758291,
            "unit": "ns/op",
            "extra": "1479 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1516034285,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 31467718331,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 11249636,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 29662276,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2230655224,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 66934327445,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2928,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 93.7,
            "unit": "ns/op",
            "extra": "12757443 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3490,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3392,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3859,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2999580,
            "unit": "ns/op",
            "extra": "840 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1181893725,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 57331837897,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 74553969121,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 228081168,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 304246512,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 7964896,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145313800,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 39787233534,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 402,
            "unit": "ns/op",
            "extra": "2920430 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 58.4,
            "unit": "ns/op",
            "extra": "20363239 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 355,
            "unit": "ns/op",
            "extra": "3304233 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 354,
            "unit": "ns/op",
            "extra": "3517117 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 871,
            "unit": "ns/op",
            "extra": "1371748 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 408890,
            "unit": "ns/op",
            "extra": "3133 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1039852361,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 23292369530,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13951907876,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2751932,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 94042173,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 41515223,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 144855048,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 51554352758,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 383,
            "unit": "ns/op",
            "extra": "3249243 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 78.7,
            "unit": "ns/op",
            "extra": "14968458 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 339,
            "unit": "ns/op",
            "extra": "3737986 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 343,
            "unit": "ns/op",
            "extra": "3598888 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 783,
            "unit": "ns/op",
            "extra": "1524678 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 389534,
            "unit": "ns/op",
            "extra": "3248 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1369348003,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 27074579284,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 15555472293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 129001069,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 41779111,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3306342,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 143806472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 167726033360,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 608,
            "unit": "ns/op",
            "extra": "1837464 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 306,
            "unit": "ns/op",
            "extra": "3881886 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 734,
            "unit": "ns/op",
            "extra": "1388610 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 10043985665,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1298,
            "unit": "ns/op",
            "extra": "857095 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 649234,
            "unit": "ns/op",
            "extra": "1869 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8776805121,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 48459734709,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 28786230178,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 283208521,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 93937104,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 61614030,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143609864,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 116665618711,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 976,
            "unit": "ns/op",
            "extra": "1240045 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 88.4,
            "unit": "ns/op",
            "extra": "13526997 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 1089,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1033,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1918,
            "unit": "ns/op",
            "extra": "867348 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 976958,
            "unit": "ns/op",
            "extra": "1300 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4938454926,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 118381140823,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 147355023367,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 384588137,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 471753843,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 21501667,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145805320,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 48088702189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1228,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 108,
            "unit": "ns/op",
            "extra": "12082863 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1437,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1416,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2672,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1113950,
            "unit": "ns/op",
            "extra": "2154 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1570183025,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 35197441724,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 43363234586,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 3357144,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 96323370,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 185050543,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 143806472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "5d82da1df5e12e0783d98df75897169fcae8a661",
          "message": ":pear: new version",
          "timestamp": "2022-01-10T18:50:09+08:00",
          "tree_id": "7cfcb9ae35acbfece1884ca243d1b52eb57a20cb",
          "url": "https://github.com/benchplus/gocache/commit/5d82da1df5e12e0783d98df75897169fcae8a661"
        },
        "date": 1641816011007,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 48283839682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 732,
            "unit": "ns/op",
            "extra": "1547155 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 127,
            "unit": "ns/op",
            "extra": "8624436 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1745,
            "unit": "ns/op",
            "extra": "617586 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 779891,
            "unit": "ns/op",
            "extra": "1344 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1401,
            "unit": "ns/op",
            "extra": "914125 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 740575,
            "unit": "ns/op",
            "extra": "1608 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1449542547,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 31344944446,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 35835900,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 5158000,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2089615592,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 65310481903,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3045,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 91.4,
            "unit": "ns/op",
            "extra": "12982375 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3222,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3037,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3482,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2990356,
            "unit": "ns/op",
            "extra": "928 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1148483343,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 53604310937,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 73078302951,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 5685700,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 256410083,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 275065807,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145412104,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 37468975113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 377,
            "unit": "ns/op",
            "extra": "3089740 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 74.4,
            "unit": "ns/op",
            "extra": "17218489 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 363,
            "unit": "ns/op",
            "extra": "3370932 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 348,
            "unit": "ns/op",
            "extra": "3462320 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 798,
            "unit": "ns/op",
            "extra": "1553463 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 399567,
            "unit": "ns/op",
            "extra": "3268 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1063737037,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21745014049,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13353575932,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 7807744,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 72090361,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 40820022,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145608712,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 48918716385,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 369,
            "unit": "ns/op",
            "extra": "3324922 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 93.4,
            "unit": "ns/op",
            "extra": "13311711 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 339,
            "unit": "ns/op",
            "extra": "3825871 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 346,
            "unit": "ns/op",
            "extra": "3773917 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 764,
            "unit": "ns/op",
            "extra": "1541666 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 409935,
            "unit": "ns/op",
            "extra": "3264 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1465092011,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 26755304944,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 15512915501,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 4277624,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 111943780,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 48478255,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144920584,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 160302706858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 584,
            "unit": "ns/op",
            "extra": "2040420 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 313,
            "unit": "ns/op",
            "extra": "3994112 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 732,
            "unit": "ns/op",
            "extra": "1529319 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 10072149219,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1344,
            "unit": "ns/op",
            "extra": "847006 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 636783,
            "unit": "ns/op",
            "extra": "1798 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8751664175,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 44508738573,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 28864338800,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 60812909,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 226560045,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 101651334,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143544328,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 112928246308,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 916,
            "unit": "ns/op",
            "extra": "1257304 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 87.4,
            "unit": "ns/op",
            "extra": "13461386 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 1066,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1162,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1818,
            "unit": "ns/op",
            "extra": "697893 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 922827,
            "unit": "ns/op",
            "extra": "1387 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4132666776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 110655180834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 139448042011,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12687952,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 383926798,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 425777582,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145346568,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 44884638272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1247,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 98.7,
            "unit": "ns/op",
            "extra": "12063440 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1512,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1528,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2932,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1151404,
            "unit": "ns/op",
            "extra": "2214 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1370662227,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 32278189666,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 40432564264,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 3101100,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 101055800,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 158955526,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 143806472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "c9ab7e33d80513569eaecbf4df91daca25198681",
          "message": ":star: new version",
          "timestamp": "2022-01-10T20:13:07+08:00",
          "tree_id": "187332e3a992e9e25082203643e46ab1c73c0737",
          "url": "https://github.com/benchplus/gocache/commit/c9ab7e33d80513569eaecbf4df91daca25198681"
        },
        "date": 1641818041853,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 42082465056,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 635,
            "unit": "ns/op",
            "extra": "1718866 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 97.8,
            "unit": "ns/op",
            "extra": "12364334 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2172,
            "unit": "ns/op",
            "extra": "689616 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1213221,
            "unit": "ns/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1150,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 653707,
            "unit": "ns/op",
            "extra": "1672 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1265331826,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 27468891834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 4533062,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 25808746,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2921177416,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 59973992924,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2743,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 78.1,
            "unit": "ns/op",
            "extra": "15201009 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3076,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2912,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3155,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2422611,
            "unit": "ns/op",
            "extra": "1075 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 0.888,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 47063890351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 68562509668,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 849306,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 190591620,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 249702252,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144723976,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 27885557733,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 326,
            "unit": "ns/op",
            "extra": "3695810 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 42.9,
            "unit": "ns/op",
            "extra": "24599612 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 295,
            "unit": "ns/op",
            "extra": "4150489 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 293,
            "unit": "ns/op",
            "extra": "4238902 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 723,
            "unit": "ns/op",
            "extra": "1714275 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 338445,
            "unit": "ns/op",
            "extra": "3646 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 14712276,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 20138798990,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 11791627647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2603733,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 77371652,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 35602272,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 146133000,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 41801897180,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 319,
            "unit": "ns/op",
            "extra": "3879064 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 67,
            "unit": "ns/op",
            "extra": "17386785 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 284,
            "unit": "ns/op",
            "extra": "4442835 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 277,
            "unit": "ns/op",
            "extra": "4431156 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 618,
            "unit": "ns/op",
            "extra": "1962409 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 313103,
            "unit": "ns/op",
            "extra": "3754 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1053714882,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 21350891853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 12464550082,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 83949833,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 37218211,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3141252,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 215473168,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 140429733411,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 489,
            "unit": "ns/op",
            "extra": "2311472 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 247,
            "unit": "ns/op",
            "extra": "4801711 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 514,
            "unit": "ns/op",
            "extra": "1995283 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 6358762330,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1075,
            "unit": "ns/op",
            "extra": "1060099 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 494421,
            "unit": "ns/op",
            "extra": "2311 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7699600227,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 40264417497,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 25067225174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 43168945,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 189277560,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 83702941,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143544328,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 99524230965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 763,
            "unit": "ns/op",
            "extra": "1526392 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 73.7,
            "unit": "ns/op",
            "extra": "16277234 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 826,
            "unit": "ns/op",
            "extra": "1415190 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 845,
            "unit": "ns/op",
            "extra": "1442371 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1581,
            "unit": "ns/op",
            "extra": "966099 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 763196,
            "unit": "ns/op",
            "extra": "1628 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4095064020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 94134015466,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 121312657280,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 16615529,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 294185345,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 384920767,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 144723976,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 39383636763,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1010,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.8,
            "unit": "ns/op",
            "extra": "13900305 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1257,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1253,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2360,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 858355,
            "unit": "ns/op",
            "extra": "2250 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1261032552,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 29583192178,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 34437068938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 75066868,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 102219201,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2742635,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145117192,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          }
        ]
      }
    ]
  }
}