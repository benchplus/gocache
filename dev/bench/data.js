window.BENCHMARK_DATA = {
  "lastUpdate": 1641461669580,
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
          "id": "0265dde759306b47e817596dcbddc5fe1060a52f",
          "message": ":pear: try",
          "timestamp": "2022-01-05T22:39:25+08:00",
          "tree_id": "6fd90af4fde608da71be38ef42bf569211cae3cc",
          "url": "https://github.com/benchplus/gocache/commit/0265dde759306b47e817596dcbddc5fe1060a52f"
        },
        "date": 1641395346436,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 706,
            "unit": "ns/op",
            "extra": "1979017 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 88.8,
            "unit": "ns/op",
            "extra": "13515487 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1916,
            "unit": "ns/op",
            "extra": "745474 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 169,
            "unit": "ns/op",
            "extra": "7177471 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 664909,
            "unit": "ns/op",
            "extra": "2149 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1809668463,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29446663343,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 14093808,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 21323622,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2695,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11084568 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2866,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 160,
            "unit": "ns/op",
            "extra": "7651177 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3276,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2313401,
            "unit": "ns/op",
            "extra": "1208 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1792013500,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 102952124759,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 146350437406,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 8048063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 436624331,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 590014775,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 388,
            "unit": "ns/op",
            "extra": "2930620 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 42.7,
            "unit": "ns/op",
            "extra": "27999792 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 355,
            "unit": "ns/op",
            "extra": "3368067 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 151,
            "unit": "ns/op",
            "extra": "8051496 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 591,
            "unit": "ns/op",
            "extra": "2065267 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 395701,
            "unit": "ns/op",
            "extra": "3166 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1683098824,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 28716124862,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 22957270019,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 12971568,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 96605262,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 67522711,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 364,
            "unit": "ns/op",
            "extra": "3328882 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 63.7,
            "unit": "ns/op",
            "extra": "19331784 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 335,
            "unit": "ns/op",
            "extra": "3637158 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 158,
            "unit": "ns/op",
            "extra": "7628611 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 549,
            "unit": "ns/op",
            "extra": "2209267 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 381562,
            "unit": "ns/op",
            "extra": "3349 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2084673348,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30659024865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24340929420,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 6455930,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 116127838,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 75471357,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 506,
            "unit": "ns/op",
            "extra": "2338320 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 197,
            "unit": "ns/op",
            "extra": "6176065 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 596,
            "unit": "ns/op",
            "extra": "2025142 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 177,
            "unit": "ns/op",
            "extra": "6909006 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1010,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 518624,
            "unit": "ns/op",
            "extra": "2260 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7911237595,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 40389521905,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 30438739184,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 42650882,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 151950965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 90783476,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 545,
            "unit": "ns/op",
            "extra": "2180625 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 74.8,
            "unit": "ns/op",
            "extra": "15969141 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 634,
            "unit": "ns/op",
            "extra": "1946763 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 218,
            "unit": "ns/op",
            "extra": "5083095 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1089,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 561717,
            "unit": "ns/op",
            "extra": "2278 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3984305564,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 87103229283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 107096314110,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13949579,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 299558239,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 389513713,
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
          "id": "0265dde759306b47e817596dcbddc5fe1060a52f",
          "message": ":pear: try",
          "timestamp": "2022-01-05T22:39:25+08:00",
          "tree_id": "6fd90af4fde608da71be38ef42bf569211cae3cc",
          "url": "https://github.com/benchplus/gocache/commit/0265dde759306b47e817596dcbddc5fe1060a52f"
        },
        "date": 1641397191505,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 726,
            "unit": "ns/op",
            "extra": "1410348 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 86.6,
            "unit": "ns/op",
            "extra": "14175799 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1769,
            "unit": "ns/op",
            "extra": "786564 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 166,
            "unit": "ns/op",
            "extra": "7416780 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1120,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 669192,
            "unit": "ns/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1836821309,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29924577407,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 14817738,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 36749156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2889,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11089003 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2910,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 161,
            "unit": "ns/op",
            "extra": "7574419 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3275,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2407045,
            "unit": "ns/op",
            "extra": "1212 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2503190037,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 113648736455,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 160735875532,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 509990288,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 661803029,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 30506479,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 395,
            "unit": "ns/op",
            "extra": "3030501 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 42.7,
            "unit": "ns/op",
            "extra": "27982530 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 358,
            "unit": "ns/op",
            "extra": "3429140 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 151,
            "unit": "ns/op",
            "extra": "7290237 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 616,
            "unit": "ns/op",
            "extra": "1964047 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 413595,
            "unit": "ns/op",
            "extra": "2982 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1701233944,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 29284112656,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 24255224626,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 7953409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 112792659,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 88941414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 368,
            "unit": "ns/op",
            "extra": "3280008 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 61.9,
            "unit": "ns/op",
            "extra": "19307017 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 336,
            "unit": "ns/op",
            "extra": "3592918 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 164,
            "unit": "ns/op",
            "extra": "7630147 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 551,
            "unit": "ns/op",
            "extra": "2173887 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 382873,
            "unit": "ns/op",
            "extra": "3331 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2077233814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 31096349388,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24652470345,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8694319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 125869628,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 82252943,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 523,
            "unit": "ns/op",
            "extra": "2309328 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 194,
            "unit": "ns/op",
            "extra": "6151636 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 598,
            "unit": "ns/op",
            "extra": "1992193 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 177,
            "unit": "ns/op",
            "extra": "6933378 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1007,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 541507,
            "unit": "ns/op",
            "extra": "2133 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7932473587,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 39596160531,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 30590159811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 104321266,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 46939439,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 152650999,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 575,
            "unit": "ns/op",
            "extra": "2144643 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 74.8,
            "unit": "ns/op",
            "extra": "15982814 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 620,
            "unit": "ns/op",
            "extra": "1945756 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 218,
            "unit": "ns/op",
            "extra": "5558066 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1103,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 564437,
            "unit": "ns/op",
            "extra": "2156 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3999203620,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 90501654048,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 117566010056,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 16803818,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 327970351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 459684567,
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
          "id": "de64d9922e52d26011ad43e513a0d31d71b9566d",
          "message": ":pear: go",
          "timestamp": "2022-01-06T10:56:29+08:00",
          "tree_id": "cdf29d05e264d6a56e8a66b97f72dadb9ef5aed8",
          "url": "https://github.com/benchplus/gocache/commit/de64d9922e52d26011ad43e513a0d31d71b9566d"
        },
        "date": 1641438477835,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 755,
            "unit": "ns/op",
            "extra": "1479598 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.8,
            "unit": "ns/op",
            "extra": "13190384 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1691,
            "unit": "ns/op",
            "extra": "668824 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 163,
            "unit": "ns/op",
            "extra": "7366597 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1074,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 631939,
            "unit": "ns/op",
            "extra": "2169 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2041157379,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 28537398993,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 10299756,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 22008495,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2158,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 110,
            "unit": "ns/op",
            "extra": "10913180 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2345,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 165,
            "unit": "ns/op",
            "extra": "7229070 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 2761,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 1914887,
            "unit": "ns/op",
            "extra": "1450 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1849865389,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 90744675654,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 126767474395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 360571755,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 474330571,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 8335690,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 416,
            "unit": "ns/op",
            "extra": "2878110 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.7,
            "unit": "ns/op",
            "extra": "26730774 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 371,
            "unit": "ns/op",
            "extra": "3338227 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 148,
            "unit": "ns/op",
            "extra": "8174302 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 603,
            "unit": "ns/op",
            "extra": "1960866 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 426046,
            "unit": "ns/op",
            "extra": "3004 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1410017531,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 27508316388,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 22416703427,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 61720964,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 5245632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 76067933,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 395,
            "unit": "ns/op",
            "extra": "3043412 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 62.2,
            "unit": "ns/op",
            "extra": "19675368 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 347,
            "unit": "ns/op",
            "extra": "3492158 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 156,
            "unit": "ns/op",
            "extra": "7730992 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 561,
            "unit": "ns/op",
            "extra": "2141520 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 409918,
            "unit": "ns/op",
            "extra": "3045 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2088793261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 29255559656,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24173887859,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 6508713,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 81122606,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 64687691,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 490,
            "unit": "ns/op",
            "extra": "2414150 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 200,
            "unit": "ns/op",
            "extra": "6082789 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 551,
            "unit": "ns/op",
            "extra": "2146930 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 176,
            "unit": "ns/op",
            "extra": "6896787 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1205550 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 509983,
            "unit": "ns/op",
            "extra": "2281 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6929233162,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 35863532205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 28044123730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 43362624,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 102598033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 54920885,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 555,
            "unit": "ns/op",
            "extra": "2155426 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 68.6,
            "unit": "ns/op",
            "extra": "17484919 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 623,
            "unit": "ns/op",
            "extra": "1927525 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 215,
            "unit": "ns/op",
            "extra": "5565006 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1126,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 589741,
            "unit": "ns/op",
            "extra": "1938 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3263300446,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 78932310426,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 96983484411,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 10674853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 149597955,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 218675487,
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
          "id": "de64d9922e52d26011ad43e513a0d31d71b9566d",
          "message": ":pear: go",
          "timestamp": "2022-01-06T10:56:29+08:00",
          "tree_id": "cdf29d05e264d6a56e8a66b97f72dadb9ef5aed8",
          "url": "https://github.com/benchplus/gocache/commit/de64d9922e52d26011ad43e513a0d31d71b9566d"
        },
        "date": 1641439408269,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 853,
            "unit": "ns/op",
            "extra": "1253383 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 96.9,
            "unit": "ns/op",
            "extra": "13322708 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1949,
            "unit": "ns/op",
            "extra": "653446 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 179,
            "unit": "ns/op",
            "extra": "6785468 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1164,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 830377,
            "unit": "ns/op",
            "extra": "1863 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1984083846,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 34460466739,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 36375771,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 34098414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2870,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 134,
            "unit": "ns/op",
            "extra": "9021746 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2897,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 174,
            "unit": "ns/op",
            "extra": "7273616 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3270,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2279497,
            "unit": "ns/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1907902958,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 110844161482,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 150778103250,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 7826152,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 529082652,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 701746509,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 504,
            "unit": "ns/op",
            "extra": "2477914 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 56.1,
            "unit": "ns/op",
            "extra": "18653394 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 423,
            "unit": "ns/op",
            "extra": "2857936 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 193,
            "unit": "ns/op",
            "extra": "6310513 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 710,
            "unit": "ns/op",
            "extra": "1650682 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 479894,
            "unit": "ns/op",
            "extra": "2851 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1957998305,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 30649402380,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 24724500554,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 10086742,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 111197388,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 85409174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 404,
            "unit": "ns/op",
            "extra": "2935077 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 71.2,
            "unit": "ns/op",
            "extra": "18370461 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 370,
            "unit": "ns/op",
            "extra": "3216501 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 193,
            "unit": "ns/op",
            "extra": "6204062 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 637,
            "unit": "ns/op",
            "extra": "1855029 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 438756,
            "unit": "ns/op",
            "extra": "2725 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2408824357,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 32976142873,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 26446096449,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 89742257,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8058148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 140529357,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 571,
            "unit": "ns/op",
            "extra": "2101680 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 220,
            "unit": "ns/op",
            "extra": "5513758 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 607,
            "unit": "ns/op",
            "extra": "1984370 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 211,
            "unit": "ns/op",
            "extra": "6135387 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1071,
            "unit": "ns/op",
            "extra": "1121727 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 546819,
            "unit": "ns/op",
            "extra": "2049 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8063136690,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 39765436236,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 32472787251,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 161534948,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 89348589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 50982565,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 694,
            "unit": "ns/op",
            "extra": "1756951 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 86.4,
            "unit": "ns/op",
            "extra": "14125248 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 752,
            "unit": "ns/op",
            "extra": "1565367 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 263,
            "unit": "ns/op",
            "extra": "4721883 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1409,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 684355,
            "unit": "ns/op",
            "extra": "1983 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3859657361,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 89543711014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 112006844523,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 14385070,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 354658244,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 441749193,
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
          "id": "5f5fec1e6b9d9794507280a7bc46b1778a8a7ec4",
          "message": ":peach: try",
          "timestamp": "2022-01-06T17:21:22+08:00",
          "tree_id": "c6c691e45f7890ab4c85b8b377bd9ffcbc3d7e1e",
          "url": "https://github.com/benchplus/gocache/commit/5f5fec1e6b9d9794507280a7bc46b1778a8a7ec4"
        },
        "date": 1641461667924,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 768,
            "unit": "ns/op",
            "extra": "1354977 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 87.1,
            "unit": "ns/op",
            "extra": "14179159 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1939,
            "unit": "ns/op",
            "extra": "721636 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 161,
            "unit": "ns/op",
            "extra": "7549066 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1131,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 694255,
            "unit": "ns/op",
            "extra": "2022 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1891928685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 29807423356,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 22252854,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 24631453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2826,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11173010 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2963,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 163,
            "unit": "ns/op",
            "extra": "7611495 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3401,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2427316,
            "unit": "ns/op",
            "extra": "1254 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1701245115,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 107202596844,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 156133608613,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 446773998,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 634822403,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 7961076,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 391,
            "unit": "ns/op",
            "extra": "2904637 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.9,
            "unit": "ns/op",
            "extra": "26552433 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 352,
            "unit": "ns/op",
            "extra": "3460801 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 153,
            "unit": "ns/op",
            "extra": "7946637 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 593,
            "unit": "ns/op",
            "extra": "2014970 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 407454,
            "unit": "ns/op",
            "extra": "3243 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1755142065,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 29934614815,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 23807242869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 6621872,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 109137297,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 70536497,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 364,
            "unit": "ns/op",
            "extra": "3317673 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 61.8,
            "unit": "ns/op",
            "extra": "19272932 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 338,
            "unit": "ns/op",
            "extra": "3649323 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 159,
            "unit": "ns/op",
            "extra": "7617889 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 548,
            "unit": "ns/op",
            "extra": "2215540 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 374462,
            "unit": "ns/op",
            "extra": "3331 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2053638157,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30364785580,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24890913113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 79197983,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7426182,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 100474013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 510,
            "unit": "ns/op",
            "extra": "2305198 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6176851 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 600,
            "unit": "ns/op",
            "extra": "2019523 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 177,
            "unit": "ns/op",
            "extra": "6911478 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1006,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 537438,
            "unit": "ns/op",
            "extra": "2204 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7878693028,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 40489427265,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 30943780101,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 43422972,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 154484690,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 89506189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 551,
            "unit": "ns/op",
            "extra": "2149266 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 74.8,
            "unit": "ns/op",
            "extra": "15923718 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 620,
            "unit": "ns/op",
            "extra": "1938426 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 217,
            "unit": "ns/op",
            "extra": "5610127 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1101,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 561251,
            "unit": "ns/op",
            "extra": "2252 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3550908793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 87496454991,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 116076400080,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 308411380,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 486345136,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 26354271,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}