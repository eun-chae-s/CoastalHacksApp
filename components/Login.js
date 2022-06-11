import { useNavigation } from '@react-navigation/native';
import React, { useState, createRef }  from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import dummy_data from '../dummydata';




const Login = ({navigation}) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const emailInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmitButton = () => {
        let temp = {
            email: userEmail,
            password: userPassword
        }
        console.log(temp)
        console.log(dummy_data)
        if (containsUser(temp)){
            navigation.navigate('NewsL')
        } else {
            alert('Invalid username or password')
        }
    }

    const containsUser = (loginDetails) => {
        for (const user of dummy_data) {
            console.log(JSON.stringify(loginDetails) === JSON.stringify(user))
            if (JSON.stringify(loginDetails) === JSON.stringify(user)){
                return true
            }
        }
        return false
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Hello!
            </Text>
            <TextInput
                style={styles.textinput_nickname}
                placeholder="email"
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                ref={emailInputRef}
                returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
            />
            <TextInput
                style={styles.textinput_pw}
                placeholder="password"
                onChangeText={(userPassword) => setUserPassword(userPassword)}
                secureTextEntry={true}
                ref={passwordInputRef}
            />
            <View style={styles.button}>
                <Button
                    title="Login"
                    color="#deb887"
                    onPress={handleSubmitButton}
                >
                    <Text style={{color: 'black'}}>Login</Text>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFf8dc',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 70,
        fontWeight: "bold",
        color: '#deb887'
    },
    textinput_nickname: {
        fontSize: 18,
        borderColor: '#deb887',
        borderWidth: 1,
        width: 150,
        padding: 5,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 5,
    },
    textinput_pw: {
        fontSize: 18,
        borderColor: '#deb887',
        borderWidth: 1,
        width: 150,
        padding: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#deb887',
        width: 150,
        borderColor: '#deb887',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 20,
    }
})

export default Login