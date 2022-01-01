window.BENCHMARK_DATA = {
  "lastUpdate": 1641080266752,
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
          "id": "e4d463d6a603cfeeb042d7d4cdfd28508d4f9a0d",
          "message": ":hamster: fix space for bigcache",
          "timestamp": "2022-01-01T19:54:27+08:00",
          "tree_id": "ce8554f515e0939a8294afa9e310d217c519a99f",
          "url": "https://github.com/benchplus/gocache/commit/e4d463d6a603cfeeb042d7d4cdfd28508d4f9a0d"
        },
        "date": 1641041905986,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1373,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 136,
            "unit": "ns/op",
            "extra": "8915430 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2156,
            "unit": "ns/op",
            "extra": "522652 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 921782,
            "unit": "ns/op",
            "extra": "1526 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1400,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 977029,
            "unit": "ns/op",
            "extra": "1500 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2374697456,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 50312120996,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 30163654,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 41340560,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3076,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 132,
            "unit": "ns/op",
            "extra": "8445392 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3476,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3617,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3778,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 3038302,
            "unit": "ns/op",
            "extra": "1034 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2125227966,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 160232222520,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 9643907,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 766870859,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 600,
            "unit": "ns/op",
            "extra": "1981185 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 61.4,
            "unit": "ns/op",
            "extra": "19594026 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 682,
            "unit": "ns/op",
            "extra": "1776542 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 661,
            "unit": "ns/op",
            "extra": "1734128 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 830,
            "unit": "ns/op",
            "extra": "1486036 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 610817,
            "unit": "ns/op",
            "extra": "2029 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2088361871,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 44499178962,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9230811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 154870735,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 534,
            "unit": "ns/op",
            "extra": "2215682 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 86.5,
            "unit": "ns/op",
            "extra": "13164909 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 592,
            "unit": "ns/op",
            "extra": "1981356 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 592,
            "unit": "ns/op",
            "extra": "2034904 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 669,
            "unit": "ns/op",
            "extra": "1715776 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 555247,
            "unit": "ns/op",
            "extra": "2281 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2894602425,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 80455063074,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 10974189,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 315012863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 795,
            "unit": "ns/op",
            "extra": "1455661 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 247,
            "unit": "ns/op",
            "extra": "4861633 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 796,
            "unit": "ns/op",
            "extra": "1423584 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3262082001,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1256,
            "unit": "ns/op",
            "extra": "913358 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 818307,
            "unit": "ns/op",
            "extra": "1473 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8856356177,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 68082953240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 60040512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 292245930,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 687,
            "unit": "ns/op",
            "extra": "1712575 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.1,
            "unit": "ns/op",
            "extra": "13481433 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 791,
            "unit": "ns/op",
            "extra": "1559870 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 777,
            "unit": "ns/op",
            "extra": "1546592 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1388,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 767164,
            "unit": "ns/op",
            "extra": "1804 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4405737091,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 79215677793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 280200096,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 21401759,
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
          "id": "a43d6163d27a6733eebce9ab328955137d9dc6eb",
          "message": ":herb: revert space param",
          "timestamp": "2022-01-01T21:03:26+08:00",
          "tree_id": "afbf4eb13c8bee990101ac36fdc86ba39449f656",
          "url": "https://github.com/benchplus/gocache/commit/a43d6163d27a6733eebce9ab328955137d9dc6eb"
        },
        "date": 1641042960306,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1198,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 108,
            "unit": "ns/op",
            "extra": "10500928 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1964,
            "unit": "ns/op",
            "extra": "790624 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1181157,
            "unit": "ns/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1266,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 818920,
            "unit": "ns/op",
            "extra": "1446 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2036400605,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 46601705903,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 38673129,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 35327383,
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
            "value": 122,
            "unit": "ns/op",
            "extra": "9713101 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3150,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3075,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3514,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2555240,
            "unit": "ns/op",
            "extra": "1276 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1958227239,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 134872291885,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 9184006,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 614403304,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 412,
            "unit": "ns/op",
            "extra": "2883690 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 47.1,
            "unit": "ns/op",
            "extra": "25994442 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 606,
            "unit": "ns/op",
            "extra": "1892596 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 599,
            "unit": "ns/op",
            "extra": "1905865 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 739,
            "unit": "ns/op",
            "extra": "1461386 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 434179,
            "unit": "ns/op",
            "extra": "3141 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1923400451,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 46215168664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 8080905,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 117819464,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 385,
            "unit": "ns/op",
            "extra": "3164379 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 63.7,
            "unit": "ns/op",
            "extra": "17049640 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 537,
            "unit": "ns/op",
            "extra": "2219847 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 542,
            "unit": "ns/op",
            "extra": "2228191 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 614,
            "unit": "ns/op",
            "extra": "1962484 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 396604,
            "unit": "ns/op",
            "extra": "3235 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2206070174,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 49037479340,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8401319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 129353550,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 705,
            "unit": "ns/op",
            "extra": "1668866 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 226,
            "unit": "ns/op",
            "extra": "5456097 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 673,
            "unit": "ns/op",
            "extra": "1775899 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4749639914,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1168,
            "unit": "ns/op",
            "extra": "1016880 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 744726,
            "unit": "ns/op",
            "extra": "1574 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8234858949,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 65798316478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 68560399,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 240390276,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 651,
            "unit": "ns/op",
            "extra": "1856179 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 84.6,
            "unit": "ns/op",
            "extra": "14299996 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 716,
            "unit": "ns/op",
            "extra": "1682932 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 733,
            "unit": "ns/op",
            "extra": "1711440 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1220,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 642395,
            "unit": "ns/op",
            "extra": "2004 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4297041272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 83329330445,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 17090113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 211973795,
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
          "id": "71048d03fbf7b4b4d5954fe7e17416ad26ae8550",
          "message": ":fries: latest version",
          "timestamp": "2022-01-02T07:03:24+08:00",
          "tree_id": "a19c86ba6c1ac5c773c9f4d01ef670893b752d09",
          "url": "https://github.com/benchplus/gocache/commit/71048d03fbf7b4b4d5954fe7e17416ad26ae8550"
        },
        "date": 1641078851359,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1167,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 114,
            "unit": "ns/op",
            "extra": "10289182 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1955,
            "unit": "ns/op",
            "extra": "799226 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1199947,
            "unit": "ns/op",
            "extra": "1130 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1424,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 877569,
            "unit": "ns/op",
            "extra": "1515 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 2078963579,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 49371291158,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 25559312,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 37677166,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3005,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 131,
            "unit": "ns/op",
            "extra": "9190480 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3396,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 3172,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3645,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2653414,
            "unit": "ns/op",
            "extra": "1113 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2073216901,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 143594860165,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 14518118,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 851367119,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 451,
            "unit": "ns/op",
            "extra": "2632596 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 49.8,
            "unit": "ns/op",
            "extra": "23753024 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 641,
            "unit": "ns/op",
            "extra": "1857548 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 634,
            "unit": "ns/op",
            "extra": "1817182 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 785,
            "unit": "ns/op",
            "extra": "1506285 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 458640,
            "unit": "ns/op",
            "extra": "2767 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1992737261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 50332123658,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 18919207,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 173743701,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 403,
            "unit": "ns/op",
            "extra": "2967630 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 68.8,
            "unit": "ns/op",
            "extra": "16968494 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 571,
            "unit": "ns/op",
            "extra": "2157586 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 558,
            "unit": "ns/op",
            "extra": "2140147 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 669,
            "unit": "ns/op",
            "extra": "1821061 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 408806,
            "unit": "ns/op",
            "extra": "2906 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2575664551,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 51439473466,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 29563285,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 200012696,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 792,
            "unit": "ns/op",
            "extra": "1539891 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 246,
            "unit": "ns/op",
            "extra": "5126287 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 679,
            "unit": "ns/op",
            "extra": "1685164 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4699071916,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1200,
            "unit": "ns/op",
            "extra": "918199 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 743110,
            "unit": "ns/op",
            "extra": "1548 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8497619547,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 69334683673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 78124895,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 309634083,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 689,
            "unit": "ns/op",
            "extra": "1681567 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 89.9,
            "unit": "ns/op",
            "extra": "13374369 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 751,
            "unit": "ns/op",
            "extra": "1558694 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 752,
            "unit": "ns/op",
            "extra": "1619234 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1338,
            "unit": "ns/op",
            "extra": "912380 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 681456,
            "unit": "ns/op",
            "extra": "1795 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4563912991,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 86855543837,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 414365642,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 20295747,
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
          "id": "71048d03fbf7b4b4d5954fe7e17416ad26ae8550",
          "message": ":fries: latest version",
          "timestamp": "2022-01-02T07:03:24+08:00",
          "tree_id": "a19c86ba6c1ac5c773c9f4d01ef670893b752d09",
          "url": "https://github.com/benchplus/gocache/commit/71048d03fbf7b4b4d5954fe7e17416ad26ae8550"
        },
        "date": 1641079702642,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1275,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 140,
            "unit": "ns/op",
            "extra": "7777341 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 2066,
            "unit": "ns/op",
            "extra": "484012 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1062813,
            "unit": "ns/op",
            "extra": "1242 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1452,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 1063665,
            "unit": "ns/op",
            "extra": "1219 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 3178850786,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 53746329030,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 16429130,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 41939746,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 3210,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 133,
            "unit": "ns/op",
            "extra": "7916238 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 3293,
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
            "value": 4038,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2945017,
            "unit": "ns/op",
            "extra": "982 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 2112337895,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 161619163840,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 11869906,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 931630162,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 529,
            "unit": "ns/op",
            "extra": "2350124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 58.4,
            "unit": "ns/op",
            "extra": "21249046 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 707,
            "unit": "ns/op",
            "extra": "1600548 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 693,
            "unit": "ns/op",
            "extra": "1780120 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 860,
            "unit": "ns/op",
            "extra": "1453242 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 514467,
            "unit": "ns/op",
            "extra": "2578 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 2187398219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 49677492384,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 9008005,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 213938673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 461,
            "unit": "ns/op",
            "extra": "2657586 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 82.2,
            "unit": "ns/op",
            "extra": "14429956 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 641,
            "unit": "ns/op",
            "extra": "1909502 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 643,
            "unit": "ns/op",
            "extra": "1919774 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 718,
            "unit": "ns/op",
            "extra": "1658971 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 465937,
            "unit": "ns/op",
            "extra": "2473 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 2777208963,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 51349676721,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 216669260,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 9696302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 826,
            "unit": "ns/op",
            "extra": "1493755 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 256,
            "unit": "ns/op",
            "extra": "4623530 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 799,
            "unit": "ns/op",
            "extra": "1599682 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 4910333730,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1355,
            "unit": "ns/op",
            "extra": "856275 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 858995,
            "unit": "ns/op",
            "extra": "1384 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 8836979874,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 70764275590,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 66376112,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 312896351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 730,
            "unit": "ns/op",
            "extra": "1545724 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 90.9,
            "unit": "ns/op",
            "extra": "12879278 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 781,
            "unit": "ns/op",
            "extra": "1538658 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 856,
            "unit": "ns/op",
            "extra": "1467264 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1360,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 738906,
            "unit": "ns/op",
            "extra": "1731 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 4384772932,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 80594910187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 334047084,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 21280306,
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
          "id": "7e306529e32f132ee6cedb5ded476fa8c5ae0e92",
          "message": ":cake: version updated",
          "timestamp": "2022-01-02T07:29:18+08:00",
          "tree_id": "4767660b4eae100bd491c909cf1692689692e670",
          "url": "https://github.com/benchplus/gocache/commit/7e306529e32f132ee6cedb5ded476fa8c5ae0e92"
        },
        "date": 1641080266174,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPutInt_bigcache",
            "value": 1072,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_bigcache",
            "value": 88,
            "unit": "ns/op",
            "extra": "12409123 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_bigcache",
            "value": 1992,
            "unit": "ns/op",
            "extra": "708496 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_bigcache",
            "value": 1141789,
            "unit": "ns/op",
            "extra": "1291 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_bigcache",
            "value": 1158,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_bigcache",
            "value": 805299,
            "unit": "ns/op",
            "extra": "1824 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_bigcache",
            "value": 1876662283,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_bigcache",
            "value": 42114157671,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_bigcache",
            "value": 7860901,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_bigcache",
            "value": 30636372,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_cachego",
            "value": 2718,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_cachego",
            "value": 94.9,
            "unit": "ns/op",
            "extra": "11092017 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_cachego",
            "value": 2948,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_cachego",
            "value": 2967,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_cachego",
            "value": 3385,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_cachego",
            "value": 2421427,
            "unit": "ns/op",
            "extra": "1358 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_cachego",
            "value": 1830757187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_cachego",
            "value": 124362535479,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_cachego",
            "value": 13023485,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_cachego",
            "value": 578415580,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecache",
            "value": 369,
            "unit": "ns/op",
            "extra": "3104929 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecache",
            "value": 41.7,
            "unit": "ns/op",
            "extra": "28534150 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecache",
            "value": 539,
            "unit": "ns/op",
            "extra": "2174390 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecache",
            "value": 554,
            "unit": "ns/op",
            "extra": "2209544 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecache",
            "value": 652,
            "unit": "ns/op",
            "extra": "1845333 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecache",
            "value": 378697,
            "unit": "ns/op",
            "extra": "3435 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecache",
            "value": 1581634797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecache",
            "value": 42332938865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecache",
            "value": 123506964,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecache",
            "value": 11066851,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_ecacheLRU2",
            "value": 336,
            "unit": "ns/op",
            "extra": "3599306 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_ecacheLRU2",
            "value": 58.4,
            "unit": "ns/op",
            "extra": "20418027 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_ecacheLRU2",
            "value": 472,
            "unit": "ns/op",
            "extra": "2510271 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_ecacheLRU2",
            "value": 441,
            "unit": "ns/op",
            "extra": "2582662 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_ecacheLRU2",
            "value": 519,
            "unit": "ns/op",
            "extra": "2264095 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_ecacheLRU2",
            "value": 334520,
            "unit": "ns/op",
            "extra": "4045 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_ecacheLRU2",
            "value": 1993074783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_ecacheLRU2",
            "value": 42580141790,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_ecacheLRU2",
            "value": 8974822,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_ecacheLRU2",
            "value": 118518520,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_freecache",
            "value": 605,
            "unit": "ns/op",
            "extra": "2073741 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_freecache",
            "value": 178,
            "unit": "ns/op",
            "extra": "6533514 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_freecache",
            "value": 596,
            "unit": "ns/op",
            "extra": "1979455 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_freecache",
            "value": 3052652613,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_freecache",
            "value": 1015,
            "unit": "ns/op",
            "extra": "989590 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_freecache",
            "value": 617116,
            "unit": "ns/op",
            "extra": "1778 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_freecache",
            "value": 7034182336,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_freecache",
            "value": 58343002490,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_freecache",
            "value": 45265310,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_freecache",
            "value": 213327657,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPutInt_gcache",
            "value": 531,
            "unit": "ns/op",
            "extra": "2282151 times\n2 procs"
          },
          {
            "name": "BenchmarkGetInt_gcache",
            "value": 66.4,
            "unit": "ns/op",
            "extra": "15890919 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1K_gcache",
            "value": 594,
            "unit": "ns/op",
            "extra": "2016384 times\n2 procs"
          },
          {
            "name": "BenchmarkPut1M_gcache",
            "value": 590,
            "unit": "ns/op",
            "extra": "2041081 times\n2 procs"
          },
          {
            "name": "BenchmarkPutTinyObject_gcache",
            "value": 1065,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkChangeOutAllInt_gcache",
            "value": 563152,
            "unit": "ns/op",
            "extra": "2390 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyRead_gcache",
            "value": 3540821499,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWrite_gcache",
            "value": 72503859132,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyReadGC_gcache",
            "value": 11866863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHeavyWriteGC_gcache",
            "value": 176931296,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}