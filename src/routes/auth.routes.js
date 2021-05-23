import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
//Pages
import SignIn from '../pages/SignIn'

const AuthStack = createStackNavigator()

function AuthRoutes (){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen  name="SignIn" component={SignIn}/>
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;