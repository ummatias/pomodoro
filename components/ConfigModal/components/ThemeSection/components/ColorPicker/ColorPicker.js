import React from 'react';
import styled from 'styled-components';
import ColorOption from '../ColorOption/ColorOption';

const ColorPick = styled.View`
    flex: 0.3;
    flex-direction: row;
    justify-content: space-between;
`

const ColorPicker = ({ colors }) => {
    return(
        <ColorPick>
            <ColorOption color={colors[0]} />
            <ColorOption color={colors[1]} />
            <ColorOption color={colors[2]} />
        </ColorPick>
    )
}

export default ColorPicker;