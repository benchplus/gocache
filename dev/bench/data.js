window.BENCHMARK_DATA = {
  "lastUpdate": 1642044237803,
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
          "id": "c9ab7e33d80513569eaecbf4df91daca25198681",
          "message": ":star: new version",
          "timestamp": "2022-01-10T20:13:07+08:00",
          "tree_id": "187332e3a992e9e25082203643e46ab1c73c0737",
          "url": "https://github.com/benchplus/gocache/commit/c9ab7e33d80513569eaecbf4df91daca25198681"
        },
        "date": 1641882514593,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 46930210518,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 664,
            "unit": "ns/op",
            "extra": "1734135 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 109,
            "unit": "ns/op",
            "extra": "10884186 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2008,
            "unit": "ns/op",
            "extra": "726547 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 972181,
            "unit": "ns/op",
            "extra": "1125 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1268,
            "unit": "ns/op",
            "extra": "988872 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 674896,
            "unit": "ns/op",
            "extra": "1530 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1401067461,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29799320142,
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
            "value": 4133351,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 31129132,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2159217904,
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
            "value": 67863598425,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2907,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 85.2,
            "unit": "ns/op",
            "extra": "13454580 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2840,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3129,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3598,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3138530,
            "unit": "ns/op",
            "extra": "853 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1087386156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 55400890148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 76415010686,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2344497,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 203653383,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 258225666,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144330760,
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
            "value": 39679060649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 361,
            "unit": "ns/op",
            "extra": "3215004 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 56.1,
            "unit": "ns/op",
            "extra": "21260649 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 328,
            "unit": "ns/op",
            "extra": "3711559 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 325,
            "unit": "ns/op",
            "extra": "3769125 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 773,
            "unit": "ns/op",
            "extra": "1556035 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 387021,
            "unit": "ns/op",
            "extra": "3172 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1076837688,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 21915147239,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 13442902795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2607517,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 77139416,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 39297018,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 144527368,
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
            "value": 46869802398,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 351,
            "unit": "ns/op",
            "extra": "3261909 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 71,
            "unit": "ns/op",
            "extra": "16133268 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 276,
            "unit": "ns/op",
            "extra": "4351734 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 286,
            "unit": "ns/op",
            "extra": "4612323 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 745,
            "unit": "ns/op",
            "extra": "1729046 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 366507,
            "unit": "ns/op",
            "extra": "3184 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1287209214,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 24324195984,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 14140799732,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2986852,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 93965132,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 38748103,
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
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 154428481763,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 522,
            "unit": "ns/op",
            "extra": "2151477 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 277,
            "unit": "ns/op",
            "extra": "4281130 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 575,
            "unit": "ns/op",
            "extra": "1821434 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9839630263,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1155,
            "unit": "ns/op",
            "extra": "968359 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 539562,
            "unit": "ns/op",
            "extra": "2324 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8026860335,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 43262296612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 27111948773,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 186275705,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 84172470,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 46720059,
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
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 108949402763,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 904,
            "unit": "ns/op",
            "extra": "1332708 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 85.4,
            "unit": "ns/op",
            "extra": "13949168 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 972,
            "unit": "ns/op",
            "extra": "1217548 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 1016,
            "unit": "ns/op",
            "extra": "1205236 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1613,
            "unit": "ns/op",
            "extra": "867692 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 870136,
            "unit": "ns/op",
            "extra": "1515 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4886233122,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 104919126957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 131199769350,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 292675155,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 379404857,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15798247,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 215473168,
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
            "value": 43385750916,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 753,
            "unit": "ns/op",
            "extra": "1560662 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 99.3,
            "unit": "ns/op",
            "extra": "12709891 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1249,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1300,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2432,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 992467,
            "unit": "ns/op",
            "extra": "2293 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1513004705,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 30718591637,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 39317143505,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2576618,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 65354759,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 122222555,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145805320,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6bab2d9ed83b40451c52d62b4f4cf63205595c5",
          "message": ":unicorn: update README.md",
          "timestamp": "2022-01-11T20:03:59+08:00",
          "tree_id": "9a06deae103aa48a92366e24202e0dabc8496433",
          "url": "https://github.com/benchplus/gocache/commit/a6bab2d9ed83b40451c52d62b4f4cf63205595c5"
        },
        "date": 1641903829162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 41535339129,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 644,
            "unit": "ns/op",
            "extra": "1802007 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 104,
            "unit": "ns/op",
            "extra": "12013326 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2092,
            "unit": "ns/op",
            "extra": "681139 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1063044,
            "unit": "ns/op",
            "extra": "961 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1214,
            "unit": "ns/op",
            "extra": "854666 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 640198,
            "unit": "ns/op",
            "extra": "1656 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1396545488,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 28888545281,
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
            "value": 10454918,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 21518055,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2160266480,
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
            "value": 65209138614,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2547,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 81.5,
            "unit": "ns/op",
            "extra": "14017873 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3157,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3303,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3404,
            "unit": "ns/op",
            "extra": "984554 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2644386,
            "unit": "ns/op",
            "extra": "1039 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1055295817,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 49497931408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 71290815192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2222528,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 186399471,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 243793653,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144789512,
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
            "value": 32110107284,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 338,
            "unit": "ns/op",
            "extra": "3478580 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 50.6,
            "unit": "ns/op",
            "extra": "23381740 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 304,
            "unit": "ns/op",
            "extra": "4093239 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 311,
            "unit": "ns/op",
            "extra": "3885871 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 696,
            "unit": "ns/op",
            "extra": "1721992 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 341934,
            "unit": "ns/op",
            "extra": "3469 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1070486128,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 20949963604,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 12215611447,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2285828,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 78537824,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 28925546,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145608712,
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
            "value": 43916484078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 329,
            "unit": "ns/op",
            "extra": "3706753 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 72.4,
            "unit": "ns/op",
            "extra": "14502486 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 281,
            "unit": "ns/op",
            "extra": "4166193 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 285,
            "unit": "ns/op",
            "extra": "4450623 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 666,
            "unit": "ns/op",
            "extra": "1833544 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 326312,
            "unit": "ns/op",
            "extra": "3366 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1301859409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 22305321516,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 13630728419,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2550721,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 86918953,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 33553929,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144855048,
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
            "value": 142229090608,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 529,
            "unit": "ns/op",
            "extra": "2256680 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 285,
            "unit": "ns/op",
            "extra": "4211308 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 576,
            "unit": "ns/op",
            "extra": "1895858 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9467666369,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1183,
            "unit": "ns/op",
            "extra": "982525 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 507014,
            "unit": "ns/op",
            "extra": "2029 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7281156437,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 41649384179,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 25766695138,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 42399583,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 177963687,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 68662933,
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
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 102604551120,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 798,
            "unit": "ns/op",
            "extra": "1446487 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 77.9,
            "unit": "ns/op",
            "extra": "15659295 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 884,
            "unit": "ns/op",
            "extra": "1377866 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 919,
            "unit": "ns/op",
            "extra": "1332405 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1736,
            "unit": "ns/op",
            "extra": "815628 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 856825,
            "unit": "ns/op",
            "extra": "1407 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4334027488,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 96311587783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 118955820869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11482934,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 267500026,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 336851967,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 143806472,
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
            "value": 42353571120,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1100,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 95,
            "unit": "ns/op",
            "extra": "12254506 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1321,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1311,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2433,
            "unit": "ns/op",
            "extra": "948874 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1007159,
            "unit": "ns/op",
            "extra": "2192 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1457034271,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 31642930106,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 36533296694,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 3249436,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 75296573,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 109288775,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 144199688,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a8401f3a8b725c92be2a4186816cf2dec46b706",
          "message": ":unicorn: update README.md",
          "timestamp": "2022-01-11T20:06:38+08:00",
          "tree_id": "d670e66d26ad10369255285bcc32d1c1819e01c7",
          "url": "https://github.com/benchplus/gocache/commit/8a8401f3a8b725c92be2a4186816cf2dec46b706"
        },
        "date": 1641903883186,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 37566463594,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 600,
            "unit": "ns/op",
            "extra": "1925406 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 96.9,
            "unit": "ns/op",
            "extra": "12475171 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1609,
            "unit": "ns/op",
            "extra": "656352 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 598766,
            "unit": "ns/op",
            "extra": "2008 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1083,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 605543,
            "unit": "ns/op",
            "extra": "1789 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1210824061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 25474126706,
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
            "value": 5154476,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 13567141,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2090074344,
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
            "value": 55363030336,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2146,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 79.7,
            "unit": "ns/op",
            "extra": "14731851 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2416,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2326,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 2465,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 1884386,
            "unit": "ns/op",
            "extra": "1182 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1059030257,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 45811002286,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 64035638340,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 1837159,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 155590474,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 214901540,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144134152,
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
            "value": 25736736730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 334,
            "unit": "ns/op",
            "extra": "3747811 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 47.8,
            "unit": "ns/op",
            "extra": "25126644 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 295,
            "unit": "ns/op",
            "extra": "4131192 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 295,
            "unit": "ns/op",
            "extra": "4098024 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1862553 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 334371,
            "unit": "ns/op",
            "extra": "3788 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 68003766,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 18504444479,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 10933078478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 59604944,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 17132471,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 1651376,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 217619472,
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
            "value": 40371655979,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 315,
            "unit": "ns/op",
            "extra": "3814388 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 62.7,
            "unit": "ns/op",
            "extra": "18836769 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 289,
            "unit": "ns/op",
            "extra": "4272009 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 286,
            "unit": "ns/op",
            "extra": "4266423 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 627,
            "unit": "ns/op",
            "extra": "1963728 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 324826,
            "unit": "ns/op",
            "extra": "3740 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1070721861,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 21475588412,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 13658732310,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2939869,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 87943632,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 32492408,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144723976,
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
            "value": 131556783814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 514,
            "unit": "ns/op",
            "extra": "2254388 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 257,
            "unit": "ns/op",
            "extra": "4678150 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 579,
            "unit": "ns/op",
            "extra": "2111122 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 5965490729,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1109,
            "unit": "ns/op",
            "extra": "1047079 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 531487,
            "unit": "ns/op",
            "extra": "2065 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7068254140,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 41270541001,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 23952086019,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 42637992,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 172519847,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 63497727,
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
            "value": 86224660670,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 754,
            "unit": "ns/op",
            "extra": "1544022 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 69.6,
            "unit": "ns/op",
            "extra": "17173879 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 861,
            "unit": "ns/op",
            "extra": "1404699 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 828,
            "unit": "ns/op",
            "extra": "1431032 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1401,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 770485,
            "unit": "ns/op",
            "extra": "1680 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3520798685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 82317171608,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 102526369071,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 8255025,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 171205739,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 240745720,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 144068616,
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
            "value": 42079517761,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 860,
            "unit": "ns/op",
            "extra": "1941963 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 81.6,
            "unit": "ns/op",
            "extra": "14682795 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1000,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 928,
            "unit": "ns/op",
            "extra": "1230451 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2002,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 683790,
            "unit": "ns/op",
            "extra": "2817 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1384815226,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 31481073612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 34394767512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 1802331,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 54077648,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 68122647,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 74007552,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27ab14198570f8c2148dffd8fe4098d3216b2177",
          "message": ":unicorn: update README.md",
          "timestamp": "2022-01-11T20:07:44+08:00",
          "tree_id": "53dc6680862226e144bc3a84edd7dfd7f7636422",
          "url": "https://github.com/benchplus/gocache/commit/27ab14198570f8c2148dffd8fe4098d3216b2177"
        },
        "date": 1641904087814,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 43992227920,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 660,
            "unit": "ns/op",
            "extra": "1758333 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 97.8,
            "unit": "ns/op",
            "extra": "12131610 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2005,
            "unit": "ns/op",
            "extra": "734032 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1006331,
            "unit": "ns/op",
            "extra": "1120 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1229,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 640613,
            "unit": "ns/op",
            "extra": "1650 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1270063283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 27709874476,
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
            "value": 4833229,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 24213868,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2300327168,
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
            "value": 58682818235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2746,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 78,
            "unit": "ns/op",
            "extra": "15334166 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3158,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3239,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3344,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2933754,
            "unit": "ns/op",
            "extra": "970 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 0.964,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 48710606236,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 60803629821,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 1835113,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 188408723,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 196150014,
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
            "name": "BenchmarkCacheHitRate_cachego",
            "value": 0,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 32445506957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 323,
            "unit": "ns/op",
            "extra": "3791175 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 51.7,
            "unit": "ns/op",
            "extra": "22751770 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 283,
            "unit": "ns/op",
            "extra": "4381231 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 281,
            "unit": "ns/op",
            "extra": "4341591 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 681,
            "unit": "ns/op",
            "extra": "1780006 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 340800,
            "unit": "ns/op",
            "extra": "3690 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1008545767,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 19255917908,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 11446241970,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2233017,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 69067737,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 30022217,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145412104,
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
            "value": 42359801687,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 313,
            "unit": "ns/op",
            "extra": "3917582 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 68.3,
            "unit": "ns/op",
            "extra": "17820165 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 273,
            "unit": "ns/op",
            "extra": "4438898 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 270,
            "unit": "ns/op",
            "extra": "4367383 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 641,
            "unit": "ns/op",
            "extra": "1889214 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 317513,
            "unit": "ns/op",
            "extra": "3865 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1103285326,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 20783486331,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 12559217031,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2464315,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 74888692,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 30773792,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 144068616,
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
            "value": 139407802848,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 435,
            "unit": "ns/op",
            "extra": "2516631 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "4837414 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2157230 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9382284013,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1007,
            "unit": "ns/op",
            "extra": "1152416 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 446018,
            "unit": "ns/op",
            "extra": "2670 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7047617129,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 39099217318,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 24407425264,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 40505659,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 168083964,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 71103027,
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
            "value": 44.29,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 95529890370,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 746,
            "unit": "ns/op",
            "extra": "1572789 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.8,
            "unit": "ns/op",
            "extra": "16291159 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 820,
            "unit": "ns/op",
            "extra": "1463553 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 848,
            "unit": "ns/op",
            "extra": "1381370 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1479,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 778765,
            "unit": "ns/op",
            "extra": "1533 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4042791605,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 90104188850,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 115112648159,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11815775,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 269478217,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 341982643,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 144986120,
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
            "value": 40259913389,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 876,
            "unit": "ns/op",
            "extra": "1725561 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.7,
            "unit": "ns/op",
            "extra": "14376535 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1211,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1214,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2294,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 905612,
            "unit": "ns/op",
            "extra": "2306 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1281508084,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 28253669158,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 34168463426,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 68810555,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 98939258,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2171114,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145739784,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27ab14198570f8c2148dffd8fe4098d3216b2177",
          "message": ":unicorn: update README.md",
          "timestamp": "2022-01-11T20:07:44+08:00",
          "tree_id": "53dc6680862226e144bc3a84edd7dfd7f7636422",
          "url": "https://github.com/benchplus/gocache/commit/27ab14198570f8c2148dffd8fe4098d3216b2177"
        },
        "date": 1642044237094,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 40613285622,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 635,
            "unit": "ns/op",
            "extra": "1747010 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 97.3,
            "unit": "ns/op",
            "extra": "12209709 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1974,
            "unit": "ns/op",
            "extra": "724551 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1055722,
            "unit": "ns/op",
            "extra": "1090 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1171,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 681723,
            "unit": "ns/op",
            "extra": "1808 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1247052382,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 27785827858,
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
            "value": 3707320,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 23773332,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2714467632,
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
            "value": 59173963204,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2965,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 80.5,
            "unit": "ns/op",
            "extra": "15333328 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2907,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3030,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3386,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2765321,
            "unit": "ns/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 0.949,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 51388485844,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 65092603047,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 240173271,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 6167246,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 229441020,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 144658440,
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
            "value": 27884671030,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 329,
            "unit": "ns/op",
            "extra": "3567508 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 51.8,
            "unit": "ns/op",
            "extra": "24644236 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 294,
            "unit": "ns/op",
            "extra": "4113763 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 293,
            "unit": "ns/op",
            "extra": "4303714 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 746,
            "unit": "ns/op",
            "extra": "1706401 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 348212,
            "unit": "ns/op",
            "extra": "3511 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 510942424,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 20053874043,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 11874757245,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2732817,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 72711830,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 33918372,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 145412104,
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
            "value": 43539389876,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 321,
            "unit": "ns/op",
            "extra": "3808395 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 68.1,
            "unit": "ns/op",
            "extra": "17366152 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 277,
            "unit": "ns/op",
            "extra": "4455622 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 276,
            "unit": "ns/op",
            "extra": "4449214 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 678,
            "unit": "ns/op",
            "extra": "1760876 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 326317,
            "unit": "ns/op",
            "extra": "3915 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1105978316,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 22889259221,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 13029715023,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2602817,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 93986898,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 37497723,
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
            "name": "BenchmarkCacheHitRate_ecacheLRU2",
            "value": 43.64,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 143674616523,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2245855 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "4807172 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 543,
            "unit": "ns/op",
            "extra": "2037708 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 9242195922,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1106287 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 484791,
            "unit": "ns/op",
            "extra": "2283 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7943896584,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 43147499527,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 25087109240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 46702470,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 204342128,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 83309215,
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
            "value": 44.34,
            "unit": "%",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 104131831795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 826,
            "unit": "ns/op",
            "extra": "1480651 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 76,
            "unit": "ns/op",
            "extra": "16268371 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 900,
            "unit": "ns/op",
            "extra": "1359360 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 949,
            "unit": "ns/op",
            "extra": "1320054 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1646,
            "unit": "ns/op",
            "extra": "958628 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 817156,
            "unit": "ns/op",
            "extra": "1533 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4244221591,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 98899098392,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 120771792116,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13237079,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 314293109,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 366231994,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145477640,
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
            "value": 38114082978,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 750,
            "unit": "ns/op",
            "extra": "1605112 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.8,
            "unit": "ns/op",
            "extra": "14424945 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1295,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1285,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2412,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 997664,
            "unit": "ns/op",
            "extra": "2162 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1331261143,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 28263733240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 35787114237,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2724111,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 68696833,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 114253201,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145674248,
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