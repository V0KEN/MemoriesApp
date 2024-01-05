import React, {useState} from 'react';
import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from './AppText';
import AppScreen from './AppScreen';
import AppPickerItem from './AppPickerItem';

function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={24}/>}
                    <AppText style={styles.text}>{selectedItem? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppPickerItem
                            onPress={()=> {
                                setModalVisible(false);
                                onSelectItem(item);
                                }
                            }
                            label={item.label}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                            />}
                        />
                </AppScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        width: '95%',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    text: {
        flex: 1,
        fontSize: 20
    }
})
export default AppPicker;