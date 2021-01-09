import React from 'react'
import TimerScreen from '../../components/TimerScreen/TimerScreen';
import TimeProvider from '../../context/TimeConfigs';
import { useTime } from '../../context/TimeConfigs';


const longBreakScreen = () => {

    const { timeConfigs } = useTime();

    return(
        <TimerScreen type='long break' time={timeConfigs.longBreak}/>
    )
}

export default longBreakScreen;