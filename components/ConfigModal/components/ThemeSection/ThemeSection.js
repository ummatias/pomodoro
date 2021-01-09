import React from 'react';
import styled from 'styled-components';

import ColorPicker from './components/ColorPicker/ColorPicker';

const ColorSetConfig = styled.View`
flex: 4;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 16px;
`

const ColorColum = styled.View`
flex: 0.35;
`

const LabelText = styled.Text`
color: #888;
font-weight: bold;
`

const ThemeSection = () => {
    return(
        <ColorSetConfig>
            <LabelText>THEME</LabelText>

            <ColorColum>
                <ColorPicker colors={['#04c9be', '#8f040e', '#ed6700']} />
                <ColorPicker colors={['#06a128', '#ff03ea', '#7c03ff']} />
            </ColorColum>

        </ColorSetConfig>
    )
}

export default ThemeSection;