# react-alignment-graphic

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Description

This is a [React](http://facebook.github.io/react/) component for displaying the results of alignment tools such
as [BLAST](http://blast.ncbi.nlm.nih.gov/Blast.cgi) and [BLAT](http://genome.ucsc.edu/cgi-bin/hgBlat) (*coming soon*).
It utilizes the [Konva](https://konvajs.github.io/) HTML Canvas library (via [react-konva](https://github.com/lavrton/react-konva))
to render an interactive overview graphic of your alignment results.

It **does not** display any text of the alignment result.

## Features

* HTML Canvas presentation of BLAST results.
* Works within responsive or fixed width containers.

## Currently supported alignment 

* NCBI BLAST 2.4.0
* BLAT - *in progress*

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
