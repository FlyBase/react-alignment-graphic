import React from 'react'
import {render} from 'react-dom'

import AlignmentGraphic from '../../src'
import jsonResult from './tblastx.json';

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-alignment-graphic Demo</h1>
      <AlignmentGraphic blastResult={jsonResult}/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
