
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

- [Continuous Bencmark Result (click here) ](https://benchplus.github.io/gocache/dev/bench/)

<table style="text-align: center">
   <tr>
      <td></td>
      <td><a href="https://github.com/allegro/bigcache"><strong>bigcache</strong></a></td>
      <td><a href="https://github.com/FishGoddess/cachego"><strong>cachego</strong></a></td>
      <td><a href="https://github.com/orca-zhang/ecache"><strong>ecache</strong></a></td>
      <td><a href="https://github.com/coocood/freecache"><strong>freecache</strong></a></td>
      <td><a href="https://github.com/kpango/gache"><strong>gache</strong></a></td>
      <td><a href="https://github.com/bluele/gcache"><strong>gcache</strong></a></td>
      <td><a href="https://github.com/patrickmn/go-cache"><strong>go-cache</strong></a></td>
      <td><a href="https://github.com/hlts2/gocache"><strong>gocache</strong></a></td>
   </tr>
   <tr>
      <td>PutInt</td>
      <td>:airplane:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>GetInt</td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td>:rocket:</td>
      <td></td>
      <td></td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td></td>
   </tr>
   <tr>
      <td>Put1K</td>
      <td></td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td></td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>Put1M</td>
      <td>:x:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:x:</td>
      <td></td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>PutTinyObject</td>
      <td>:airplane:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td></td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>ChangeOutAllInt</td>
      <td>:airplane:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td></td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyReadInt</td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
      <td></td>
      <td>:airplane:</td>
      <td>:rocket:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyReadIntGC</td>
      <td></td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
      <td></td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWriteInt</td>
      <td>:rocket:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
      <td>:rocket:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWriteIntGC</td>
      <td>:rocket:</td>
      <td></td>
      <td>:airplane:</td>
      <td>:airplane:</td>
      <td></td>
      <td></td>
      <td>:rocket:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWrite1K</td>
      <td>:x:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
      <td></td>
      <td>:airplane:</td>
      <td></td>
   </tr>
   <tr>
      <td>HeavyWrite1KGC</td>
      <td>:x:</td>
      <td></td>
      <td>:rocket:</td>
      <td>:rocket:</td>
      <td></td>
      <td></td>
      <td>:airplane:</td>
      <td></td>
   </tr>
</table>

> :x: for very-slow, :airplane: for fast, :rocket: for very-fast.

# Default parameters

- 256 shards * 32 items, 10s expiration

- `gcache` is 256 shards as default

- set `value` as `key+1` when `int` cases

# Misc

- create a issue to add new libraries
