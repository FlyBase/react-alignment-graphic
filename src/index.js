import React, { PropTypes } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import AlignmentGraphic from './AlignmentGraphic';

function AlignmentWrapper(props) {
    return (
        <ContainerDimensions>
            { ({ width }) => <AlignmentGraphic width={width} {...props} /> }
        </ContainerDimensions>
    );
}

AlignmentWrapper.propTypes = {
    blastResult: PropTypes.object.isRequired,
};

export default AlignmentWrapper;
