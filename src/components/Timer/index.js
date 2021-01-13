import React from 'react';
import CircularBar from './components/CircularBar';
import Countdown from './components/Countdown';

import { Container, TitleWrapper, TimerMold, Title } from './styles';

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

            <Container>

                <TitleWrapper>
                    <Title>{type.toUpperCase()}</Title>
                </TitleWrapper>

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
                
            </Container>
    )
}

export default Timer;