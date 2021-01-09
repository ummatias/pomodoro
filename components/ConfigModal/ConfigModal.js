import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import { useTime } from '../../context/TimeConfigs';
import { useTheme } from '../../context/ThemeContext';

const ModalBackground = styled.View`
    background-color: whitesmoke;
    height: 400px;
    width: 350px;
    border-radius: 10px;
    padding: 16px;
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
`
const HeaderModal = styled.View`
    flex: 1;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const TimeSetConfig = styled.View`
    flex: 8;
    padding: 32px 0;
    justify-content: space-around;
`
const TimeSetFild = styled.View`
    flex-direction: row;
    margin: 0 16px;
    justify-content: space-between;
    align-items: center;
`

const ColorSetConfig = styled.View`
    flex: 4;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`

const ColorPick = styled.View`
    flex: 0.3;
    flex-direction: row;
    justify-content: space-between;
`

const ColorColum = styled.View`
    flex: 0.35;
`
const ColorBase = styled.View`
    height: 25px;
    width: 25px;
    border-radius: 80px;
    background-color: ${ props => props.color };
`
const LabelText = styled.Text`
    color: #888;
    font-weight: bold;
`

const ConfigModal = ({ visibility, setVisibility, reset }) => {
    
    const { timeConfigs, setTimeConfigs } = useTime()
    const { setTheme } = useTheme()

    return(

        <Modal 
            animationType='slide'
            transparent={true}
            visible={visibility}
        >
            <ModalBackground>
                
                <HeaderModal>
                    <Text style={{color: '#AAA', fontSize: 22}}>Settings</Text>
                    <TouchableOpacity onPress={() => { setVisibility(false) }}>
                        <Icon name='times-circle' size={30} color='#AAA' />
                    </TouchableOpacity>
                </HeaderModal>

                <TimeSetConfig>
                    <TimeSetFild>
                        <LabelText>POMODORO</LabelText>
                        <NumericInput 
                            type='plus-minus'
                            initValue={timeConfigs.pomodoro/60}
                            iconStyle={{color: '#fff'}}
                            leftButtonBackgroundColor='#888'
                            rightButtonBackgroundColor='#888'
                            textColor='#666'
                            borderColor='#888'
                            rounded
                            onChange={value => {setTimeConfigs(prevState => { return { ...prevState, pomodoro: value*60}}), reset()}} />
                    </TimeSetFild>

                    <TimeSetFild>
                        <LabelText>SHORT BREAK</LabelText>
                        <NumericInput 
                            type='plus-minus' 
                            initValue={timeConfigs.shortBreak/60} 
                            iconStyle={{color: '#fff'}} 
                            leftButtonBackgroundColor='#888' 
                            rightButtonBackgroundColor='#888'
                            textColor='#666'
                            borderColor='#888' 
                            rounded
                            onChange={value =>  {setTimeConfigs(prevState => { return { ...prevState, shortBreak: value*60}}), reset()}} />
                    </TimeSetFild>

                    <TimeSetFild>
                        <LabelText>LONG BREAK</LabelText>
                        <NumericInput 
                            type='plus-minus' 
                            initValue={timeConfigs.longBreak/60} 
                            iconStyle={{color: '#fff'}} 
                            leftButtonBackgroundColor='#888' 
                            rightButtonBackgroundColor='#888' 
                            textColor='#666' 
                            borderColor='#888'
                            rounded 
                            onChange={value =>  {setTimeConfigs(prevState => { return { ...prevState, longBreak: value*60}}), reset()}} />
                    </TimeSetFild>
                </TimeSetConfig>

                <ColorSetConfig>
                    <LabelText>THEME</LabelText>

                    <ColorColum>

                        <ColorPick>
                            <TouchableOpacity onPress={() => (setTheme('#04c9be'))}><ColorBase color='#04c9be'/></TouchableOpacity>
                            <TouchableOpacity onPress={() => (setTheme('#8f040e'))}><ColorBase color='#8f040e'/></TouchableOpacity>
                            <TouchableOpacity onPress={() => (setTheme('#ed6700'))}><ColorBase color='#ed6700'/></TouchableOpacity>
                        </ColorPick>

                        <ColorPick>
                            <TouchableOpacity onPress={() => (setTheme('#06a128'))}><ColorBase color='#06a128'/></TouchableOpacity>
                            <TouchableOpacity onPress={() => (setTheme('#ff03ea'))}><ColorBase color='#ff03ea'/></TouchableOpacity>
                            <TouchableOpacity onPress={() => (setTheme('#7c03ff'))}><ColorBase color='#7c03ff'/></TouchableOpacity>
                        </ColorPick>

                    </ColorColum>
                </ColorSetConfig>
                
            </ModalBackground>
        </Modal>
    )

}

export default ConfigModal;