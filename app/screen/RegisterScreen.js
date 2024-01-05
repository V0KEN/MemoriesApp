import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppColours from '../config/AppColours';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email(),
        password: Yup.string().required().min(4).max(12),
        password: Yup.string().required().max(50),
    }
);

function RegisterScreen({navigation}) {

    return (
        <AppScreen style={styles.container}>
            <Formik
                initialValues={{email:'', password: '', username: ''}}
                onSubmit = {values => navigation.navigate("Welcome")}
                >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                <>
                 <View style={styles.inputContainer}>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account" 
                        placeholder="Create your username"
                        textContentType="emailAddress"
                        onChangeText =  {handleChange('username')}
                        onBlur = {() => setFieldTouched('username')}
                        />
                        {touched.username && <AppText style={{color:'red'}}>
                                {errors.username}
                        </AppText>}
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email" 
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onBlur = {() => setFieldTouched('email')}
                    onChangeText =  {handleChange('email')}
                    />
                    {touched.email && <AppText style={{color:'red'}}>
                            {errors.email}
                        </AppText>}
                <AppTextInput 
                    icon="lock" 
                    placeholder="Create your password" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText = {handleChange('password')}
                    onBlur = {() => setFieldTouched('password')}
                    />
                    {touched.password && <AppText style={{color:'red'}}>
                            {errors.password}
                        </AppText>}
            </View>
            <View style={styles.registerButton}>
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
    registerButton: {
        marginTop: 45,
        width: '45%',
        alignSelf: 'center',
    }
})

export default RegisterScreen;