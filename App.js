import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from 'react-native-vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';
import Dogs from './Dogs';
import Cats from './Cats';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer >
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
      
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-house'
                : 'ios-information-circle-outline';
                return <FontAwesome5 name="house-user" size={24} color={color} />
            } else if (route.name === 'Dogs') {
              iconName = focused ? 'ios-dog' : 'ios-dog';
              return <FontAwesome5 name="dog" size={24} color={color} />
            } else if (route.name === 'Cats') {
              iconName = focused ? 'ios-dog' : 'ios-dog';
              return <FontAwesome5 name="cat" size={24} color={color} />
            }
      
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        })}
        >
          <Tab.Screen name="Dogs" component={Dogs} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cats" component={Cats} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;