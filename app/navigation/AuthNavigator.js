import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import TabNavigator from './TabNavigator';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'SIGN IN'}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{title: 'REGISTER'}}/>
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;