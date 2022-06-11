import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Hello!
            </Text>
            <TextInput
                style={styles.textinput_nickname}
                placeholder="nickname"
            />
            <TextInput
                style={styles.textinput_pw}
                placeholder="password"
                secureTextEntry={true}
            />
            <View style={styles.button}>
                <Button
                    title="Login"
                    color="white"
                    onPress={() => navigation.navigate('NewsL')}
                />
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