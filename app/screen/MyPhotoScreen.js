import React, {useState} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native';

import AppIcon from '../components/AppIcon';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
import AppText from '../components/AppText';

const blurRadiusValue = Platform.OS === 'android' ? 0.2 : 1.3

const initialPhotoList = [
    {
        id:1,
        image: require("../assets/family.jpeg"),
    },
    {
        id:2,
        image: require("../assets/city.jpeg"),
    },
    {
        id:3,
        image: require("../assets/fashion.jpeg"),
    },
    {
        id:4,
        image: require("../assets/biglake.jpeg"),
    },
    {
        id:5,
        image: require("../assets/work.jpeg"),
    },
    {
        id:6,
        image: require("../assets/yumyum.jpeg"),
    },
    {
        id:7,
        image: require("../assets/chinatown.jpeg"),
    }, 
]


function MyPhotoScreen({navigation}) {

        const[refreshing, setRefreshing] = useState(false);

        //function that reset a list of items after delete
        const[photos, setPhotos] = useState(initialPhotoList);

        const handleDelete = (photo) => {
            const newPhotoList = photos.filter (item => item.id !== photo.id);
            setPhotos(newPhotoList);
        }

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
                    <AppText style={styles.pageName}>As you go on</AppText>
                </View>

            <FlatList
            data = {photos}
            keyExtractor = { photo => photo.id.toString()}
            refreshing ={refreshing}
            onRefresh={() => setPhotos(initialPhotoList)}
            renderItem = {({item})=> 
                <AppCard 
                    image={item.image}
                    onSwipeLeft={() => (
                    <TouchableOpacity style={styles.deleteView} onPress={() => handleDelete(item)}>
                        <View >
                                <AppIcon 
                                    name="trash-can" 
                                    iconColor={AppColours.white}
                                    size={70}
                                />
                            
                        </View>
                    </TouchableOpacity>)}
                />}
            />
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColours.primaryColour,
        flex:1,
    },
    background: {
        flex: 1,
        backgroundColor: AppColours.white,
    },
    deleteView:{
        backgroundColor: AppColours.red,
        width: '40%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
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
export default MyPhotoScreen;