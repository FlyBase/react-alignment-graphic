import React, { PropTypes } from 'react';
import { Group } from 'react-konva';
import { v4 } from 'node-uuid';

import { min, max } from 'd3-array';

import Hit from './Hit';


function Hits(props) {
    const { y, scale, hits } = props;
    let currentY = y;

    let hitElems = [];
    for (const hit of hits) {
        // Figure out the extent of the entire hit so we can wrap it in 
        // an event listening rectangle.
        const hitX = scale(min(hit.hsps,(hsp) => hsp.query_from));
        const hitW = scale(max(hit.hsps,(hsp) => hsp.query_to)) - hitX;
        const hitH = 10 * hit.hsps.length;  // 10px per hit.

        hitElems.push(
            <Hit key={hit.num} hit={hit}
                scale={scale} y={currentY}
                hitX={hitX} hitW={hitW}
                hitH={hitH}
                hitClickHandler={props.hitClickHandler}
                hspClickHandler={props.hspClickHandler}
            />
        );
        currentY = currentY + (hitH); 
    }

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
    hitClickHandler: PropTypes.func,
    hspClickHandler: PropTypes.func,
};

Hits.defaultProps = {
    y: 0,
}

export default Hits;
