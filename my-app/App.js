import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, useTheme } from './ThemeContext'; // Assuming ThemeProvider and useTheme are correctly implemented in ThemeContext

import HomeScreen from './Screens/HomeScreen';
import MyCardsScreen from './Screens/MyCardsScreen';
import StatisticsScreen from './Screens/StatisticsScreen';
import SettingsScreen from './Screens/SettingsScreen';

import { StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { isDarkTheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? require('./assets/home_active.png') : require('./assets/home_inactive.png'); // Example of active and inactive icons
          } else if (route.name === 'My Cards') {
            iconName = focused ? require('./assets/myCards_active.png') : require('./assets/myCards_inactive.png'); // Example of active and inactive icons
          } else if (route.name === 'Statistics') {
            iconName = focused ? require('./assets/statistics_active.png') : require('./assets/statistics_inactive.png'); // Example of active and inactive icons
          } else if (route.name === 'Settings') {
            iconName = focused ? require('./assets/settings_active.png') : require('./assets/settings_inactive.png'); // Example of active and inactive icons
          }
          return (
            <Image
              source={iconName}
              style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }}
            />
          );
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: isDarkTheme ? '#292941' : 'white', // Added '#' to the color value
        },
        tabBarInactiveTintColor: isDarkTheme ? 'gray' : 'black',
        tabBarActiveTintColor: isDarkTheme ? 'lightblue' : 'blue',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
