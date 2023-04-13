import 'react-native-gesture-handler';
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'


const Stack = createNativeStackNavigator();

function SignInStack(){
    console.log("signed in")
    return(

            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>

    )
}

export default SignInStack;