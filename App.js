import * as React from 'react';
import {
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';




import { HomeScreen, ProfileScreen, AlertsScreen } from './screens';
import {RegisterScreen} from './auth';
import {LoginScreen} from './auth';

import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
});

const StackHome = createStackNavigator();

function HomeStack({navigation, route}) {
  if (route.state && route.state.routeNames[route.state.index] === "HomeDetail" ) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}
const StackProfile = createStackNavigator();

function ProfileStack({navigation, route}) {
  if (route.state && route.state.routeNames[route.state.index] === "ProfileDetail" ) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen
        name="Profile"
        component={ProfileScreen}
        options={navOptionHandler}
      />
    </StackProfile.Navigator>
  );
}
const StackAlerts = createStackNavigator();

function AlertsStack({navigation, route}) {
  if (route.state && route.state.routeNames[route.state.index] === "AlertsDetail" ) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackAlerts.Navigator initialRouteName="Alerts">
      <StackAlerts.Screen
        name="Alerts"
        component={AlertsScreen}
        options={navOptionHandler}
      />
    </StackAlerts.Navigator>
  );
}












function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'crosshairs'
              : 'crosshairs'
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'crosshairs'
              : 'crosshairs'
          } else if (route.name === 'Alerts'){
            iconName= focused
            ? 'bell'
            : 'bell'
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} 
            resizeMode="contain" style={{marginTop:6}} />;
          },
      })} 
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style:{backgroundColor:'white',}
      }}
    >
     <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Alerts" component={AlertsStack} />
  
    
    </Tab.Navigator>
  );
}



const StackApp = createStackNavigator()

export default function App() {
  return <NavigationContainer>
<StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={TabNavigator}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Login"
        component={LoginScreen}
        options={navOptionHandler}
      />
       <StackApp.Screen
        name="Register"
        component={RegisterScreen}
        options={navOptionHandler}
      />
      <StackApp.Screen
      name="Profile"
      component={ProfileScreen}
      options={navOptionHandler}
      />
        <StackApp.Screen
      name="Alerts"
      component={AlertsScreen}
      options={navOptionHandler}
      />
    </StackApp.Navigator>
  </NavigationContainer>;
}