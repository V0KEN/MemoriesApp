import React from 'react';
import { View, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
import AppListitem from '../components/AppListitem';
import AppText from '../components/AppText';

const blurRadiusValue = Platform.OS === 'android' ? 0.2 : 1.3

function HomeScreen({route, navigation}) {

    return (
        <AppScreen style={styles.container}>
            <ImageBackground
                style={styles.background}
                source = {require("../assets/bluewater.jpeg")}
                blurRadius ={blurRadiusValue}>

            <AppText style={styles.pageName}>mindler</AppText>


            <View style={styles.profileContainer}>
                <AppListitem 
                    image={route.params.paramImage}
                    title={route.params.paramName}
                    subtitle={route.params.paramEmail}/>
            </View>
            <View>
                <AppText style={styles.title}>MY MEMORIES</AppText>
            </View>
            
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate("MyMemories")}>
                    <Image
                        style={styles.image}
                        resizeMode='cover'
                        source = {require("../assets/kyak.jpeg")}>
                    </Image>
                </TouchableOpacity>
            </View>

            <View style={styles.storiesContainer}>
                <AppText style={styles.storiesTitle}>STORIES</AppText>
                <View style={styles.stories}>
                    <ScrollView 
                        horizontal={true}
                        contentContainerStyle={{marginLeft:20}}>
                        <Image
                            style={{height: 90, width: 90, borderRadius: 75, marginRight: 18,
                            borderColor: '#fccc63', borderWidth: 2}}
                            source={require("../assets/biglake.jpeg")}>
                        </Image>
                        <Image
                            style={{height: 90, width: 90, borderRadius: 75, marginRight: 18,
                                borderColor: '#fccc63', borderWidth: 2}}
                            source={require("../assets/cap.jpeg")}>
                        </Image>
                        <Image
                            style={{height: 90, width: 90, borderRadius: 75, marginRight: 18,
                                borderColor: '#fccc63', borderWidth: 2}}
                            source={require("../assets/city.jpeg")}>
                        </Image>
                        <Image
                            style={{height: 90, width: 90, borderRadius: 75, marginRight: 18,
                                borderColor: '#fccc63', borderWidth: 2}}
                            source={require("../assets/chinatown.jpeg")}>
                        </Image>
                        <Image
                            style={{height: 90, width: 90, borderRadius: 75, marginRight: 18,
                                borderColor: '#fccc63', borderWidth: 2}}
                            source={require("../assets/library.jpeg")}>
                        </Image>
                        <Image
                            style={{height: 90, width: 90, borderRadius: 75, marginRight: 18,
                                borderColor: '#fccc63', borderWidth: 2}}
                            source={require("../assets/ramen.jpeg")}>
                        </Image>
                    </ScrollView>
                </View>
            </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
     container: {
         marginTop: 0,
         backgroundColor: AppColours.primaryColour,
     },
     background: {
        flex: 1,
        backgroundColor: AppColours.white,
    },
     welcomeContainer: {
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 0,
     },
     profileContainer: {
         marginTop: 30,
         height: 125,
         width: '95%',
         alignSelf: 'center',
         backgroundColor: AppColours.shadeOfGray,
         justifyContent: 'center',
         borderRadius: 20,
     },
     title: {
        fontSize: 18,
        color: 'white',
        marginTop: 38,
        marginBottom: 22,
        marginLeft: 10,
     },
     image: {
        height: 248,
        width: '95%',
        borderRadius: 20,
        alignSelf: 'center'
     },
     storiesContainer: {
        marginTop: 55,
        marginLeft: 10,
     },
     storiesTitle: {
        color: 'white',
        marginBottom: 10
     },
     pageName: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
     }
})
export default HomeScreen;