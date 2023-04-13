import 'react-native-gesture-handler';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignInStack from './Stacks/SignInStack'
import HomeStack from './Stacks/HomeStack'

import  SignIn  from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import  Home  from './Screens/Home'
import Settings from './Screens/Settings'
import Profile from './Screens/Profile'

const getAuthStatus = () => {
  return false
}

const Stack = createNativeStackNavigator();

export default function App() {

  const isAuthed= getAuthStatus();

  return (
        <NavigationContainer>
          <Stack.Navigator>
             {isAuthed ? (
             <Stack.Screen name="Home" component={Home} />):(
             <Stack.Screen name="SignIn" component={SignIn} />)}
          </Stack.Navigator>
        </NavigationContainer>

  )
}

