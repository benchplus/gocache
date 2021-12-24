window.BENCHMARK_DATA = {
  "lastUpdate": 1640335566453,
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
          "id": "b359a82ad725cbd71b953f4aa466c481850f8ebb",
          "message": ":hamster: 1024*1024 -> 256*32",
          "timestamp": "2021-12-24T01:52:50+08:00",
          "tree_id": "83b4a557cd7a288d318ef4f450ede6a7911e531f",
          "url": "https://github.com/benchplus/gocache/commit/b359a82ad725cbd71b953f4aa466c481850f8ebb"
        },
        "date": 1640282357868,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 634,
            "unit": "ns/op",
            "extra": "1645167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.1,
            "unit": "ns/op",
            "extra": "14480702 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2073,
            "unit": "ns/op",
            "extra": "802825 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1227544,
            "unit": "ns/op",
            "extra": "1290 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1164,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 679140,
            "unit": "ns/op",
            "extra": "2166 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 385,
            "unit": "ns/op",
            "extra": "2994864 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 39.1,
            "unit": "ns/op",
            "extra": "27206653 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 422,
            "unit": "ns/op",
            "extra": "2896204 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 421,
            "unit": "ns/op",
            "extra": "2818921 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 484,
            "unit": "ns/op",
            "extra": "2488483 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 392865,
            "unit": "ns/op",
            "extra": "2884 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 393,
            "unit": "ns/op",
            "extra": "3017494 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 35.3,
            "unit": "ns/op",
            "extra": "33832369 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 441,
            "unit": "ns/op",
            "extra": "2719354 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 442,
            "unit": "ns/op",
            "extra": "2751069 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 514,
            "unit": "ns/op",
            "extra": "2330902 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 411908,
            "unit": "ns/op",
            "extra": "3160 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 566,
            "unit": "ns/op",
            "extra": "2163193 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 191,
            "unit": "ns/op",
            "extra": "6332794 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 874,
            "unit": "ns/op",
            "extra": "1316163 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3085649722,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1037,
            "unit": "ns/op",
            "extra": "1121436 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 591947,
            "unit": "ns/op",
            "extra": "1946 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 472,
            "unit": "ns/op",
            "extra": "2518750 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 77.5,
            "unit": "ns/op",
            "extra": "15924679 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 512,
            "unit": "ns/op",
            "extra": "2169726 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 510,
            "unit": "ns/op",
            "extra": "2383532 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 977,
            "unit": "ns/op",
            "extra": "1221757 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 472489,
            "unit": "ns/op",
            "extra": "2624 times\n2 procs"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75c76882d548c815c69d5c698fd2531d0f0c33fa",
          "message": ":unicorn: update README.md",
          "timestamp": "2021-12-24T02:16:51+08:00",
          "tree_id": "8cd2e2db411dd82320d4226a1ceac9f766cb847b",
          "url": "https://github.com/benchplus/gocache/commit/75c76882d548c815c69d5c698fd2531d0f0c33fa"
        },
        "date": 1640283500023,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 626,
            "unit": "ns/op",
            "extra": "1938298 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.5,
            "unit": "ns/op",
            "extra": "13573274 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1916,
            "unit": "ns/op",
            "extra": "783810 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1140673,
            "unit": "ns/op",
            "extra": "1436 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1007,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 591802,
            "unit": "ns/op",
            "extra": "2588 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 364,
            "unit": "ns/op",
            "extra": "3238128 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 38.8,
            "unit": "ns/op",
            "extra": "27011715 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 398,
            "unit": "ns/op",
            "extra": "2973700 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 399,
            "unit": "ns/op",
            "extra": "2747611 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 448,
            "unit": "ns/op",
            "extra": "2654149 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 368402,
            "unit": "ns/op",
            "extra": "3118 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 366,
            "unit": "ns/op",
            "extra": "3335688 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 35.1,
            "unit": "ns/op",
            "extra": "34020469 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 410,
            "unit": "ns/op",
            "extra": "2966029 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 410,
            "unit": "ns/op",
            "extra": "2953484 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 453,
            "unit": "ns/op",
            "extra": "2662261 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 380048,
            "unit": "ns/op",
            "extra": "3218 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 440,
            "unit": "ns/op",
            "extra": "2670884 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 187,
            "unit": "ns/op",
            "extra": "6430056 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 521,
            "unit": "ns/op",
            "extra": "2326502 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 2758640273,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 882,
            "unit": "ns/op",
            "extra": "1349605 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 462901,
            "unit": "ns/op",
            "extra": "2511 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 445,
            "unit": "ns/op",
            "extra": "2791369 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15950666 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 467,
            "unit": "ns/op",
            "extra": "2552682 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 469,
            "unit": "ns/op",
            "extra": "2562804 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 897,
            "unit": "ns/op",
            "extra": "1331456 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 455447,
            "unit": "ns/op",
            "extra": "2803 times\n2 procs"
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
          "id": "04b0295eb55b3b58c746335f0e92aebb3b7caf1c",
          "message": ":jack_o_lantern: fix building error",
          "timestamp": "2021-12-24T15:47:10+08:00",
          "tree_id": "300e833125d672554363821d4d9026f8477131ec",
          "url": "https://github.com/benchplus/gocache/commit/04b0295eb55b3b58c746335f0e92aebb3b7caf1c"
        },
        "date": 1640332122010,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 685,
            "unit": "ns/op",
            "extra": "1479118 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 106,
            "unit": "ns/op",
            "extra": "11187568 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2133,
            "unit": "ns/op",
            "extra": "793959 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1026326,
            "unit": "ns/op",
            "extra": "1578 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1192,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 720400,
            "unit": "ns/op",
            "extra": "2145 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 554,
            "unit": "ns/op",
            "extra": "2089143 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 240,
            "unit": "ns/op",
            "extra": "4851786 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 651,
            "unit": "ns/op",
            "extra": "1777867 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3096254582,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1157,
            "unit": "ns/op",
            "extra": "890037 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 594302,
            "unit": "ns/op",
            "extra": "2058 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 579,
            "unit": "ns/op",
            "extra": "2166282 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 86.1,
            "unit": "ns/op",
            "extra": "13455057 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 603,
            "unit": "ns/op",
            "extra": "2004370 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 617,
            "unit": "ns/op",
            "extra": "1954866 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1141,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 591798,
            "unit": "ns/op",
            "extra": "2217 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 475,
            "unit": "ns/op",
            "extra": "2449621 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 51.8,
            "unit": "ns/op",
            "extra": "20019832 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 503,
            "unit": "ns/op",
            "extra": "2462334 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 511,
            "unit": "ns/op",
            "extra": "2392401 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 573,
            "unit": "ns/op",
            "extra": "2021925 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 466132,
            "unit": "ns/op",
            "extra": "2438 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 459,
            "unit": "ns/op",
            "extra": "2642763 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 42.3,
            "unit": "ns/op",
            "extra": "28713187 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 524,
            "unit": "ns/op",
            "extra": "2384874 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 514,
            "unit": "ns/op",
            "extra": "2403322 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 562,
            "unit": "ns/op",
            "extra": "2110744 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 482299,
            "unit": "ns/op",
            "extra": "2761 times\n2 procs"
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
          "id": "04b0295eb55b3b58c746335f0e92aebb3b7caf1c",
          "message": ":jack_o_lantern: fix building error",
          "timestamp": "2021-12-24T15:47:10+08:00",
          "tree_id": "300e833125d672554363821d4d9026f8477131ec",
          "url": "https://github.com/benchplus/gocache/commit/04b0295eb55b3b58c746335f0e92aebb3b7caf1c"
        },
        "date": 1640333251387,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 630,
            "unit": "ns/op",
            "extra": "1858257 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 85.9,
            "unit": "ns/op",
            "extra": "14314083 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1702,
            "unit": "ns/op",
            "extra": "945192 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1131330,
            "unit": "ns/op",
            "extra": "1558 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1026,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 612987,
            "unit": "ns/op",
            "extra": "2434 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 525,
            "unit": "ns/op",
            "extra": "2259112 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 190,
            "unit": "ns/op",
            "extra": "6271891 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 661,
            "unit": "ns/op",
            "extra": "1782249 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 2717723180,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1005,
            "unit": "ns/op",
            "extra": "1142445 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 522390,
            "unit": "ns/op",
            "extra": "2196 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 442,
            "unit": "ns/op",
            "extra": "2635838 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.3,
            "unit": "ns/op",
            "extra": "15923497 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 497,
            "unit": "ns/op",
            "extra": "2497802 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 482,
            "unit": "ns/op",
            "extra": "2472871 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 962,
            "unit": "ns/op",
            "extra": "1249110 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 467064,
            "unit": "ns/op",
            "extra": "2679 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 368,
            "unit": "ns/op",
            "extra": "3080058 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 40.9,
            "unit": "ns/op",
            "extra": "26509945 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 401,
            "unit": "ns/op",
            "extra": "3004081 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 404,
            "unit": "ns/op",
            "extra": "3011259 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 449,
            "unit": "ns/op",
            "extra": "2654832 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 375908,
            "unit": "ns/op",
            "extra": "3075 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 381,
            "unit": "ns/op",
            "extra": "3182988 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 35.4,
            "unit": "ns/op",
            "extra": "33769819 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 425,
            "unit": "ns/op",
            "extra": "2856327 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 425,
            "unit": "ns/op",
            "extra": "2820464 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 484,
            "unit": "ns/op",
            "extra": "2506658 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 390479,
            "unit": "ns/op",
            "extra": "3334 times\n2 procs"
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
          "id": "fd5925f2ec730a7a9f507c219c772b4eefc6d1f5",
          "message": ":pear: rename",
          "timestamp": "2021-12-24T16:44:34+08:00",
          "tree_id": "a1c3eb135b0ff9ea007db78c35686539ee5cabe3",
          "url": "https://github.com/benchplus/gocache/commit/fd5925f2ec730a7a9f507c219c772b4eefc6d1f5"
        },
        "date": 1640335565418,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 652,
            "unit": "ns/op",
            "extra": "1555682 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 105,
            "unit": "ns/op",
            "extra": "12108228 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2027,
            "unit": "ns/op",
            "extra": "866956 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1007847,
            "unit": "ns/op",
            "extra": "1654 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1146,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 734240,
            "unit": "ns/op",
            "extra": "2149 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 533,
            "unit": "ns/op",
            "extra": "2272723 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 234,
            "unit": "ns/op",
            "extra": "5258260 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 677,
            "unit": "ns/op",
            "extra": "1878585 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3262556456,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1163,
            "unit": "ns/op",
            "extra": "879037 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 586722,
            "unit": "ns/op",
            "extra": "2024 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 566,
            "unit": "ns/op",
            "extra": "2141360 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 82.9,
            "unit": "ns/op",
            "extra": "14228257 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 594,
            "unit": "ns/op",
            "extra": "1946806 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 604,
            "unit": "ns/op",
            "extra": "1996798 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1102,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 549671,
            "unit": "ns/op",
            "extra": "2299 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 437,
            "unit": "ns/op",
            "extra": "2591648 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 48.3,
            "unit": "ns/op",
            "extra": "23002803 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 470,
            "unit": "ns/op",
            "extra": "2559392 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 496,
            "unit": "ns/op",
            "extra": "2378023 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 556,
            "unit": "ns/op",
            "extra": "2254683 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 445798,
            "unit": "ns/op",
            "extra": "2456 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 447,
            "unit": "ns/op",
            "extra": "2697258 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 40.6,
            "unit": "ns/op",
            "extra": "28949536 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 495,
            "unit": "ns/op",
            "extra": "2463759 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 510,
            "unit": "ns/op",
            "extra": "2389390 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 574,
            "unit": "ns/op",
            "extra": "2101862 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 462669,
            "unit": "ns/op",
            "extra": "2713 times\n2 procs"
          }
        ]
      }
    ]
  }
}