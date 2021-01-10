import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';

const Countdown = ({ reset, timeRunning, setTimeRuning, type, time, timerId, progressBar, setProgressBar,}) => {
    return(
        <>
            <CountDown
                id={`${type[0]}${timerId.toString()}`}
                until={time}
                timeToShow={['M', 'S']}
                showSeparator={true}
                onFinish={() => Alert.alert('Congratulations', selectMessage() )}
                onPress={() => {
                    setTimeRuning(!timeRunning)
                }}
                onChange={() => { setProgressBar(progressBar + 100/time)}}
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

export default Countdown;