import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import AppColours from '../config/AppColours';

function AppCard({image, date, onSwipeLeft, onPress}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
                <View style={styles.container}>
                    <ImageBackground source={image} style={styles.image}>
                    <View style={styles.textContainer}>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    </ImageBackground>
                </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColours.cream,
        height: 280,
        borderRadius: 20,
        overflow: "hidden",
        margin: 10,
    },
    image: {
        height: 280,
        width: "100%",
    },
    textContainer: {
        paddingTop: 230,
    },
    date: {
        color: 'white',
        fontWeight: "bold",
        fontFamily: "Avenir-Roman",
        fontSize: 25,
        paddingLeft: 20,
    }
})
export default AppCard;