import React, { PropTypes } from 'react';
import {Group, Rect } from 'react-konva';

import QueryTicks from './QueryTicks';

function Query(props) {

    const { scale, x, y, rectStart, rectWidth, color, height } = props;

    return (
        <Group>
            <Rect
                id='query'
                x={x + rectStart} y={y+30} width={rectWidth - x} height={height}
                fill={color}
                shadowBlur={10}
            />
            <QueryTicks y={50} scale={scale} />
        </Group>
    );
}

Query.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    scale: PropTypes.func.isRequired,
    rectStart: PropTypes.number.isRequired,
    rectWidth: PropTypes.number.isRequired,
    height: PropTypes.number,
    color: PropTypes.string,
    showPosition: PropTypes.bool,
};

Query.defaultProps = {
    x: 0,
    y: 0,
    color: '#FFAB40',
    height: 15,
    showPosition: false,
}

export default Query;
