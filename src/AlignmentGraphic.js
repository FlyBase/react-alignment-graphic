import React, { Component, PropTypes } from 'react';
import {Stage, Layer, Group, Rect } from 'react-konva';
import {scaleLinear} from 'd3-scale';

import Query from './Query';
import Hits from './Hits';
import SlideRule from './SlideRule';

class AlignmentGraphic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRulerVisible: false,
            currentX: 0,
        };
        this.showRuler = this.showRuler.bind(this);
        this.hideRuler = this.hideRuler.bind(this);

    }

    showRuler(evt) {
        console.debug("Show ruler event");
        const x = evt.target.getStage().getPointerPosition().x;
        this.setState({
            isRulerVisible: true,
            currentX: x
        });
    }

    hideRuler(evt) {
        console.debug("Hide ruler event");
        this.setState({ isRulerVisible: false });
        evt.cancelBubble = true;
    }

    render() {
        const report = this.props.blastResult.BlastOutput2[0].report;
        const search = report.results.search;
        const seqLen = search.query_len;
        const padding = 50;
        const trackHeight = 11;
        const canvasWidth = this.props.width - (padding * 2);
        let numHsps = 0;
        search.hits.forEach((hit) => {
            numHsps += hit.hsps.length;
        });
        const canvasHeight = ((numHsps * trackHeight) < 200) ? 200 : numHsps * trackHeight;

        const rectStart       = 30;               // Padding to the left of the rectangle.
        const rectEnd         = canvasWidth - 50; // Padding to the right.
        
        // A scale to map the sequence coordinate scale to pixels.
        const scale           = scaleLinear().domain([1,seqLen]).range([rectStart,rectEnd]);
        const rulerLabel      = 'Position ' + Math.round(scale.invert(this.state.currentX));
        return (
            <Stage width={canvasWidth} height={canvasHeight}>
                <Layer
                    onClick={(evt) => this.showRuler(evt)}
                    onTap={(evt) => this.showRuler(evt)}>
                    <Group>
                        {/** 
                           Transparent rectangle for event listening.

                           This is a workaround for listening to events on the entire canvas, not just shapes.
                           You can also use Stage content events, but these don't follow the normal event
                           bubbling rules.
                          **/}
                        <Rect
                            x={rectStart} y={30} width={rectEnd-rectStart+1} height={canvasHeight - 30}
                            opacity={0} fill='black' 
                        />
                    </Group>
                    <Group> 
                        <Query scale={scale} rectStart={rectStart} rectWidth={scale(seqLen) - rectStart} />
                        <Hits y={70} hits={search.hits} scale={scale} setCurrentHit={this.setCurrentHit} />
                    </Group>
                    <Group visible={this.state.isRulerVisible}>
                        <SlideRule 
                            labelEventHandler={this.hideRuler}
                            x={this.state.currentX}
                            y={30}
                            label={rulerLabel}
                            lineHeight={canvasHeight}
                            />
                    </Group>
                </Layer>
            </Stage>
        );
    }
}

AlignmentGraphic.propTypes = {
    blastResult: PropTypes.shape({
        BlastOutput2: PropTypes.arrayOf(
            PropTypes.shape({
                report: PropTypes.object
            })
        ),
    }).isRequired,
    width: PropTypes.number.isRequired
};

AlignmentGraphic.defaultProps = {
};
export default AlignmentGraphic;