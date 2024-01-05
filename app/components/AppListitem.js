import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';


import AppColours from '../config/AppColours';
import AppText from './AppText';

function AppListitem({image, title, subtitle, IconComponent, onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableOpacity onPress={onPress} underlayColor={AppColours.other}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        height: 95,
        width: 95,
        borderRadius: 75,
        marginLeft: 20,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        alignSelf: 'center',
    },
    title: {
        fontWeight: 'normal', 
        fontSize: 20   
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    }
})
export default AppListitem;