window.BENCHMARK_DATA = {
  "lastUpdate": 1641810187218,
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
          "id": "7ef4ecdc7bf00a57cdaa2dfe77dd6e2d7d11716c",
          "message": ":pear: try",
          "timestamp": "2022-01-10T16:44:13+08:00",
          "tree_id": "df3f4e27f23469aff6ef9ce697be71f4111f1aa2",
          "url": "https://github.com/benchplus/gocache/commit/7ef4ecdc7bf00a57cdaa2dfe77dd6e2d7d11716c"
        },
        "date": 1641805480967,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 47221570156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 697,
            "unit": "ns/op",
            "extra": "1663076 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 117,
            "unit": "ns/op",
            "extra": "10220607 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2166,
            "unit": "ns/op",
            "extra": "668574 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 762831,
            "unit": "ns/op",
            "extra": "1422 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1326,
            "unit": "ns/op",
            "extra": "995130 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 713452,
            "unit": "ns/op",
            "extra": "1617 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1467643209,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 31745650001,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 15645197,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 27790485,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2091516136,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 62271254416,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2920,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 95.8,
            "unit": "ns/op",
            "extra": "12654441 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3206,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3059,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3478,
            "unit": "ns/op",
            "extra": "928182 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2961157,
            "unit": "ns/op",
            "extra": "868 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1163905501,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 51963808867,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 64600055612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkCacheRate_bigcache",
            "value": 0.000022,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 9322738,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 217626348,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 221790147,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145117192,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_bigcache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 37536785430,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 396,
            "unit": "ns/op",
            "extra": "3023418 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 69.4,
            "unit": "ns/op",
            "extra": "15833514 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 354,
            "unit": "ns/op",
            "extra": "3542637 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 365,
            "unit": "ns/op",
            "extra": "3403522 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 775,
            "unit": "ns/op",
            "extra": "1508505 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 406198,
            "unit": "ns/op",
            "extra": "3273 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1171468170,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 22159528415,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13559589216,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2494794,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 101218190,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 32281095,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 146722824,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 45720649753,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 367,
            "unit": "ns/op",
            "extra": "3360642 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 85,
            "unit": "ns/op",
            "extra": "14378690 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 344,
            "unit": "ns/op",
            "extra": "3734918 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 325,
            "unit": "ns/op",
            "extra": "3802254 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 727,
            "unit": "ns/op",
            "extra": "1661457 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 375622,
            "unit": "ns/op",
            "extra": "3232 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1391524774,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 23817313878,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 14406001013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2389581,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 107126852,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 33091157,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 216177680,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_ecacheLRU2",
            "value": 39.36,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 152674125124,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 506,
            "unit": "ns/op",
            "extra": "2293004 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 283,
            "unit": "ns/op",
            "extra": "4222684 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 594,
            "unit": "ns/op",
            "extra": "1936972 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9935271006,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1088,
            "unit": "ns/op",
            "extra": "1047188 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 519294,
            "unit": "ns/op",
            "extra": "1984 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7631584000,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 41870311674,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 26882154669,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 43573804,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 189206638,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 81206544,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143675400,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_freecache",
            "value": 46.17,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 104156447714,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 897,
            "unit": "ns/op",
            "extra": "1346983 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 82.9,
            "unit": "ns/op",
            "extra": "14222688 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 985,
            "unit": "ns/op",
            "extra": "1222987 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1704,
            "unit": "ns/op",
            "extra": "837853 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 920359,
            "unit": "ns/op",
            "extra": "1365 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4297692591,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 97898142499,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 119632891251,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 16688084,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 355959001,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 397995824,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 144723976,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 41675215297,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1099,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 90.7,
            "unit": "ns/op",
            "extra": "12285158 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1364,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1308,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2653,
            "unit": "ns/op",
            "extra": "965172 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1037707,
            "unit": "ns/op",
            "extra": "2430 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1418271054,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 29823675134,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 36352456465,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkCacheRate_gocache",
            "value": 0.000022,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 8033347,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 94575140,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 128176550,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145543176,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "7881f9f4f789d5fca6340e6298480558a1bd1036",
          "message": ":pear: try",
          "timestamp": "2022-01-10T17:11:36+08:00",
          "tree_id": "6e11f624f4a3245d7f58958e71947f86971d2e5a",
          "url": "https://github.com/benchplus/gocache/commit/7881f9f4f789d5fca6340e6298480558a1bd1036"
        },
        "date": 1641807217381,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 46313909924,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 693,
            "unit": "ns/op",
            "extra": "1565034 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 118,
            "unit": "ns/op",
            "extra": "10273448 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2103,
            "unit": "ns/op",
            "extra": "689432 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1033653,
            "unit": "ns/op",
            "extra": "1084 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1347,
            "unit": "ns/op",
            "extra": "932715 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 731929,
            "unit": "ns/op",
            "extra": "1494 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1509666750,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 30858677169,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 9594555,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 31012684,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2230196472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 67367903994,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2868,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 93.3,
            "unit": "ns/op",
            "extra": "12792831 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3485,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3155,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3808,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2478879,
            "unit": "ns/op",
            "extra": "829 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1171362013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 54619535488,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 76763692761,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2624655,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 196742618,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 270994075,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144855048,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_bigcache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 37633635218,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 394,
            "unit": "ns/op",
            "extra": "3009278 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 58.9,
            "unit": "ns/op",
            "extra": "19681092 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 344,
            "unit": "ns/op",
            "extra": "3526832 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 344,
            "unit": "ns/op",
            "extra": "3457941 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 811,
            "unit": "ns/op",
            "extra": "1391455 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 402658,
            "unit": "ns/op",
            "extra": "3087 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1049995538,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 23112421261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13855428907,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2701458,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 80615448,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 42295751,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145051656,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 51669264107,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 370,
            "unit": "ns/op",
            "extra": "3242013 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 79.8,
            "unit": "ns/op",
            "extra": "14477228 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 342,
            "unit": "ns/op",
            "extra": "3608304 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 336,
            "unit": "ns/op",
            "extra": "3705794 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 766,
            "unit": "ns/op",
            "extra": "1510129 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 386366,
            "unit": "ns/op",
            "extra": "3105 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1382633455,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 25917311858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 14867280816,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3173286,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 102902714,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 41365080,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 143806472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_ecacheLRU2",
            "value": 39.36,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 165434141726,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 595,
            "unit": "ns/op",
            "extra": "1825790 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 300,
            "unit": "ns/op",
            "extra": "3876346 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 654,
            "unit": "ns/op",
            "extra": "1593884 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9908511190,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1303,
            "unit": "ns/op",
            "extra": "854476 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 602122,
            "unit": "ns/op",
            "extra": "1928 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 9139888538,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 45808239013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 28577156234,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 245853726,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 92413817,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 73942533,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143544328,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_freecache",
            "value": 46.15,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 112489386485,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 944,
            "unit": "ns/op",
            "extra": "1287944 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 88.3,
            "unit": "ns/op",
            "extra": "13532757 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 1035,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1059,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1820,
            "unit": "ns/op",
            "extra": "812025 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 937206,
            "unit": "ns/op",
            "extra": "1294 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4495412694,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 112342272080,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 138192860360,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 14253231,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 372069450,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 460323838,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145739784,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 44245095163,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 104,
            "unit": "ns/op",
            "extra": "12246717 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1347,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1355,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2557,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1072993,
            "unit": "ns/op",
            "extra": "2151 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1539594723,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 31300463877,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 39931959218,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 3111085,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 70985811,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 121168722,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 146526216,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "2a5fa79e6ef3ea1862a9967db493ec32fbd7402b",
          "message": ":pear: try",
          "timestamp": "2022-01-10T17:17:36+08:00",
          "tree_id": "5f3732b923b5f724e137b47506621d0168f2897d",
          "url": "https://github.com/benchplus/gocache/commit/2a5fa79e6ef3ea1862a9967db493ec32fbd7402b"
        },
        "date": 1641807595686,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 50043260003,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 737,
            "unit": "ns/op",
            "extra": "1508938 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 123,
            "unit": "ns/op",
            "extra": "9531608 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1878,
            "unit": "ns/op",
            "extra": "562321 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 786026,
            "unit": "ns/op",
            "extra": "1364 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1344,
            "unit": "ns/op",
            "extra": "812892 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 786194,
            "unit": "ns/op",
            "extra": "1574 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1542739632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 32437705642,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 7395401,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 33708607,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 1881791696,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 64802300614,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3104,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 104,
            "unit": "ns/op",
            "extra": "11450829 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3403,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3392,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3575,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2988398,
            "unit": "ns/op",
            "extra": "850 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1209043287,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 55740009169,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 73050787946,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2535100,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 209277974,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 279460064,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145182728,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 40895418367,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 419,
            "unit": "ns/op",
            "extra": "2922600 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15939198 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 381,
            "unit": "ns/op",
            "extra": "3166525 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 385,
            "unit": "ns/op",
            "extra": "3129444 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 846,
            "unit": "ns/op",
            "extra": "1408322 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 440091,
            "unit": "ns/op",
            "extra": "2686 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1118882631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 23821881324,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 14185144486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2731200,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 89690489,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 46295099,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 144789512,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 53123971911,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 398,
            "unit": "ns/op",
            "extra": "3144991 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 97.3,
            "unit": "ns/op",
            "extra": "11994687 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 355,
            "unit": "ns/op",
            "extra": "3307394 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 357,
            "unit": "ns/op",
            "extra": "3451707 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 764,
            "unit": "ns/op",
            "extra": "1579657 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 405748,
            "unit": "ns/op",
            "extra": "2865 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1507686209,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 27642985991,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 15839917060,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 44294393,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3249099,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 184883462,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 145182728,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 39.36,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 164272722388,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 536,
            "unit": "ns/op",
            "extra": "2142049 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 299,
            "unit": "ns/op",
            "extra": "4086200 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 618,
            "unit": "ns/op",
            "extra": "1720876 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9929114826,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1153,
            "unit": "ns/op",
            "extra": "877272 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 566859,
            "unit": "ns/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8052326123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 44222624132,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 28135951123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 89090865,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 70267299,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 241488264,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143544328,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 46.15,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 112680486258,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 998,
            "unit": "ns/op",
            "extra": "1223884 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 94,
            "unit": "ns/op",
            "extra": "12802008 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 1108,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1169,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 2009,
            "unit": "ns/op",
            "extra": "752392 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 1070796,
            "unit": "ns/op",
            "extra": "1269 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 5188543001,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 112319810126,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 135888507745,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 405305043,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 538310832,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 25802599,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145051656,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 43558628426,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1157,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 92.7,
            "unit": "ns/op",
            "extra": "13188621 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1441,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1438,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2926,
            "unit": "ns/op",
            "extra": "966423 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1145819,
            "unit": "ns/op",
            "extra": "2131 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1429222232,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 31767511606,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 41337120481,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2716100,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 102408510,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 156599937,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145313800,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "2fc077afb5da0cc21a691d8ea9120140a972fd94",
          "message": ":wrench: fix",
          "timestamp": "2022-01-10T17:24:19+08:00",
          "tree_id": "7681fafbee8a50b2942eb74996ade249386fe535",
          "url": "https://github.com/benchplus/gocache/commit/2fc077afb5da0cc21a691d8ea9120140a972fd94"
        },
        "date": 1641807902249,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 42762603598,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 709,
            "unit": "ns/op",
            "extra": "1557561 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 121,
            "unit": "ns/op",
            "extra": "9425222 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2128,
            "unit": "ns/op",
            "extra": "649701 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 721182,
            "unit": "ns/op",
            "extra": "1438 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1383,
            "unit": "ns/op",
            "extra": "851581 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 746724,
            "unit": "ns/op",
            "extra": "1436 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1438596602,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29293506795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 7668409,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 28104940,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2644209960,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 65445101657,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2816,
            "unit": "ns/op",
            "extra": "874411 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 96.6,
            "unit": "ns/op",
            "extra": "12217555 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3043,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3323,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3418,
            "unit": "ns/op",
            "extra": "963280 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2572264,
            "unit": "ns/op",
            "extra": "1095 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1157786976,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 51754562510,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 68572564554,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 249685606,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2569004,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 220123982,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145477640,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 35645295221,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 388,
            "unit": "ns/op",
            "extra": "3151059 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 71.6,
            "unit": "ns/op",
            "extra": "16599940 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 351,
            "unit": "ns/op",
            "extra": "3357736 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 356,
            "unit": "ns/op",
            "extra": "3476179 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 735,
            "unit": "ns/op",
            "extra": "1584588 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 405226,
            "unit": "ns/op",
            "extra": "3096 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1265916811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 22836742289,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13055148206,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 3569300,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 91077568,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 34379955,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145936392,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 51397057457,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 391,
            "unit": "ns/op",
            "extra": "3120061 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 94.7,
            "unit": "ns/op",
            "extra": "12726795 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 344,
            "unit": "ns/op",
            "extra": "3684673 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 339,
            "unit": "ns/op",
            "extra": "3541585 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 721,
            "unit": "ns/op",
            "extra": "1631749 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 381064,
            "unit": "ns/op",
            "extra": "3056 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1376071933,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 24852896448,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 14792531631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 3280632,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 107556239,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 44623397,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144527368,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 39.36,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 154214009698,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 529,
            "unit": "ns/op",
            "extra": "2266792 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 290,
            "unit": "ns/op",
            "extra": "3940891 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 595,
            "unit": "ns/op",
            "extra": "1859250 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 8707627191,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1198,
            "unit": "ns/op",
            "extra": "919028 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 539169,
            "unit": "ns/op",
            "extra": "2025 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7931852727,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 41898210633,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 27134970516,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 114653748,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 51292520,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 208943045,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143609864,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 46.15,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 107543745575,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 921,
            "unit": "ns/op",
            "extra": "1277902 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 87.9,
            "unit": "ns/op",
            "extra": "13505661 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 984,
            "unit": "ns/op",
            "extra": "1222339 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1314,
            "unit": "ns/op",
            "extra": "1200777 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1775,
            "unit": "ns/op",
            "extra": "874742 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 950393,
            "unit": "ns/op",
            "extra": "1309 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4078971373,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 103391147559,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 123772675851,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 25430436,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 380419515,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 369189898,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145543176,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 38554038541,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1085,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 87.9,
            "unit": "ns/op",
            "extra": "13293448 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1378,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1355,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2486,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 890359,
            "unit": "ns/op",
            "extra": "2314 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1291853455,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 27875466671,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 34954256699,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2372007,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 83475502,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 114735106,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 144986120,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
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
          "id": "dc222bf46b71f639730f5be61167e56a0252e305",
          "message": ":pear: try",
          "timestamp": "2022-01-10T18:03:19+08:00",
          "tree_id": "861c02deb1cae2eac1fca5a385f45d466b758bfa",
          "url": "https://github.com/benchplus/gocache/commit/dc222bf46b71f639730f5be61167e56a0252e305"
        },
        "date": 1641810186460,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 46524319520,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 686,
            "unit": "ns/op",
            "extra": "1713588 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 116,
            "unit": "ns/op",
            "extra": "10202652 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2050,
            "unit": "ns/op",
            "extra": "705768 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1058435,
            "unit": "ns/op",
            "extra": "987 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1283,
            "unit": "ns/op",
            "extra": "944264 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 676459,
            "unit": "ns/op",
            "extra": "1496 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1384645563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29524379915,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 0,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 5836609,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 22369642,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2159414512,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_bigcache",
            "value": 36.87,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 63867484662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2888,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 90.9,
            "unit": "ns/op",
            "extra": "13363612 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2877,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3266,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3221,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2792903,
            "unit": "ns/op",
            "extra": "972 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1080133704,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 55340471033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 76090187535,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2049273,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 198416033,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 262984924,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 145182728,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 34031451766,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 359,
            "unit": "ns/op",
            "extra": "3351982 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 55.5,
            "unit": "ns/op",
            "extra": "21296089 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 324,
            "unit": "ns/op",
            "extra": "3848439 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 321,
            "unit": "ns/op",
            "extra": "3738250 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 697,
            "unit": "ns/op",
            "extra": "1546966 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 371857,
            "unit": "ns/op",
            "extra": "3236 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 278387951,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21178224852,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 12582977637,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 33769713,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2156380,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 70887639,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 144592904,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecache",
            "value": 46.14,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 47599888500,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 351,
            "unit": "ns/op",
            "extra": "3499416 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15373035 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 303,
            "unit": "ns/op",
            "extra": "3973293 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 305,
            "unit": "ns/op",
            "extra": "3924890 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 727,
            "unit": "ns/op",
            "extra": "1692536 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 351355,
            "unit": "ns/op",
            "extra": "3346 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1222178409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 23206919939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 13836490248,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2301099,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 80643857,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 31589423,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 145346568,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 143829634894,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 482,
            "unit": "ns/op",
            "extra": "2425434 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 255,
            "unit": "ns/op",
            "extra": "4660737 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 489,
            "unit": "ns/op",
            "extra": "2178313 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 8736714008,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 943,
            "unit": "ns/op",
            "extra": "1095178 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 437506,
            "unit": "ns/op",
            "extra": "2756 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7132331905,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 39759821839,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 24555316264,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 69805459,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 39019084,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 168455339,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 143609864,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_freecache",
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 96062526402,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 761,
            "unit": "ns/op",
            "extra": "1535575 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 71.7,
            "unit": "ns/op",
            "extra": "16649983 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 864,
            "unit": "ns/op",
            "extra": "1425914 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 860,
            "unit": "ns/op",
            "extra": "1354316 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1463,
            "unit": "ns/op",
            "extra": "880146 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 760556,
            "unit": "ns/op",
            "extra": "1606 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3801125925,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 89649984486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 108963002200,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 299409894,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 6484159,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 274300258,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 144592904,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gcache",
            "value": 46.35,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 40493500200,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1028,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 80.8,
            "unit": "ns/op",
            "extra": "14609983 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1285,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1276,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2238,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 894055,
            "unit": "ns/op",
            "extra": "2403 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1305672430,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 28801983438,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 33376716381,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2094980,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 60564368,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 88821266,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 74269696,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkCacheHitRate_gocache",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          }
        ]
      }
    ]
  }
}