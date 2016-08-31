import React from 'react'
import {render} from 'react-dom'

import AlignmentGraphic from '../../src'
import jsonResult from './tblastx.json';

function hitClick(evt, hit) {
    console.info("You clicked on hit ID " + hit.description[0].id);
}

function hspClick(evt, hsp) {
    console.info("HSP score is " + hsp.score);
}

// Show only the top 3 hits.
function filter(hit,i) {
    if (i < 3) {
        return true;
    }
    else {
        return false;
    }
}

let Demo = React.createClass({
    render() {
        return (
            <div>
                <h1>react-alignment-graphic Demo</h1>
                <h2>Fixed width</h2>
                <div style={{width: '900px' }}>
                    <AlignmentGraphic blastResult={jsonResult}
                        hitClickHandler={hitClick}
                        hspClickHandler={hspClick}
                    />
                </div>
                <h2>Responsive w/ filter</h2>
                <div>
                    <h1>react-alignment-graphic Demo</h1>
                    <AlignmentGraphic blastResult={jsonResult.BlastOutput2[0]}
                        hitClickHandler={hitClick}
                        hspClickHandler={hspClick}
                        hitFilter={filter}
                    />
                </div>
            </div>
        );
    }
})

render(<Demo/>, document.querySelector('#demo'))
