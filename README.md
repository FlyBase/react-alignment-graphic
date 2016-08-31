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

## Installation

```
npm install react-alignment-graphic
```
or to save as a dependency of your project
```
npm install --save react-alignment-graphic
```

## Example

Via webpack / ES6.

```jsx
import React from 'react';
import {render} from 'react-dom';

import AlignmentGraphic from 'react-alignment-graphic';

// Read in your BLAST result in the JSON format.
const jsonBlastResult = {};

// The following will render a canvas image in the <div id="graphic"></div> element.
render(React.createClass({
    render() {
        return (
            <div>
                <AlignmentGraphic blastResult={jsonResult.BlastOutput2[0]} />
            </div>
        );
    }
}),document.getElementsById('#graphic'));
```
## Events

This component supports hooks into two types of click events (or tap on mobile).

* Click/Tap on an entire Hit (group of HSPs).
* Click/Tap on an individual HSP.

Using the prop names below on the AlignmentGraphic element, you can pass a
reference to a function that you want fired when the event is detected.

*Parameters*

**hitClickHandler** - Arguments are the event object fired and the hit object clicked.

**hspClickHandler** - Arguments are the event object fired and the HSP object clicked.

### Example

```jsx

// Prints out the ID of the HIT from the BLAST JSON result.
function printID(evt, hit) {
    console.info("You clicked on hit ID " + hit.description[0].id);
}

// The following will render a canvas image in the <div id="graphic"></div> element.
render(React.createClass({
    render() {
        return (
            <div>
                <AlignmentGraphic blastResult={jsonResult.BlastOutput2[0]} hitClickHandler={printID}/>
            </div>
        );
    }
}),document.getElementsById('#graphic'));
```

## Filtering

If you want to filter the hits displayed, you can pass a filter callback funciton via the 
`hitFilter` property.

The callback should follow the [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
syntax.  The element passed to it is the hit object in the JSON result.

## JSON Format

This plugin has only been tested with the JSON format used by NCBI BLAST+ 2.4.0.
You can pass either the enitre file or the first element of the BlastOutput2 array.

If you pass the entire file, only the first report of the JSON output will be rendered.

## Features

* HTML Canvas presentation of BLAST results.
* Works within responsive or fixed width containers.

## Currently supported alignment 

* NCBI BLAST 2.4.0
* BLAT - *in progress*

## TODOs

* Unit Tests!!!!
* Test corner cases of BLAST output.
* Implement BLAT.
* Better layout handling via a layout algorithm (WebCola, etc)?

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
