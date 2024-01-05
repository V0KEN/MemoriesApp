import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppColours from '../config/AppColours';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email(),
        password: Yup.string().required().min(4).max(12),
    }
);

const users = [
    {
        id: "user1",
        name:"Winter Soldier",
        email:"winter.soldier@gmail.com",
        password:"1922",
        image: require('../assets/bucky.jpg')
    },
    {
        id: "user2",
        name:"Steve Rogers",
        email:"captain.steve@yahoo.com",
        password:"1945",
        image: require('../assets/cap.jpeg')
    },
];

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    )
};

const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);
}

function LoginScreen({navigation}) {

    return (
        <AppScreen style={styles.container}>
            <Formik
                initialValues={{email:'', password: '',}}
                onSubmit = {(values, {resetForm}) => {
                    if(validateUser(values)) {
                        resetForm();
                        createUser(values);
                        navigation.navigate("Home", {
                            screen: "Home",
                            params: {
                                screen: "Home",
                                params: {
                                    paramEmail: values.email,
                                    paramName: getUser(values).name,
                                    paramImage: getUser(values).image,
                                },
                            }
                        }
                    );
                    }
                    else {
                        resetForm();
                        alert("Invalid Login Details")
                    }
                }}
                validationSchema={schema}
            >
            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                <>
                    <View style={styles.inputContainer}>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email" 
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={values.email}
                        onBlur = {() => setFieldTouched('email')}
                        onChangeText =  { handleChange('email')}
                        />
                        {touched.email && <AppText style={{color:'red'}}>
                            {errors.email}
                        </AppText>}
                    <AppTextInput 
                        icon="lock" 
                        placeholder="Password" 
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={values.password}
                        onBlur = {() => setFieldTouched('password')}
                        onChangeText = { handleChange('password')}
                        />
                        {touched.password && <AppText style={{color:'red'}}>
                            {errors.password}
                        </AppText>}
                </View>
                <View style={styles.loginButton}>
                    <AppButton
                        title="DONE" color = "white" onPress={handleSubmit}>
                    </AppButton>
                </View>
                </>
            )}
            </Formik>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColours.gray,
        flex: 1,

    },
    inputContainer: {
        marginTop: 70,
        borderColor: 'gray', 
        borderWidth: 0.7
    },
    loginButton: {
        marginTop: 45,
        width: '45%',
        alignSelf: 'center',
    },
})

export default LoginScreen;