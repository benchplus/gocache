window.BENCHMARK_DATA = {
  "lastUpdate": 1640274850532,
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
          "id": "3ee2086d7137ef99262e8276b3d8bf26d4692347",
          "message": ":wrench: revert clean",
          "timestamp": "2021-12-23T23:37:12+08:00",
          "tree_id": "bbf53c95434492d3db8dfb721a5c5881770007bb",
          "url": "https://github.com/benchplus/gocache/commit/3ee2086d7137ef99262e8276b3d8bf26d4692347"
        },
        "date": 1640273909162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 640,
            "unit": "ns/op",
            "extra": "1741130 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 86,
            "unit": "ns/op",
            "extra": "13636472 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1708,
            "unit": "ns/op",
            "extra": "914720 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 937848,
            "unit": "ns/op",
            "extra": "1438 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1076,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 653237,
            "unit": "ns/op",
            "extra": "2190 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 746,
            "unit": "ns/op",
            "extra": "1573032 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 145,
            "unit": "ns/op",
            "extra": "8252334 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 739,
            "unit": "ns/op",
            "extra": "1540170 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 735,
            "unit": "ns/op",
            "extra": "1747101 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 820,
            "unit": "ns/op",
            "extra": "1505526 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 727012,
            "unit": "ns/op",
            "extra": "1978 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 787,
            "unit": "ns/op",
            "extra": "1874859 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 144,
            "unit": "ns/op",
            "extra": "8608927 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 824,
            "unit": "ns/op",
            "extra": "1817122 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 815,
            "unit": "ns/op",
            "extra": "1852863 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 833,
            "unit": "ns/op",
            "extra": "1534456 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 805344,
            "unit": "ns/op",
            "extra": "1758 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 570,
            "unit": "ns/op",
            "extra": "2144572 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 189,
            "unit": "ns/op",
            "extra": "6299010 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 869,
            "unit": "ns/op",
            "extra": "1507597 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 158,
            "unit": "ns/op",
            "extra": "7428997 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 914,
            "unit": "ns/op",
            "extra": "1358278 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 576159,
            "unit": "ns/op",
            "extra": "2595 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 673,
            "unit": "ns/op",
            "extra": "2045194 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 76.3,
            "unit": "ns/op",
            "extra": "13746824 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 704,
            "unit": "ns/op",
            "extra": "2098689 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 682,
            "unit": "ns/op",
            "extra": "2118549 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1250029 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 664011,
            "unit": "ns/op",
            "extra": "1932 times\n2 procs"
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
          "id": "b9e0a601b5e39fd24f7aa3aa6910d073ce232f98",
          "message": ":pill: reduce remain result cnt",
          "timestamp": "2021-12-23T23:40:10+08:00",
          "tree_id": "6c8aad3e5785ee53e05563662d0455dae1959845",
          "url": "https://github.com/benchplus/gocache/commit/b9e0a601b5e39fd24f7aa3aa6910d073ce232f98"
        },
        "date": 1640274092227,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 721,
            "unit": "ns/op",
            "extra": "1591711 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 99.8,
            "unit": "ns/op",
            "extra": "11375295 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1914,
            "unit": "ns/op",
            "extra": "863377 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 977814,
            "unit": "ns/op",
            "extra": "1284 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1261,
            "unit": "ns/op",
            "extra": "907059 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 785323,
            "unit": "ns/op",
            "extra": "1938 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 892,
            "unit": "ns/op",
            "extra": "1350080 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 161,
            "unit": "ns/op",
            "extra": "6789180 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 855,
            "unit": "ns/op",
            "extra": "1538030 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 955,
            "unit": "ns/op",
            "extra": "1443890 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 882,
            "unit": "ns/op",
            "extra": "1442985 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 851015,
            "unit": "ns/op",
            "extra": "1582 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 855,
            "unit": "ns/op",
            "extra": "1433080 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 165,
            "unit": "ns/op",
            "extra": "7616340 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 1006,
            "unit": "ns/op",
            "extra": "1418103 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 1020,
            "unit": "ns/op",
            "extra": "1397232 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1275792 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 964658,
            "unit": "ns/op",
            "extra": "1539 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 729,
            "unit": "ns/op",
            "extra": "1745359 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 235,
            "unit": "ns/op",
            "extra": "5091732 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 975,
            "unit": "ns/op",
            "extra": "1227039 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "5663532 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1103,
            "unit": "ns/op",
            "extra": "1113247 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 723776,
            "unit": "ns/op",
            "extra": "2126 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 800,
            "unit": "ns/op",
            "extra": "1651672 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 94.9,
            "unit": "ns/op",
            "extra": "12858475 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 799,
            "unit": "ns/op",
            "extra": "1638741 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 831,
            "unit": "ns/op",
            "extra": "1687593 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1168,
            "unit": "ns/op",
            "extra": "1004350 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 775698,
            "unit": "ns/op",
            "extra": "1528 times\n2 procs"
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
      }
    ]
  }
}