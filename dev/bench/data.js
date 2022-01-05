window.BENCHMARK_DATA = {
  "lastUpdate": 1641363784829,
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
          "id": "405c42a38ac5fd2c864391091cb6a0089dc7b203",
          "message": ":rose: fix",
          "timestamp": "2022-01-04T23:40:41+08:00",
          "tree_id": "c7ac631dfd69c8a42dd4eb791839e3d741e3ad61",
          "url": "https://github.com/benchplus/gocache/commit/405c42a38ac5fd2c864391091cb6a0089dc7b203"
        },
        "date": 1641351154389,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1239,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 121,
            "unit": "ns/op",
            "extra": "9060666 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2167,
            "unit": "ns/op",
            "extra": "474187 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 665991,
            "unit": "ns/op",
            "extra": "1612 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1216,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 863931,
            "unit": "ns/op",
            "extra": "1338 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1590330364,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 40532929055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3087,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 131,
            "unit": "ns/op",
            "extra": "9199026 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3587,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3478,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3754,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2721879,
            "unit": "ns/op",
            "extra": "1208 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1940230193,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 119819238895,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 162076804989,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 522969641,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 674340503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 12380733,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 408,
            "unit": "ns/op",
            "extra": "2924598 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 49.4,
            "unit": "ns/op",
            "extra": "23955037 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 590,
            "unit": "ns/op",
            "extra": "2151174 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 577,
            "unit": "ns/op",
            "extra": "2100368 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 684,
            "unit": "ns/op",
            "extra": "1737873 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 421768,
            "unit": "ns/op",
            "extra": "2944 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1956393890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 23450486965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 57141508592,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 8827908,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 69725156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 229081197,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 390,
            "unit": "ns/op",
            "extra": "3018691 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 70.3,
            "unit": "ns/op",
            "extra": "16201729 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 539,
            "unit": "ns/op",
            "extra": "2242568 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 546,
            "unit": "ns/op",
            "extra": "2251819 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 650,
            "unit": "ns/op",
            "extra": "1967437 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 416326,
            "unit": "ns/op",
            "extra": "2965 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2318221904,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 26236252213,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 62606679539,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8461810,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 89811369,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 281703477,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 698,
            "unit": "ns/op",
            "extra": "1657100 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 229,
            "unit": "ns/op",
            "extra": "5197573 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 638,
            "unit": "ns/op",
            "extra": "1900176 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 5144779638,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1090,
            "unit": "ns/op",
            "extra": "985611 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 772078,
            "unit": "ns/op",
            "extra": "1509 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7965678738,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 53351721162,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 32896784174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 201190911,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 91174682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 58925346,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 662,
            "unit": "ns/op",
            "extra": "1854482 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 82.4,
            "unit": "ns/op",
            "extra": "13666634 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 736,
            "unit": "ns/op",
            "extra": "1528381 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 772,
            "unit": "ns/op",
            "extra": "1581912 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1254,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 697515,
            "unit": "ns/op",
            "extra": "1988 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3992849636,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 93719511496,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 114496605826,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15157312,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 353275298,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 433219859,
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
          "id": "3a03f16aaa699b3ee2f7d9ef5730a0d1f37aad93",
          "message": ":whale2: new version",
          "timestamp": "2022-01-05T11:51:48+08:00",
          "tree_id": "40dd93c4890648ea0ab49d74c5baa717ecac96a6",
          "url": "https://github.com/benchplus/gocache/commit/3a03f16aaa699b3ee2f7d9ef5730a0d1f37aad93"
        },
        "date": 1641356187098,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 901,
            "unit": "ns/op",
            "extra": "1267968 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 81.1,
            "unit": "ns/op",
            "extra": "15594102 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1826,
            "unit": "ns/op",
            "extra": "773263 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 804902,
            "unit": "ns/op",
            "extra": "1305 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1073,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 737892,
            "unit": "ns/op",
            "extra": "1717 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1321141660,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 33289032655,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2946,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11083767 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2869,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3003,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3736,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2565965,
            "unit": "ns/op",
            "extra": "1225 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1761177888,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 110694671207,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 154780578604,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 9112665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 489132137,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 618063851,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 352,
            "unit": "ns/op",
            "extra": "3408212 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.6,
            "unit": "ns/op",
            "extra": "28520871 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 498,
            "unit": "ns/op",
            "extra": "2390457 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 514,
            "unit": "ns/op",
            "extra": "2428788 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 594,
            "unit": "ns/op",
            "extra": "2001132 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 363225,
            "unit": "ns/op",
            "extra": "3604 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1725224148,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 22473260957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 53170557219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 7080525,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 70435453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 179544205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 333,
            "unit": "ns/op",
            "extra": "3580224 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.2,
            "unit": "ns/op",
            "extra": "20044710 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 458,
            "unit": "ns/op",
            "extra": "2637266 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 458,
            "unit": "ns/op",
            "extra": "2616108 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 544,
            "unit": "ns/op",
            "extra": "2221840 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 335158,
            "unit": "ns/op",
            "extra": "3722 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2082801456,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 23216948152,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 54016457936,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 208192977,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 12101220,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 72526794,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 619,
            "unit": "ns/op",
            "extra": "2000169 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 194,
            "unit": "ns/op",
            "extra": "6069322 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 567,
            "unit": "ns/op",
            "extra": "2000533 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3197244485,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 995,
            "unit": "ns/op",
            "extra": "1237968 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 622518,
            "unit": "ns/op",
            "extra": "1822 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7522514032,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 48991685904,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 31828343593,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 54724477,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 173192279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 99942903,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 570,
            "unit": "ns/op",
            "extra": "1986123 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15702559 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 635,
            "unit": "ns/op",
            "extra": "1874866 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 635,
            "unit": "ns/op",
            "extra": "1781731 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1127,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 577731,
            "unit": "ns/op",
            "extra": "2295 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3956285994,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 88842453228,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 109357188695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15389081,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 298761681,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 357168785,
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
          "id": "f2e2110d51e896244552682c13bafd71a849b5da",
          "message": ":star2: new version",
          "timestamp": "2022-01-05T12:38:28+08:00",
          "tree_id": "15a778192ea79aed39300e54c1a11f1120528645",
          "url": "https://github.com/benchplus/gocache/commit/f2e2110d51e896244552682c13bafd71a849b5da"
        },
        "date": 1641359093658,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1587,
            "unit": "ns/op",
            "extra": "995820 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 105,
            "unit": "ns/op",
            "extra": "10651837 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1945,
            "unit": "ns/op",
            "extra": "529034 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 716450,
            "unit": "ns/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1356,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 939702,
            "unit": "ns/op",
            "extra": "1520 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1683099880,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 42450982088,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 4413,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 140,
            "unit": "ns/op",
            "extra": "8888379 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 5189,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 4844,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4400,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3010289,
            "unit": "ns/op",
            "extra": "1076 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2206947464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 137831743000,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 184717185723,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 19577612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 723793823,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 928680814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 513,
            "unit": "ns/op",
            "extra": "2352937 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 68.8,
            "unit": "ns/op",
            "extra": "17002838 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 537,
            "unit": "ns/op",
            "extra": "2222162 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 518,
            "unit": "ns/op",
            "extra": "2259505 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 856,
            "unit": "ns/op",
            "extra": "1425337 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 528382,
            "unit": "ns/op",
            "extra": "1920 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2406405086,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 32315964222,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 32158921590,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 20306308,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 144568499,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 115241168,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 494,
            "unit": "ns/op",
            "extra": "2420521 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 90,
            "unit": "ns/op",
            "extra": "12962762 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 497,
            "unit": "ns/op",
            "extra": "2444382 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 501,
            "unit": "ns/op",
            "extra": "2398425 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 774,
            "unit": "ns/op",
            "extra": "1444389 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 517226,
            "unit": "ns/op",
            "extra": "2482 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 3086289337,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 33737924475,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 33215472997,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 19195192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 125426343,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 136713483,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 786,
            "unit": "ns/op",
            "extra": "1510881 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 242,
            "unit": "ns/op",
            "extra": "4720608 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 708,
            "unit": "ns/op",
            "extra": "1675087 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 5107012200,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1220,
            "unit": "ns/op",
            "extra": "1005964 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 750454,
            "unit": "ns/op",
            "extra": "1537 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8588725570,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 57304078352,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 35852792173,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 69054103,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 274272192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 112481295,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 693,
            "unit": "ns/op",
            "extra": "1774405 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 85.2,
            "unit": "ns/op",
            "extra": "13840124 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 783,
            "unit": "ns/op",
            "extra": "1593790 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 770,
            "unit": "ns/op",
            "extra": "1454580 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1315,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 702078,
            "unit": "ns/op",
            "extra": "1695 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4320270839,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 106311227143,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 129382437161,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 492441685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 601086943,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 16343603,
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
          "id": "d15b13313adc6013dd61c11ccd28b885160a09c4",
          "message": ":fish: Put1M -> GetIntMiss",
          "timestamp": "2022-01-05T13:35:56+08:00",
          "tree_id": "3597c09f28dd4a146197eda118974278b7b43e9f",
          "url": "https://github.com/benchplus/gocache/commit/d15b13313adc6013dd61c11ccd28b885160a09c4"
        },
        "date": 1641362574104,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1056,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.4,
            "unit": "ns/op",
            "extra": "13998081 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2053,
            "unit": "ns/op",
            "extra": "696700 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 161,
            "unit": "ns/op",
            "extra": "7317110 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1142,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 810728,
            "unit": "ns/op",
            "extra": "1809 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1901649959,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 34301001792,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3115,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 120,
            "unit": "ns/op",
            "extra": "9732744 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3063,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 161,
            "unit": "ns/op",
            "extra": "7616552 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3452,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2580304,
            "unit": "ns/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1900938336,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 111418242795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 147805683199,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 4379566,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 474316590,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 584208512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 602,
            "unit": "ns/op",
            "extra": "1967137 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 114,
            "unit": "ns/op",
            "extra": "10560897 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 494,
            "unit": "ns/op",
            "extra": "2442933 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 168,
            "unit": "ns/op",
            "extra": "7173836 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 789,
            "unit": "ns/op",
            "extra": "1579980 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 615190,
            "unit": "ns/op",
            "extra": "2077 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 7351660115,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 79752879725,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 62627449233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 44883391,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 272884767,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 245786342,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 560,
            "unit": "ns/op",
            "extra": "2137376 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 135,
            "unit": "ns/op",
            "extra": "8947611 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 470,
            "unit": "ns/op",
            "extra": "2581790 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 179,
            "unit": "ns/op",
            "extra": "6755916 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 742,
            "unit": "ns/op",
            "extra": "1616540 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 577197,
            "unit": "ns/op",
            "extra": "2143 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 8023044040,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 84438650959,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 64046565693,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 245508144,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 48841879,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 306667009,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 625,
            "unit": "ns/op",
            "extra": "1894921 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 199,
            "unit": "ns/op",
            "extra": "6155019 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 570,
            "unit": "ns/op",
            "extra": "1970593 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 178,
            "unit": "ns/op",
            "extra": "6894553 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1098,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 704494,
            "unit": "ns/op",
            "extra": "1636 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7295572186,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 50776048749,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 31511531762,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 44066199,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 203344394,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 108656750,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 562,
            "unit": "ns/op",
            "extra": "2107729 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 74.9,
            "unit": "ns/op",
            "extra": "15829440 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 660,
            "unit": "ns/op",
            "extra": "1897411 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 220,
            "unit": "ns/op",
            "extra": "5558178 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1128,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 572508,
            "unit": "ns/op",
            "extra": "2067 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3981262221,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 93039664329,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 114959387957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12621967,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 382658386,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 467988781,
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
          "id": "550b9ef4fe8297e9adb03c8defeb635ffbc3980c",
          "message": ":wolf: try",
          "timestamp": "2022-01-05T14:19:29+08:00",
          "tree_id": "60732e4c566719bc2330da1d81a5001f52a0cffc",
          "url": "https://github.com/benchplus/gocache/commit/550b9ef4fe8297e9adb03c8defeb635ffbc3980c"
        },
        "date": 1641363784163,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1172,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 114,
            "unit": "ns/op",
            "extra": "10397217 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2227,
            "unit": "ns/op",
            "extra": "663957 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 192,
            "unit": "ns/op",
            "extra": "6103597 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1447,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 950900,
            "unit": "ns/op",
            "extra": "1219 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 0.194,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 3691237840,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 44156030287,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 5765666,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 16616753,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 205452877,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3175,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "9235120 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3725,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 196,
            "unit": "ns/op",
            "extra": "5348017 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3895,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2948398,
            "unit": "ns/op",
            "extra": "987 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 0.204,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 3936278393,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 4783460509,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 1119687,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 41802433,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 69816789,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 716,
            "unit": "ns/op",
            "extra": "1585650 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 144,
            "unit": "ns/op",
            "extra": "8931270 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 588,
            "unit": "ns/op",
            "extra": "1955678 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 208,
            "unit": "ns/op",
            "extra": "5797748 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 922,
            "unit": "ns/op",
            "extra": "1320133 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 786022,
            "unit": "ns/op",
            "extra": "1778 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 0.29,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 3736895468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 3070890619,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 4911775,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 36292029,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 38682912,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 687,
            "unit": "ns/op",
            "extra": "1728188 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 166,
            "unit": "ns/op",
            "extra": "7324411 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 554,
            "unit": "ns/op",
            "extra": "2179789 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 220,
            "unit": "ns/op",
            "extra": "5527375 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 879,
            "unit": "ns/op",
            "extra": "1309460 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 691119,
            "unit": "ns/op",
            "extra": "1822 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 0.334,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 3840609554,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 3072663147,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 39889706,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 4652838,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 40320858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 770,
            "unit": "ns/op",
            "extra": "1521315 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 241,
            "unit": "ns/op",
            "extra": "4934114 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 681,
            "unit": "ns/op",
            "extra": "1795764 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 224,
            "unit": "ns/op",
            "extra": "5436192 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1351,
            "unit": "ns/op",
            "extra": "948237 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 889785,
            "unit": "ns/op",
            "extra": "1449 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 0.342,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 3065365698,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 2670179544,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 11787890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 20082829,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 12535342,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 660,
            "unit": "ns/op",
            "extra": "1810100 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 89.3,
            "unit": "ns/op",
            "extra": "13608186 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 736,
            "unit": "ns/op",
            "extra": "1633503 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 261,
            "unit": "ns/op",
            "extra": "4605588 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1322,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 660967,
            "unit": "ns/op",
            "extra": "1912 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 0.313,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 6029384056,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 5854243387,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 2029852,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 14465280,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 28307447,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}