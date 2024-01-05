import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppIcon from './AppIcon';
import AppText from './AppText';

function AppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon name={icon} iconColor="white" backgroundColor={backgroundColor}/>
            <AppText>{label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width:"33%",
        justifyContent:"center",
        alignItems:"center",
    }
})

export default AppPickerItem;