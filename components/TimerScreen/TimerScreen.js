import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Timer from '../Timer/Timer';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import ConfigModal from '../ConfigModal/ConfigModal';

const TimerAppScreen = styled.View`
    flex: 1;
    margin-top: 65px;
`
const ConfigApp = styled.View`
    flex: 1;
    margin: 0 16px;
    align-items: center;
    justify-content: center;
`

const TimerScreen = ({ type, time }) => {

    const [ modalVisibility, setModalVisibility] = useState(false);

    const [ theme, setTheme ] = useState('#04c9be')

    {/*Timer Settings*/}

    const [ timeRunning, setTimeRuning ] = useState(false)
    const [ progress, setProgress ] = useState(0)
    const [ timerId, setTimerId] = useState(1)


    const reset = () => {
        setTimeRuning(false)
        setProgress(0)
        setTimerId(timerId + 1)
    }

    const Tab = createBottomTabNavigator();

    return(
        <LinearGradient colors={['#29323c', '#485563']} style={{flex: 1}}>
            <TimerAppScreen>
                    
                <ConfigModal 
                    visibility={modalVisibility}
                    setVisibility={setModalVisibility} 
                    changeTheme={setTheme}
                    reset={reset}
                />
                
                <ConfigApp>
                    <TouchableOpacity onPress={() => { setModalVisibility(true)}}>
                        <Icon name='gear' size={30} color='#DDD' light />
                    </TouchableOpacity>
                </ConfigApp>
                
                <Timer 
                    color={theme}
                    setedTime={time}
                    type={type}
                    timeRunning={timeRunning}
                    setTimeRuning={setTimeRuning}
                    progress={progress}
                    setProgress={setProgress}
                    setTimerId={setTimerId}
                    timerId={timerId}
                    reset={reset}
                />

            </TimerAppScreen>
        </LinearGradient>
    )
}

export default TimerScreen;
