window.BENCHMARK_DATA = {
  "lastUpdate": 1641141303045,
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
          "id": "f0e2aff357b6cb8f04d1973a34400d6280dea225",
          "message": ":taxi: rename",
          "timestamp": "2022-01-02T23:00:16+08:00",
          "tree_id": "54c178dee844e07e9485173307bd0274305bc447",
          "url": "https://github.com/benchplus/gocache/commit/f0e2aff357b6cb8f04d1973a34400d6280dea225"
        },
        "date": 1641136140028,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1171,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 107,
            "unit": "ns/op",
            "extra": "9508296 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1995,
            "unit": "ns/op",
            "extra": "711669 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 674589,
            "unit": "ns/op",
            "extra": "1994 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1215,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 848511,
            "unit": "ns/op",
            "extra": "1551 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1997684550,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 49185355219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 29669235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 40819044,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2995,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 121,
            "unit": "ns/op",
            "extra": "10018070 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3193,
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
            "value": 3415,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2629351,
            "unit": "ns/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1967541959,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 138954560246,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 12099624,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 712815642,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 412,
            "unit": "ns/op",
            "extra": "2945154 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 48.4,
            "unit": "ns/op",
            "extra": "24482316 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 590,
            "unit": "ns/op",
            "extra": "2044408 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 554,
            "unit": "ns/op",
            "extra": "2056794 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 656,
            "unit": "ns/op",
            "extra": "1707044 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 414479,
            "unit": "ns/op",
            "extra": "3327 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2164687776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 28095566288,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 13289523,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 99915932,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 400,
            "unit": "ns/op",
            "extra": "3031098 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 72,
            "unit": "ns/op",
            "extra": "14967762 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 562,
            "unit": "ns/op",
            "extra": "2290854 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 535,
            "unit": "ns/op",
            "extra": "2191872 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 634,
            "unit": "ns/op",
            "extra": "1958534 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 402562,
            "unit": "ns/op",
            "extra": "2802 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2416323521,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30062588125,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 10418710,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 122672688,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 711,
            "unit": "ns/op",
            "extra": "1717159 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 229,
            "unit": "ns/op",
            "extra": "5348443 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 637,
            "unit": "ns/op",
            "extra": "1971912 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3164145938,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1157,
            "unit": "ns/op",
            "extra": "1033236 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 716663,
            "unit": "ns/op",
            "extra": "1705 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8047580621,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 63999329079,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 115813774,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 290184108,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 661,
            "unit": "ns/op",
            "extra": "1838961 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 84.2,
            "unit": "ns/op",
            "extra": "14167060 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 719,
            "unit": "ns/op",
            "extra": "1646809 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 735,
            "unit": "ns/op",
            "extra": "1673946 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1308,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 696169,
            "unit": "ns/op",
            "extra": "1838 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3815828644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 71025849437,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12971011,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 206703353,
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
          "id": "19cbe8ba9229f4e994800b7a0311d9c1958c16ae",
          "message": ":whale2: orcache -> ecache",
          "timestamp": "2022-01-02T23:35:15+08:00",
          "tree_id": "67444e89421f06da7d87270eda7c4f7d617d88dc",
          "url": "https://github.com/benchplus/gocache/commit/19cbe8ba9229f4e994800b7a0311d9c1958c16ae"
        },
        "date": 1641138186969,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 802,
            "unit": "ns/op",
            "extra": "1286798 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.2,
            "unit": "ns/op",
            "extra": "14470824 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1624,
            "unit": "ns/op",
            "extra": "817459 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 705189,
            "unit": "ns/op",
            "extra": "1518 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1058,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 706280,
            "unit": "ns/op",
            "extra": "1602 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1937367668,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 41965066226,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 9501930,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 24874683,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2658,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11176032 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2724,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2781,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3206,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2268859,
            "unit": "ns/op",
            "extra": "1412 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1758803345,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 117606144698,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 8145709,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 564924597,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 351,
            "unit": "ns/op",
            "extra": "3459878 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.3,
            "unit": "ns/op",
            "extra": "28840347 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 488,
            "unit": "ns/op",
            "extra": "2306008 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 490,
            "unit": "ns/op",
            "extra": "2425389 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 585,
            "unit": "ns/op",
            "extra": "2069834 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 356696,
            "unit": "ns/op",
            "extra": "3668 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1911022414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 23662307908,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 15689417,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 70043774,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 328,
            "unit": "ns/op",
            "extra": "3681012 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "19763515 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 453,
            "unit": "ns/op",
            "extra": "2647485 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 469,
            "unit": "ns/op",
            "extra": "2655949 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 535,
            "unit": "ns/op",
            "extra": "2198980 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 337392,
            "unit": "ns/op",
            "extra": "3727 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2050534765,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 26195830211,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7687897,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 78598578,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 599,
            "unit": "ns/op",
            "extra": "2013538 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 194,
            "unit": "ns/op",
            "extra": "6136446 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 540,
            "unit": "ns/op",
            "extra": "2270338 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3166592375,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1000,
            "unit": "ns/op",
            "extra": "1210006 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 619064,
            "unit": "ns/op",
            "extra": "1814 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7011260377,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 58765712591,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 43960703,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 214947627,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 547,
            "unit": "ns/op",
            "extra": "2176878 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15959034 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1952547 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 612,
            "unit": "ns/op",
            "extra": "1969824 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1098,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 561010,
            "unit": "ns/op",
            "extra": "2246 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3698367814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 71492194142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12699923,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 132533917,
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
          "id": "19cbe8ba9229f4e994800b7a0311d9c1958c16ae",
          "message": ":whale2: orcache -> ecache",
          "timestamp": "2022-01-02T23:35:15+08:00",
          "tree_id": "67444e89421f06da7d87270eda7c4f7d617d88dc",
          "url": "https://github.com/benchplus/gocache/commit/19cbe8ba9229f4e994800b7a0311d9c1958c16ae"
        },
        "date": 1641139315102,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 896,
            "unit": "ns/op",
            "extra": "1238372 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 91,
            "unit": "ns/op",
            "extra": "12042694 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1673,
            "unit": "ns/op",
            "extra": "835771 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 769535,
            "unit": "ns/op",
            "extra": "1514 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1114,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 773167,
            "unit": "ns/op",
            "extra": "1783 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1836738842,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 42377206444,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 15404480,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 37960505,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2674,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 107,
            "unit": "ns/op",
            "extra": "11147486 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2930,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3197,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3264,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2267993,
            "unit": "ns/op",
            "extra": "1114 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1730692077,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 129122583103,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 10914749,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 606028163,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 351,
            "unit": "ns/op",
            "extra": "3402344 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28796756 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 504,
            "unit": "ns/op",
            "extra": "2267070 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 522,
            "unit": "ns/op",
            "extra": "2430297 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 589,
            "unit": "ns/op",
            "extra": "2021103 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 359021,
            "unit": "ns/op",
            "extra": "3644 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1797200129,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 25260663016,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 85414964,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 11194168,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 333,
            "unit": "ns/op",
            "extra": "3689257 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20106218 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 491,
            "unit": "ns/op",
            "extra": "2522841 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 462,
            "unit": "ns/op",
            "extra": "2596876 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 539,
            "unit": "ns/op",
            "extra": "2237436 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 339814,
            "unit": "ns/op",
            "extra": "3736 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2080494813,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 26880746776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7452895,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 83765047,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 659,
            "unit": "ns/op",
            "extra": "1839230 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6098343 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 742,
            "unit": "ns/op",
            "extra": "1635337 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3089526582,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1065,
            "unit": "ns/op",
            "extra": "1076192 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 704414,
            "unit": "ns/op",
            "extra": "1615 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7467507312,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 60264938183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 57303302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 233170798,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 573,
            "unit": "ns/op",
            "extra": "2183749 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15928125 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 617,
            "unit": "ns/op",
            "extra": "1913606 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 635,
            "unit": "ns/op",
            "extra": "1949394 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1106,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 569671,
            "unit": "ns/op",
            "extra": "2236 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3845016259,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 74590706549,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13390354,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 173644616,
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
          "id": "19cbe8ba9229f4e994800b7a0311d9c1958c16ae",
          "message": ":whale2: orcache -> ecache",
          "timestamp": "2022-01-02T23:35:15+08:00",
          "tree_id": "67444e89421f06da7d87270eda7c4f7d617d88dc",
          "url": "https://github.com/benchplus/gocache/commit/19cbe8ba9229f4e994800b7a0311d9c1958c16ae"
        },
        "date": 1641140003002,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1272,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 117,
            "unit": "ns/op",
            "extra": "8703326 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2047,
            "unit": "ns/op",
            "extra": "529651 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 629934,
            "unit": "ns/op",
            "extra": "1620 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1246,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 887407,
            "unit": "ns/op",
            "extra": "1503 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1953523026,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 50347663954,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 23519426,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 41166497,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2976,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 125,
            "unit": "ns/op",
            "extra": "8569605 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3213,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3348,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3672,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2682772,
            "unit": "ns/op",
            "extra": "1156 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1925039252,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 140465827118,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 11182327,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 696777217,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 428,
            "unit": "ns/op",
            "extra": "2810640 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 54,
            "unit": "ns/op",
            "extra": "23563156 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 574,
            "unit": "ns/op",
            "extra": "2083210 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 572,
            "unit": "ns/op",
            "extra": "2013554 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 719,
            "unit": "ns/op",
            "extra": "1697866 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 456890,
            "unit": "ns/op",
            "extra": "3160 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2113163351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 27872371464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 21600249,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 78335873,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 427,
            "unit": "ns/op",
            "extra": "2736792 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 74.6,
            "unit": "ns/op",
            "extra": "16665528 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 552,
            "unit": "ns/op",
            "extra": "2110093 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 521,
            "unit": "ns/op",
            "extra": "2311646 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 666,
            "unit": "ns/op",
            "extra": "2040831 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 392792,
            "unit": "ns/op",
            "extra": "2998 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2120024558,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30304340512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7488858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 97921676,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 705,
            "unit": "ns/op",
            "extra": "1684126 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 238,
            "unit": "ns/op",
            "extra": "5463492 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 675,
            "unit": "ns/op",
            "extra": "1695484 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4825868811,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1126,
            "unit": "ns/op",
            "extra": "1018898 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 701572,
            "unit": "ns/op",
            "extra": "1633 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7767104414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 63441049747,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 63071677,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 268439229,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 671,
            "unit": "ns/op",
            "extra": "1816005 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 88.2,
            "unit": "ns/op",
            "extra": "13475288 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 752,
            "unit": "ns/op",
            "extra": "1436155 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 752,
            "unit": "ns/op",
            "extra": "1634095 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1253,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 675192,
            "unit": "ns/op",
            "extra": "1898 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3577241464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 74975646282,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13428809,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 274320762,
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
          "id": "19cbe8ba9229f4e994800b7a0311d9c1958c16ae",
          "message": ":whale2: orcache -> ecache",
          "timestamp": "2022-01-02T23:35:15+08:00",
          "tree_id": "67444e89421f06da7d87270eda7c4f7d617d88dc",
          "url": "https://github.com/benchplus/gocache/commit/19cbe8ba9229f4e994800b7a0311d9c1958c16ae"
        },
        "date": 1641141301791,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1220,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 116,
            "unit": "ns/op",
            "extra": "9749710 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2023,
            "unit": "ns/op",
            "extra": "694669 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 604168,
            "unit": "ns/op",
            "extra": "1807 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1234,
            "unit": "ns/op",
            "extra": "1002326 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 830684,
            "unit": "ns/op",
            "extra": "1496 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1970560003,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 51776779223,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 15656818,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 34089268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3064,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 124,
            "unit": "ns/op",
            "extra": "8965154 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3294,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3185,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3793,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2613612,
            "unit": "ns/op",
            "extra": "1170 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2179115004,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 138223074797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 31840251,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 742497123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 442,
            "unit": "ns/op",
            "extra": "2619346 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 50.8,
            "unit": "ns/op",
            "extra": "23098032 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 581,
            "unit": "ns/op",
            "extra": "2052733 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 592,
            "unit": "ns/op",
            "extra": "2025078 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 697,
            "unit": "ns/op",
            "extra": "1674404 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 436393,
            "unit": "ns/op",
            "extra": "2989 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2192427364,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 27661796449,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 15816589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 78703644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 399,
            "unit": "ns/op",
            "extra": "3006061 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 72,
            "unit": "ns/op",
            "extra": "16846425 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 545,
            "unit": "ns/op",
            "extra": "2176796 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 561,
            "unit": "ns/op",
            "extra": "2176933 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 649,
            "unit": "ns/op",
            "extra": "1813756 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 415209,
            "unit": "ns/op",
            "extra": "3057 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2451404617,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30267197726,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 15125005,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 126257864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 701,
            "unit": "ns/op",
            "extra": "1678764 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 240,
            "unit": "ns/op",
            "extra": "5134740 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 636,
            "unit": "ns/op",
            "extra": "1823474 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4658448829,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1176,
            "unit": "ns/op",
            "extra": "1003736 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 734401,
            "unit": "ns/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8398540662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 64902478823,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 61728641,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 283635058,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 676,
            "unit": "ns/op",
            "extra": "1653183 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 83.9,
            "unit": "ns/op",
            "extra": "14077108 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 753,
            "unit": "ns/op",
            "extra": "1540509 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 786,
            "unit": "ns/op",
            "extra": "1585765 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1292,
            "unit": "ns/op",
            "extra": "808874 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 713553,
            "unit": "ns/op",
            "extra": "1844 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3651728631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 74945078880,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13909033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 257769708,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}