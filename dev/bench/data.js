window.BENCHMARK_DATA = {
  "lastUpdate": 1641266825089,
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
          "id": "19cbe8ba9229f4e994800b7a0311d9c1958c16ae",
          "message": ":whale2: orcache -> ecache",
          "timestamp": "2022-01-02T23:35:15+08:00",
          "tree_id": "67444e89421f06da7d87270eda7c4f7d617d88dc",
          "url": "https://github.com/benchplus/gocache/commit/19cbe8ba9229f4e994800b7a0311d9c1958c16ae"
        },
        "date": 1641141301791,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1220,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 116,
            "unit": "ns/op",
            "extra": "9749710 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2023,
            "unit": "ns/op",
            "extra": "694669 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 604168,
            "unit": "ns/op",
            "extra": "1807 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1234,
            "unit": "ns/op",
            "extra": "1002326 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 830684,
            "unit": "ns/op",
            "extra": "1496 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1970560003,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 51776779223,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 15656818,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 34089268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3064,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 124,
            "unit": "ns/op",
            "extra": "8965154 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3294,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3185,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3793,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2613612,
            "unit": "ns/op",
            "extra": "1170 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 2179115004,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 138223074797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 31840251,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 742497123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 442,
            "unit": "ns/op",
            "extra": "2619346 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 50.8,
            "unit": "ns/op",
            "extra": "23098032 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 581,
            "unit": "ns/op",
            "extra": "2052733 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 592,
            "unit": "ns/op",
            "extra": "2025078 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 697,
            "unit": "ns/op",
            "extra": "1674404 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 436393,
            "unit": "ns/op",
            "extra": "2989 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 2192427364,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 27661796449,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 15816589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 78703644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 399,
            "unit": "ns/op",
            "extra": "3006061 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 72,
            "unit": "ns/op",
            "extra": "16846425 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 545,
            "unit": "ns/op",
            "extra": "2176796 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 561,
            "unit": "ns/op",
            "extra": "2176933 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 649,
            "unit": "ns/op",
            "extra": "1813756 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 415209,
            "unit": "ns/op",
            "extra": "3057 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2451404617,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 30267197726,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 15125005,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 126257864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 701,
            "unit": "ns/op",
            "extra": "1678764 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 240,
            "unit": "ns/op",
            "extra": "5134740 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 636,
            "unit": "ns/op",
            "extra": "1823474 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4658448829,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1176,
            "unit": "ns/op",
            "extra": "1003736 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 734401,
            "unit": "ns/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 8398540662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 64902478823,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 61728641,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 283635058,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 676,
            "unit": "ns/op",
            "extra": "1653183 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 83.9,
            "unit": "ns/op",
            "extra": "14077108 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 753,
            "unit": "ns/op",
            "extra": "1540509 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 786,
            "unit": "ns/op",
            "extra": "1585765 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1292,
            "unit": "ns/op",
            "extra": "808874 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 713553,
            "unit": "ns/op",
            "extra": "1844 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3651728631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 74945078880,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 13909033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 257769708,
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
          "id": "19cbe8ba9229f4e994800b7a0311d9c1958c16ae",
          "message": ":whale2: orcache -> ecache",
          "timestamp": "2022-01-02T23:35:15+08:00",
          "tree_id": "67444e89421f06da7d87270eda7c4f7d617d88dc",
          "url": "https://github.com/benchplus/gocache/commit/19cbe8ba9229f4e994800b7a0311d9c1958c16ae"
        },
        "date": 1641142816414,
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
            "value": 93,
            "unit": "ns/op",
            "extra": "12870894 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1903,
            "unit": "ns/op",
            "extra": "753568 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 770729,
            "unit": "ns/op",
            "extra": "1322 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1161,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 773314,
            "unit": "ns/op",
            "extra": "1791 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1904077863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 42440525187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 13961733,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 27203251,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2818,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11007104 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3029,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2811,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3230,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2345499,
            "unit": "ns/op",
            "extra": "1290 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1728251202,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 121862752353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 8551014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 550511450,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 347,
            "unit": "ns/op",
            "extra": "3418455 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28842388 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 517,
            "unit": "ns/op",
            "extra": "2415740 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 489,
            "unit": "ns/op",
            "extra": "2371674 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 588,
            "unit": "ns/op",
            "extra": "2039986 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 356021,
            "unit": "ns/op",
            "extra": "3632 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1490478002,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 24185238871,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 4919751,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 65833821,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 329,
            "unit": "ns/op",
            "extra": "3634870 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20106714 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 455,
            "unit": "ns/op",
            "extra": "2639534 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 456,
            "unit": "ns/op",
            "extra": "2643871 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 533,
            "unit": "ns/op",
            "extra": "2202500 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 338683,
            "unit": "ns/op",
            "extra": "3734 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2190238065,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 26723226854,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 6742789,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 85455603,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1877476 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 194,
            "unit": "ns/op",
            "extra": "6162207 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 564,
            "unit": "ns/op",
            "extra": "2072670 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3159042322,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1027,
            "unit": "ns/op",
            "extra": "1138740 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 636552,
            "unit": "ns/op",
            "extra": "1758 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7360385177,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 59680967175,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 51382883,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 208588799,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 554,
            "unit": "ns/op",
            "extra": "2191016 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15940264 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1951130 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 642,
            "unit": "ns/op",
            "extra": "1959236 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1092,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 564468,
            "unit": "ns/op",
            "extra": "2265 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3755813332,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 73801001811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12101166,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 156487377,
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
          "id": "0077200df2a260265404b1439521af4b659abc3c",
          "message": ":lemon: add cases",
          "timestamp": "2022-01-03T16:25:15+08:00",
          "tree_id": "1cf067cb4bb14752d6b2cb97559aa74b9e5d8cd4",
          "url": "https://github.com/benchplus/gocache/commit/0077200df2a260265404b1439521af4b659abc3c"
        },
        "date": 1641199099333,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1044,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 116,
            "unit": "ns/op",
            "extra": "11914998 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2017,
            "unit": "ns/op",
            "extra": "698283 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 795824,
            "unit": "ns/op",
            "extra": "1314 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1211,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 795825,
            "unit": "ns/op",
            "extra": "1507 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 2067196233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 36738545542,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_bigcache",
            "value": 45249846487,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 27044779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 27714096,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_bigcache",
            "value": 29137430,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2681,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 116,
            "unit": "ns/op",
            "extra": "10300928 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2953,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3024,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3361,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2511575,
            "unit": "ns/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1864170481,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 97915014548,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_cachego",
            "value": 127596802546,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 9872099,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 445712632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_cachego",
            "value": 571535657,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 382,
            "unit": "ns/op",
            "extra": "2986299 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 44.1,
            "unit": "ns/op",
            "extra": "27140124 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 550,
            "unit": "ns/op",
            "extra": "2330821 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 539,
            "unit": "ns/op",
            "extra": "2303820 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 630,
            "unit": "ns/op",
            "extra": "1893590 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 388657,
            "unit": "ns/op",
            "extra": "3400 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1657589907,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 19428075164,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_ecache",
            "value": 26427020024,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 7134571,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 45497007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_ecache",
            "value": 65353477,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 362,
            "unit": "ns/op",
            "extra": "3522528 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 64,
            "unit": "ns/op",
            "extra": "18485659 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 491,
            "unit": "ns/op",
            "extra": "2385775 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 486,
            "unit": "ns/op",
            "extra": "2424514 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 596,
            "unit": "ns/op",
            "extra": "2053269 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 375792,
            "unit": "ns/op",
            "extra": "3422 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2114671240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 22131268180,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_ecacheLRU2",
            "value": 27705680238,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 7809393,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 68305884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_ecacheLRU2",
            "value": 81299205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 665,
            "unit": "ns/op",
            "extra": "1821868 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 215,
            "unit": "ns/op",
            "extra": "5238996 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1955834 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3111754951,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1080,
            "unit": "ns/op",
            "extra": "1019558 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 683452,
            "unit": "ns/op",
            "extra": "1603 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7770738277,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 51524963702,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_freecache",
            "value": 62832706425,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 52544301,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 188291140,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_freecache",
            "value": 219406061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 612,
            "unit": "ns/op",
            "extra": "2021671 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 86.9,
            "unit": "ns/op",
            "extra": "14800728 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 677,
            "unit": "ns/op",
            "extra": "1774074 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 704,
            "unit": "ns/op",
            "extra": "1704636 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1220,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 614252,
            "unit": "ns/op",
            "extra": "2073 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3941648012,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 57184833194,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_gcache",
            "value": 79586534470,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 109288842,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_gcache",
            "value": 163015958,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 12040483,
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
          "id": "0077200df2a260265404b1439521af4b659abc3c",
          "message": ":lemon: add cases",
          "timestamp": "2022-01-03T16:25:15+08:00",
          "tree_id": "1cf067cb4bb14752d6b2cb97559aa74b9e5d8cd4",
          "url": "https://github.com/benchplus/gocache/commit/0077200df2a260265404b1439521af4b659abc3c"
        },
        "date": 1641208080171,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 730,
            "unit": "ns/op",
            "extra": "1532146 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 95.6,
            "unit": "ns/op",
            "extra": "14194160 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1963,
            "unit": "ns/op",
            "extra": "687906 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 635291,
            "unit": "ns/op",
            "extra": "1946 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1108,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 741654,
            "unit": "ns/op",
            "extra": "1622 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1844390622,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 37305856506,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_bigcache",
            "value": 46332928323,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 15779789,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 31314116,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_bigcache",
            "value": 34045627,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2556,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "10481559 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2805,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2928,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3264,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2483113,
            "unit": "ns/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1747766974,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 94742598382,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_cachego",
            "value": 127801048986,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 9286956,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 474082973,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_cachego",
            "value": 615820834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 380,
            "unit": "ns/op",
            "extra": "3148926 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 43.5,
            "unit": "ns/op",
            "extra": "26231224 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 508,
            "unit": "ns/op",
            "extra": "2419532 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 520,
            "unit": "ns/op",
            "extra": "2121636 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1952936 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 373874,
            "unit": "ns/op",
            "extra": "3500 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1975288212,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 17876183014,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_ecache",
            "value": 23913148530,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 6902244,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 49173139,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_ecache",
            "value": 82042140,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 340,
            "unit": "ns/op",
            "extra": "3634137 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 61.6,
            "unit": "ns/op",
            "extra": "18573685 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 459,
            "unit": "ns/op",
            "extra": "2595552 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 464,
            "unit": "ns/op",
            "extra": "2593882 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 577,
            "unit": "ns/op",
            "extra": "2256565 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 344372,
            "unit": "ns/op",
            "extra": "3806 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2008820465,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 21963386558,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_ecacheLRU2",
            "value": 27311879962,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 8703655,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 77703931,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_ecacheLRU2",
            "value": 105001196,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 630,
            "unit": "ns/op",
            "extra": "1855582 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 200,
            "unit": "ns/op",
            "extra": "5583286 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 589,
            "unit": "ns/op",
            "extra": "2014240 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3089431862,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 990,
            "unit": "ns/op",
            "extra": "1127272 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 658722,
            "unit": "ns/op",
            "extra": "1771 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7527289644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 44667248749,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_freecache",
            "value": 60582555841,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 53246254,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 168266497,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_freecache",
            "value": 257729407,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 615,
            "unit": "ns/op",
            "extra": "1897501 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75,
            "unit": "ns/op",
            "extra": "16833818 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 677,
            "unit": "ns/op",
            "extra": "1768962 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 682,
            "unit": "ns/op",
            "extra": "1779592 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1167,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 666544,
            "unit": "ns/op",
            "extra": "1786 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3541195695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 49816941603,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFull_gcache",
            "value": 67975225258,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntFullGC_gcache",
            "value": 129160351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 21333236,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 99880059,
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
          "id": "a024e93ff71222a12cdde52266529c3298607ed2",
          "message": ":pig2: add cases",
          "timestamp": "2022-01-04T11:22:52+08:00",
          "tree_id": "fffdbbbf89f613e897ac15cbb823801c54a5828d",
          "url": "https://github.com/benchplus/gocache/commit/a024e93ff71222a12cdde52266529c3298607ed2"
        },
        "date": 1641266824410,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 716,
            "unit": "ns/op",
            "extra": "1476925 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 83.5,
            "unit": "ns/op",
            "extra": "14294372 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1865,
            "unit": "ns/op",
            "extra": "764053 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 768939,
            "unit": "ns/op",
            "extra": "1484 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1115,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 773347,
            "unit": "ns/op",
            "extra": "1768 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_bigcache",
            "value": 1834710353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_bigcache",
            "value": 5319344979,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_bigcache",
            "value": 49457387230,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_bigcache",
            "value": 10770102,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_bigcache",
            "value": 11314614,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_bigcache",
            "value": 188210782,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2845,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 108,
            "unit": "ns/op",
            "extra": "11043727 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3140,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3152,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3416,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2651431,
            "unit": "ns/op",
            "extra": "1251 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_cachego",
            "value": 1750652347,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_cachego",
            "value": 9762706369,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_cachego",
            "value": 13924762094,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_cachego",
            "value": 11634849,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_cachego",
            "value": 59403654,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_cachego",
            "value": 74757968,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 352,
            "unit": "ns/op",
            "extra": "3458780 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.4,
            "unit": "ns/op",
            "extra": "28805346 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 490,
            "unit": "ns/op",
            "extra": "2431772 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 492,
            "unit": "ns/op",
            "extra": "2435671 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 593,
            "unit": "ns/op",
            "extra": "1999422 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 357105,
            "unit": "ns/op",
            "extra": "3621 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecache",
            "value": 1719152085,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecache",
            "value": 1955830739,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecache",
            "value": 5277993154,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecache",
            "value": 7759908,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecache",
            "value": 7253795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecache",
            "value": 16982824,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 332,
            "unit": "ns/op",
            "extra": "3620136 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 59.3,
            "unit": "ns/op",
            "extra": "20086785 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 476,
            "unit": "ns/op",
            "extra": "2623754 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 460,
            "unit": "ns/op",
            "extra": "2637276 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 546,
            "unit": "ns/op",
            "extra": "2245360 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 339538,
            "unit": "ns/op",
            "extra": "3720 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_ecacheLRU2",
            "value": 2114284071,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_ecacheLRU2",
            "value": 1938798738,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_ecacheLRU2",
            "value": 4722534752,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_ecacheLRU2",
            "value": 11021349,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_ecacheLRU2",
            "value": 6128418,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_ecacheLRU2",
            "value": 14403626,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 619,
            "unit": "ns/op",
            "extra": "1928564 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 195,
            "unit": "ns/op",
            "extra": "6139788 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 581,
            "unit": "ns/op",
            "extra": "2154138 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3023038902,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1031,
            "unit": "ns/op",
            "extra": "1140028 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 644387,
            "unit": "ns/op",
            "extra": "1759 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_freecache",
            "value": 7464319731,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_freecache",
            "value": 4768444581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_freecache",
            "value": 1854181433,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_freecache",
            "value": 6441412,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_freecache",
            "value": 45133106,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_freecache",
            "value": 18391044,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 555,
            "unit": "ns/op",
            "extra": "2166265 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 75.1,
            "unit": "ns/op",
            "extra": "15943580 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 624,
            "unit": "ns/op",
            "extra": "1907133 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 621,
            "unit": "ns/op",
            "extra": "1790356 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1108,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 579295,
            "unit": "ns/op",
            "extra": "2174 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadInt_gcache",
            "value": 3700516472,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteInt_gcache",
            "value": 6463861525,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1K_gcache",
            "value": 7325299523,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadIntGC_gcache",
            "value": 11126940,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteIntGC_gcache",
            "value": 12400342,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite1KGC_gcache",
            "value": 26722697,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}