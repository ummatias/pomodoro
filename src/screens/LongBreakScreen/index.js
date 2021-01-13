import React from 'react'
import TimerScreen from '../../components/TimerScreenDefault'
import { useTime } from '../../context/TimeConfigs';


const longBreakScreen = () => {

    const { timeConfigs } = useTime();

    return(
        <TimerScreen type='long break' time={timeConfigs.longBreak}/>
    )
}

export default longBreakScreen;