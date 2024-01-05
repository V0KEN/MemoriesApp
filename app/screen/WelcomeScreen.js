import React from 'react';
import { View, StyleSheet, ImageBackground, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColours from '../config/AppColours';
import AppButton from '../components/AppButton';


const blurRadiusValue = Platform.OS === 'android' ? 0.2 : 1.3

function WelcomeScreeen({navigation}) {

    return (
        <AppScreen>
            <ImageBackground
                style={styles.background}
                source = {require("../assets/we.jpeg")}
                blurRadius ={blurRadiusValue}>

                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons style={styles.searchIcon}
                    name = "message-outline"
                    size = {50}
                    color = {AppColours.white}></MaterialCommunityIcons>
                    <AppText style={styles.appName}>mindler</AppText>
                </View>

                <View style={styles.LoginButtonContainer}>
                    <AppText style={styles.welcomeMsg}>Welcome mindlers</AppText>
                    <AppButton title = "Log on" color = "white" onPress={() => navigation.navigate("Login")}/>
                </View>

                <View style={styles.RegisterButtonContainer}>
                    <AppText style={styles.introMsg}>Create an account to collect memories</AppText>
                    <AppButton title = "Sign up" color = "white" onPress={()=> navigation.navigate("Register")}/>
                </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: AppColours.primaryColour,
    },
    appName: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold'
    },
    searchIcon: {
       marginRight: 10, 
       marginTop: 10
    },
    welcomeContainer: {
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },
    LoginButtonContainer: {
        marginTop: 70,
        marginLeft: 30,
        alignSelf: 'baseline',
        justifyContent: 'space-between',
        height: 90,
        width: '48%',
    },
    welcomeMsg: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    RegisterButtonContainer: {
        marginTop: 450,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 122,
        width: '57%',
        alignSelf: 'center',
    },
    introMsg: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center', 
    }
})
export default WelcomeScreeen;