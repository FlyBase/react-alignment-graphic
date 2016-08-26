import React, { PropTypes } from 'react';
import { Group, Text, Line } from 'react-konva';
import { v4 } from 'node-uuid';

function QueryTicks(props) {
    const {scale, y, tickLength, tickColor} = props;
    const range = scale.range();
    const width = range[1] - range[0];
    //Reduce the number of ticks if the screen is small.
    const ticks = (width > 400) ? scale.ticks() : scale.ticks(3);

    const tickElems = ticks.map((tick) => {
        const x = scale(tick);
        const y2 = y + tickLength;

        return (
            <Group key={v4()}>
                <Line points={[x,y,x,y2]} stroke={tickColor} opacity={0.5} />
                <Text x={x-10} y={y2} fill='black' text={tick} fontSize={12} />
            </Group>
        );
    });

    return (
        <Group>
            {tickElems}
        </Group>
    );
}

QueryTicks.propTypes = {
    scale: PropTypes.func.isRequired,
    y: PropTypes.number,
    tickLength: PropTypes.number,
    tickColor: PropTypes.string,
};

QueryTicks.defaultProps = {
    y: 0,
    tickLength: 10,
    tickColor: 'black',
}

export default QueryTicks;
