import { useTheme } from '../../../../../../context/ThemeContext';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const ColorBase = styled.View`
    height: 25px;
    width: 25px;
    border-radius: 80px;
    background-color: ${ props => props.color };
`

const ColorOption = ({ color }) => {

    const { setTheme } = useTheme()

    return(
        <TouchableOpacity onPress={() => (setTheme(color))}><ColorBase color={color}/></TouchableOpacity>
    )
}

export default ColorOption;