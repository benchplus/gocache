window.BENCHMARK_DATA = {
  "lastUpdate": 1640280720059,
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
          "id": "adcf054ac59def401688c85c2c12b8f73c5c4910",
          "message": ":watch: add clean",
          "timestamp": "2021-12-23T23:41:29+08:00",
          "tree_id": "645c039a7c699207e11ddb90651980b235232ab3",
          "url": "https://github.com/benchplus/gocache/commit/adcf054ac59def401688c85c2c12b8f73c5c4910"
        },
        "date": 1640274172764,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 673,
            "unit": "ns/op",
            "extra": "1826852 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 85.9,
            "unit": "ns/op",
            "extra": "13647723 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1799,
            "unit": "ns/op",
            "extra": "922634 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 928961,
            "unit": "ns/op",
            "extra": "1300 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1107,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 728664,
            "unit": "ns/op",
            "extra": "2152 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 873,
            "unit": "ns/op",
            "extra": "1156302 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 149,
            "unit": "ns/op",
            "extra": "8079874 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 840,
            "unit": "ns/op",
            "extra": "1601424 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 825,
            "unit": "ns/op",
            "extra": "1605003 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 866,
            "unit": "ns/op",
            "extra": "1472074 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 895692,
            "unit": "ns/op",
            "extra": "1562 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 864,
            "unit": "ns/op",
            "extra": "1507168 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 151,
            "unit": "ns/op",
            "extra": "8096096 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 984,
            "unit": "ns/op",
            "extra": "1499161 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 998,
            "unit": "ns/op",
            "extra": "1458507 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 1048,
            "unit": "ns/op",
            "extra": "1370701 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 909283,
            "unit": "ns/op",
            "extra": "1639 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 677,
            "unit": "ns/op",
            "extra": "1828459 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 190,
            "unit": "ns/op",
            "extra": "6351033 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 990,
            "unit": "ns/op",
            "extra": "1104214 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 167,
            "unit": "ns/op",
            "extra": "6229328 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1013,
            "unit": "ns/op",
            "extra": "1234839 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 686962,
            "unit": "ns/op",
            "extra": "2114 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 776,
            "unit": "ns/op",
            "extra": "1826224 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 76,
            "unit": "ns/op",
            "extra": "15742849 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 795,
            "unit": "ns/op",
            "extra": "1803721 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 784,
            "unit": "ns/op",
            "extra": "1818010 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1076,
            "unit": "ns/op",
            "extra": "1134477 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 759420,
            "unit": "ns/op",
            "extra": "1681 times\n2 procs"
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
          "id": "f5c71b241de60cc856c5a8907363e9fac48f5b60",
          "message": ":star: fix version",
          "timestamp": "2021-12-23T23:50:30+08:00",
          "tree_id": "84f9b57e1938cb047c715ae65fd120614dce321b",
          "url": "https://github.com/benchplus/gocache/commit/f5c71b241de60cc856c5a8907363e9fac48f5b60"
        },
        "date": 1640274711450,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 639,
            "unit": "ns/op",
            "extra": "1759444 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.1,
            "unit": "ns/op",
            "extra": "14150972 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1657,
            "unit": "ns/op",
            "extra": "976588 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 919995,
            "unit": "ns/op",
            "extra": "1479 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1056,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 643610,
            "unit": "ns/op",
            "extra": "2319 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 791,
            "unit": "ns/op",
            "extra": "1410189 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 199,
            "unit": "ns/op",
            "extra": "5013706 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 805,
            "unit": "ns/op",
            "extra": "1549350 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 799,
            "unit": "ns/op",
            "extra": "1627606 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 815,
            "unit": "ns/op",
            "extra": "1308980 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 792387,
            "unit": "ns/op",
            "extra": "1764 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 865,
            "unit": "ns/op",
            "extra": "1746739 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 179,
            "unit": "ns/op",
            "extra": "6240753 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 936,
            "unit": "ns/op",
            "extra": "1462958 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 877,
            "unit": "ns/op",
            "extra": "1623124 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 902,
            "unit": "ns/op",
            "extra": "1541174 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 871182,
            "unit": "ns/op",
            "extra": "1490 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 591,
            "unit": "ns/op",
            "extra": "2038359 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 188,
            "unit": "ns/op",
            "extra": "6298597 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 878,
            "unit": "ns/op",
            "extra": "1498633 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 157,
            "unit": "ns/op",
            "extra": "7462843 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 932,
            "unit": "ns/op",
            "extra": "1338540 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 612889,
            "unit": "ns/op",
            "extra": "2430 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 692,
            "unit": "ns/op",
            "extra": "2073591 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 76.2,
            "unit": "ns/op",
            "extra": "13164213 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 699,
            "unit": "ns/op",
            "extra": "2100588 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 693,
            "unit": "ns/op",
            "extra": "2059316 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1053,
            "unit": "ns/op",
            "extra": "1239020 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 672776,
            "unit": "ns/op",
            "extra": "1906 times\n2 procs"
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
          "id": "fa35fec2cd09f7264dfccfca97a6e1aff551f407",
          "message": ":art:  change version",
          "timestamp": "2021-12-23T23:52:54+08:00",
          "tree_id": "55cc098f05dc7145754a54594f89cc399fea2c7b",
          "url": "https://github.com/benchplus/gocache/commit/fa35fec2cd09f7264dfccfca97a6e1aff551f407"
        },
        "date": 1640274850022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 637,
            "unit": "ns/op",
            "extra": "1604710 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 82.7,
            "unit": "ns/op",
            "extra": "13997301 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1925,
            "unit": "ns/op",
            "extra": "843231 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 988213,
            "unit": "ns/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1118,
            "unit": "ns/op",
            "extra": "997444 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 683269,
            "unit": "ns/op",
            "extra": "2234 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 660,
            "unit": "ns/op",
            "extra": "1883096 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 40,
            "unit": "ns/op",
            "extra": "25998942 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 686,
            "unit": "ns/op",
            "extra": "2086189 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 681,
            "unit": "ns/op",
            "extra": "2018500 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 835,
            "unit": "ns/op",
            "extra": "1952248 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 655974,
            "unit": "ns/op",
            "extra": "2169 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 604,
            "unit": "ns/op",
            "extra": "1968643 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 36.1,
            "unit": "ns/op",
            "extra": "30340238 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 740,
            "unit": "ns/op",
            "extra": "1684275 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 748,
            "unit": "ns/op",
            "extra": "1726351 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 737,
            "unit": "ns/op",
            "extra": "1794349 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 615900,
            "unit": "ns/op",
            "extra": "2092 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 609,
            "unit": "ns/op",
            "extra": "1958358 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 188,
            "unit": "ns/op",
            "extra": "6277544 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 934,
            "unit": "ns/op",
            "extra": "1112559 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 165,
            "unit": "ns/op",
            "extra": "7070096 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 964,
            "unit": "ns/op",
            "extra": "1270228 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 637007,
            "unit": "ns/op",
            "extra": "2456 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 734,
            "unit": "ns/op",
            "extra": "1959991 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 76.3,
            "unit": "ns/op",
            "extra": "13490155 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 749,
            "unit": "ns/op",
            "extra": "1922390 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 744,
            "unit": "ns/op",
            "extra": "1928869 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1057,
            "unit": "ns/op",
            "extra": "1183201 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 727379,
            "unit": "ns/op",
            "extra": "1771 times\n2 procs"
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
          "id": "1dab065e704ead345f6f7c77307c3be43d3853f1",
          "message": ":ox:  update version",
          "timestamp": "2021-12-24T01:12:59+08:00",
          "tree_id": "ec31cae26afe31510c56920faab5b6fc3ff3e852",
          "url": "https://github.com/benchplus/gocache/commit/1dab065e704ead345f6f7c77307c3be43d3853f1"
        },
        "date": 1640279662576,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 665,
            "unit": "ns/op",
            "extra": "1599394 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 99.6,
            "unit": "ns/op",
            "extra": "11836088 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1865,
            "unit": "ns/op",
            "extra": "869968 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 984888,
            "unit": "ns/op",
            "extra": "1340 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1199,
            "unit": "ns/op",
            "extra": "909457 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 749626,
            "unit": "ns/op",
            "extra": "2005 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 680,
            "unit": "ns/op",
            "extra": "1631080 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 48.3,
            "unit": "ns/op",
            "extra": "23479405 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 714,
            "unit": "ns/op",
            "extra": "1713702 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 715,
            "unit": "ns/op",
            "extra": "1917700 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 791,
            "unit": "ns/op",
            "extra": "1751736 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 686855,
            "unit": "ns/op",
            "extra": "1749 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1795051 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 43.1,
            "unit": "ns/op",
            "extra": "25409151 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 804,
            "unit": "ns/op",
            "extra": "1645688 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 795,
            "unit": "ns/op",
            "extra": "1625199 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 762,
            "unit": "ns/op",
            "extra": "1688401 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 638828,
            "unit": "ns/op",
            "extra": "1956 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 649,
            "unit": "ns/op",
            "extra": "1862274 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 225,
            "unit": "ns/op",
            "extra": "5018727 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 958,
            "unit": "ns/op",
            "extra": "1266492 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 193,
            "unit": "ns/op",
            "extra": "5959012 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1066,
            "unit": "ns/op",
            "extra": "1149986 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 670050,
            "unit": "ns/op",
            "extra": "2194 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 781,
            "unit": "ns/op",
            "extra": "1692700 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 96.1,
            "unit": "ns/op",
            "extra": "13056847 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 802,
            "unit": "ns/op",
            "extra": "2076117 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 815,
            "unit": "ns/op",
            "extra": "2140890 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1141,
            "unit": "ns/op",
            "extra": "1040731 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 765746,
            "unit": "ns/op",
            "extra": "1588 times\n2 procs"
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
          "id": "888e3dc4340555fa63ce6724f0da1a4785e5fe1c",
          "message": ":bulb: fix url",
          "timestamp": "2021-12-24T01:30:43+08:00",
          "tree_id": "5bb67b92fb6612e49a14bc5c7fd391f39d6cb004",
          "url": "https://github.com/benchplus/gocache/commit/888e3dc4340555fa63ce6724f0da1a4785e5fe1c"
        },
        "date": 1640280719604,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 641,
            "unit": "ns/op",
            "extra": "1956487 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 84.2,
            "unit": "ns/op",
            "extra": "13841614 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1594,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 891333,
            "unit": "ns/op",
            "extra": "1419 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 987,
            "unit": "ns/op",
            "extra": "1208504 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 608620,
            "unit": "ns/op",
            "extra": "2425 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 595,
            "unit": "ns/op",
            "extra": "1952887 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 40.1,
            "unit": "ns/op",
            "extra": "29276686 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 619,
            "unit": "ns/op",
            "extra": "2445831 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 598,
            "unit": "ns/op",
            "extra": "2136784 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 747,
            "unit": "ns/op",
            "extra": "2091349 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 583816,
            "unit": "ns/op",
            "extra": "2559 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 547,
            "unit": "ns/op",
            "extra": "2499553 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 35.6,
            "unit": "ns/op",
            "extra": "32204743 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 655,
            "unit": "ns/op",
            "extra": "2310158 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 655,
            "unit": "ns/op",
            "extra": "2279010 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 654,
            "unit": "ns/op",
            "extra": "2184547 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 573466,
            "unit": "ns/op",
            "extra": "2296 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 500,
            "unit": "ns/op",
            "extra": "2402922 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 185,
            "unit": "ns/op",
            "extra": "6450172 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 843,
            "unit": "ns/op",
            "extra": "1546534 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 157,
            "unit": "ns/op",
            "extra": "7487800 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 878,
            "unit": "ns/op",
            "extra": "1424227 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 526826,
            "unit": "ns/op",
            "extra": "2629 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 637,
            "unit": "ns/op",
            "extra": "2102677 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 76.2,
            "unit": "ns/op",
            "extra": "13916635 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 650,
            "unit": "ns/op",
            "extra": "2221804 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 624,
            "unit": "ns/op",
            "extra": "2239522 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1057,
            "unit": "ns/op",
            "extra": "1324825 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 616251,
            "unit": "ns/op",
            "extra": "2062 times\n2 procs"
          }
        ]
      }
    ]
  }
}