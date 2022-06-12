import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const NewsItem = ({name, news, time}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{flexBasis: 200}}>🐬 {name}</Text>
                <Text>🕒 {time}</Text>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.news}>{news}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        width: 350,
        margin: 10,
        padding: 20,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderColor: '#deb887'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        // justifyContent: 'space-between',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderBottomColor: '#deb887',
        width: 320,
        margin: 10,
        alignSelf: 'center'
    },
    news: {
        fontSize: 20
    }
})

export default NewsItem