import React, { Component, PropTypes } from 'react';
import { Group, Rect } from 'react-konva';
import { v4 } from 'node-uuid';

import Hsp from './Hsp';

class Hit extends Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);

        this.state = {
            isActive: false,
        };
        //this._isMounted = false;
    }

    /**
     * Checking for mounted state is generally frowned upon.
     * However, it is done here do to how the canvas 
     */
    /*componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
        }*/

    toggleActive(evt, isActive = this.state.isActive) {
        this.setState({isActive: !isActive});
    }

    render() {
        const { y, scale, hsps, hitX, hitW, hitH } = this.props;
        let currentY = y;

        let hspElems = [];
        for (const hsp of hsps) {
            const height = 7;
            const x = scale(hsp.query_from);
            const width = scale(hsp.query_to) - x;
            hspElems.push(
                <Hsp x={x} y={currentY} key={hsp.num}
                    width={width} height={height}
                    score={hsp.score}
                    highlight={this.state.isActive} />
            );
            currentY += (3 + height);
        }

        return (
            <Group>
                {hspElems}
                {/** 
                   Event listening shape.
                  **/}
                <Rect
                    x={hitX} y={y} width={hitW} height={hitH}
                    opacity={0} fill='black' 
                    onMouseEnter={this.toggleActive}
                    onMouseLeave={this.toggleActive}
                />
            </Group>
        );
    }
}

Hit.propTypes = {
    hsps: PropTypes.arrayOf(PropTypes.object).isRequired,
    scale: PropTypes.func.isRequired,
    y: PropTypes.number,
    hitX: PropTypes.number,
    hitW: PropTypes.number,
    hitH: PropTypes.number,
};

Hit.defaultProps = {
    y: 0,
    hitX: 0,
    hitW: 0,
    hitH: 0,
}

export default Hit;
