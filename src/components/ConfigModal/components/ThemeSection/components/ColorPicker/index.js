import React from 'react';
import ColorOption from '../ColorOption';
import { Container } from './styles'

const ColorPicker = ({ colors }) => {
    return(
        <Container>
            <ColorOption color={colors[0]} />
            <ColorOption color={colors[1]} />
            <ColorOption color={colors[2]} />
        </Container>
    )
}

export default ColorPicker;