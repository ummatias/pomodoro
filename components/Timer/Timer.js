import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

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

    const { theme } = useTheme()

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
                    <LinearGradient colors={['#29323c', '#485563']} style={{padding: 20, borderRadius: 400}}>
                        <AnimatedCircularProgress
                            size={280}
                            width={20}
                            fill={progress}
                            tintColor={theme}
                            rotation={1}
                            backgroundColor='#222'
                        >

                        {
                            () => (
                                <>
                                    <CountDown
                                        id={`${type[0]}${timerId.toString()}`}
                                        until={setedTime}
                                        timeToShow={['M', 'S']}
                                        showSeparator={true}
                                        onFinish={() => Alert.alert('Congratulations', selectMessage() )}
                                        onPress={() => {
                                            setTimeRuning(!timeRunning)
                                        }}
                                        onChange={() => { setProgress(progress + 100/setedTime)}}
                                        size={45}
                                        timeLabels={[]}
                                        running={timeRunning}
                                        digitStyle={{backgroundColor: 'transparent'}}
                                        digitTxtStyle={{color: '#DDD', fontSize: 80}}
                                        separatorStyle={{color: '#DDD'}}
                                    />
                                    <TouchableOpacity onPress={() => reset() }>
                                        <Icon name='repeat' size={25} color='#DADADA' />
                                    </TouchableOpacity>
                                </>
                            )
                        }
                        </AnimatedCircularProgress>
                    </LinearGradient>
                </TimerMold>
            </TimerWrapper>
    )
}

export default Timer;