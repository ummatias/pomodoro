import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

const TabMainIcon = () => {

    const { theme } = useTheme()

    return(
        <View>
            <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={[ theme, '#444']}>
                <Icon name='user-astronaut' size={26} color='#FFF'/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});

export default TabMainIcon;