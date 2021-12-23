window.BENCHMARK_DATA = {
  "lastUpdate": 1640274173350,
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
          "id": "2190a47d4068370161dcb3c206049329b7b74d4c",
          "message": ":peach: add clean",
          "timestamp": "2021-12-23T23:23:39+08:00",
          "tree_id": "07598c874cda4757eacde7f694c8c7330d63b28b",
          "url": "https://github.com/benchplus/gocache/commit/2190a47d4068370161dcb3c206049329b7b74d4c"
        },
        "date": 1640273882732,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 857,
            "unit": "ns/op",
            "extra": "1239966 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 116,
            "unit": "ns/op",
            "extra": "9289051 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2321,
            "unit": "ns/op",
            "extra": "832527 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 971041,
            "unit": "ns/op",
            "extra": "1312 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1342,
            "unit": "ns/op",
            "extra": "871562 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 920093,
            "unit": "ns/op",
            "extra": "1710 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cacheLRU2",
            "value": 960,
            "unit": "ns/op",
            "extra": "1483714 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cacheLRU2",
            "value": 185,
            "unit": "ns/op",
            "extra": "6035838 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cacheLRU2",
            "value": 999,
            "unit": "ns/op",
            "extra": "1231029 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cacheLRU2",
            "value": 972,
            "unit": "ns/op",
            "extra": "1177210 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cacheLRU2",
            "value": 1081,
            "unit": "ns/op",
            "extra": "1104766 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cacheLRU2",
            "value": 1009541,
            "unit": "ns/op",
            "extra": "1348 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cache",
            "value": 851,
            "unit": "ns/op",
            "extra": "1234018 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cache",
            "value": 166,
            "unit": "ns/op",
            "extra": "6828032 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cache",
            "value": 1031,
            "unit": "ns/op",
            "extra": "1166254 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cache",
            "value": 1010,
            "unit": "ns/op",
            "extra": "1107225 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cache",
            "value": 1168,
            "unit": "ns/op",
            "extra": "1231844 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cache",
            "value": 947883,
            "unit": "ns/op",
            "extra": "1372 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 747,
            "unit": "ns/op",
            "extra": "1640374 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 252,
            "unit": "ns/op",
            "extra": "4781212 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 1118,
            "unit": "ns/op",
            "extra": "936322 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 229,
            "unit": "ns/op",
            "extra": "4976346 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1160,
            "unit": "ns/op",
            "extra": "1011474 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 769720,
            "unit": "ns/op",
            "extra": "2088 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 886,
            "unit": "ns/op",
            "extra": "1575235 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 94,
            "unit": "ns/op",
            "extra": "10985649 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 927,
            "unit": "ns/op",
            "extra": "1866062 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 905,
            "unit": "ns/op",
            "extra": "1580356 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1329,
            "unit": "ns/op",
            "extra": "960478 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 901453,
            "unit": "ns/op",
            "extra": "1610 times\n2 procs"
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
      }
    ]
  }
}