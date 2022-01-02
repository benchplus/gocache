window.BENCHMARK_DATA = {
  "lastUpdate": 1641091876747,
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
          "id": "7738171e7f582bd35ad0ec24209a54a575997c02",
          "message": ":lollipop: 50-50",
          "timestamp": "2022-01-02T08:37:23+08:00",
          "tree_id": "5206bd9e02e52f28eb6373768e5e2cb50ed5e416",
          "url": "https://github.com/benchplus/gocache/commit/7738171e7f582bd35ad0ec24209a54a575997c02"
        },
        "date": 1641084912346,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1204,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 115,
            "unit": "ns/op",
            "extra": "10588112 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2119,
            "unit": "ns/op",
            "extra": "623276 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1016783,
            "unit": "ns/op",
            "extra": "1345 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1350,
            "unit": "ns/op",
            "extra": "951716 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 964563,
            "unit": "ns/op",
            "extra": "1412 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2346795976,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 53499749061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 15026893,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 51190985,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2981,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 134,
            "unit": "ns/op",
            "extra": "8931873 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3412,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3840,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3770,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3021605,
            "unit": "ns/op",
            "extra": "1069 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2150514337,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 150532998061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 15187386,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 800313446,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 484,
            "unit": "ns/op",
            "extra": "2449766 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 53.5,
            "unit": "ns/op",
            "extra": "22400901 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 666,
            "unit": "ns/op",
            "extra": "1736026 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 692,
            "unit": "ns/op",
            "extra": "1775353 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 786,
            "unit": "ns/op",
            "extra": "1524715 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 475401,
            "unit": "ns/op",
            "extra": "2760 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1965350835,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 48762050537,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7656218,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 173160011,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 448,
            "unit": "ns/op",
            "extra": "2625475 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 77.4,
            "unit": "ns/op",
            "extra": "14874255 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 627,
            "unit": "ns/op",
            "extra": "1839148 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 651,
            "unit": "ns/op",
            "extra": "1953651 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 716,
            "unit": "ns/op",
            "extra": "1651538 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 453561,
            "unit": "ns/op",
            "extra": "2856 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2508802292,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 47575259946,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 268805574,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 9346874,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 731,
            "unit": "ns/op",
            "extra": "1450725 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 250,
            "unit": "ns/op",
            "extra": "4941441 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 695,
            "unit": "ns/op",
            "extra": "1639708 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 5073201538,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1291,
            "unit": "ns/op",
            "extra": "863908 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 751750,
            "unit": "ns/op",
            "extra": "1408 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8713663088,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 66274793245,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 107317906,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 307619862,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 711,
            "unit": "ns/op",
            "extra": "1737842 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 85.3,
            "unit": "ns/op",
            "extra": "13430721 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 807,
            "unit": "ns/op",
            "extra": "1422084 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 791,
            "unit": "ns/op",
            "extra": "1530490 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1359,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 728126,
            "unit": "ns/op",
            "extra": "1950 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4227210347,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 74269617563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 24128120,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 205349953,
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
          "id": "72603b38c09487a3fe95bac49606d2dc797612c8",
          "message": ":star: new version",
          "timestamp": "2022-01-02T09:42:24+08:00",
          "tree_id": "d9a836dff02dfff810970b54812aa82f4b41212e",
          "url": "https://github.com/benchplus/gocache/commit/72603b38c09487a3fe95bac49606d2dc797612c8"
        },
        "date": 1641088245535,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1058,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.2,
            "unit": "ns/op",
            "extra": "13652936 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1638,
            "unit": "ns/op",
            "extra": "768010 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1134549,
            "unit": "ns/op",
            "extra": "1336 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1059,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 704019,
            "unit": "ns/op",
            "extra": "1573 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1834796402,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 42707695140,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 41252769,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 54557285,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2630,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11125352 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2826,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2825,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3392,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2125403,
            "unit": "ns/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1743405239,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 113631779116,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8066058,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 518983701,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 345,
            "unit": "ns/op",
            "extra": "3454077 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28850738 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2404573 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 490,
            "unit": "ns/op",
            "extra": "2239142 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 580,
            "unit": "ns/op",
            "extra": "2034530 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 353292,
            "unit": "ns/op",
            "extra": "3696 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1788834206,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 22795252395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 7231257,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 48028468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 328,
            "unit": "ns/op",
            "extra": "3725096 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20062688 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 459,
            "unit": "ns/op",
            "extra": "2671734 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 456,
            "unit": "ns/op",
            "extra": "2644773 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 530,
            "unit": "ns/op",
            "extra": "2266696 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 337190,
            "unit": "ns/op",
            "extra": "3758 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 1983706572,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 25261366859,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 7415425,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 72858194,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 597,
            "unit": "ns/op",
            "extra": "1997496 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 193,
            "unit": "ns/op",
            "extra": "6193558 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 522,
            "unit": "ns/op",
            "extra": "2261005 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 2961050226,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 955,
            "unit": "ns/op",
            "extra": "1256511 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 607191,
            "unit": "ns/op",
            "extra": "1880 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 6865860401,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 57637730958,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 46323989,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 208007934,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 546,
            "unit": "ns/op",
            "extra": "2192563 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15954998 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1893523 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 609,
            "unit": "ns/op",
            "extra": "1983639 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1086,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 561426,
            "unit": "ns/op",
            "extra": "2241 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3553519414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 68258864884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 106291793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 12912682,
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
          "id": "72603b38c09487a3fe95bac49606d2dc797612c8",
          "message": ":star: new version",
          "timestamp": "2022-01-02T09:42:24+08:00",
          "tree_id": "d9a836dff02dfff810970b54812aa82f4b41212e",
          "url": "https://github.com/benchplus/gocache/commit/72603b38c09487a3fe95bac49606d2dc797612c8"
        },
        "date": 1641088879876,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1317,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 138,
            "unit": "ns/op",
            "extra": "9561309 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1985,
            "unit": "ns/op",
            "extra": "656914 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 984982,
            "unit": "ns/op",
            "extra": "1352 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1284,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 881245,
            "unit": "ns/op",
            "extra": "1444 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2497082710,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 52571448581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 20332483,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 47030049,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2984,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 133,
            "unit": "ns/op",
            "extra": "8899340 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3265,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3299,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3782,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2715136,
            "unit": "ns/op",
            "extra": "1134 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2162096939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 144207820331,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 11873332,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 715771491,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 440,
            "unit": "ns/op",
            "extra": "2796409 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 50.8,
            "unit": "ns/op",
            "extra": "21981025 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 635,
            "unit": "ns/op",
            "extra": "2017449 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 572,
            "unit": "ns/op",
            "extra": "1997980 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 708,
            "unit": "ns/op",
            "extra": "1665120 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 449925,
            "unit": "ns/op",
            "extra": "3024 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1886440048,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 29927984800,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 14253805,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 129855773,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 405,
            "unit": "ns/op",
            "extra": "3022075 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 74.4,
            "unit": "ns/op",
            "extra": "15427692 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 555,
            "unit": "ns/op",
            "extra": "2190296 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 553,
            "unit": "ns/op",
            "extra": "2275952 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 625,
            "unit": "ns/op",
            "extra": "1837254 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 399125,
            "unit": "ns/op",
            "extra": "3021 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2318518072,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 30767320807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8318748,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 107286249,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 748,
            "unit": "ns/op",
            "extra": "1691845 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "5060262 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 664,
            "unit": "ns/op",
            "extra": "1730785 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4847689232,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1209,
            "unit": "ns/op",
            "extra": "901374 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 777493,
            "unit": "ns/op",
            "extra": "1508 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8525653417,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 64294283429,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 62531670,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 242691835,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 687,
            "unit": "ns/op",
            "extra": "1791884 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 87.6,
            "unit": "ns/op",
            "extra": "13322881 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 741,
            "unit": "ns/op",
            "extra": "1573166 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 760,
            "unit": "ns/op",
            "extra": "1583290 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1275,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 711211,
            "unit": "ns/op",
            "extra": "1963 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3670561670,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 75218872101,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 199536640,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 13221656,
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
        "date": 1641090425753,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 865,
            "unit": "ns/op",
            "extra": "1250312 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.5,
            "unit": "ns/op",
            "extra": "14033220 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1700,
            "unit": "ns/op",
            "extra": "741518 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1165698,
            "unit": "ns/op",
            "extra": "1298 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1079,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 767132,
            "unit": "ns/op",
            "extra": "1825 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1780911000,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 42261798432,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 22625432,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 24472896,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2496,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11148891 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2878,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2996,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3127,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2238577,
            "unit": "ns/op",
            "extra": "1386 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1671638605,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 116687023521,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 8490472,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 532497187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 343,
            "unit": "ns/op",
            "extra": "3426600 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28239667 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 497,
            "unit": "ns/op",
            "extra": "2435306 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2512942 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 580,
            "unit": "ns/op",
            "extra": "2064043 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 351745,
            "unit": "ns/op",
            "extra": "3676 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1692454997,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 23980176483,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 6825074,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 61705268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 329,
            "unit": "ns/op",
            "extra": "3677671 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20132220 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 457,
            "unit": "ns/op",
            "extra": "2629101 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 460,
            "unit": "ns/op",
            "extra": "2666146 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 534,
            "unit": "ns/op",
            "extra": "2245250 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 340094,
            "unit": "ns/op",
            "extra": "3717 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2064644137,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 25957261932,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 6271048,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 85600548,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 600,
            "unit": "ns/op",
            "extra": "2029682 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6113317 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 536,
            "unit": "ns/op",
            "extra": "2262356 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3054516879,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 973,
            "unit": "ns/op",
            "extra": "1167940 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 613159,
            "unit": "ns/op",
            "extra": "1843 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 6883242815,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 56868496400,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 48533063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 197719811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 569,
            "unit": "ns/op",
            "extra": "2197663 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75,
            "unit": "ns/op",
            "extra": "15763180 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 616,
            "unit": "ns/op",
            "extra": "1959301 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1961389 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 562629,
            "unit": "ns/op",
            "extra": "2265 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3458139021,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 73323444233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 10460872,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 135185959,
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
          "id": "72603b38c09487a3fe95bac49606d2dc797612c8",
          "message": ":star: new version",
          "timestamp": "2022-01-02T09:42:24+08:00",
          "tree_id": "d9a836dff02dfff810970b54812aa82f4b41212e",
          "url": "https://github.com/benchplus/gocache/commit/72603b38c09487a3fe95bac49606d2dc797612c8"
        },
        "date": 1641091875714,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1295,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 120,
            "unit": "ns/op",
            "extra": "9181876 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2109,
            "unit": "ns/op",
            "extra": "627248 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1058194,
            "unit": "ns/op",
            "extra": "1375 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1342,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 990350,
            "unit": "ns/op",
            "extra": "1551 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2186200890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 54981183273,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 27431901,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 39974541,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3233,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "9197282 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3454,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3632,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4076,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3061693,
            "unit": "ns/op",
            "extra": "967 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2178063737,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 162484975950,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 16599383,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 805293589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 459,
            "unit": "ns/op",
            "extra": "2465164 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 54.8,
            "unit": "ns/op",
            "extra": "21941484 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 658,
            "unit": "ns/op",
            "extra": "1873518 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 653,
            "unit": "ns/op",
            "extra": "1822576 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 812,
            "unit": "ns/op",
            "extra": "1547770 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 486533,
            "unit": "ns/op",
            "extra": "2682 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2363188935,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 31794795329,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 14427858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 111087046,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 436,
            "unit": "ns/op",
            "extra": "2800449 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 76.8,
            "unit": "ns/op",
            "extra": "15476205 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 590,
            "unit": "ns/op",
            "extra": "2095250 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 576,
            "unit": "ns/op",
            "extra": "2050515 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 704,
            "unit": "ns/op",
            "extra": "1755939 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 453087,
            "unit": "ns/op",
            "extra": "2820 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2565692536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 33583442476,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 12209541,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 130812573,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 778,
            "unit": "ns/op",
            "extra": "1496962 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 258,
            "unit": "ns/op",
            "extra": "4741246 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 815,
            "unit": "ns/op",
            "extra": "1600808 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4705838287,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1194,
            "unit": "ns/op",
            "extra": "874699 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 761684,
            "unit": "ns/op",
            "extra": "1477 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8753502113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 69898665231,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 91055196,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 308246077,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 785,
            "unit": "ns/op",
            "extra": "1623705 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.5,
            "unit": "ns/op",
            "extra": "13217436 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 800,
            "unit": "ns/op",
            "extra": "1459260 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 846,
            "unit": "ns/op",
            "extra": "1438838 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1431,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 730868,
            "unit": "ns/op",
            "extra": "1758 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4405755051,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 77834071837,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 28097571,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 214925394,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}