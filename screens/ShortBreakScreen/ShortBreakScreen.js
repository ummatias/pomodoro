import React from 'react';
import TimerScreen from '../../components/TimerScreen/TimerScreen';
import { useTime } from '../../context/TimeConfigs';


const ShortBreakScreen = () => {

    const { timeConfigs } = useTime();

    return(
        <TimerScreen type='short break' time={timeConfigs.shortBreak} />
    )
}

export default ShortBreakScreen;