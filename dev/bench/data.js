window.BENCHMARK_DATA = {
  "lastUpdate": 1641120398785,
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
        "date": 1641112409435,
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
            "value": 118,
            "unit": "ns/op",
            "extra": "9420631 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1974,
            "unit": "ns/op",
            "extra": "662120 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1027799,
            "unit": "ns/op",
            "extra": "1208 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1314,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 965180,
            "unit": "ns/op",
            "extra": "1491 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2454002248,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 52711769050,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 21656439,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 31104692,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3140,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 131,
            "unit": "ns/op",
            "extra": "9255172 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3295,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3158,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3749,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2938906,
            "unit": "ns/op",
            "extra": "1156 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2332546061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 151783952494,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 7505045,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 682970783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 448,
            "unit": "ns/op",
            "extra": "2782873 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 55.7,
            "unit": "ns/op",
            "extra": "21603700 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 613,
            "unit": "ns/op",
            "extra": "1964194 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1988222 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1645588 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 449719,
            "unit": "ns/op",
            "extra": "2869 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2069727150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 28614829486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9132249,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 79565056,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 443,
            "unit": "ns/op",
            "extra": "2929171 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 78.7,
            "unit": "ns/op",
            "extra": "14815492 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 581,
            "unit": "ns/op",
            "extra": "2081252 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 596,
            "unit": "ns/op",
            "extra": "2098548 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 683,
            "unit": "ns/op",
            "extra": "1735659 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 434935,
            "unit": "ns/op",
            "extra": "3099 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2834175509,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 31818051557,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 12317770,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 104767020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 739,
            "unit": "ns/op",
            "extra": "1653811 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 239,
            "unit": "ns/op",
            "extra": "5012469 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 684,
            "unit": "ns/op",
            "extra": "1657471 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3230525987,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1235,
            "unit": "ns/op",
            "extra": "860698 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 789160,
            "unit": "ns/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8145679052,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 67398648434,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 241726736,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 59237155,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 718,
            "unit": "ns/op",
            "extra": "1661032 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.8,
            "unit": "ns/op",
            "extra": "13564509 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 792,
            "unit": "ns/op",
            "extra": "1405520 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 792,
            "unit": "ns/op",
            "extra": "1515643 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1351,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 724037,
            "unit": "ns/op",
            "extra": "1588 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4364624080,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 76588189007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 23052279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 197092388,
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
        "date": 1641113075580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1323,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 131,
            "unit": "ns/op",
            "extra": "7992517 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2320,
            "unit": "ns/op",
            "extra": "548672 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1003777,
            "unit": "ns/op",
            "extra": "1270 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1313,
            "unit": "ns/op",
            "extra": "998253 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 923846,
            "unit": "ns/op",
            "extra": "1400 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2769655486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 53859877283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 38568708,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 8408063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3097,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "8738208 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3394,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3368,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3869,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2757666,
            "unit": "ns/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2127345752,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 145372658639,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 19226938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 650724965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 443,
            "unit": "ns/op",
            "extra": "2712429 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 52.7,
            "unit": "ns/op",
            "extra": "22558687 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 610,
            "unit": "ns/op",
            "extra": "1901437 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 627,
            "unit": "ns/op",
            "extra": "1915981 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 726,
            "unit": "ns/op",
            "extra": "1526004 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 457769,
            "unit": "ns/op",
            "extra": "2872 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2167121002,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 28617884684,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 23432648,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 85401642,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 423,
            "unit": "ns/op",
            "extra": "2900134 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 79.3,
            "unit": "ns/op",
            "extra": "15905360 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 574,
            "unit": "ns/op",
            "extra": "2099920 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 573,
            "unit": "ns/op",
            "extra": "2092201 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 684,
            "unit": "ns/op",
            "extra": "1745586 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 430213,
            "unit": "ns/op",
            "extra": "3049 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2688125148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 31793092172,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 115765512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 11639647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 744,
            "unit": "ns/op",
            "extra": "1601440 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "5103406 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 688,
            "unit": "ns/op",
            "extra": "1786716 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4765847308,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1195,
            "unit": "ns/op",
            "extra": "994575 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 775541,
            "unit": "ns/op",
            "extra": "1498 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8578496143,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 67220339591,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 66618293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 254459777,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 689,
            "unit": "ns/op",
            "extra": "1695050 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 87.3,
            "unit": "ns/op",
            "extra": "13263163 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 787,
            "unit": "ns/op",
            "extra": "1477974 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 780,
            "unit": "ns/op",
            "extra": "1518865 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1331,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 749581,
            "unit": "ns/op",
            "extra": "1720 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4088229188,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 77060880010,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 13196395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 179663408,
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
        "date": 1641114806868,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1140,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 126,
            "unit": "ns/op",
            "extra": "10379734 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2065,
            "unit": "ns/op",
            "extra": "597487 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1201327,
            "unit": "ns/op",
            "extra": "1207 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1359,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 886279,
            "unit": "ns/op",
            "extra": "1454 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2146511298,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 50819678481,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 15183797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 29992793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2933,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 134,
            "unit": "ns/op",
            "extra": "8934150 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3317,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3231,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3653,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2657095,
            "unit": "ns/op",
            "extra": "1142 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2245703330,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 142371305487,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 7660901,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 608676410,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 434,
            "unit": "ns/op",
            "extra": "2687214 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 51.8,
            "unit": "ns/op",
            "extra": "23103534 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 626,
            "unit": "ns/op",
            "extra": "1978075 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 603,
            "unit": "ns/op",
            "extra": "1997416 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 722,
            "unit": "ns/op",
            "extra": "1636372 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 454001,
            "unit": "ns/op",
            "extra": "2770 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2054567278,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 29426111213,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 17682770,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 91037574,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 408,
            "unit": "ns/op",
            "extra": "2926016 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 74,
            "unit": "ns/op",
            "extra": "16127554 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 563,
            "unit": "ns/op",
            "extra": "2122234 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 570,
            "unit": "ns/op",
            "extra": "2137596 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 659,
            "unit": "ns/op",
            "extra": "1829086 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 436049,
            "unit": "ns/op",
            "extra": "2996 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2511196151,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 32440620177,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8706437,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 96219214,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 766,
            "unit": "ns/op",
            "extra": "1568713 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 250,
            "unit": "ns/op",
            "extra": "4931241 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 724,
            "unit": "ns/op",
            "extra": "1687677 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4748537310,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1265,
            "unit": "ns/op",
            "extra": "931278 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 807788,
            "unit": "ns/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8701629249,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 72320011865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 71520622,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 241681025,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 676,
            "unit": "ns/op",
            "extra": "1785523 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 93.9,
            "unit": "ns/op",
            "extra": "12747859 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 799,
            "unit": "ns/op",
            "extra": "1577284 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 754,
            "unit": "ns/op",
            "extra": "1594699 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1353,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 696537,
            "unit": "ns/op",
            "extra": "1794 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4620208284,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 86569880709,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 15174020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 161078520,
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
        "date": 1641119729369,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 895,
            "unit": "ns/op",
            "extra": "1302105 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 72.5,
            "unit": "ns/op",
            "extra": "15225296 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2155,
            "unit": "ns/op",
            "extra": "540549 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1125031,
            "unit": "ns/op",
            "extra": "1308 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1013,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 711039,
            "unit": "ns/op",
            "extra": "2044 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1824439524,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 39115067122,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 33322885,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 5089754,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2499,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 92.8,
            "unit": "ns/op",
            "extra": "12867368 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2977,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2777,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3232,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2118670,
            "unit": "ns/op",
            "extra": "1490 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1622887356,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 111314763490,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 10087168,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 496990169,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 324,
            "unit": "ns/op",
            "extra": "3632377 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 36.1,
            "unit": "ns/op",
            "extra": "32834452 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 433,
            "unit": "ns/op",
            "extra": "2643361 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 436,
            "unit": "ns/op",
            "extra": "2661910 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 526,
            "unit": "ns/op",
            "extra": "2275776 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 318640,
            "unit": "ns/op",
            "extra": "4062 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1693727539,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 22572244703,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 10281628,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 68547702,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 292,
            "unit": "ns/op",
            "extra": "4175062 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 51.9,
            "unit": "ns/op",
            "extra": "22685898 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 399,
            "unit": "ns/op",
            "extra": "3001371 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 411,
            "unit": "ns/op",
            "extra": "3000852 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 465,
            "unit": "ns/op",
            "extra": "2592250 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 292937,
            "unit": "ns/op",
            "extra": "4276 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 1800686506,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 23489784502,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 6197575,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 75081190,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 521,
            "unit": "ns/op",
            "extra": "2309630 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 167,
            "unit": "ns/op",
            "extra": "7214222 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 465,
            "unit": "ns/op",
            "extra": "2509796 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 2658005024,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 847,
            "unit": "ns/op",
            "extra": "1358284 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 533892,
            "unit": "ns/op",
            "extra": "2109 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 6458207682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 50438493308,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 48792199,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 169324727,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 483,
            "unit": "ns/op",
            "extra": "2476675 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 65.1,
            "unit": "ns/op",
            "extra": "18493134 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 539,
            "unit": "ns/op",
            "extra": "2210827 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 537,
            "unit": "ns/op",
            "extra": "2241391 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 951,
            "unit": "ns/op",
            "extra": "1211973 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 496252,
            "unit": "ns/op",
            "extra": "2509 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3514251524,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 65470003764,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 11578546,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 114134711,
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
        "date": 1641120397663,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1098,
            "unit": "ns/op",
            "extra": "1025295 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 112,
            "unit": "ns/op",
            "extra": "10789569 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2123,
            "unit": "ns/op",
            "extra": "642703 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1058566,
            "unit": "ns/op",
            "extra": "1281 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1335,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 914308,
            "unit": "ns/op",
            "extra": "1443 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2127142909,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 53415814272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 33766001,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 17143593,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3191,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 131,
            "unit": "ns/op",
            "extra": "9436141 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3089,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3338,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3783,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2651464,
            "unit": "ns/op",
            "extra": "1179 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2177915070,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 149374837440,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 12740311,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 725040663,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 449,
            "unit": "ns/op",
            "extra": "2653606 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 56.3,
            "unit": "ns/op",
            "extra": "21475346 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 625,
            "unit": "ns/op",
            "extra": "1786275 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 612,
            "unit": "ns/op",
            "extra": "1898554 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 756,
            "unit": "ns/op",
            "extra": "1570520 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 479597,
            "unit": "ns/op",
            "extra": "2578 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2266162556,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 29902589497,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 15586735,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 110130812,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 429,
            "unit": "ns/op",
            "extra": "2677130 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 77.8,
            "unit": "ns/op",
            "extra": "15940081 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 580,
            "unit": "ns/op",
            "extra": "2113602 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 586,
            "unit": "ns/op",
            "extra": "2095176 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 674,
            "unit": "ns/op",
            "extra": "1790845 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 443741,
            "unit": "ns/op",
            "extra": "3139 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2587978955,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 32058498837,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8896598,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 125206307,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 785,
            "unit": "ns/op",
            "extra": "1605252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 257,
            "unit": "ns/op",
            "extra": "4608870 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 690,
            "unit": "ns/op",
            "extra": "1652508 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4738400181,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1256,
            "unit": "ns/op",
            "extra": "857844 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 775557,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8643124036,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 70392085235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 61544242,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 286415819,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 737,
            "unit": "ns/op",
            "extra": "1616587 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 89.3,
            "unit": "ns/op",
            "extra": "12911574 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 814,
            "unit": "ns/op",
            "extra": "1506273 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 828,
            "unit": "ns/op",
            "extra": "1518963 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1397,
            "unit": "ns/op",
            "extra": "848706 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 734560,
            "unit": "ns/op",
            "extra": "1772 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4345406591,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 76892328021,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 18622823,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 193574817,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}