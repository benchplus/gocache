window.BENCHMARK_DATA = {
  "lastUpdate": 1641279479057,
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
          "id": "fcea6d47c28ca9d9672b40faa8f844917bea8277",
          "message": ":wrench: fix for size of freecache",
          "timestamp": "2022-01-04T11:36:57+08:00",
          "tree_id": "62ee89044d626bd935f32c6883be09bbcf5ed092",
          "url": "https://github.com/benchplus/gocache/commit/fcea6d47c28ca9d9672b40faa8f844917bea8277"
        },
        "date": 1641267727145,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1458,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 129,
            "unit": "ns/op",
            "extra": "7862280 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2415,
            "unit": "ns/op",
            "extra": "444242 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1066905,
            "unit": "ns/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1622,
            "unit": "ns/op",
            "extra": "763590 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 1065218,
            "unit": "ns/op",
            "extra": "1266 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2574775367,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 7133188717,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 58801252309,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 56609658,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 28198923,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 475459263,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 4068,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 143,
            "unit": "ns/op",
            "extra": "8084295 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 4391,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3814,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4658,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3887008,
            "unit": "ns/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2492424011,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 14925123525,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 21691273074,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 33396938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 121523687,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 167263968,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 462,
            "unit": "ns/op",
            "extra": "2643016 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 52.8,
            "unit": "ns/op",
            "extra": "20553135 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 681,
            "unit": "ns/op",
            "extra": "1787917 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 709,
            "unit": "ns/op",
            "extra": "1723167 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 868,
            "unit": "ns/op",
            "extra": "1441861 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 449081,
            "unit": "ns/op",
            "extra": "2464 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2333300575,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 2687059431,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 6603198780,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 34232231,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 20480066,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 17069732,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 423,
            "unit": "ns/op",
            "extra": "2769895 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 71.5,
            "unit": "ns/op",
            "extra": "16220275 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 606,
            "unit": "ns/op",
            "extra": "1941628 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 634,
            "unit": "ns/op",
            "extra": "1906910 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 716,
            "unit": "ns/op",
            "extra": "1700955 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 431026,
            "unit": "ns/op",
            "extra": "2827 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2721161312,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 2286957435,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 7173168348,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 44933358,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 14201405,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 9192167,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 945,
            "unit": "ns/op",
            "extra": "1256131 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 255,
            "unit": "ns/op",
            "extra": "4781546 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 1051,
            "unit": "ns/op",
            "extra": "1108166 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4936911752,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1544,
            "unit": "ns/op",
            "extra": "756152 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 1019750,
            "unit": "ns/op",
            "extra": "1080 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 9776218945,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 6496863730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 4275811260,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 36060077,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 14857617,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 96254354,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 773,
            "unit": "ns/op",
            "extra": "1624468 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 94.5,
            "unit": "ns/op",
            "extra": "12893502 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 1058,
            "unit": "ns/op",
            "extra": "1200375 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 960,
            "unit": "ns/op",
            "extra": "1262000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1689,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 865379,
            "unit": "ns/op",
            "extra": "1549 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 5657741482,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 8284156815,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 10388414214,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 59822467,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 33468254,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 85906455,
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
          "id": "fcea6d47c28ca9d9672b40faa8f844917bea8277",
          "message": ":wrench: fix for size of freecache",
          "timestamp": "2022-01-04T11:36:57+08:00",
          "tree_id": "62ee89044d626bd935f32c6883be09bbcf5ed092",
          "url": "https://github.com/benchplus/gocache/commit/fcea6d47c28ca9d9672b40faa8f844917bea8277"
        },
        "date": 1641267999563,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1109,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 99.9,
            "unit": "ns/op",
            "extra": "12255073 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1834,
            "unit": "ns/op",
            "extra": "846010 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 909024,
            "unit": "ns/op",
            "extra": "1214 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1182,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 759319,
            "unit": "ns/op",
            "extra": "1648 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1820398793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 5560695227,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 52393182319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 18396737,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 235712673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 14788223,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2988,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11170525 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3451,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3469,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3847,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2643686,
            "unit": "ns/op",
            "extra": "1180 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1934323008,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 11186255581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 15760209820,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 14719116,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 73090863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 86685139,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 358,
            "unit": "ns/op",
            "extra": "3401116 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.5,
            "unit": "ns/op",
            "extra": "28729566 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 533,
            "unit": "ns/op",
            "extra": "2384888 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 496,
            "unit": "ns/op",
            "extra": "2411122 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 605,
            "unit": "ns/op",
            "extra": "1956544 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 366391,
            "unit": "ns/op",
            "extra": "3600 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1656788055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 1806812674,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 5486176484,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 9304164,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 8191462,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 26748007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 334,
            "unit": "ns/op",
            "extra": "3593238 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 60.5,
            "unit": "ns/op",
            "extra": "19634612 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 470,
            "unit": "ns/op",
            "extra": "2552367 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 480,
            "unit": "ns/op",
            "extra": "2462480 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 553,
            "unit": "ns/op",
            "extra": "2157247 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 344249,
            "unit": "ns/op",
            "extra": "3697 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2133815108,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 2040728794,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 5842207415,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8796664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 7930067,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 31371735,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 691,
            "unit": "ns/op",
            "extra": "1761781 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 200,
            "unit": "ns/op",
            "extra": "6051752 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 768,
            "unit": "ns/op",
            "extra": "1621785 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3133342093,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1132,
            "unit": "ns/op",
            "extra": "1020363 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 735752,
            "unit": "ns/op",
            "extra": "1514 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8375464014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 5212530243,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 3492818811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 62296960,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 25874599,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 10552571,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 607,
            "unit": "ns/op",
            "extra": "2105918 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.8,
            "unit": "ns/op",
            "extra": "15917364 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 651,
            "unit": "ns/op",
            "extra": "1840081 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 655,
            "unit": "ns/op",
            "extra": "1831665 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1138,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 578299,
            "unit": "ns/op",
            "extra": "2222 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3965180035,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 6497922981,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 7499999971,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11041375,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 17204218,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 38649058,
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
          "id": "1651126a428d1c66576d21c6ebd1feb397ef658c",
          "message": ":no_mouth: 1024->10240",
          "timestamp": "2022-01-04T13:36:28+08:00",
          "tree_id": "a116c35f10fa08b90440678f898ec7b0dfbe874a",
          "url": "https://github.com/benchplus/gocache/commit/1651126a428d1c66576d21c6ebd1feb397ef658c"
        },
        "date": 1641276015608,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1014,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 88.9,
            "unit": "ns/op",
            "extra": "11865790 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1997,
            "unit": "ns/op",
            "extra": "648201 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 670771,
            "unit": "ns/op",
            "extra": "2096 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1115,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 739336,
            "unit": "ns/op",
            "extra": "1717 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1653903562,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 43264990886,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3409,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 110,
            "unit": "ns/op",
            "extra": "11389176 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3832,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3632,
            "unit": "ns/op",
            "extra": "982189 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3664,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2213767,
            "unit": "ns/op",
            "extra": "1365 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1738064927,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 112777723595,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 149430268779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 8504301,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 572678152,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 748306598,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 374,
            "unit": "ns/op",
            "extra": "3507196 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 43,
            "unit": "ns/op",
            "extra": "28984386 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 489,
            "unit": "ns/op",
            "extra": "2516445 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 491,
            "unit": "ns/op",
            "extra": "2516966 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 584,
            "unit": "ns/op",
            "extra": "2097904 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 356965,
            "unit": "ns/op",
            "extra": "3769 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1707277909,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 22141515969,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 51852816835,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 64248499,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 200906896,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 8875200,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 326,
            "unit": "ns/op",
            "extra": "3499842 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.1,
            "unit": "ns/op",
            "extra": "17986285 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 445,
            "unit": "ns/op",
            "extra": "2669224 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 475,
            "unit": "ns/op",
            "extra": "2641983 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 525,
            "unit": "ns/op",
            "extra": "2332513 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 336300,
            "unit": "ns/op",
            "extra": "3945 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2000536888,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 24312489302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 56886241270,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7374700,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 81555100,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 231519296,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 572,
            "unit": "ns/op",
            "extra": "2083856 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 194,
            "unit": "ns/op",
            "extra": "6444999 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 533,
            "unit": "ns/op",
            "extra": "2166930 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 2740006338,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 898,
            "unit": "ns/op",
            "extra": "1213345 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 592258,
            "unit": "ns/op",
            "extra": "1940 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6356733831,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 53081351926,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 34659856316,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 39588520,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 227659727,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 97608104,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 569,
            "unit": "ns/op",
            "extra": "2102866 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 68.8,
            "unit": "ns/op",
            "extra": "16755445 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 638,
            "unit": "ns/op",
            "extra": "1940902 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 631,
            "unit": "ns/op",
            "extra": "1911297 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1058,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 584019,
            "unit": "ns/op",
            "extra": "2270 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3143758938,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 61544417545,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 71984995047,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 199669435,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15078499,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 106525161,
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
          "id": "1651126a428d1c66576d21c6ebd1feb397ef658c",
          "message": ":no_mouth: 1024->10240",
          "timestamp": "2022-01-04T13:36:28+08:00",
          "tree_id": "a116c35f10fa08b90440678f898ec7b0dfbe874a",
          "url": "https://github.com/benchplus/gocache/commit/1651126a428d1c66576d21c6ebd1feb397ef658c"
        },
        "date": 1641277778780,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 889,
            "unit": "ns/op",
            "extra": "1279405 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15824674 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1741,
            "unit": "ns/op",
            "extra": "804831 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 873942,
            "unit": "ns/op",
            "extra": "1201 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1054,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 767585,
            "unit": "ns/op",
            "extra": "1874 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1525944112,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 39266012620,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3147,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 96.8,
            "unit": "ns/op",
            "extra": "12472404 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 4440,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 4131,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3495,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2213859,
            "unit": "ns/op",
            "extra": "1363 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1593569969,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 120026292870,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 161935396577,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 8035392,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 566842403,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 705059571,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 329,
            "unit": "ns/op",
            "extra": "3691374 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "32588356 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 455,
            "unit": "ns/op",
            "extra": "2605063 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 479,
            "unit": "ns/op",
            "extra": "2628235 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 525,
            "unit": "ns/op",
            "extra": "2311641 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 315407,
            "unit": "ns/op",
            "extra": "4142 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1514741632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 22304869810,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 55298696673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 8206607,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 68822866,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 188966625,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 291,
            "unit": "ns/op",
            "extra": "4112502 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 52.4,
            "unit": "ns/op",
            "extra": "22728368 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 404,
            "unit": "ns/op",
            "extra": "2945126 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 405,
            "unit": "ns/op",
            "extra": "2960446 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 494,
            "unit": "ns/op",
            "extra": "2490628 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 302485,
            "unit": "ns/op",
            "extra": "4209 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1794136258,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 24432708244,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 60717604386,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7115483,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 83191028,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 199994703,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 561,
            "unit": "ns/op",
            "extra": "2049033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 172,
            "unit": "ns/op",
            "extra": "6976202 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 526,
            "unit": "ns/op",
            "extra": "2279762 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3220094230,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 941,
            "unit": "ns/op",
            "extra": "1258940 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 584599,
            "unit": "ns/op",
            "extra": "1969 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7041594358,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 55421749147,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 36829310742,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 47566683,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 213732049,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 115869189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 527,
            "unit": "ns/op",
            "extra": "2255809 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 66.2,
            "unit": "ns/op",
            "extra": "18051265 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 582,
            "unit": "ns/op",
            "extra": "2070075 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 586,
            "unit": "ns/op",
            "extra": "1890367 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1049,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 533471,
            "unit": "ns/op",
            "extra": "2316 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3640814537,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 71597089507,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 88142737229,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12570570,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 175210699,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 306957288,
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
          "id": "9ecd9221a2641025b47f4892510138b1b4cfdddf",
          "message": ":hamster: 10240 -> 8192",
          "timestamp": "2022-01-04T14:33:52+08:00",
          "tree_id": "89e0619efbe86edce4e2d1b3a2f7d3bb7a02ae88",
          "url": "https://github.com/benchplus/gocache/commit/9ecd9221a2641025b47f4892510138b1b4cfdddf"
        },
        "date": 1641279478383,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1146,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 110,
            "unit": "ns/op",
            "extra": "9812751 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2065,
            "unit": "ns/op",
            "extra": "687720 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 873947,
            "unit": "ns/op",
            "extra": "1250 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1290,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 854031,
            "unit": "ns/op",
            "extra": "1441 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2296466302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 39043828219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3764,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "9252399 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 4036,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 4427,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4891,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2735669,
            "unit": "ns/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2044153563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 112405403146,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 150780462450,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 9734067,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 542143013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 678384255,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 414,
            "unit": "ns/op",
            "extra": "2893093 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 49.5,
            "unit": "ns/op",
            "extra": "24034888 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 578,
            "unit": "ns/op",
            "extra": "2090986 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 601,
            "unit": "ns/op",
            "extra": "2092032 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 691,
            "unit": "ns/op",
            "extra": "1719330 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 422809,
            "unit": "ns/op",
            "extra": "3076 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2002491468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21729133150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 52509925355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 8903202,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 64663935,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 184075404,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 398,
            "unit": "ns/op",
            "extra": "3084142 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 74.2,
            "unit": "ns/op",
            "extra": "16808113 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 548,
            "unit": "ns/op",
            "extra": "2197202 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 548,
            "unit": "ns/op",
            "extra": "2204356 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 635,
            "unit": "ns/op",
            "extra": "1880812 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 403537,
            "unit": "ns/op",
            "extra": "3110 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2623023820,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 24492483203,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 59375828990,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 12514856,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 83455995,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 211576291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 734,
            "unit": "ns/op",
            "extra": "1624665 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 234,
            "unit": "ns/op",
            "extra": "5111136 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 678,
            "unit": "ns/op",
            "extra": "1813828 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4930857220,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1185,
            "unit": "ns/op",
            "extra": "966000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 798014,
            "unit": "ns/op",
            "extra": "1360 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8558372549,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 54038180085,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 33722986207,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 58340202,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 191427467,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 83370295,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 661,
            "unit": "ns/op",
            "extra": "1833822 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.4,
            "unit": "ns/op",
            "extra": "13275189 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 750,
            "unit": "ns/op",
            "extra": "1642297 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 741,
            "unit": "ns/op",
            "extra": "1628136 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1312,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 706252,
            "unit": "ns/op",
            "extra": "1902 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4139515759,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 62938461521,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 77213344649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13425909,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 153656333,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 286942531,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}