import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';

import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const categories = [
    {label: "Adventure", value:1, icon:"airplane-takeoff", backgroundColor: "red"},
    {label: "Thriller", value:2, icon:"ghost", backgroundColor: "blue"},
    {label: "Fiction", value:3, icon:"flash", backgroundColor: "green"}
];


function MyPhotosScreen(props) {
    const[title, setTitle] = useState("");
    const[subtitle, setSubtitle] = useState("");
    const[category, setCategory] = useState("");

    return (
        <AppScreen style={{backgroundColor:AppColours.primaryColour}}>
            <AppTextInput
                icon="image"
                placeholder="Photo title"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
            />
            <AppTextInput
                icon="calendar-month"
                placeholder="Photo taken on"
                value={subtitle}
                onChangeText={(inputText) => setSubtitle(inputText)}
            />
            <AppPicker 
                selectedItem={category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps"
                placeholder="Categories"
                numColumns={3}>
            </AppPicker>

            <AppButton title='Add Photo' onPress={() => console.log(title, subtitle, category.label)}/>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    
})
export default MyPhotosScreen;