import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PomodoroScreen from './src/screens/PomodoroScreen';
import ShortBreakScreen from './src/screens/ShortBreakScreen';
import LongBreakScreen from './src/screens/LongBreakScreen';
import TimeProvider from './src/context/TimeConfigs';
import ThemeProvider from './src/context/ThemeContext';
import Navigation from './src/navigation';
import TabMainIcon from './src/navigation/TabMainIcon';

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <ThemeProvider>
      <TimeProvider>
        <Navigation Tab={Tab}>
            <Tab.Screen name='SHORTBREAKSCREEN' component={ShortBreakScreen} />
            <Tab.Screen
              name='POMODORO' 
              component={PomodoroScreen} 
              options={() => ({
                tabBarIcon: () => (
                  <TabMainIcon />
                )
              })}
            />
            <Tab.Screen name='LONGBREAKSCREEN' component={LongBreakScreen} />
        </Navigation>
      </TimeProvider>
    </ThemeProvider>
  );
}

