import React from 'react';
import { Container } from './styles';
import { useTime } from '../../../../context/TimeConfigs';
import NumberInput from './components/NumberImput';


const TimeSection = () => {

    const { timeConfigs } = useTime()

    return(
        <Container>
            <NumberInput label="POMODORO" initValue={timeConfigs.pomodoro} type="pomodoro"/>
            <NumberInput label="SHORT BREAK" initValue={timeConfigs.shortBreak} type="shortBreak"/>
            <NumberInput label="LONG BREAK" initValue={timeConfigs.longBreak} type="longBreak"/>
        </Container>
    )
}

export default TimeSection;