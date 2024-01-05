import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={35}/>}
            <TextInput style={styles.input} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flexDirection: 'row',
        padding: 20,
        width: '120%'
    },
    input: {
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "monospace": "Avenir-Roman",
        color: '#000',
        marginLeft: 30,
        flex: 1
    }
})
export default AppTextInput;