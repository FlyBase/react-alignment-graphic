import React, { Component, PropTypes } from 'react';
import { Group, Rect } from 'react-konva';

import Hsp from './Hsp';

class Hit extends Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);
        this.handleClickTap = this.handleClickTap.bind(this);
        this.state = {
            isActive: false,
        };
    }

    toggleActive(evt) {
        this.setState({isActive: !this.state.isActive});
    }

    handleClickTap(evt) {
        this.props.hitClickHandler(evt, this.props.hit);
    }

    render() {
        const { y, scale, hit, hitX, hitW, hitH } = this.props;
        const hsps = hit.hsps;
        let currentY = y;

        let hspElems = [];
        for (const hsp of hsps) {
            const height = 7;
            const x = scale(hsp.query_from);
            const width = scale(hsp.query_to) - x;
            hspElems.push(
                <Hsp hsp={hsp} x={x} y={currentY} key={hsp.num}
                    width={width} height={height}
                    score={hsp.bit_score}
                    highlight={this.state.isActive}
                    hspClickHandler={this.props.hspClickHandler}
                    />
            );
            currentY += (3 + height);
        }

        return (
            <Group
                onMouseEnter={this.toggleActive}
                onMouseLeave={this.toggleActive}
                onClick={this.handleClickTap}
                onTap={this.handleClickTap}>
                {/** 
                   Shape for event listening only.
                  **/}
                <Rect
                    x={hitX} y={y} width={hitW} height={hitH}
                    opacity={0} fill='white' />
                {hspElems}
            </Group>
        );
    }
}

Hit.propTypes = {
    hit: PropTypes.shape({
        hsps: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    scale: PropTypes.func.isRequired,
    y: PropTypes.number,
    hitX: PropTypes.number,
    hitW: PropTypes.number,
    hitH: PropTypes.number,
    hitClickHandler: PropTypes.func,
    hspClickHandler: PropTypes.func,
};

Hit.defaultProps = {
    y: 0,
    hitX: 0,
    hitW: 0,
    hitH: 0,
}

export default Hit;
