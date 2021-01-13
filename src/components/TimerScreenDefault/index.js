import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Timer from '../Timer';
import ConfigModal from '../ConfigModal';
import { Container, ConfigApp } from './styles';

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
            <Container>
                    
                <ConfigModal 
                    visibility={modalVisibility}
                    setVisibility={setModalVisibility} 
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

            </Container>
        </LinearGradient>
    )
}

export default TimerScreen;
