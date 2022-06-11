import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native'

const Home = ({ navigation }) => {

    const visitorPressed = () => {
        Alert.alert("student?")
    }

    const staffPressed = () => {
        Alert.alert("Welcome Mario!")
    }

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.background}>
            <View>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
                <TouchableOpacity onPress={visitorPressed}>
                    <Text style={styles.visitor}>I am a visitor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={staffPressed}>
                    <Text style={styles.staff}>Staff Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create(
    {
    background: {
        width: '100%',
        height: '100%'
        },
    logo:{
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop: '10%'
        },
    visitor: {
        backgroundColor: 'white',
        color: '#3A59FF',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize: 27,
        marginTop: '70%'
        },
    staff: {
        backgroundColor: '#3A59FF',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize: 27,
        marginTop: '10%'
        }
    }
);


export default Home;