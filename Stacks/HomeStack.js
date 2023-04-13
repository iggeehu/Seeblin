import 'react-native-gesture-handler';
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import Home from '../Screens/Home'
import Settings from '../Screens/Settings'
import Profile from '../Screens/Profile'




const Stack = createNativeStackNavigator();

function HomeStack(){
    return(
   
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

    )
}

export default HomeStack;