window.BENCHMARK_DATA = {
  "lastUpdate": 1640938009115,
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
          "id": "5f82fa42286ba84a0f087e780340d6a265ffa703",
          "message": ":dango: lru2 rate from 50-50 to 30-70",
          "timestamp": "2021-12-31T10:59:18+08:00",
          "tree_id": "a1c831ac26ef96d8fbfa2fd2f8bd5cfda18349fc",
          "url": "https://github.com/benchplus/gocache/commit/5f82fa42286ba84a0f087e780340d6a265ffa703"
        },
        "date": 1640920416014,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1135,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 123,
            "unit": "ns/op",
            "extra": "10192336 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2420,
            "unit": "ns/op",
            "extra": "473046 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1325806,
            "unit": "ns/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1376,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 935026,
            "unit": "ns/op",
            "extra": "1873 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2827527720,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 3163113957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 6306237,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 9353049,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3397,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 124,
            "unit": "ns/op",
            "extra": "9959678 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3804,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3705,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4304,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3198220,
            "unit": "ns/op",
            "extra": "1029 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2219049770,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 11798291993,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 19637464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 62875141,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 547,
            "unit": "ns/op",
            "extra": "2124615 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.5,
            "unit": "ns/op",
            "extra": "28621470 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 673,
            "unit": "ns/op",
            "extra": "1912509 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 629,
            "unit": "ns/op",
            "extra": "1928043 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 786,
            "unit": "ns/op",
            "extra": "1515877 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 552802,
            "unit": "ns/op",
            "extra": "2298 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2465344881,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 4415885977,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9481027,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 30953299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 474,
            "unit": "ns/op",
            "extra": "2525874 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 48.1,
            "unit": "ns/op",
            "extra": "25043580 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 529,
            "unit": "ns/op",
            "extra": "2272609 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 577,
            "unit": "ns/op",
            "extra": "2226344 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 618,
            "unit": "ns/op",
            "extra": "1895047 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 497929,
            "unit": "ns/op",
            "extra": "2586 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2364864000,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 4662664856,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 9336533,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 28314310,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 583,
            "unit": "ns/op",
            "extra": "2161206 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 232,
            "unit": "ns/op",
            "extra": "5072052 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 670,
            "unit": "ns/op",
            "extra": "1750606 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 5070554155,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1049,
            "unit": "ns/op",
            "extra": "1112983 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 585046,
            "unit": "ns/op",
            "extra": "1912 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7633798295,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 3186978582,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 54519073,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 9653838,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 640,
            "unit": "ns/op",
            "extra": "1779740 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 79,
            "unit": "ns/op",
            "extra": "15104883 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 736,
            "unit": "ns/op",
            "extra": "1636604 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 731,
            "unit": "ns/op",
            "extra": "1528790 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1223,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 675520,
            "unit": "ns/op",
            "extra": "1797 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3969509020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 6184216282,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 19601175,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 10354435,
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
        "date": 1640923612529,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1038,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 112,
            "unit": "ns/op",
            "extra": "10126065 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1894,
            "unit": "ns/op",
            "extra": "543232 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1073778,
            "unit": "ns/op",
            "extra": "1316 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1358,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 871125,
            "unit": "ns/op",
            "extra": "1814 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2185379506,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 2137290930,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 30129186,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 28035980,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3169,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 121,
            "unit": "ns/op",
            "extra": "8979886 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3695,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3350,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3817,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2784579,
            "unit": "ns/op",
            "extra": "1116 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2058773488,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 11951864093,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 13032688,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 81881755,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 542,
            "unit": "ns/op",
            "extra": "2176093 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 40.5,
            "unit": "ns/op",
            "extra": "29471275 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1977567 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 623,
            "unit": "ns/op",
            "extra": "1925263 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 762,
            "unit": "ns/op",
            "extra": "1608289 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 552281,
            "unit": "ns/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2281669730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 4262394846,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 10352776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 24718398,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 500,
            "unit": "ns/op",
            "extra": "2518269 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 50.9,
            "unit": "ns/op",
            "extra": "21717009 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 542,
            "unit": "ns/op",
            "extra": "2254332 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 556,
            "unit": "ns/op",
            "extra": "2188689 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 603,
            "unit": "ns/op",
            "extra": "1874587 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 483952,
            "unit": "ns/op",
            "extra": "2360 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2260970469,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 4416035923,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 22960171,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 9336778,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 624,
            "unit": "ns/op",
            "extra": "2056770 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 231,
            "unit": "ns/op",
            "extra": "5175898 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1597045 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3061504041,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1180,
            "unit": "ns/op",
            "extra": "870814 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 562890,
            "unit": "ns/op",
            "extra": "2133 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8503736241,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 3388479673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 16143020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 60451535,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 694,
            "unit": "ns/op",
            "extra": "1738225 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 82.7,
            "unit": "ns/op",
            "extra": "14737489 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 757,
            "unit": "ns/op",
            "extra": "1598715 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 748,
            "unit": "ns/op",
            "extra": "1623424 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1276,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 702363,
            "unit": "ns/op",
            "extra": "1866 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3554533058,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 6256949567,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 11050975,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 37969384,
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
          "id": "a46c2442f5186194ee9b8e3e616d1c47c49b324f",
          "message": "🍡 add heavy write",
          "timestamp": "2021-12-31T12:16:11+08:00",
          "tree_id": "dac36d7a1d7a451cd0dcc7b7c165c9a13524b740",
          "url": "https://github.com/benchplus/gocache/commit/a46c2442f5186194ee9b8e3e616d1c47c49b324f"
        },
        "date": 1640924703641,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 806,
            "unit": "ns/op",
            "extra": "1374872 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 89.3,
            "unit": "ns/op",
            "extra": "12766814 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1645,
            "unit": "ns/op",
            "extra": "636122 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1250051,
            "unit": "ns/op",
            "extra": "1279 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1182,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 694389,
            "unit": "ns/op",
            "extra": "1948 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2037286685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 35643240581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 20527396,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 35341789,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2891,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11087544 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3263,
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
            "value": 3466,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2515597,
            "unit": "ns/op",
            "extra": "1208 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1793432635,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 134839940319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 9645592,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 672171014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 467,
            "unit": "ns/op",
            "extra": "2537412 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 35.7,
            "unit": "ns/op",
            "extra": "33416520 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 528,
            "unit": "ns/op",
            "extra": "2232121 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 529,
            "unit": "ns/op",
            "extra": "2113210 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 650,
            "unit": "ns/op",
            "extra": "1828675 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 475285,
            "unit": "ns/op",
            "extra": "2636 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1923684383,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 55404240449,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7970355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 204433053,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 405,
            "unit": "ns/op",
            "extra": "2996042 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 40.8,
            "unit": "ns/op",
            "extra": "29309343 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 447,
            "unit": "ns/op",
            "extra": "2598838 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 456,
            "unit": "ns/op",
            "extra": "2677018 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 533,
            "unit": "ns/op",
            "extra": "2246884 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 416252,
            "unit": "ns/op",
            "extra": "2990 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 1928547281,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 58313752755,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 9455255,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 245056007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 531,
            "unit": "ns/op",
            "extra": "2305334 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 196,
            "unit": "ns/op",
            "extra": "6116019 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 652,
            "unit": "ns/op",
            "extra": "1762604 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3069354161,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1148,
            "unit": "ns/op",
            "extra": "903056 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 558571,
            "unit": "ns/op",
            "extra": "2000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7820978041,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 38509122471,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 54057410,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 147224803,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 536,
            "unit": "ns/op",
            "extra": "2136810 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.3,
            "unit": "ns/op",
            "extra": "18070503 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 643,
            "unit": "ns/op",
            "extra": "1674672 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 637,
            "unit": "ns/op",
            "extra": "1908055 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1126,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 578871,
            "unit": "ns/op",
            "extra": "2194 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3982078607,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 83435080159,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 12228635,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 222191736,
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
          "id": "f8d0610c57f3ca467122eed53223ade029b132c5",
          "message": ":fish: fix value more reasonable",
          "timestamp": "2021-12-31T14:20:17+08:00",
          "tree_id": "1f000b7a6b779d60c13ddd8e58e7c95c8523868c",
          "url": "https://github.com/benchplus/gocache/commit/f8d0610c57f3ca467122eed53223ade029b132c5"
        },
        "date": 1640932144606,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 876,
            "unit": "ns/op",
            "extra": "1256264 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 85.4,
            "unit": "ns/op",
            "extra": "12413287 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1607,
            "unit": "ns/op",
            "extra": "840294 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1077738,
            "unit": "ns/op",
            "extra": "1386 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1064,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 693524,
            "unit": "ns/op",
            "extra": "1539 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1703527949,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 41072781897,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 16061434,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 33145095,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2634,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "10875010 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2825,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2776,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3117,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2110075,
            "unit": "ns/op",
            "extra": "1312 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1717243146,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 120497161728,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8184954,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 532303429,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 463,
            "unit": "ns/op",
            "extra": "2598193 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 35.7,
            "unit": "ns/op",
            "extra": "33434485 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 539,
            "unit": "ns/op",
            "extra": "2199210 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 522,
            "unit": "ns/op",
            "extra": "2246206 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 639,
            "unit": "ns/op",
            "extra": "1859558 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 467191,
            "unit": "ns/op",
            "extra": "2718 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1775138807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 50585884671,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8567960,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 178205287,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 397,
            "unit": "ns/op",
            "extra": "3016186 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 40.9,
            "unit": "ns/op",
            "extra": "28966132 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 441,
            "unit": "ns/op",
            "extra": "2712728 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 442,
            "unit": "ns/op",
            "extra": "2701711 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 523,
            "unit": "ns/op",
            "extra": "2305436 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 406481,
            "unit": "ns/op",
            "extra": "2942 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 1855998054,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 54837629299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8238456,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 226966534,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1868665 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 196,
            "unit": "ns/op",
            "extra": "6161653 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 584,
            "unit": "ns/op",
            "extra": "2111659 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3022807069,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1011,
            "unit": "ns/op",
            "extra": "1181346 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 636433,
            "unit": "ns/op",
            "extra": "1881 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7053159875,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 60253300487,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 47924807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 227239248,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 549,
            "unit": "ns/op",
            "extra": "2158389 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15934873 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1932124 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 616,
            "unit": "ns/op",
            "extra": "1949160 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 563560,
            "unit": "ns/op",
            "extra": "2196 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3728144171,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 70998746696,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 12755540,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 133515532,
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
          "id": "f8d0610c57f3ca467122eed53223ade029b132c5",
          "message": ":fish: fix value more reasonable",
          "timestamp": "2021-12-31T14:20:17+08:00",
          "tree_id": "1f000b7a6b779d60c13ddd8e58e7c95c8523868c",
          "url": "https://github.com/benchplus/gocache/commit/f8d0610c57f3ca467122eed53223ade029b132c5"
        },
        "date": 1640938007995,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1311,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 124,
            "unit": "ns/op",
            "extra": "8349406 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1998,
            "unit": "ns/op",
            "extra": "796293 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 918436,
            "unit": "ns/op",
            "extra": "1338 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1439,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 973994,
            "unit": "ns/op",
            "extra": "1398 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2287113570,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 55253149500,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 37708104,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 39561244,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3381,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 149,
            "unit": "ns/op",
            "extra": "7233028 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3518,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3389,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3852,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2830679,
            "unit": "ns/op",
            "extra": "1082 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2171869649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 153375157559,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 13100922,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 802484134,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 611,
            "unit": "ns/op",
            "extra": "1934865 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 48.2,
            "unit": "ns/op",
            "extra": "25721632 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 681,
            "unit": "ns/op",
            "extra": "1725744 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 689,
            "unit": "ns/op",
            "extra": "1619077 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 824,
            "unit": "ns/op",
            "extra": "1471564 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 617649,
            "unit": "ns/op",
            "extra": "1801 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2487494148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 60503899292,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7657458,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 265408913,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 536,
            "unit": "ns/op",
            "extra": "2244088 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 58.3,
            "unit": "ns/op",
            "extra": "20961836 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 591,
            "unit": "ns/op",
            "extra": "2089869 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 575,
            "unit": "ns/op",
            "extra": "2066965 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 681,
            "unit": "ns/op",
            "extra": "1781109 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 523537,
            "unit": "ns/op",
            "extra": "2350 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2598506106,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 65152657684,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 15871518,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 350966754,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 768,
            "unit": "ns/op",
            "extra": "1555978 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 257,
            "unit": "ns/op",
            "extra": "4583370 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 711,
            "unit": "ns/op",
            "extra": "1729273 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4891496664,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1287,
            "unit": "ns/op",
            "extra": "914502 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 826858,
            "unit": "ns/op",
            "extra": "1477 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8458262659,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 68027171993,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 71596345,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 242844869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 730,
            "unit": "ns/op",
            "extra": "1572463 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 98.8,
            "unit": "ns/op",
            "extra": "12372856 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 849,
            "unit": "ns/op",
            "extra": "1447914 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 835,
            "unit": "ns/op",
            "extra": "1471408 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1456,
            "unit": "ns/op",
            "extra": "876223 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 794146,
            "unit": "ns/op",
            "extra": "1657 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4023031202,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 76378776757,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 19426147,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 219644409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}