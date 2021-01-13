import { useTheme } from '../../../../../../context/ThemeContext';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ColorBase } from './styles';


const ColorOption = ({ color }) => {

    const { setTheme } = useTheme()

    return(
        <TouchableOpacity onPress={() => (setTheme(color))}><ColorBase color={color}/></TouchableOpacity>
    )
}

export default ColorOption;