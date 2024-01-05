import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import MyMemoriesScreen from '../screen/MyMemoriesScreen';
import NewPhotosScreen from '../screen/NewPhotosScreen';
import AppColours from '../config/AppColours';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';


const TabNavigator = () => (
    <AppTab.Navigator TabBarOptions={{activeTintColor:AppColours.other, activeBackgroundColor:AppColours.primaryColour}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home" iconColor={AppColours.primaryColour} backgroundColor={AppColours.other}/>}}/>
        <AppTab.Screen name="NewPhotos" component={NewPhotosScreen} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" iconColor={AppColours.primaryColour} backgroundColor={AppColours.other}/>}}/>
        <AppTab.Screen name="MyMemories" component={MyMemoriesScreen} options={{tabBarIcon: () => <AppIcon size={30} name="book-open-variant" iconColor={AppColours.primaryColour} backgroundColor={AppColours.other}/>}}/>
    </AppTab.Navigator>
)

export default TabNavigator; 