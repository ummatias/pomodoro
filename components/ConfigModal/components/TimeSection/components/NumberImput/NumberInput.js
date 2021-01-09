import React from 'react';
import NumericInput from 'react-native-numeric-input';
import styled from 'styled-components';

import { useTime } from '../../../../../../context/TimeConfigs';


const LabelText = styled.Text`
    color: #888;
    font-weight: bold;
`
const TimeSetFild = styled.View`
    flex-direction: row;
    margin: 0 16px;
    justify-content: space-between;
    align-items: center;
`

const NumberInput = ({ label, initValue, type }) => {

    const { setTimeConfigs } = useTime()


    const handleChange = (value) =>{
        switch (type) {
            case 'pomodoro':
                return setTimeConfigs((prevState) =>  { return { ...prevState,  pomodoro: value*60 }})

            case 'shortBreak':
                return setTimeConfigs((prevState) => { return { ...prevState,  shortBreak: value*60 }})

            case 'longBreak':
                return setTimeConfigs((prevState) => { return { ...prevState,  longBreak: value*60 } })
        }
    }

    return(
        <TimeSetFild>
            <LabelText>{label}</LabelText>
            <NumericInput 
                type='plus-minus' 
                initValue={initValue/60} 
                iconStyle={{color: '#fff'}} 
                leftButtonBackgroundColor='#888' 
                rightButtonBackgroundColor='#888' 
                textColor='#666' 
                borderColor='#888'
                rounded 
                onChange={value => handleChange(value)} />
        </TimeSetFild>
    )
}

export default NumberInput;