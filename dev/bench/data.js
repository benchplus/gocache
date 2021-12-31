window.BENCHMARK_DATA = {
  "lastUpdate": 1640919726395,
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
          "id": "3e51d5c19cc3b6ff04d2ab237a30fd02a3f972d0",
          "message": ":banana: fix go mod",
          "timestamp": "2021-12-31T10:42:06+08:00",
          "tree_id": "24adb614bce96d2229f67ed87f02f5e7d15b2241",
          "url": "https://github.com/benchplus/gocache/commit/3e51d5c19cc3b6ff04d2ab237a30fd02a3f972d0"
        },
        "date": 1640918702355,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1102,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 134,
            "unit": "ns/op",
            "extra": "9394682 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 3077,
            "unit": "ns/op",
            "extra": "333474 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1087944,
            "unit": "ns/op",
            "extra": "1368 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1520,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 790053,
            "unit": "ns/op",
            "extra": "1612 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 3078984557,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 2619609886,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 35588797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 20762618,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3004,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 136,
            "unit": "ns/op",
            "extra": "8835321 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3542,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3594,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4167,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2916767,
            "unit": "ns/op",
            "extra": "962 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2156750863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 13159501898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 10678428,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 98648831,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 604,
            "unit": "ns/op",
            "extra": "1881444 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 46.4,
            "unit": "ns/op",
            "extra": "23101545 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 692,
            "unit": "ns/op",
            "extra": "1774144 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 666,
            "unit": "ns/op",
            "extra": "1760792 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 843,
            "unit": "ns/op",
            "extra": "1477368 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 621507,
            "unit": "ns/op",
            "extra": "1950 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2146603044,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 5079070167,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 20889181,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 40922466,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 580,
            "unit": "ns/op",
            "extra": "2047532 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 53,
            "unit": "ns/op",
            "extra": "22906405 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 611,
            "unit": "ns/op",
            "extra": "1790077 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 611,
            "unit": "ns/op",
            "extra": "1871354 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 723,
            "unit": "ns/op",
            "extra": "1684172 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 565724,
            "unit": "ns/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2664504503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 4382356630,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8635599,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 24164258,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 586,
            "unit": "ns/op",
            "extra": "2037024 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 251,
            "unit": "ns/op",
            "extra": "4574125 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 721,
            "unit": "ns/op",
            "extra": "1609170 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4871379723,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1210,
            "unit": "ns/op",
            "extra": "936498 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 608949,
            "unit": "ns/op",
            "extra": "1988 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8643113852,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 3771978272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 59259664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 14262871,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 737,
            "unit": "ns/op",
            "extra": "1635226 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 92.3,
            "unit": "ns/op",
            "extra": "11873487 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 868,
            "unit": "ns/op",
            "extra": "1484757 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 813,
            "unit": "ns/op",
            "extra": "1425525 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1378,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 737897,
            "unit": "ns/op",
            "extra": "1728 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4349282719,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 6496368675,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 18632161,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 17568715,
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
          "id": "3e51d5c19cc3b6ff04d2ab237a30fd02a3f972d0",
          "message": ":banana: fix go mod",
          "timestamp": "2021-12-31T10:42:06+08:00",
          "tree_id": "24adb614bce96d2229f67ed87f02f5e7d15b2241",
          "url": "https://github.com/benchplus/gocache/commit/3e51d5c19cc3b6ff04d2ab237a30fd02a3f972d0"
        },
        "date": 1640919044462,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 724,
            "unit": "ns/op",
            "extra": "1545403 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 105,
            "unit": "ns/op",
            "extra": "11636103 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2131,
            "unit": "ns/op",
            "extra": "648814 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1212892,
            "unit": "ns/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1373,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 734910,
            "unit": "ns/op",
            "extra": "1684 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2136141279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 2213457033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 24013358,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 18125323,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3442,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 135,
            "unit": "ns/op",
            "extra": "8969378 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3542,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3414,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3566,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3072337,
            "unit": "ns/op",
            "extra": "981 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2105821928,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 11711522780,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 15493373,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 77706289,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 581,
            "unit": "ns/op",
            "extra": "2147637 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 46.9,
            "unit": "ns/op",
            "extra": "27305438 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 649,
            "unit": "ns/op",
            "extra": "1820511 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 649,
            "unit": "ns/op",
            "extra": "1832103 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 766,
            "unit": "ns/op",
            "extra": "1528970 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 608787,
            "unit": "ns/op",
            "extra": "2128 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2254170589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 4875300116,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 10619607,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 25790648,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 524,
            "unit": "ns/op",
            "extra": "2243734 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 48.7,
            "unit": "ns/op",
            "extra": "24510670 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 598,
            "unit": "ns/op",
            "extra": "2022585 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 583,
            "unit": "ns/op",
            "extra": "2072355 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 709,
            "unit": "ns/op",
            "extra": "1749793 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 539657,
            "unit": "ns/op",
            "extra": "2212 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2151328032,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 4377556938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 16832666,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 15951402,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 627,
            "unit": "ns/op",
            "extra": "1938908 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 248,
            "unit": "ns/op",
            "extra": "4872926 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1609090 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4745246219,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1290,
            "unit": "ns/op",
            "extra": "911826 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 659343,
            "unit": "ns/op",
            "extra": "1806 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 9024857973,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 3701227014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 62708355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 11897972,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 684,
            "unit": "ns/op",
            "extra": "1732420 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 96.5,
            "unit": "ns/op",
            "extra": "13249477 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 753,
            "unit": "ns/op",
            "extra": "1541517 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 789,
            "unit": "ns/op",
            "extra": "1416432 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1397,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 710829,
            "unit": "ns/op",
            "extra": "1792 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4601773163,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 7602057162,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 19662204,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 18242340,
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
          "id": "5f82fa42286ba84a0f087e780340d6a265ffa703",
          "message": ":dango: lru2 rate from 50-50 to 30-70",
          "timestamp": "2021-12-31T10:59:18+08:00",
          "tree_id": "a1c831ac26ef96d8fbfa2fd2f8bd5cfda18349fc",
          "url": "https://github.com/benchplus/gocache/commit/5f82fa42286ba84a0f087e780340d6a265ffa703"
        },
        "date": 1640919725798,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 865,
            "unit": "ns/op",
            "extra": "1253258 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 102,
            "unit": "ns/op",
            "extra": "11331662 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1997,
            "unit": "ns/op",
            "extra": "690336 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1144526,
            "unit": "ns/op",
            "extra": "1251 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1240,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 752593,
            "unit": "ns/op",
            "extra": "1996 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2164164353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 2128847186,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 16613392,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 19859509,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3015,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 124,
            "unit": "ns/op",
            "extra": "9172108 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3343,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3449,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3760,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3137901,
            "unit": "ns/op",
            "extra": "890 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2071793020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 11237912313,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 11823561,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 72989879,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 543,
            "unit": "ns/op",
            "extra": "2173533 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 43.1,
            "unit": "ns/op",
            "extra": "29178520 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 645,
            "unit": "ns/op",
            "extra": "1896908 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 664,
            "unit": "ns/op",
            "extra": "1900627 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 717,
            "unit": "ns/op",
            "extra": "1608397 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 543704,
            "unit": "ns/op",
            "extra": "2388 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2240283958,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 4867678565,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9232796,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 23202939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 459,
            "unit": "ns/op",
            "extra": "2497561 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 46.6,
            "unit": "ns/op",
            "extra": "25174990 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 509,
            "unit": "ns/op",
            "extra": "2394740 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 527,
            "unit": "ns/op",
            "extra": "2299872 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 645,
            "unit": "ns/op",
            "extra": "1962009 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 529076,
            "unit": "ns/op",
            "extra": "2404 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 1987291636,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 4654181534,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 12207389,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 23284354,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1888232 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 236,
            "unit": "ns/op",
            "extra": "5097007 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 762,
            "unit": "ns/op",
            "extra": "1609161 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3207557800,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1207,
            "unit": "ns/op",
            "extra": "961228 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 566117,
            "unit": "ns/op",
            "extra": "2139 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8191429121,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 3329878262,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 9822665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 53450601,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 650,
            "unit": "ns/op",
            "extra": "1866697 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 87.4,
            "unit": "ns/op",
            "extra": "13597460 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 726,
            "unit": "ns/op",
            "extra": "1565430 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 709,
            "unit": "ns/op",
            "extra": "1736992 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1296,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 664543,
            "unit": "ns/op",
            "extra": "1933 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4232665425,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 7639767759,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 15387210,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 19839402,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}