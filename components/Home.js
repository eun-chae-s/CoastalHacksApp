import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Alert } from 'react-native'

const Home = ({ navigation }) => {

    const visitorPressed = () => {
        navigation.navigate('NewsL')
    }

    const staffPressed = () => {
        navigation.navigate('Login')
    }

    const applyPressed = () => {
        navigation.navigate('Register')
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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={visitorPressed}>
                        <Text style={styles.visitor}>I am a visitor</Text>
                    </TouchableOpacity>
                    <View style={styles.staffButtonContainer}>
                        <TouchableOpacity onPress={staffPressed} style={styles.staffButtons}>
                            <Text style={styles.staff}>Staff Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={applyPressed} style={styles.staffButtons}>
                            <Text style={styles.staff}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    buttonContainer:{
        marginTop: '55%',
        width: '70%',
        alignSelf: 'center'
    },
    visitor: {
        backgroundColor: 'white',
        color: '#3A59FF',
        width: "100%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize: 27,
        marginTop: '10%'
        },
    staffButtonContainer: {
        display: 'flex',
        flexwrap: 'wrap',
        marginTop: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    staffButtons:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    staff: {
        backgroundColor: '#3A59FF',
        color: 'white',
        width: "100%",
        borderRadius: 25,
        textAlign: 'center',
        padding: "3%",
        fontSize: 24,
        marginTop: '10%',
        paddingHorizontal: '5%'
        }
    }
);


export default Home;