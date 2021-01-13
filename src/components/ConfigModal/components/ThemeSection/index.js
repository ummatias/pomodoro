import React from 'react';
import { Container, ColorColum, LabelText} from './styles';
import ColorPicker from './components/ColorPicker';

const ThemeSection = () => {
    return(
        <Container>
            <LabelText>THEME</LabelText>

            <ColorColum>
                <ColorPicker colors={['#04c9be', '#8f040e', '#ed6700']} />
                <ColorPicker colors={['#06a128', '#ff03ea', '#7c03ff']} />
            </ColorColum>

        </Container>
    )
}

export default ThemeSection;