window.BENCHMARK_DATA = {
  "lastUpdate": 1641613290393,
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
          "id": "bc209d8e406777fd6fa7a0186c7eb9e0547a3823",
          "message": ":pear: update",
          "timestamp": "2022-01-08T01:18:00+08:00",
          "tree_id": "0f4bf8c9acab215ec79bc68205644c9ed237d277",
          "url": "https://github.com/benchplus/gocache/commit/bc209d8e406777fd6fa7a0186c7eb9e0547a3823"
        },
        "date": 1641577167008,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 715,
            "unit": "ns/op",
            "extra": "2178882 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 85.1,
            "unit": "ns/op",
            "extra": "14333038 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1736,
            "unit": "ns/op",
            "extra": "779986 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 713084,
            "unit": "ns/op",
            "extra": "1441 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1029,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 591270,
            "unit": "ns/op",
            "extra": "2490 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1958515320,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 25161573810,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 44870119516,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 7297915,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 34460544,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntGC_bigcache",
            "value": 4315562472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2748,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 78.2,
            "unit": "ns/op",
            "extra": "15264444 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2976,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2943,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3761,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3190128,
            "unit": "ns/op",
            "extra": "886 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1290502317,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 58003783018,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 92936897598,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 69157870751,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 3996556,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 254719109,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 247397425,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntGC_cachego",
            "value": 286378008,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 314,
            "unit": "ns/op",
            "extra": "3720459 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.7,
            "unit": "ns/op",
            "extra": "26627125 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 278,
            "unit": "ns/op",
            "extra": "3949761 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 269,
            "unit": "ns/op",
            "extra": "4419357 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 450,
            "unit": "ns/op",
            "extra": "2594834 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 285940,
            "unit": "ns/op",
            "extra": "4533 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1658194840,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 27747159798,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 50286080306,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 23908880889,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 11695765,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 114447306,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 94441115,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntGC_ecache",
            "value": 145608712,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 290,
            "unit": "ns/op",
            "extra": "3944769 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 61.9,
            "unit": "ns/op",
            "extra": "17771000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 258,
            "unit": "ns/op",
            "extra": "4717410 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 258,
            "unit": "ns/op",
            "extra": "4731669 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 461,
            "unit": "ns/op",
            "extra": "2590236 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 290151,
            "unit": "ns/op",
            "extra": "4200 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1835630754,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 29748841019,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 73078465647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24804745274,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 10337337,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 135538007,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 95674827,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntGC_ecacheLRU2",
            "value": 145477640,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 408,
            "unit": "ns/op",
            "extra": "2689111 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 268,
            "unit": "ns/op",
            "extra": "5910100 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 466,
            "unit": "ns/op",
            "extra": "2498452 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 6366391582,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 975,
            "unit": "ns/op",
            "extra": "1235743 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 423886,
            "unit": "ns/op",
            "extra": "2526 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6870531144,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 27121123448,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 124802447514,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 20159971146,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 69089759,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 125144831,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 50007996,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntGC_freecache",
            "value": 8942094336,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 547,
            "unit": "ns/op",
            "extra": "2021650 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 66.3,
            "unit": "ns/op",
            "extra": "18071412 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 666,
            "unit": "ns/op",
            "extra": "1827733 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 669,
            "unit": "ns/op",
            "extra": "1855543 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1120,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 603847,
            "unit": "ns/op",
            "extra": "2188 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3865786752,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 93136666262,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixednt_gcache",
            "value": 102994911962,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 131585486769,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12891879,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 380105503,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 407614308,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedntGC_gcache",
            "value": 144527368,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1191,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.7,
            "unit": "ns/op",
            "extra": "14525534 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1399,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1446,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2494,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 935777,
            "unit": "ns/op",
            "extra": "2292 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1227290924,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 32648472416,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 44217083880,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 40663591458,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 101587986,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 135452392,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 11980375,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntGC_gocache",
            "value": 630268992,
            "unit": "B",
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
          "id": "f599ef52282360e84d62401b65bb0542c03598ef",
          "message": ":pear: rename",
          "timestamp": "2022-01-08T01:25:41+08:00",
          "tree_id": "29a7aae4a9bba9ae217135ff9cebe44c94c4caa9",
          "url": "https://github.com/benchplus/gocache/commit/f599ef52282360e84d62401b65bb0542c03598ef"
        },
        "date": 1641577599980,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 640,
            "unit": "ns/op",
            "extra": "2217330 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.5,
            "unit": "ns/op",
            "extra": "13869438 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1936,
            "unit": "ns/op",
            "extra": "733972 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 924919,
            "unit": "ns/op",
            "extra": "1213 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1023,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 612139,
            "unit": "ns/op",
            "extra": "2484 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1418734456,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 25744657171,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 44149707061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 20883256,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 37326300,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 3414664576,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2827,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 78,
            "unit": "ns/op",
            "extra": "15349512 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3034,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2821,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3431,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2269578,
            "unit": "ns/op",
            "extra": "1260 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1194321809,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 56963590255,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 86634687932,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 72945771142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 15326283,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 225260925,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 246024302,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 287229976,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 304,
            "unit": "ns/op",
            "extra": "3767848 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.9,
            "unit": "ns/op",
            "extra": "25841248 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 271,
            "unit": "ns/op",
            "extra": "4399779 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 270,
            "unit": "ns/op",
            "extra": "4352115 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 486,
            "unit": "ns/op",
            "extra": "2468052 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 309706,
            "unit": "ns/op",
            "extra": "4047 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1590394379,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 26215646255,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 48665662708,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 21633125253,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 23216386,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 97287826,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 69459615,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 146853896,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 282,
            "unit": "ns/op",
            "extra": "4301558 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 62.2,
            "unit": "ns/op",
            "extra": "18944866 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 258,
            "unit": "ns/op",
            "extra": "4712946 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 250,
            "unit": "ns/op",
            "extra": "4754886 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 456,
            "unit": "ns/op",
            "extra": "2630922 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 289368,
            "unit": "ns/op",
            "extra": "4144 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1996006858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 28046817265,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 61589514078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24241560967,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8491117,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 113365763,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 85618048,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 288868376,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 370,
            "unit": "ns/op",
            "extra": "3266289 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 231,
            "unit": "ns/op",
            "extra": "6168514 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 416,
            "unit": "ns/op",
            "extra": "2803819 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3143683466,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 914,
            "unit": "ns/op",
            "extra": "1317792 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 378304,
            "unit": "ns/op",
            "extra": "2734 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6570306659,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 26810386263,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 123491946205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 20440985954,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 48379094,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 108772157,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 56360215,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 8941438976,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 559,
            "unit": "ns/op",
            "extra": "2163522 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15955188 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1931553 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 644,
            "unit": "ns/op",
            "extra": "1935795 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 562594,
            "unit": "ns/op",
            "extra": "2226 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3875407458,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 91077147208,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixednt_gcache",
            "value": 98473565046,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 113137188750,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 314545757,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13503567,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 327148653,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedntMem_gcache",
            "value": 215669776,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1136,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.7,
            "unit": "ns/op",
            "extra": "14535153 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1247,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1401,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2388,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 962126,
            "unit": "ns/op",
            "extra": "2251 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1355787206,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 32661541272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 45178130584,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 37976342379,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 16263617,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 79113290,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 108620066,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 631186496,
            "unit": "B",
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
          "id": "e51dd92bb623d2a146df5d6cae4cc69206077298",
          "message": ":lemon: fix",
          "timestamp": "2022-01-08T01:42:49+08:00",
          "tree_id": "291cd6159844b7618f1cd14757882d8b6e422990",
          "url": "https://github.com/benchplus/gocache/commit/e51dd92bb623d2a146df5d6cae4cc69206077298"
        },
        "date": 1641578779894,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 698,
            "unit": "ns/op",
            "extra": "1662474 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 115,
            "unit": "ns/op",
            "extra": "10772635 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2109,
            "unit": "ns/op",
            "extra": "639895 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 488948,
            "unit": "ns/op",
            "extra": "2319 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1282,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 770854,
            "unit": "ns/op",
            "extra": "2124 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1583849916,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 31471217986,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 53071481676,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 22872832,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 31631624,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 3617835416,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3169,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 103,
            "unit": "ns/op",
            "extra": "11452021 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3684,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3484,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4005,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2953966,
            "unit": "ns/op",
            "extra": "991 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1439068289,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 62842821534,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 97471314614,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 86555832853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 10603200,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 277536566,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 319555382,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 286115864,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 420,
            "unit": "ns/op",
            "extra": "2872717 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 62.9,
            "unit": "ns/op",
            "extra": "19368056 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 363,
            "unit": "ns/op",
            "extra": "3317031 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 367,
            "unit": "ns/op",
            "extra": "3299806 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1894158 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 412758,
            "unit": "ns/op",
            "extra": "2596 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1834456350,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 30157057400,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 60383459369,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 25200480059,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 11613435,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 147144073,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 107379099,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 146264072,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 381,
            "unit": "ns/op",
            "extra": "3197422 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 86.2,
            "unit": "ns/op",
            "extra": "13972593 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 340,
            "unit": "ns/op",
            "extra": "3586194 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 331,
            "unit": "ns/op",
            "extra": "3616795 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 572,
            "unit": "ns/op",
            "extra": "2113147 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 389758,
            "unit": "ns/op",
            "extra": "3153 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2387819447,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 33986541909,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 80485611959,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 28994203468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 12241553,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 161888532,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 135579324,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 288409624,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 446,
            "unit": "ns/op",
            "extra": "2662120 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 244,
            "unit": "ns/op",
            "extra": "4943660 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 536,
            "unit": "ns/op",
            "extra": "2290441 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3140237595,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1083,
            "unit": "ns/op",
            "extra": "1075690 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 479093,
            "unit": "ns/op",
            "extra": "2361 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7674566508,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 30660843261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 139022569786,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 22133275747,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 64558279,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 149308968,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 53203891,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 8942487552,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 688,
            "unit": "ns/op",
            "extra": "1721850 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 89.1,
            "unit": "ns/op",
            "extra": "13402800 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 785,
            "unit": "ns/op",
            "extra": "1367187 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 786,
            "unit": "ns/op",
            "extra": "1518303 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1352,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 703059,
            "unit": "ns/op",
            "extra": "1741 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3757806192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 102913963506,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 112862516508,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 133332966934,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15148360,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 389717091,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 398493985,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145641480,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1382,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 94.5,
            "unit": "ns/op",
            "extra": "12667873 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1541,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1518,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2878,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 1143886,
            "unit": "ns/op",
            "extra": "2252 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1307941796,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 33624832959,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 48081410143,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 44212652243,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 6296183,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 127845598,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 154234216,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 630924352,
            "unit": "B",
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
          "id": "fca0a01784fd42c840cc8ab925957531639cd224",
          "message": ":whale2: try",
          "timestamp": "2022-01-08T10:05:19+08:00",
          "tree_id": "6cca322b290a3bc4667b08fd7c4110ff8a061a4d",
          "url": "https://github.com/benchplus/gocache/commit/fca0a01784fd42c840cc8ab925957531639cd224"
        },
        "date": 1641610961927,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 598,
            "unit": "ns/op",
            "extra": "1913674 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 80.9,
            "unit": "ns/op",
            "extra": "16055570 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1661,
            "unit": "ns/op",
            "extra": "834360 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 884741,
            "unit": "ns/op",
            "extra": "1144 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 935,
            "unit": "ns/op",
            "extra": "1222826 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 546473,
            "unit": "ns/op",
            "extra": "2642 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1001779848,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 22903098047,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 37367285943,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 8747299,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 19650510,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 3407213952,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2584,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 78.2,
            "unit": "ns/op",
            "extra": "15308232 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3027,
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
            "value": 3143,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2282739,
            "unit": "ns/op",
            "extra": "1386 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 0.909,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 48021387761,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 58535469861,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 57220784155,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 2051100,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 181475322,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 185593397,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_cachego",
            "value": 286312472,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 288,
            "unit": "ns/op",
            "extra": "4506027 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 50.3,
            "unit": "ns/op",
            "extra": "26821123 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 245,
            "unit": "ns/op",
            "extra": "4873568 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 250,
            "unit": "ns/op",
            "extra": "5148192 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 448,
            "unit": "ns/op",
            "extra": "2595800 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 294463,
            "unit": "ns/op",
            "extra": "4977 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 0.87,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 17768067952,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 30955367150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 10968872390,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2564615,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 70564106,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 27136638,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 216898576,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 272,
            "unit": "ns/op",
            "extra": "4690695 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 60.6,
            "unit": "ns/op",
            "extra": "20203162 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 229,
            "unit": "ns/op",
            "extra": "5275941 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 231,
            "unit": "ns/op",
            "extra": "5512849 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 412,
            "unit": "ns/op",
            "extra": "2960336 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 273330,
            "unit": "ns/op",
            "extra": "5085 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 512586384,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 18716449520,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 40784311080,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 11681487048,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2852518,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 74110111,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 29091452,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 215604240,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 375,
            "unit": "ns/op",
            "extra": "3107824 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 181,
            "unit": "ns/op",
            "extra": "6912956 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 422,
            "unit": "ns/op",
            "extra": "2854543 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3018450104,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 815,
            "unit": "ns/op",
            "extra": "1438879 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 379463,
            "unit": "ns/op",
            "extra": "2983 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6030777267,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 37624122293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 132351718581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 22863775920,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 49591188,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 181472459,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 64184081,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_freecache",
            "value": 8941570048,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 513,
            "unit": "ns/op",
            "extra": "2310916 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 66.2,
            "unit": "ns/op",
            "extra": "18061440 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 582,
            "unit": "ns/op",
            "extra": "2100399 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 575,
            "unit": "ns/op",
            "extra": "2105403 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1036,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 546455,
            "unit": "ns/op",
            "extra": "2349 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3721832892,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 80742053783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 90671510635,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 103324623227,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11542060,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 271379538,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 290047845,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gcache",
            "value": 145412104,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 1005,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "16427776 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1274,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1236,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2219,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 825118,
            "unit": "ns/op",
            "extra": "2791 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1190589552,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 26899376857,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 39165644883,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 33393369078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 614000,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 59499489,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 86860582,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 630596672,
            "unit": "B",
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
          "id": "d38099aecc334073763790de5f500efeb4514f07",
          "message": ":pear: try",
          "timestamp": "2022-01-08T11:02:49+08:00",
          "tree_id": "b0b9f7c52b8bdbecc323f229d9a73baccd9f4e15",
          "url": "https://github.com/benchplus/gocache/commit/d38099aecc334073763790de5f500efeb4514f07"
        },
        "date": 1641613289776,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHeavyMixedInt_bigcache",
            "value": 40023770549,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 645,
            "unit": "ns/op",
            "extra": "1821580 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 87.2,
            "unit": "ns/op",
            "extra": "13702520 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1957,
            "unit": "ns/op",
            "extra": "762724 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 948927,
            "unit": "ns/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1159,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 671805,
            "unit": "ns/op",
            "extra": "1810 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1209606167,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 24681576792,
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
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 22873202,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 7927869,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_bigcache",
            "value": 2923909448,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_cachego",
            "value": 60994425047,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2533,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 78.1,
            "unit": "ns/op",
            "extra": "15260073 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3332,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3186,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3390,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2787887,
            "unit": "ns/op",
            "extra": "1015 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1004888891,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 48792768372,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 61673669247,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 6046136,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 180705882,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 230205318,
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
            "name": "BenchmarkHeavyMixedInt_ecache",
            "value": 29697458753,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 362,
            "unit": "ns/op",
            "extra": "3598288 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 50.3,
            "unit": "ns/op",
            "extra": "23794302 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 286,
            "unit": "ns/op",
            "extra": "4359769 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 285,
            "unit": "ns/op",
            "extra": "4275140 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 670,
            "unit": "ns/op",
            "extra": "1954334 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 369850,
            "unit": "ns/op",
            "extra": "3501 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 177441875,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 20562801510,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 11790531540,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 2177719,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 74673239,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 40576748,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecache",
            "value": 146198536,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_ecacheLRU2",
            "value": 43691461452,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 339,
            "unit": "ns/op",
            "extra": "3789490 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 67.6,
            "unit": "ns/op",
            "extra": "17821159 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 272,
            "unit": "ns/op",
            "extra": "4534538 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 268,
            "unit": "ns/op",
            "extra": "4618525 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 630,
            "unit": "ns/op",
            "extra": "1909366 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 356706,
            "unit": "ns/op",
            "extra": "3729 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 1119252495,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 22393397197,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 13007479435,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 2492121,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 109696143,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 36554636,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_ecacheLRU2",
            "value": 145117192,
            "unit": "B",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedInt_freecache",
            "value": 139432085269,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 467,
            "unit": "ns/op",
            "extra": "2512629 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 248,
            "unit": "ns/op",
            "extra": "4786327 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 478,
            "unit": "ns/op",
            "extra": "2296362 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 6071816650,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 986,
            "unit": "ns/op",
            "extra": "1136971 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 457423,
            "unit": "ns/op",
            "extra": "2634 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6865881338,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 38968969807,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 24812613800,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 39098333,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 180236663,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 72851258,
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
            "name": "BenchmarkHeavyMixedInt_gcache",
            "value": 98927628940,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 778,
            "unit": "ns/op",
            "extra": "1445482 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.2,
            "unit": "ns/op",
            "extra": "15940287 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 875,
            "unit": "ns/op",
            "extra": "1374673 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 886,
            "unit": "ns/op",
            "extra": "1413070 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1527,
            "unit": "ns/op",
            "extra": "913484 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 774769,
            "unit": "ns/op",
            "extra": "1614 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3736592679,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 96979923218,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 114527956381,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 10287980,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 292876483,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 341410230,
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
            "name": "BenchmarkHeavyMixedInt_gocache",
            "value": 40367535573,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gocache",
            "value": 739,
            "unit": "ns/op",
            "extra": "1547250 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gocache",
            "value": 82.3,
            "unit": "ns/op",
            "extra": "13615018 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gocache",
            "value": 1233,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gocache",
            "value": 1229,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gocache",
            "value": 2317,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gocache",
            "value": 900475,
            "unit": "ns/op",
            "extra": "2516 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gocache",
            "value": 1359477012,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gocache",
            "value": 28911213523,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gocache",
            "value": 34223764046,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gocache",
            "value": 2437322,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gocache",
            "value": 63154839,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gocache",
            "value": 91686695,
            "unit": "ns/op",
            "extra": "1 times\n1 procs"
          },
          {
            "name": "BenchmarkHeavyMixedIntMem_gocache",
            "value": 145543176,
            "unit": "B",
            "extra": "1 times\n1 procs"
          }
        ]
      }
    ]
  }
}