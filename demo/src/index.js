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

let Demo = React.createClass({
    render() {
        return (
            <div>
                <h1>react-alignment-graphic Demo</h1>
                <h2>Fixed width</h2>
                <div style={{width: '900px' }}>
                    <AlignmentGraphic blastResult={jsonResult} hitClickHandler={hitClick} hspClickHandler={hspClick} />
                </div>
                <h2>Responsive</h2>
                <div>
                    <h1>react-alignment-graphic Demo</h1>
                    <AlignmentGraphic blastResult={jsonResult.BlastOutput2[0]}
                        hitClickHandler={hitClick}
                        hspClickHandler={hspClick} />
                </div>
            </div>
        );
    }
})

render(<Demo/>, document.querySelector('#demo'))
