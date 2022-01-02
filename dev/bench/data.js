window.BENCHMARK_DATA = {
  "lastUpdate": 1641106616359,
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
        "date": 1641103814078,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 882,
            "unit": "ns/op",
            "extra": "1212447 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 86.1,
            "unit": "ns/op",
            "extra": "11667582 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2072,
            "unit": "ns/op",
            "extra": "541065 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1115561,
            "unit": "ns/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1041,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 718819,
            "unit": "ns/op",
            "extra": "1800 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1707601807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 40842663278,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 14143406,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 20872559,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2437,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "10857151 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2679,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2832,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3083,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2106180,
            "unit": "ns/op",
            "extra": "1407 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1727959596,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 128232849414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 596016004,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 7478700,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 346,
            "unit": "ns/op",
            "extra": "3407724 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28830681 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 497,
            "unit": "ns/op",
            "extra": "2390961 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 490,
            "unit": "ns/op",
            "extra": "2426199 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 608,
            "unit": "ns/op",
            "extra": "2031488 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 357548,
            "unit": "ns/op",
            "extra": "3670 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1642485619,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 23870171334,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 6509289,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 68686171,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 330,
            "unit": "ns/op",
            "extra": "3634179 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20107489 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 460,
            "unit": "ns/op",
            "extra": "2485087 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 468,
            "unit": "ns/op",
            "extra": "2593822 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 539,
            "unit": "ns/op",
            "extra": "2228329 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 340523,
            "unit": "ns/op",
            "extra": "3716 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2122092266,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 26515661914,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 78189676,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 7193493,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 604,
            "unit": "ns/op",
            "extra": "2002527 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6105928 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 591,
            "unit": "ns/op",
            "extra": "2054104 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4615334439,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1017,
            "unit": "ns/op",
            "extra": "1083904 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 629330,
            "unit": "ns/op",
            "extra": "1809 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7088635435,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 60275537233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 46816361,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 221652604,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 562,
            "unit": "ns/op",
            "extra": "2188995 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15944820 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 614,
            "unit": "ns/op",
            "extra": "1969964 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 613,
            "unit": "ns/op",
            "extra": "1951251 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1090,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 560786,
            "unit": "ns/op",
            "extra": "2234 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3414735567,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 69259781544,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 30838368,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 133957821,
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
        "date": 1641104577247,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1004,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 88,
            "unit": "ns/op",
            "extra": "14431210 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1632,
            "unit": "ns/op",
            "extra": "786876 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1144820,
            "unit": "ns/op",
            "extra": "1322 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1095,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 766569,
            "unit": "ns/op",
            "extra": "1807 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1768251706,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 42261188545,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 25766590,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 22357942,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2818,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 111,
            "unit": "ns/op",
            "extra": "11108119 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2877,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2858,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3265,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2176714,
            "unit": "ns/op",
            "extra": "1304 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1701834247,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 116566307765,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 520190093,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8704462,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 345,
            "unit": "ns/op",
            "extra": "3477872 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28831018 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2519445 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 479,
            "unit": "ns/op",
            "extra": "2308471 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 575,
            "unit": "ns/op",
            "extra": "2059256 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 351109,
            "unit": "ns/op",
            "extra": "3676 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1806068537,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 22894085136,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 15746503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 58261887,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 328,
            "unit": "ns/op",
            "extra": "3671858 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.4,
            "unit": "ns/op",
            "extra": "20132178 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 454,
            "unit": "ns/op",
            "extra": "2648452 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 472,
            "unit": "ns/op",
            "extra": "2655526 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 533,
            "unit": "ns/op",
            "extra": "2247589 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 337504,
            "unit": "ns/op",
            "extra": "3741 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2092094427,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 25114794747,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 7561898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 70777499,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 598,
            "unit": "ns/op",
            "extra": "2041719 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6083518 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 578,
            "unit": "ns/op",
            "extra": "2103565 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3045730098,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 999,
            "unit": "ns/op",
            "extra": "1244943 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 613924,
            "unit": "ns/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7059388634,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 56839863419,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 45552566,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 201063472,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 558,
            "unit": "ns/op",
            "extra": "2166006 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15965397 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 618,
            "unit": "ns/op",
            "extra": "1952460 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 617,
            "unit": "ns/op",
            "extra": "1949732 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1094,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 588748,
            "unit": "ns/op",
            "extra": "2152 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3545028490,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 72714674459,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 12932973,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 133514804,
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
      }
    ]
  }
}