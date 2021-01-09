import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PomodoroScreen from './screens/PomodoroScreen/PomodoroScreen';
import ShortBreakScreen from './screens/ShortBreakScreen/ShortBreakScreen';
import LongBreakScreen from './screens/LongBreakScreen/LongBreakScreen';
import TimeProvider from './context/TimeConfigs';
import ThemeProvider from './context/ThemeContext';
import Navigation from './navigation/Navigation';
import TabMainIcon from './navigation/TabMainIcon';

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

