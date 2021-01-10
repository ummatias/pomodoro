import React from 'react';
import styled from 'styled-components';
import CircularBar from './components/CircularBar/CircularBar';
import Countdown from './components/Countdown/Countdown';

const TimerWrapper = styled.View`
    flex: 10;
    align-items: center;
    justify-content: center;
`
const TimerMold = styled.View`
    flex: 4;
    padding: 20px;
    border-radius: 400px;
`

const Title = styled.Text`
    color: #AAA;
    font-weight: bold;
    font-size: 24px;

`

const TtileWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Timer = ({ 
    setedTime, 
    type,
    timeRunning,
    setTimeRuning,
    progress,
    setProgress,
    timerId,
    reset
}) => {

    

    const selectMessage = () => {
        if(type === 'pomodoro') return 'You got it! Now go get some rest!'
        return  "Nice! Let's go work again!";
    }

    return( 

            <TimerWrapper>
                <TtileWrapper>
                    <Title>{type.toUpperCase()}</Title>
                </TtileWrapper>
                <TimerMold>
                    <CircularBar progress={progress}>
                        <Countdown
                            reset={reset}
                            time={setedTime}
                            timerId={timerId}
                            type={type}
                            timeRunning={timeRunning} 
                            setTimeRuning={setTimeRuning}
                            progressBar={progress}
                            setProgressBar={setProgress}
                        />
                    </CircularBar>
                </TimerMold>
            </TimerWrapper>
    )
}

export default Timer;