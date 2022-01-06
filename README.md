
<p align="center">Simple performance comparison of cache libraries written in golang.</p>
<p align="center">
  <a href="https://github.com/benchplus/gocache/actions?query=workflow%3A%22gocache%22" alt="action status">
    <img src="https://github.com/benchplus/gocache/workflows/gocache/badge.svg"/>
  </a>
  <a href="https://benchplus.github.io/gocache/dev/bench/" alt="report">
    <img src="https://img.shields.io/badge/report-click--me-brightgreen.svg?style=flat">
  </a>
</p>

# Reports

[Continuous Bencmark Result (click here) ](https://benchplus.github.io/gocache/dev/bench/)



<table style="text-align: center">
   <tr>
      <td>case</td>
      <td>bigcache</td>
      <td>cachego</td>
      <td>ecache</td>
      <td>freecache</td>
      <td>gcache</td>
   </tr>
   <tr>
      <td>PutInt</td>
      <td>:airplane:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
   </tr>
   <tr>
      <td>GetInt</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td>:rocket:</td>
      <td></td>
      <td>:airplane:</td>
   </tr>
   <tr>
      <td>Put1K</td>
      <td></td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
   </tr>
   <tr>
      <td>PutTinyObject</td>
      <td>:airplane:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
   </tr>
   <tr>
      <td>ChangeOutAllInt</td>
      <td>:airplane:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
   </tr>
   <tr>
      <td>HeavyReadInt</td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
      <td>:airplane:</td>
   </tr>
   <tr>
      <td>HeavyReadIntGC</td>
      <td>:airplane:</td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWriteInt</td>
      <td>:rocket:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWriteIntGC</td>
      <td>:rocket:</td>
      <td></td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWrite1K</td>
      <td>:x:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWrite1KGC</td>
      <td>:x:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
   </tr>
</table>


# Default parameters

- 256 shards * 32 items, 10s expiration

- `gcache` is 256 shards as default

- set `value` as `key+1` when `int` cases

# Libraries

- [bigcache](https://github.com/allegro/bigcache)
  - slow down when data bigger than 1K

- [cachego](https://github.com/FishGoddess/cachego)

- [ecache](https://github.com/orca-zhang/ecache)

- [freecache](https://github.com/coocood/freecache)
  - slow down when data bigger than 1M

- [gcache](https://github.com/bluele/gcache)

- create a issue to add new libraries
