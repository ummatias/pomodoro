import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';;

const HeaderModal = styled.View`
    flex: 1;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Header = ({ close }) => {
    return(
        <HeaderModal>
            <Text style={{color: '#AAA', fontSize: 22}}>Settings</Text>
            <TouchableOpacity onPress={() => { close(false) }}>
                <Icon name='times-circle' size={30} color='#AAA' />
            </TouchableOpacity>
        </HeaderModal>
    )
}

export default Header;