window.BENCHMARK_DATA = {
  "lastUpdate": 1640776295921,
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
          "id": "b553296516c7f75c5fd0c59d9acb1aeebda93428",
          "message": ":fish: add cachego",
          "timestamp": "2021-12-24T17:23:37+08:00",
          "tree_id": "21f5604af8d0f64ed9e5ec13318b4e7702ce2383",
          "url": "https://github.com/benchplus/gocache/commit/b553296516c7f75c5fd0c59d9acb1aeebda93428"
        },
        "date": 1640337927545,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 626,
            "unit": "ns/op",
            "extra": "2082518 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 93.2,
            "unit": "ns/op",
            "extra": "12580528 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1843,
            "unit": "ns/op",
            "extra": "824592 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1180433,
            "unit": "ns/op",
            "extra": "1394 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1036,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 623430,
            "unit": "ns/op",
            "extra": "2535 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 1232,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 115,
            "unit": "ns/op",
            "extra": "10238323 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 1259,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 1230,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 1351,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 868580,
            "unit": "ns/op",
            "extra": "1660 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 481,
            "unit": "ns/op",
            "extra": "2400633 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 215,
            "unit": "ns/op",
            "extra": "5898430 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 575,
            "unit": "ns/op",
            "extra": "2136934 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3135769787,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 974,
            "unit": "ns/op",
            "extra": "1170806 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 491961,
            "unit": "ns/op",
            "extra": "2325 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 477,
            "unit": "ns/op",
            "extra": "2534751 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 81,
            "unit": "ns/op",
            "extra": "14841873 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 521,
            "unit": "ns/op",
            "extra": "2142145 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 537,
            "unit": "ns/op",
            "extra": "2331997 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1019,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 497027,
            "unit": "ns/op",
            "extra": "2571 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 394,
            "unit": "ns/op",
            "extra": "2921968 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 43.6,
            "unit": "ns/op",
            "extra": "24823310 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 437,
            "unit": "ns/op",
            "extra": "2796544 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 432,
            "unit": "ns/op",
            "extra": "2721974 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 488,
            "unit": "ns/op",
            "extra": "2472822 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 402127,
            "unit": "ns/op",
            "extra": "2776 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 431,
            "unit": "ns/op",
            "extra": "2924706 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 38.8,
            "unit": "ns/op",
            "extra": "30110523 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 464,
            "unit": "ns/op",
            "extra": "2631642 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 469,
            "unit": "ns/op",
            "extra": "2599729 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 499,
            "unit": "ns/op",
            "extra": "2420401 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 426655,
            "unit": "ns/op",
            "extra": "3141 times\n2 procs"
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
          "id": "1db2a5edd06885e2e2de0864f937eca3d7df9e61",
          "message": ":cherries: add GC for `orcache`",
          "timestamp": "2021-12-29T19:09:48+08:00",
          "tree_id": "a05242eb1b4aee258d7954e834945118a1afe2f8",
          "url": "https://github.com/benchplus/gocache/commit/1db2a5edd06885e2e2de0864f937eca3d7df9e61"
        },
        "date": 1640776295336,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 634,
            "unit": "ns/op",
            "extra": "1699203 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 106,
            "unit": "ns/op",
            "extra": "12004018 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1991,
            "unit": "ns/op",
            "extra": "792392 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1163738,
            "unit": "ns/op",
            "extra": "1314 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1221,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 682262,
            "unit": "ns/op",
            "extra": "2210 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 1326,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 128,
            "unit": "ns/op",
            "extra": "9296995 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 1388,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 1333,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 1440,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 1190121,
            "unit": "ns/op",
            "extra": "1671 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 512,
            "unit": "ns/op",
            "extra": "2299790 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 223,
            "unit": "ns/op",
            "extra": "5489052 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 656,
            "unit": "ns/op",
            "extra": "1804023 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3157266929,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1132,
            "unit": "ns/op",
            "extra": "1027045 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 552863,
            "unit": "ns/op",
            "extra": "2007 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 510,
            "unit": "ns/op",
            "extra": "2182513 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 89.7,
            "unit": "ns/op",
            "extra": "13667343 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 580,
            "unit": "ns/op",
            "extra": "2093535 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 575,
            "unit": "ns/op",
            "extra": "2066878 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1094,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 522740,
            "unit": "ns/op",
            "extra": "2276 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 485,
            "unit": "ns/op",
            "extra": "2315438 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 48.7,
            "unit": "ns/op",
            "extra": "26292952 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 576,
            "unit": "ns/op",
            "extra": "2032726 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 563,
            "unit": "ns/op",
            "extra": "2116918 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 676,
            "unit": "ns/op",
            "extra": "1789833 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 495167,
            "unit": "ns/op",
            "extra": "2080 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 475,
            "unit": "ns/op",
            "extra": "2708480 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 41.9,
            "unit": "ns/op",
            "extra": "28061769 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 536,
            "unit": "ns/op",
            "extra": "2113066 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 553,
            "unit": "ns/op",
            "extra": "2232301 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 679,
            "unit": "ns/op",
            "extra": "1771560 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 489320,
            "unit": "ns/op",
            "extra": "2596 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 66535272,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1110010,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 966906,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1148005,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1524513,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1822812,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1072713,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 2141214,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1434013,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1363010,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 1705513,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          }
        ]
      }
    ]
  }
}