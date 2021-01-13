import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTheme } from '../../../../context/ThemeContext';

const CircularBar = ({ children, progress }) => {
    
    const { theme } = useTheme()
    
    return(

        <LinearGradient colors={['#29323c', '#485563']} style={{padding: 20, borderRadius: 400}}>
            <AnimatedCircularProgress
                size={280}
                width={20}
                fill={progress}
                tintColor={theme}
                rotation={1}
                backgroundColor='#222'
            >
                {() => (
                
                 children
            
                )}

            </AnimatedCircularProgress>
        </LinearGradient>
    )
}

export default CircularBar;