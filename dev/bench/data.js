window.BENCHMARK_DATA = {
  "lastUpdate": 1641381036469,
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
          "id": "ab4411409b0df51693fa6851a89e5f287f2e5e36",
          "message": ":pear: new version",
          "timestamp": "2022-01-05T17:04:30+08:00",
          "tree_id": "f78d9161af49bff3a68252649392cb0491bf43e3",
          "url": "https://github.com/benchplus/gocache/commit/ab4411409b0df51693fa6851a89e5f287f2e5e36"
        },
        "date": 1641374818064,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1433,
            "unit": "ns/op",
            "extra": "823226 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 138,
            "unit": "ns/op",
            "extra": "7573934 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2848,
            "unit": "ns/op",
            "extra": "379671 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 221,
            "unit": "ns/op",
            "extra": "5650418 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1643,
            "unit": "ns/op",
            "extra": "915326 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 1181211,
            "unit": "ns/op",
            "extra": "1266 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2709969673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 47923660314,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 54520518,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 57604624,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3725,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 147,
            "unit": "ns/op",
            "extra": "8159121 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 4337,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 224,
            "unit": "ns/op",
            "extra": "5593389 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 4775,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3003488,
            "unit": "ns/op",
            "extra": "782 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2403955592,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 175095612434,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 239225988653,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 25987779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 916597123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 1171630159,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 725,
            "unit": "ns/op",
            "extra": "1521949 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 78,
            "unit": "ns/op",
            "extra": "15485036 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 721,
            "unit": "ns/op",
            "extra": "1594576 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 253,
            "unit": "ns/op",
            "extra": "5021402 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 1277,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 757128,
            "unit": "ns/op",
            "extra": "1744 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 3019909895,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 81531795662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 84232896637,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 15788644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 375199637,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 378815578,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 673,
            "unit": "ns/op",
            "extra": "1791951 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 98.4,
            "unit": "ns/op",
            "extra": "11156164 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 675,
            "unit": "ns/op",
            "extra": "1688754 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 246,
            "unit": "ns/op",
            "extra": "4935806 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 1135,
            "unit": "ns/op",
            "extra": "1070859 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 705857,
            "unit": "ns/op",
            "extra": "1626 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 4687290020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 87437233879,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 92752908869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 34713205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 482827408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 455113302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 1027,
            "unit": "ns/op",
            "extra": "1114161 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 290,
            "unit": "ns/op",
            "extra": "4353424 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 1305,
            "unit": "ns/op",
            "extra": "991368 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 255,
            "unit": "ns/op",
            "extra": "4562316 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1554,
            "unit": "ns/op",
            "extra": "882813 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 1100415,
            "unit": "ns/op",
            "extra": "1194 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 10031146494,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 62147701946,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 42042693373,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 92235836,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 297118081,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 166975038,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 900,
            "unit": "ns/op",
            "extra": "1342258 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 101,
            "unit": "ns/op",
            "extra": "12057291 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 980,
            "unit": "ns/op",
            "extra": "1299522 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 315,
            "unit": "ns/op",
            "extra": "4007587 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1632,
            "unit": "ns/op",
            "extra": "729021 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 925498,
            "unit": "ns/op",
            "extra": "1556 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 5399007721,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 138182764485,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 173709143768,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 757508527,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 23690470,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 582307615,
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
          "id": "b29db845f0180ddc59a9fdf85d1ad16df8989b9d",
          "message": ":wrench: new version",
          "timestamp": "2022-01-05T17:24:27+08:00",
          "tree_id": "43c2e1813ee5dc5d98a3420f8b7af16c2ae80124",
          "url": "https://github.com/benchplus/gocache/commit/b29db845f0180ddc59a9fdf85d1ad16df8989b9d"
        },
        "date": 1641375641327,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1281,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 120,
            "unit": "ns/op",
            "extra": "10091184 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1815,
            "unit": "ns/op",
            "extra": "585242 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 192,
            "unit": "ns/op",
            "extra": "6192090 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1249,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 878423,
            "unit": "ns/op",
            "extra": "1450 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2083247830,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 40979056315,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 28235884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 38374531,
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
            "value": 119,
            "unit": "ns/op",
            "extra": "9965217 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3136,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 182,
            "unit": "ns/op",
            "extra": "6694466 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3474,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2600254,
            "unit": "ns/op",
            "extra": "1198 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2036824894,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 117435053763,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 158942224514,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 10130125,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 557790738,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 676589601,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 608,
            "unit": "ns/op",
            "extra": "1861825 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 66.1,
            "unit": "ns/op",
            "extra": "17487812 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1998387 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 200,
            "unit": "ns/op",
            "extra": "5616114 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 958,
            "unit": "ns/op",
            "extra": "1273768 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 628992,
            "unit": "ns/op",
            "extra": "1977 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2384949941,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 61493909450,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 61285361810,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 9919713,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 277593664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 239818040,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 583,
            "unit": "ns/op",
            "extra": "2085752 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 87.3,
            "unit": "ns/op",
            "extra": "14326252 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 583,
            "unit": "ns/op",
            "extra": "2077786 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 208,
            "unit": "ns/op",
            "extra": "5784242 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 891,
            "unit": "ns/op",
            "extra": "1408585 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 589595,
            "unit": "ns/op",
            "extra": "2082 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2886788863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 63127374185,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 64857592024,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8305608,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 288521194,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 285304916,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 709,
            "unit": "ns/op",
            "extra": "1621492 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 223,
            "unit": "ns/op",
            "extra": "5388802 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 669,
            "unit": "ns/op",
            "extra": "1815003 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 227,
            "unit": "ns/op",
            "extra": "5518068 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1102,
            "unit": "ns/op",
            "extra": "994716 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 718828,
            "unit": "ns/op",
            "extra": "1597 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7106300351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 51152480271,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 33152461776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 65452297,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 191841863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 82881706,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 671,
            "unit": "ns/op",
            "extra": "1801521 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 100,
            "unit": "ns/op",
            "extra": "11654623 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 748,
            "unit": "ns/op",
            "extra": "1594593 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 249,
            "unit": "ns/op",
            "extra": "4744180 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1342,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 686857,
            "unit": "ns/op",
            "extra": "1798 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4122156531,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 92448267604,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 115246797338,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 16794302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 335932677,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 482367369,
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
          "id": "b29db845f0180ddc59a9fdf85d1ad16df8989b9d",
          "message": ":wrench: new version",
          "timestamp": "2022-01-05T17:24:27+08:00",
          "tree_id": "43c2e1813ee5dc5d98a3420f8b7af16c2ae80124",
          "url": "https://github.com/benchplus/gocache/commit/b29db845f0180ddc59a9fdf85d1ad16df8989b9d"
        },
        "date": 1641377172789,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1076,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 124,
            "unit": "ns/op",
            "extra": "9691752 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1841,
            "unit": "ns/op",
            "extra": "848553 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 196,
            "unit": "ns/op",
            "extra": "6311974 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1310,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 872137,
            "unit": "ns/op",
            "extra": "1494 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2310295647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 39097488046,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 38904440,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 32491964,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2929,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 126,
            "unit": "ns/op",
            "extra": "9579534 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2926,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 186,
            "unit": "ns/op",
            "extra": "6289280 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3441,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2751561,
            "unit": "ns/op",
            "extra": "1188 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2015893606,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 122370625377,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 171801075030,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 10072468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 544013875,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 675018981,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 583,
            "unit": "ns/op",
            "extra": "2059832 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 62.7,
            "unit": "ns/op",
            "extra": "18246675 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 589,
            "unit": "ns/op",
            "extra": "1972898 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 205,
            "unit": "ns/op",
            "extra": "5732377 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 888,
            "unit": "ns/op",
            "extra": "1291490 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 636093,
            "unit": "ns/op",
            "extra": "2169 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2471169235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 70380281699,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 71947835299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 8475268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 277687787,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 267902036,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 564,
            "unit": "ns/op",
            "extra": "2178798 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 79.7,
            "unit": "ns/op",
            "extra": "14539580 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 582,
            "unit": "ns/op",
            "extra": "2033018 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 216,
            "unit": "ns/op",
            "extra": "5876480 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 844,
            "unit": "ns/op",
            "extra": "1438034 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 570672,
            "unit": "ns/op",
            "extra": "2210 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2568611007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 73457399460,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 75533717318,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7649753,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 299308697,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 305336207,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 792,
            "unit": "ns/op",
            "extra": "1487466 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 243,
            "unit": "ns/op",
            "extra": "5042664 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 770,
            "unit": "ns/op",
            "extra": "1443585 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 215,
            "unit": "ns/op",
            "extra": "5652046 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1253,
            "unit": "ns/op",
            "extra": "948226 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 827150,
            "unit": "ns/op",
            "extra": "1413 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8028810178,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 57971445646,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 35719372037,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 46845073,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 221153053,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 113938736,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 650,
            "unit": "ns/op",
            "extra": "1837614 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 88,
            "unit": "ns/op",
            "extra": "13403420 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 724,
            "unit": "ns/op",
            "extra": "1625799 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 268,
            "unit": "ns/op",
            "extra": "4641793 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1338,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 660572,
            "unit": "ns/op",
            "extra": "1894 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 4081522055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 107493996194,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 132160028284,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 14420020,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 459617769,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 490613578,
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
          "id": "86322f49e44dfa72d8645cfcf1bf29aa8fe5e3ce",
          "message": ":pear: try",
          "timestamp": "2022-01-05T18:22:05+08:00",
          "tree_id": "11bc0a66026cd8764554175e6cc9c9046369a930",
          "url": "https://github.com/benchplus/gocache/commit/86322f49e44dfa72d8645cfcf1bf29aa8fe5e3ce"
        },
        "date": 1641378995474,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1219,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 111,
            "unit": "ns/op",
            "extra": "10303110 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2029,
            "unit": "ns/op",
            "extra": "691422 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 197,
            "unit": "ns/op",
            "extra": "6452874 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1270,
            "unit": "ns/op",
            "extra": "964636 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 845423,
            "unit": "ns/op",
            "extra": "1370 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2031450309,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 40008346796,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 16160136,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 39109799,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3083,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 129,
            "unit": "ns/op",
            "extra": "8976194 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3403,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 190,
            "unit": "ns/op",
            "extra": "6647023 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3375,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2864049,
            "unit": "ns/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2002268412,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 121380099840,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 166567870437,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 10912366,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 578718914,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 784999842,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 513,
            "unit": "ns/op",
            "extra": "2180020 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 67.6,
            "unit": "ns/op",
            "extra": "19283988 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 506,
            "unit": "ns/op",
            "extra": "2287650 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 202,
            "unit": "ns/op",
            "extra": "5733840 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 862,
            "unit": "ns/op",
            "extra": "1437453 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 531578,
            "unit": "ns/op",
            "extra": "2350 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2529056944,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 29831629458,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 30118545166,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 105346442,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 113192558,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 9772898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 469,
            "unit": "ns/op",
            "extra": "2656833 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 84.1,
            "unit": "ns/op",
            "extra": "13827042 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 456,
            "unit": "ns/op",
            "extra": "2632093 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 202,
            "unit": "ns/op",
            "extra": "6035858 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 713,
            "unit": "ns/op",
            "extra": "1624545 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 482460,
            "unit": "ns/op",
            "extra": "2821 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2908638595,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30584629069,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 30920391928,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 10067705,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 130656260,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 122755825,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 707,
            "unit": "ns/op",
            "extra": "1668468 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 231,
            "unit": "ns/op",
            "extra": "5128728 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 701,
            "unit": "ns/op",
            "extra": "1791784 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 234,
            "unit": "ns/op",
            "extra": "4809074 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1202,
            "unit": "ns/op",
            "extra": "857725 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 742653,
            "unit": "ns/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7470007123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 53919076291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 33502171633,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 99797731,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 51256288,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 218497213,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 682,
            "unit": "ns/op",
            "extra": "1767793 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 83,
            "unit": "ns/op",
            "extra": "15372673 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 746,
            "unit": "ns/op",
            "extra": "1589786 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 255,
            "unit": "ns/op",
            "extra": "4794237 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1286,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 692416,
            "unit": "ns/op",
            "extra": "1754 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3917102440,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 97992282587,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 121605575992,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 15995964,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 395117540,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 484553528,
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
          "id": "7aa6bf1966ece5cdecd80d900b46a6f0d85dddfa",
          "message": ":pear:  new version",
          "timestamp": "2022-01-05T18:56:57+08:00",
          "tree_id": "94db33364c7fb2b650d65df042d3e361a2b69601",
          "url": "https://github.com/benchplus/gocache/commit/7aa6bf1966ece5cdecd80d900b46a6f0d85dddfa"
        },
        "date": 1641381035785,
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
            "value": 92.9,
            "unit": "ns/op",
            "extra": "12901249 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1805,
            "unit": "ns/op",
            "extra": "783780 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_bigcache",
            "value": 167,
            "unit": "ns/op",
            "extra": "7436991 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1163,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 792979,
            "unit": "ns/op",
            "extra": "1710 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2185933091,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 35580024620,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 16817467,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 29469576,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2968,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 114,
            "unit": "ns/op",
            "extra": "10831671 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3187,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_cachego",
            "value": 166,
            "unit": "ns/op",
            "extra": "7286760 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3563,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2669771,
            "unit": "ns/op",
            "extra": "1128 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1891840761,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 107887954063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 156927469142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 11309719,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 484270062,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 641315474,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 375,
            "unit": "ns/op",
            "extra": "3373028 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 43.8,
            "unit": "ns/op",
            "extra": "27069838 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 364,
            "unit": "ns/op",
            "extra": "3344725 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecache",
            "value": 151,
            "unit": "ns/op",
            "extra": "7988012 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 612,
            "unit": "ns/op",
            "extra": "1953961 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 372111,
            "unit": "ns/op",
            "extra": "3536 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1713594019,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 22863398525,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 22845393684,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 9904805,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 84118684,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 68329621,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 334,
            "unit": "ns/op",
            "extra": "3611058 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 60.9,
            "unit": "ns/op",
            "extra": "19443698 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 335,
            "unit": "ns/op",
            "extra": "3618432 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_ecacheLRU2",
            "value": 166,
            "unit": "ns/op",
            "extra": "7640031 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 552,
            "unit": "ns/op",
            "extra": "2167620 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 344118,
            "unit": "ns/op",
            "extra": "3686 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2143745987,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 23617171782,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 24926840069,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7483353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 78152612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 84524414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 644,
            "unit": "ns/op",
            "extra": "1925484 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6128522 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 583,
            "unit": "ns/op",
            "extra": "2053466 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_freecache",
            "value": 176,
            "unit": "ns/op",
            "extra": "6964017 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1028,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 661397,
            "unit": "ns/op",
            "extra": "1752 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 6781961861,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 50135618125,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 30905492897,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 90208306,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 37489342,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 180539615,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 553,
            "unit": "ns/op",
            "extra": "2144972 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75,
            "unit": "ns/op",
            "extra": "15967430 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 662,
            "unit": "ns/op",
            "extra": "1806728 times\n2 procs"
          },
          {
            "name": "BenchmarkGetIntMiss_gcache",
            "value": 292,
            "unit": "ns/op",
            "extra": "5455323 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1153,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 601887,
            "unit": "ns/op",
            "extra": "2142 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3818948234,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 101570334406,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 132131308806,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 422898792,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 9865890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 388746186,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}