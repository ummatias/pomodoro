import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '../context/ThemeContext';

const Navigation = ({ children, Tab }) => {
  
  const { theme } = useTheme()

  return(
      <NavigationContainer >
        <Tab.Navigator 
          initialRouteName="POMODORO"
          screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                switch (route.name) {
                  case 'SHORTBREAKSCREEN':
                    iconName='hourglass-start'
                    break;
                  
                  case 'LONGBREAKSCREEN':
                    iconName='hourglass-end'
                    break;
                  case 'POMODORO':
                    iconName='user-astronaut'
                    break;
                }
                return <Icon name={iconName} size={size} color={color} />
              },
          })}

            tabBarOptions={{
              activeTintColor: theme,
              inactiveTintColor: '#DDD',
              showLabel: false,
              activeBackgroundColor: '#222',
              inactiveBackgroundColor: '#222',    
            }}
        >
            {children}
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Navigation;