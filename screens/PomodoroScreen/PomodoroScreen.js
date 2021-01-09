import React from 'react'
import TimerScreen from '../../components/TimerScreen/TimerScreen';
import { useTime } from '../../context/TimeConfigs';

const PomodoroScreen = () => {

    const { timeConfigs } = useTime();

    return(
        <TimerScreen type='pomodoro' time={timeConfigs.pomodoro}/>
    )
}

export default PomodoroScreen;