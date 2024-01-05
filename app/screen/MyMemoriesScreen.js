import React, {useState} from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
import DataManager from '../config/DataManager';
import AppPicker from '../components/AppPicker';
import AppText from '../components/AppText';
import AppIcon from '../components/AppIcon';


const blurRadiusValue = Platform.OS === 'android' ? 0.2 : 1.3

const getPhotos = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user)
}

const categories = [
    {label: "Family", value:1, icon:"home-heart", backgroundColor: "red"},
    {label: "Food", value:2, icon:"noodles", backgroundColor: "blue"},
    {label: "Outing", value:3, icon:"bag-carry-on", backgroundColor: "green"}
];

function MyMemoriesScreen({navigation}) {
    const photolist = getPhotos();
    const[category, setCategory] = useState("");

    console.log(photolist);
    return (
        <AppScreen style={styles.container}>
            <ImageBackground
                style={styles.background}
                source = {require("../assets/bluewater.jpeg")}
                blurRadius ={blurRadiusValue}>
                
                <View style={styles.pageNameContainer}>
                    <View style={styles.iconContainer}> 
                        <TouchableOpacity onPress={()=> navigation.navigate("NewPhotos")}>
                            <AppIcon 
                            name = "plus-circle"
                            size = {42}
                            backgroundColor = {AppColours.white}
                            iconColor = {AppColours.shadeOfGray2}></AppIcon>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AppIcon
                            name = "pencil"
                            size = {42}
                            backgroundColor = {AppColours.white}
                            iconColor = {AppColours.shadeOfGray2}></AppIcon>
                        </TouchableOpacity>
                    </View>
                    <AppText style={styles.pageName}>My memories</AppText>
                </View>

                <AppPicker style={styles.optionBar}
                    selectedItem={category}
                    onSelectItem = {item => setCategory(item)}
                    data={categories} 
                    icon="apps"
                    placeholder="Categories"
                    numColumns={3}>
                </AppPicker>

                <FlatList
                    data = {photolist}
                    keyExtractor = {photo => photo.photoid.toString()}
                    renderItem = {({item}) => 
                        <TouchableOpacity onPress={()=> navigation.navigate("MyPhoto")}>
                            <AppCard
                                date={item.date}
                                image={item.image}
                            />
                        </TouchableOpacity>}
                        
                />
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColours.gray,
        flex:1,
        marginTop: 0,
    },
    background: {
        flex: 1,
        backgroundColor: AppColours.white,
    },
    optionBar: {
        justifyContent: 'center',
        marginBottom: 28
    },
    pageNameContainer: {
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        marginBottom: 35,
    },
    iconContainer: {
        flexDirection: 'row-reverse',
        marginLeft: 6,
        width: 100,
        justifyContent: 'space-between'
    },
    pageName: {
        color: AppColours.white,
        fontSize: 23,
        fontWeight: 'bold'
    }
})

export default MyMemoriesScreen;