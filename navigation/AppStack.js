import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {AuthScreen, AskScreen} from '../screens'
import { AuthContext } from '../contexts/AuthContext'
import React from "react";

const Stack = createNativeStackNavigator();

const AppStack = () =>{
    const {loading} = React.useContext(AuthContext)
    
    if(loading) return null
    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="auth">
                <Stack.Screen name='auth' component={AuthScreen}/>
                <Stack.Screen name='ask' component={AskScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack