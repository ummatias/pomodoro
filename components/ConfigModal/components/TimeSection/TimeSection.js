import React from 'react';
import styled from 'styled-components';
import NumberInput from './components/NumberImput/NumberInput';

import { useTime } from '../../../../context/TimeConfigs';

const TimeSetConfig = styled.View`
    flex: 8;
    padding: 32px 0;
    justify-content: space-around;
`
const TimeSection = () => {

    const { timeConfigs } = useTime()

    return(
        <TimeSetConfig>
            <NumberInput label="POMODORO" initValue={timeConfigs.pomodoro} type="pomodoro"/>
            <NumberInput label="SHORT BREAK" initValue={timeConfigs.shortBreak} type="shortBreak"/>
            <NumberInput label="LONG BREAK" initValue={timeConfigs.longBreak} type="longBreak"/>
        </TimeSetConfig>
    )
}

export default TimeSection;