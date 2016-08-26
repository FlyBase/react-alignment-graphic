import React, { PropTypes } from 'react';
import { Group } from 'react-konva';
import { v4 } from 'node-uuid';

import Hsp from './Hsp';

function Hits(props) {
    const { y, scale, hits } = props;
    let currentY = y;

    const hitElems = hits.map((hit,i) => {
        return (
            <Group key={v4()} >
                { hit.hsps.map((hsp, j) => {
                    const height = 7;
                    const x = scale(hsp.query_from);
                    const width = scale(hsp.query_to) - x;
                    currentY += (3 + height);
                    
                    return (
                        <Hsp x={x} y={currentY} key={v4()}
                            width={width} height={height}
                            score={hsp.score} />
                    );
                })}
            </Group>
        );
    });

    return (
        <Group>
            {hitElems}
        </Group>
    );
}

Hits.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    scale: PropTypes.func.isRequired,
    y: PropTypes.number,
};

Hits.defaultProps = {
    y: 0,
}

export default Hits;
