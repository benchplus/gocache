window.BENCHMARK_DATA = {
  "lastUpdate": 1640777917596,
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
          "id": "9be1c646033b50eef2817ed19a74d00ad82cbe41",
          "message": ":cherries: add GC pause",
          "timestamp": "2021-12-29T19:19:35+08:00",
          "tree_id": "239e96b9486d134455e3632bc652fb832adc2ceb",
          "url": "https://github.com/benchplus/gocache/commit/9be1c646033b50eef2817ed19a74d00ad82cbe41"
        },
        "date": 1640776889893,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 743,
            "unit": "ns/op",
            "extra": "1387366 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 103,
            "unit": "ns/op",
            "extra": "11960868 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2038,
            "unit": "ns/op",
            "extra": "750658 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1248154,
            "unit": "ns/op",
            "extra": "1286 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1248,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 708813,
            "unit": "ns/op",
            "extra": "2106 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 1450,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 129,
            "unit": "ns/op",
            "extra": "9009858 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 1467,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 1440,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 1677,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 1338080,
            "unit": "ns/op",
            "extra": "1674 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 746,
            "unit": "ns/op",
            "extra": "1697478 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 244,
            "unit": "ns/op",
            "extra": "4787601 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 956,
            "unit": "ns/op",
            "extra": "1288885 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4911148598,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1229,
            "unit": "ns/op",
            "extra": "898814 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 743796,
            "unit": "ns/op",
            "extra": "1495 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 641,
            "unit": "ns/op",
            "extra": "1890003 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 94.1,
            "unit": "ns/op",
            "extra": "11882353 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 636,
            "unit": "ns/op",
            "extra": "1883461 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 621,
            "unit": "ns/op",
            "extra": "1818248 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1196,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 586545,
            "unit": "ns/op",
            "extra": "2164 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 536,
            "unit": "ns/op",
            "extra": "2108070 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 50,
            "unit": "ns/op",
            "extra": "23698164 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 630,
            "unit": "ns/op",
            "extra": "1995499 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 617,
            "unit": "ns/op",
            "extra": "1945393 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 817,
            "unit": "ns/op",
            "extra": "1497627 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 549266,
            "unit": "ns/op",
            "extra": "2216 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 520,
            "unit": "ns/op",
            "extra": "2311255 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 42.4,
            "unit": "ns/op",
            "extra": "28099917 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 603,
            "unit": "ns/op",
            "extra": "1996896 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 604,
            "unit": "ns/op",
            "extra": "1902063 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 772,
            "unit": "ns/op",
            "extra": "1549090 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 527149,
            "unit": "ns/op",
            "extra": "2554 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcache",
            "value": 0.173,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 9355508.75,
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
          "id": "ed192afbc06c14d692020986626ec09ca3f7d6df",
          "message": ":chestnut: add GC pause",
          "timestamp": "2021-12-29T19:27:24+08:00",
          "tree_id": "0186a79cdeb2191f0aa564926389aecb96bf0525",
          "url": "https://github.com/benchplus/gocache/commit/ed192afbc06c14d692020986626ec09ca3f7d6df"
        },
        "date": 1640777372346,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 603,
            "unit": "ns/op",
            "extra": "2019724 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 77,
            "unit": "ns/op",
            "extra": "14196986 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1839,
            "unit": "ns/op",
            "extra": "906214 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1196474,
            "unit": "ns/op",
            "extra": "1370 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1025,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 603613,
            "unit": "ns/op",
            "extra": "2709 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 1276,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11212060 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 1273,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 1260,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 1334,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 1154455,
            "unit": "ns/op",
            "extra": "2089 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 431,
            "unit": "ns/op",
            "extra": "2544715 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 184,
            "unit": "ns/op",
            "extra": "6885675 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 578,
            "unit": "ns/op",
            "extra": "1940368 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 2759008540,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 944,
            "unit": "ns/op",
            "extra": "1157498 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 471453,
            "unit": "ns/op",
            "extra": "2433 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 464,
            "unit": "ns/op",
            "extra": "2401410 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.4,
            "unit": "ns/op",
            "extra": "15904858 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 474,
            "unit": "ns/op",
            "extra": "2610589 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 479,
            "unit": "ns/op",
            "extra": "2473596 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 881,
            "unit": "ns/op",
            "extra": "1308970 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 446536,
            "unit": "ns/op",
            "extra": "2949 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 407,
            "unit": "ns/op",
            "extra": "2663648 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 39.9,
            "unit": "ns/op",
            "extra": "26325769 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 470,
            "unit": "ns/op",
            "extra": "2537960 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 480,
            "unit": "ns/op",
            "extra": "2516818 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 591,
            "unit": "ns/op",
            "extra": "2080888 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 417618,
            "unit": "ns/op",
            "extra": "2762 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 380,
            "unit": "ns/op",
            "extra": "3316365 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 35.4,
            "unit": "ns/op",
            "extra": "38153430 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 439,
            "unit": "ns/op",
            "extra": "2737250 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 470,
            "unit": "ns/op",
            "extra": "2711382 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 584,
            "unit": "ns/op",
            "extra": "2083783 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 402486,
            "unit": "ns/op",
            "extra": "2828 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcache",
            "value": 25053747366,
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
          "id": "10fdecc4194efb95141f49dc6774ee7bc512eea2",
          "message": ":cherries: add GC pause",
          "timestamp": "2021-12-29T19:36:52+08:00",
          "tree_id": "fe590ae8e9a369cb66fe04f757af55f9bd5bddbb",
          "url": "https://github.com/benchplus/gocache/commit/10fdecc4194efb95141f49dc6774ee7bc512eea2"
        },
        "date": 1640777917030,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1699918 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.3,
            "unit": "ns/op",
            "extra": "14551798 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1859,
            "unit": "ns/op",
            "extra": "706050 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1098534,
            "unit": "ns/op",
            "extra": "1602 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 954,
            "unit": "ns/op",
            "extra": "1237898 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 566765,
            "unit": "ns/op",
            "extra": "2293 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 1172,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 106,
            "unit": "ns/op",
            "extra": "11246103 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 1169,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 1140,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 1284,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 1133022,
            "unit": "ns/op",
            "extra": "2018 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 459,
            "unit": "ns/op",
            "extra": "2663589 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 188,
            "unit": "ns/op",
            "extra": "6474723 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 546,
            "unit": "ns/op",
            "extra": "2162148 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3053523205,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 950,
            "unit": "ns/op",
            "extra": "1218698 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 511814,
            "unit": "ns/op",
            "extra": "2420 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 436,
            "unit": "ns/op",
            "extra": "2726197 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15937700 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 476,
            "unit": "ns/op",
            "extra": "2530692 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 481,
            "unit": "ns/op",
            "extra": "2285011 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 931,
            "unit": "ns/op",
            "extra": "1283538 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 452692,
            "unit": "ns/op",
            "extra": "2724 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 421,
            "unit": "ns/op",
            "extra": "2681660 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 39.7,
            "unit": "ns/op",
            "extra": "30696236 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 487,
            "unit": "ns/op",
            "extra": "2466021 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 493,
            "unit": "ns/op",
            "extra": "2263621 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 604,
            "unit": "ns/op",
            "extra": "1981747 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 430075,
            "unit": "ns/op",
            "extra": "2779 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 400,
            "unit": "ns/op",
            "extra": "3029288 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 35.5,
            "unit": "ns/op",
            "extra": "32878345 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 465,
            "unit": "ns/op",
            "extra": "2626658 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 462,
            "unit": "ns/op",
            "extra": "2613213 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 574,
            "unit": "ns/op",
            "extra": "2108515 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 406874,
            "unit": "ns/op",
            "extra": "3103 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcache",
            "value": 1886487353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 7436260,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}