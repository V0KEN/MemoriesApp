import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screen/HomeScreen';
import MyMemoriesScreen from '../screen/MyMemoriesScreen';
import MyPhotoScreen from '../screen/MyPhotoScreen';


const HomeStack = createStackNavigator();

const HomeNavigator = () => (
    <HomeStack.Navigator >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:true}}/>
        <HomeStack.Screen name="MyMemories" component={MyMemoriesScreen} />
        <HomeStack.Screen name="MyPhoto" component={MyPhotoScreen} />
    </HomeStack.Navigator>
)

export default HomeNavigator;