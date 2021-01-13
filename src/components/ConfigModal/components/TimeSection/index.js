import React from 'react';
import { Container } from './styles';
import { useTime } from '../../../../context/TimeConfigs';
import NumberInput from './components/NumberImput';


const TimeSection = ({ reset }) => {

    const { timeConfigs } = useTime()

    return(
        <Container>
            <NumberInput reset={reset} label="POMODORO" initValue={timeConfigs.pomodoro} type="pomodoro"/>
            <NumberInput reset={reset} label="SHORT BREAK" initValue={timeConfigs.shortBreak} type="shortBreak"/>
            <NumberInput reset={reset} label="LONG BREAK" initValue={timeConfigs.longBreak} type="longBreak"/>
        </Container>
    )
}

export default TimeSection;