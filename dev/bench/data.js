window.BENCHMARK_DATA = {
  "lastUpdate": 1641882515307,
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
        "date": 1641829116681,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 47186260273,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 803,
            "unit": "ns/op",
            "extra": "1469061 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 131,
            "unit": "ns/op",
            "extra": "9063262 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1876,
            "unit": "ns/op",
            "extra": "565989 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 755625,
            "unit": "ns/op",
            "extra": "1357 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1289,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 702422,
            "unit": "ns/op",
            "extra": "1659 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1341581526,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29199050201,
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
            "value": 8003074,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 28604599,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2298623232,
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
            "value": 58539295060,
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
            "value": 94.8,
            "unit": "ns/op",
            "extra": "13245212 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3184,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3045,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3385,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3069967,
            "unit": "ns/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1192108484,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 54196841103,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 58099469309,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2781236,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 236812443,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 250544307,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144920584,
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
            "value": 34466332213,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 383,
            "unit": "ns/op",
            "extra": "3186260 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 65.7,
            "unit": "ns/op",
            "extra": "18815367 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 328,
            "unit": "ns/op",
            "extra": "3717392 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 320,
            "unit": "ns/op",
            "extra": "3751340 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 734,
            "unit": "ns/op",
            "extra": "1636012 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 399236,
            "unit": "ns/op",
            "extra": "2827 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1084582853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21694571646,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 12780962270,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 7285895,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 101186857,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 34625521,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145674248,
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
            "value": 42140623475,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 360,
            "unit": "ns/op",
            "extra": "3416595 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 82.5,
            "unit": "ns/op",
            "extra": "15975805 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 322,
            "unit": "ns/op",
            "extra": "4015584 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 318,
            "unit": "ns/op",
            "extra": "3826593 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 723,
            "unit": "ns/op",
            "extra": "1773020 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 366492,
            "unit": "ns/op",
            "extra": "3121 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1318867150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 25575607508,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 15100981929,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2702932,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 101180289,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 47783571,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 216308752,
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
            "value": 151142152469,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 488,
            "unit": "ns/op",
            "extra": "2175883 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 256,
            "unit": "ns/op",
            "extra": "4658362 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 562,
            "unit": "ns/op",
            "extra": "2100458 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9504750534,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1398,
            "unit": "ns/op",
            "extra": "745144 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 514762,
            "unit": "ns/op",
            "extra": "2386 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7507289861,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 41329190158,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 25984140332,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 53771377,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 224698736,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 85945365,
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
            "value": 101713443460,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 831,
            "unit": "ns/op",
            "extra": "1382084 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 77.6,
            "unit": "ns/op",
            "extra": "15336045 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 962,
            "unit": "ns/op",
            "extra": "1303362 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 919,
            "unit": "ns/op",
            "extra": "1290243 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1568,
            "unit": "ns/op",
            "extra": "730099 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 847497,
            "unit": "ns/op",
            "extra": "1585 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4015207049,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 94365639103,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 114576202966,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13876562,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 299298217,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 372934023,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 143740936,
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
            "value": 40266655649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1095,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 80.2,
            "unit": "ns/op",
            "extra": "12940964 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1260,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1302,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2594,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 877266,
            "unit": "ns/op",
            "extra": "2400 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1291061067,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 30583955541,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 39646895191,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 7167484,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 94198901,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 135067373,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 143872008,
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
        "date": 1641831655965,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 50285781245,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 720,
            "unit": "ns/op",
            "extra": "1452584 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 131,
            "unit": "ns/op",
            "extra": "9135996 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2238,
            "unit": "ns/op",
            "extra": "487233 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 913832,
            "unit": "ns/op",
            "extra": "1168 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1404,
            "unit": "ns/op",
            "extra": "842361 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 814056,
            "unit": "ns/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1570785523,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 34008865371,
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
            "value": 15945196,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 44300585,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 1882971344,
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
            "value": 65696107020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3103,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 112,
            "unit": "ns/op",
            "extra": "11023149 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3744,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3547,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3353,
            "unit": "ns/op",
            "extra": "798454 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2401990,
            "unit": "ns/op",
            "extra": "800 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1261890779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 56456207496,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 79035306426,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 3278562,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 242280619,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 339290642,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144855048,
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
            "value": 38526786599,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 472,
            "unit": "ns/op",
            "extra": "2826654 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 81.3,
            "unit": "ns/op",
            "extra": "14759124 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 393,
            "unit": "ns/op",
            "extra": "3113078 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 400,
            "unit": "ns/op",
            "extra": "3043803 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 979,
            "unit": "ns/op",
            "extra": "1308768 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 451998,
            "unit": "ns/op",
            "extra": "2781 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1413528379,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 24123454834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 14747079612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 10442378,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 115738216,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 46946154,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145379336,
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
            "value": 50912873856,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 418,
            "unit": "ns/op",
            "extra": "2967662 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 97.9,
            "unit": "ns/op",
            "extra": "13139076 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 370,
            "unit": "ns/op",
            "extra": "3288022 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 364,
            "unit": "ns/op",
            "extra": "3415620 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 784,
            "unit": "ns/op",
            "extra": "1558748 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 434006,
            "unit": "ns/op",
            "extra": "2895 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1521184918,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 27320125136,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 16528337434,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3756556,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 114234061,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 58230511,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 145543176,
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
            "value": 174755276802,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 625,
            "unit": "ns/op",
            "extra": "1632735 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 309,
            "unit": "ns/op",
            "extra": "4082902 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 712,
            "unit": "ns/op",
            "extra": "1794699 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9795177266,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1595,
            "unit": "ns/op",
            "extra": "786580 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 647139,
            "unit": "ns/op",
            "extra": "1806 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 9267131617,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 46708780513,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 30033963007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 91292819,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 238204183,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 105732936,
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
            "value": 125047977998,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 1051,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 93.3,
            "unit": "ns/op",
            "extra": "12802117 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 1205,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1208,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1999,
            "unit": "ns/op",
            "extra": "661740 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 1040832,
            "unit": "ns/op",
            "extra": "1179 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4794517197,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 121108988704,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 147336868892,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 18112407,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 442825367,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 465103139,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 144592904,
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
            "value": 45255882790,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1287,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 98.3,
            "unit": "ns/op",
            "extra": "12445838 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1606,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1555,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 3053,
            "unit": "ns/op",
            "extra": "867601 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1285693,
            "unit": "ns/op",
            "extra": "1740 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1519919021,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 33706533205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 43417924954,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 3403656,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 116207212,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 165951050,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 144855048,
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
        "date": 1641835935982,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 41022955152,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1897743 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 92.3,
            "unit": "ns/op",
            "extra": "13823059 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1913,
            "unit": "ns/op",
            "extra": "665312 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 881130,
            "unit": "ns/op",
            "extra": "1194 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1095,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 623343,
            "unit": "ns/op",
            "extra": "1766 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1267031884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 27440437996,
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
            "value": 27717093,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 4449198,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2853344576,
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
            "value": 58536959906,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2579,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 69.4,
            "unit": "ns/op",
            "extra": "17327493 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2729,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3020,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3343,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2585040,
            "unit": "ns/op",
            "extra": "990 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 96816,
            "unit": "ns/op",
            "extra": "10348 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 52398073199,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 69904822383,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2159299,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 233271593,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 233749496,
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
            "value": 28960057819,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 324,
            "unit": "ns/op",
            "extra": "3677655 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 48.4,
            "unit": "ns/op",
            "extra": "24610197 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 275,
            "unit": "ns/op",
            "extra": "4211746 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 275,
            "unit": "ns/op",
            "extra": "4609081 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 681,
            "unit": "ns/op",
            "extra": "1769001 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 326422,
            "unit": "ns/op",
            "extra": "3777 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 8851051,
            "unit": "ns/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21109153183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 12094283404,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 34919002,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2578714,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 91137228,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 146460680,
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
            "value": 42474011189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 301,
            "unit": "ns/op",
            "extra": "3851840 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 63.1,
            "unit": "ns/op",
            "extra": "17019321 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 260,
            "unit": "ns/op",
            "extra": "4853736 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 262,
            "unit": "ns/op",
            "extra": "4930932 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 624,
            "unit": "ns/op",
            "extra": "1910349 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 307371,
            "unit": "ns/op",
            "extra": "3958 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1068023891,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 20784558012,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 12713889428,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3004720,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 86265683,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 37056804,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144658440,
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
            "value": 142655407418,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 509,
            "unit": "ns/op",
            "extra": "2250380 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 240,
            "unit": "ns/op",
            "extra": "4830062 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 569,
            "unit": "ns/op",
            "extra": "1766815 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9204767500,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1042,
            "unit": "ns/op",
            "extra": "1061517 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 493214,
            "unit": "ns/op",
            "extra": "2109 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7825839595,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 40916419655,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 24815630190,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 77684250,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 197880927,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 84753042,
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
            "value": 104434741362,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 765,
            "unit": "ns/op",
            "extra": "1494062 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 64.8,
            "unit": "ns/op",
            "extra": "18423313 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 906,
            "unit": "ns/op",
            "extra": "1417764 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 912,
            "unit": "ns/op",
            "extra": "1378188 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1654,
            "unit": "ns/op",
            "extra": "870322 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 829757,
            "unit": "ns/op",
            "extra": "1512 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4052129462,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 98129711377,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 124500725673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 321374520,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 409784307,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11232257,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145051656,
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
            "value": 39136726174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 931,
            "unit": "ns/op",
            "extra": "1754322 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 87.9,
            "unit": "ns/op",
            "extra": "14666385 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1104,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1215,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2283,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 801856,
            "unit": "ns/op",
            "extra": "2520 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1267838479,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 31408024472,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 36478883449,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2802500,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 83432672,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 110528209,
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
          "id": "c9ab7e33d80513569eaecbf4df91daca25198681",
          "message": ":star: new version",
          "timestamp": "2022-01-10T20:13:07+08:00",
          "tree_id": "187332e3a992e9e25082203643e46ab1c73c0737",
          "url": "https://github.com/benchplus/gocache/commit/c9ab7e33d80513569eaecbf4df91daca25198681"
        },
        "date": 1641882514593,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 46930210518,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 664,
            "unit": "ns/op",
            "extra": "1734135 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 109,
            "unit": "ns/op",
            "extra": "10884186 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2008,
            "unit": "ns/op",
            "extra": "726547 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 972181,
            "unit": "ns/op",
            "extra": "1125 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1268,
            "unit": "ns/op",
            "extra": "988872 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 674896,
            "unit": "ns/op",
            "extra": "1530 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1401067461,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29799320142,
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
            "value": 4133351,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 31129132,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2159217904,
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
            "value": 67863598425,
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
            "value": 85.2,
            "unit": "ns/op",
            "extra": "13454580 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2840,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3129,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3598,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3138530,
            "unit": "ns/op",
            "extra": "853 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1087386156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 55400890148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 76415010686,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2344497,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 203653383,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 258225666,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144330760,
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
            "value": 39679060649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 361,
            "unit": "ns/op",
            "extra": "3215004 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 56.1,
            "unit": "ns/op",
            "extra": "21260649 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 328,
            "unit": "ns/op",
            "extra": "3711559 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 325,
            "unit": "ns/op",
            "extra": "3769125 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 773,
            "unit": "ns/op",
            "extra": "1556035 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 387021,
            "unit": "ns/op",
            "extra": "3172 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1076837688,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21915147239,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13442902795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2607517,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 77139416,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 39297018,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 144527368,
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
            "value": 46869802398,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 351,
            "unit": "ns/op",
            "extra": "3261909 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 71,
            "unit": "ns/op",
            "extra": "16133268 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 276,
            "unit": "ns/op",
            "extra": "4351734 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 286,
            "unit": "ns/op",
            "extra": "4612323 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 745,
            "unit": "ns/op",
            "extra": "1729046 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 366507,
            "unit": "ns/op",
            "extra": "3184 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1287209214,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 24324195984,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 14140799732,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2986852,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 93965132,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 38748103,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144527368,
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
            "value": 154428481763,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 522,
            "unit": "ns/op",
            "extra": "2151477 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 277,
            "unit": "ns/op",
            "extra": "4281130 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 575,
            "unit": "ns/op",
            "extra": "1821434 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9839630263,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1155,
            "unit": "ns/op",
            "extra": "968359 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 539562,
            "unit": "ns/op",
            "extra": "2324 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8026860335,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 43262296612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 27111948773,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 186275705,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 84172470,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 46720059,
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
            "value": 108949402763,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 904,
            "unit": "ns/op",
            "extra": "1332708 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 85.4,
            "unit": "ns/op",
            "extra": "13949168 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 972,
            "unit": "ns/op",
            "extra": "1217548 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1016,
            "unit": "ns/op",
            "extra": "1205236 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1613,
            "unit": "ns/op",
            "extra": "867692 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 870136,
            "unit": "ns/op",
            "extra": "1515 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4886233122,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 104919126957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 131199769350,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 292675155,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 379404857,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15798247,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 215473168,
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
            "value": 43385750916,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 753,
            "unit": "ns/op",
            "extra": "1560662 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 99.3,
            "unit": "ns/op",
            "extra": "12709891 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1249,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1300,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2432,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 992467,
            "unit": "ns/op",
            "extra": "2293 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1513004705,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 30718591637,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 39317143505,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2576618,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 65354759,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 122222555,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145805320,
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