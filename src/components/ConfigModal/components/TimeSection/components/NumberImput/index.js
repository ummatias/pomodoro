import React from 'react';
import NumericInput from 'react-native-numeric-input';
import { useTime } from '../../../../../../context/TimeConfigs';
import { Container, LabelText } from './styles';

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
        <Container>
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
        </Container>
    )
}

export default NumberInput;