import React from 'react'
import {render} from 'react-dom'

import AlignmentGraphic from '../../src'
import jsonResult from './tblastx.json';

let Demo = React.createClass({
    render() {
        return (
            <div>
                <h1>react-alignment-graphic Demo</h1>
                <h2>Fixed width</h2>
                <div style={{width: '900px' }}>
                    <AlignmentGraphic blastResult={jsonResult}/>
                </div>
                <h2>Responsive</h2>
                <div>
                    <h1>react-alignment-graphic Demo</h1>
                    <AlignmentGraphic blastResult={jsonResult.BlastOutput2[0]}/>
                </div>
            </div>
        );
    }
})

render(<Demo/>, document.querySelector('#demo'))
