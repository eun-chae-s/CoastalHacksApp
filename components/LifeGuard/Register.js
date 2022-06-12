// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

import { NavigationHelpersContext } from '@react-navigation/native';
import dummy_data from '../../Data/dummydata';
import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

const Register = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errortext, setErrortext] = useState('');
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
    ] = useState(false);

    const emailInputRef = createRef();
    const passwordInputRef = createRef();
    const confirmPasswordRef = createRef();

    const uploadCertificate = () => {
        alert("to be implemented!")
    }

    const handleSubmitButton = () => {
        setErrortext('');
        if (!userName) {
            alert('Incomplete fields');
            setErrortext('*Name is Required*');
            return;
        }
        if (!userPassword) {
            alert('Incomplete fields');
            return;
        }
        if (userPassword != confirmPassword){
            alert('Passwords do not match')
            setErrortext('Passwords do not match');
            return;
        }
        if (!userEmail) {
            alert('Incomplete fields');
            setErrortext('Email is Required');
            return;
        }
        const emailList = []
        for (const user of dummy_data){
            emailList.push(user['email'])
        }
        if (emailList.includes(userEmail)) {
            alert('User already exists');
            setErrortext('Email already registered');
            return;
        }
        alert('Thank you for registering! You will receive an email when your certificate is approved.')
        navigation.navigate('Home')
        
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#Deb887' }}>
           
            <View
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{
                            width: '50%',
                            height: 100,
                            resizeMode: 'contain',
                            marginBottom: 0,
                            marginTop:50
                        }}
                    />
                </View>
                {errortext != '' ? (
                        <Text style={styles.errorTextStyle}>
                            {errortext}
                        </Text>
                    ) : null}
                <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserName) => setUserName(UserName)}
                            placeholder="Enter Name"
                            placeholderTextColor="#8b9cb5"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                emailInputRef.current &&
                                emailInputRef.current.focus()
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Email"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="email-address"
                            ref={emailInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserPassword) =>
                                setUserPassword(UserPassword)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Enter Password"
                            placeholderTextColor="#8b9cb5"
                            ref={passwordInputRef}
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={() =>
                                confirmPasswordRef.current &&
                                confirmPasswordRef.current.focus()
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(ConfirmPassword) =>
                                setConfirmPassword(ConfirmPassword)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Confirm Password"
                            placeholderTextColor="#8b9cb5"
                            ref={confirmPasswordRef}
                            returnKeyType="next"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={uploadCertificate}>
                            <Text style={styles.buttonTextStyle2}>UPLOAD CERTIFICATE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SectionStyle}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={handleSubmitButton}>
                            <Text style={styles.buttonTextStyle}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};
export default Register;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: 'powderblue',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonStyle2: {
        backgroundColor: '#fff8dc',
        borderWidth: 1,
        color: '#fff8dc',
        borderColor: '#FFFFFF',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    buttonTextStyle2: {
        color: '#Deb887',
        paddingVertical: 10,
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#fff8dc',
        backgroundColor: 'white'
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    }
});