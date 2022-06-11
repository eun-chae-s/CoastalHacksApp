import { faMessage, faPersonCircleExclamation, faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import NewsItem from './NewsItem';
import { FlatList, Alert, StyleSheet, View, Text, TouchableHighlight, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

const NewsL = ({navigation}) => {
    const [beach, setBeach] = useState('');
    const [flexibleData, setData] = useState(newsData);

    const newsData = [
        {'beachname': 'Maui', 'news': 'jellyfish-found!', 'time': '30 min ago'},
        {'beachname': 'Kauai', 'news': 'jellyfish-found!', 'time': '1 hour ago'},
        {'beachname': 'Destin', 'news': 'jellyfish-found!', 'time': '2 hours ago'},
        {'beachname': 'Sanibel Island', 'news': 'jellyfish-found!', 'time': '3 hours ago'},
        {'beachname': 'Honolulu', 'news': 'jellyfish-found!', 'time': '3 hours ago'},
    ]

    const updateFeed = (b) => {
        setBeach(b);
        if (b === '') {
            setData(newsData);
        } else {
            setData(newsData.filter(item => item.beachname.includes(b)));
        }
    }

    return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>News</Text>
            <TouchableHighlight
                onPress={() => navigation.navigate('Profile')}
                style={styles.profile}
                underlayColor={'white'}
            >
                <FontAwesomeIcon
                    icon={ faUserCircle }
                    size={32}
                    color='white'
                >
                </FontAwesomeIcon>
            </TouchableHighlight>
          </View>

          {/* Feed */}
          <View style={styles.feed}>
            {/* Search bar */}
            <SearchBar
                containerStyle={{backgroundColor: '#fff8dc', borderColor: '#fff8dc'}}
                inputContainerStyle={{backgroundColor: '#FFEDA6', borderColor: '#FFEDA6'}}
                placeholder='Search Beach'
                value={beach}
                onChangeText={beach => updateFeed(beach)}
            />
            {/* News */}
            <FlatList
                data={(beach === '') ? newsData : flexibleData}
                renderItem={({item}) => <NewsItem name={item.beachname} news={item.news} time={item.time}></NewsItem>}
            >
            </FlatList>
          </View>

          {/* Buttons */}
          <View style={styles.buttons}>
            <TouchableHighlight
                onPress={() => console.log('Upload!!')}
                underlayColor={'grey'}
            >
                <FontAwesomeIcon
                    color={'white'}
                    icon={ faPlusCircle }
                    size={50}
                ></FontAwesomeIcon>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'pink'}
                onPress={() => Alert.alert('emergency!')}
            >
                <FontAwesomeIcon
                    icon={ faPersonCircleExclamation }
                    size={50}
                    color='#ff6347'
                ></FontAwesomeIcon>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.navigate('ChatL')}
                underlayColor='white'
            >
                <FontAwesomeIcon
                    color={'white'}
                    icon={ faMessage }
                    size={50}
                ></FontAwesomeIcon>
            </TouchableHighlight>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        justifyContent: 'flex-start',
        backgroundColor: '#fff8dc'
    },
    header: {
        height: '10%',
        backgroundColor: 'powderblue',
        borderColor: 'powderblue',
        alignContent: 'space-between',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        flexBasis: 300,
    },
    profile: {
        width: 50,
        marginTop: 25,
        borderRadius: 30,
    },
    buttons: {
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    feed: {
        height: '80%',
    }
})

export default NewsL