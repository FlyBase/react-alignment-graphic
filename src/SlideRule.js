import React, { PropTypes } from 'react';
import { Group, Label, Tag, Line, Text } from 'react-konva';

function SlideRule(props) {
    const { label, x, y, lineHeight, lineColor, lineOpacity } = props;
    const y2 = y + lineHeight;


    return (
        <Group>
            <Label onClick={(evt) => props.labelEventHandler(evt)} id="slideRuleLabel" x={x} y={y}>
                <Tag fill='black'
                    opacity={0.5}
                    pointerDirection='down'
                    pointerWidth={10}
                    pointerHeight={10}
                    lineJoin='round'
                    shadowColor='black'
                    shadowBlur={10}
                    shadowOffset={10}
                    shadowOpacity={0.5} />
                <Text text={label} padding={5} fill='white' />
            </Label>
            <Line points={[x,y,x,y2]} dash={[10,15]} stroke={lineColor} opacity={lineOpacity} />
        </Group>
    );
}

SlideRule.propTypes = {
    label: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    lineHeight: PropTypes.number,
    lineColor: PropTypes.string,
    lineOpacity: PropTypes.number,
    labelEventHandler: PropTypes.func,
};

SlideRule.defaultProps = {
    label: '',
    x: 0,
    y: 0,
    lineHeight: 10,
    lineColor: 'black',
    lineOpacity: 0.2,
    labelEventHandler: () => {},
};

export default SlideRule;
