window.BENCHMARK_DATA = {
  "lastUpdate": 1640779024974,
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
          "id": "fe2cbf23a65e4dd3b2d4e1adee672839b14d0b98",
          "message": ":pager:  add GC pause",
          "timestamp": "2021-12-29T19:45:57+08:00",
          "tree_id": "2ebbf7e15d5b385653edaf657a6fe0d6b423c896",
          "url": "https://github.com/benchplus/gocache/commit/fe2cbf23a65e4dd3b2d4e1adee672839b14d0b98"
        },
        "date": 1640778495830,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 788,
            "unit": "ns/op",
            "extra": "1282470 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 105,
            "unit": "ns/op",
            "extra": "12058506 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2011,
            "unit": "ns/op",
            "extra": "675348 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1178246,
            "unit": "ns/op",
            "extra": "1242 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1364,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 707236,
            "unit": "ns/op",
            "extra": "1528 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2104025070,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 21766936,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2860,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 126,
            "unit": "ns/op",
            "extra": "9261590 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3104,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3143,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3634,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2511303,
            "unit": "ns/op",
            "extra": "1106 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2188642699,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 10402451,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 579,
            "unit": "ns/op",
            "extra": "2073678 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 234,
            "unit": "ns/op",
            "extra": "5241475 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 674,
            "unit": "ns/op",
            "extra": "1739736 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4842496617,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1224,
            "unit": "ns/op",
            "extra": "983823 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 582253,
            "unit": "ns/op",
            "extra": "1882 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8578376592,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 56414474,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 643,
            "unit": "ns/op",
            "extra": "1832772 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 86.8,
            "unit": "ns/op",
            "extra": "13790826 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 720,
            "unit": "ns/op",
            "extra": "1700476 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 743,
            "unit": "ns/op",
            "extra": "1651689 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1310,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 707976,
            "unit": "ns/op",
            "extra": "1896 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3908176474,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 16954884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 464,
            "unit": "ns/op",
            "extra": "2619180 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 40,
            "unit": "ns/op",
            "extra": "27192758 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 542,
            "unit": "ns/op",
            "extra": "2231251 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 549,
            "unit": "ns/op",
            "extra": "2165278 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 667,
            "unit": "ns/op",
            "extra": "1838846 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 477343,
            "unit": "ns/op",
            "extra": "2566 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcache",
            "value": 1978106609,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 10817241,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 426,
            "unit": "ns/op",
            "extra": "2783186 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 45.3,
            "unit": "ns/op",
            "extra": "24218100 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 515,
            "unit": "ns/op",
            "extra": "2405619 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 495,
            "unit": "ns/op",
            "extra": "2459293 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 618,
            "unit": "ns/op",
            "extra": "1975657 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 450706,
            "unit": "ns/op",
            "extra": "2859 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcacheLRU2",
            "value": 2418897403,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcacheLRU2",
            "value": 8722298,
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
          "id": "bed6d50fd0c30dda9b6a35a37b17c85badb96517",
          "message": ":koala: add heavy write",
          "timestamp": "2021-12-29T19:54:18+08:00",
          "tree_id": "42d8e2b0a71cc05c5c1d71dfd05282bb2310e6ac",
          "url": "https://github.com/benchplus/gocache/commit/bed6d50fd0c30dda9b6a35a37b17c85badb96517"
        },
        "date": 1640779024439,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1854256 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 99.3,
            "unit": "ns/op",
            "extra": "12493292 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2012,
            "unit": "ns/op",
            "extra": "677928 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1195175,
            "unit": "ns/op",
            "extra": "1258 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1223,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 750109,
            "unit": "ns/op",
            "extra": "1952 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2151195256,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 2045271426,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 12888884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 11017137,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2945,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 115,
            "unit": "ns/op",
            "extra": "9992685 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3123,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3091,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3581,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2674144,
            "unit": "ns/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1925324968,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 10106960570,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 10047654,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 61538693,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 517,
            "unit": "ns/op",
            "extra": "2276775 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 222,
            "unit": "ns/op",
            "extra": "5599135 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 595,
            "unit": "ns/op",
            "extra": "1918249 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3180147061,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1005,
            "unit": "ns/op",
            "extra": "1182074 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 494337,
            "unit": "ns/op",
            "extra": "2367 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7395128774,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 3201959811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 48989278,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 10299835,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 592,
            "unit": "ns/op",
            "extra": "2039722 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 74.4,
            "unit": "ns/op",
            "extra": "14206524 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 659,
            "unit": "ns/op",
            "extra": "1882792 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 609,
            "unit": "ns/op",
            "extra": "1871707 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1212,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 641362,
            "unit": "ns/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4248749568,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 6989440488,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 14799131,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 24114755,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcache",
            "value": 424,
            "unit": "ns/op",
            "extra": "2952547 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcache",
            "value": 36,
            "unit": "ns/op",
            "extra": "31900629 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcache",
            "value": 506,
            "unit": "ns/op",
            "extra": "2453334 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcache",
            "value": 466,
            "unit": "ns/op",
            "extra": "2551669 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcache",
            "value": 593,
            "unit": "ns/op",
            "extra": "1972653 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcache",
            "value": 416801,
            "unit": "ns/op",
            "extra": "3036 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcache",
            "value": 1863450870,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_orcache",
            "value": 2400465073,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcache",
            "value": 8174088,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_orcache",
            "value": 10339956,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_orcacheLRU2",
            "value": 383,
            "unit": "ns/op",
            "extra": "3273286 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_orcacheLRU2",
            "value": 38.3,
            "unit": "ns/op",
            "extra": "29209560 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_orcacheLRU2",
            "value": 420,
            "unit": "ns/op",
            "extra": "2745970 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_orcacheLRU2",
            "value": 427,
            "unit": "ns/op",
            "extra": "2727363 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_orcacheLRU2",
            "value": 527,
            "unit": "ns/op",
            "extra": "2397206 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_orcacheLRU2",
            "value": 377563,
            "unit": "ns/op",
            "extra": "3386 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_orcacheLRU2",
            "value": 2058305528,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_orcacheLRU2",
            "value": 2666233260,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_orcacheLRU2",
            "value": 7288855,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_orcacheLRU2",
            "value": 12675807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}