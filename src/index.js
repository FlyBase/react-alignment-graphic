import React, { PropTypes } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import AlignmentCanvas from './AlignmentCanvas';

function AlignmentGraphic(props) {
    return (
        <ContainerDimensions>
        { ({ width }) => (
            <AlignmentCanvas {...props} width={width} />
        )}
        </ContainerDimensions>
    );
}

AlignmentGraphic.propTypes = {
    blastResult: PropTypes.object.isRequired,
};

export default AlignmentGraphic;
