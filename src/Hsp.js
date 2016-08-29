import React, { Component, PropTypes } from 'react';
import { Rect } from 'react-konva';

class Hsp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
        };
    }

    componentWillMount() {
        this.setState({
            color: this.scoreToColor(this.props.score,this.props.highlight),
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            color: this.scoreToColor(nextProps.score,nextProps.highlight),
        });
    }

    scoreToColor(score, highlight = false) {
        if (highlight) {
            if (score >= 200) return '#E57373';
            if (score < 200 && score >= 80) return '#F06292';
            if (score < 80 && score >= 50) return '#81C784';
            if (score < 50 && score >= 40) return '#64B5F6';
            if (score < 40) return '#757575';
        }
        else {
            if (score >= 200) return '#E53935';
            if (score < 200 && score >= 80) return '#D81B60';
            if (score < 80 && score >= 50) return '#43A047';
            if (score < 50 && score >= 40) return '#1E88E5';
            if (score < 40) return '#E0E0E0';
        }
        return '#000000';
    }

    render() {
        const { x, y, width, height, score } = this.props;
        return (
            <Rect
                x={x} y={y} width={width} height={height}
                fill={this.state.color} 
                stroke='black' strokeWidth={1}
            />
        );
    }
}

Hsp.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    score: PropTypes.number,
    highlight: PropTypes.bool,
};

Hsp.defaultProps = {
    score: 0,
    highlight: false,
}

export default Hsp;
