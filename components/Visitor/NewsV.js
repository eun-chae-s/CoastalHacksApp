import { faWater, faMessage, faPersonCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import NewsItem from '../LifeGuard/NewsItem';
import { FlatList, Alert, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import newsData from '../../Data/newsdata';

const NewsV = ({navigation}) => {
    const [beach, setBeach] = useState('');
    const [flexibleData, setData] = useState(newsData);

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
                onPress={() => navigation.navigate('Beach')}
                underlayColor={'grey'}
            >
                <FontAwesomeIcon
                    icon={ faWater }
                    size={50}
                    color={'white'}
                ></FontAwesomeIcon>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'pink'}
                onPress={() => Alert.alert('emergency!')}
            >
                <FontAwesomeIcon
                    icon={ faPersonCircleExclamation }
                    size={50}
                    color='red'
                ></FontAwesomeIcon>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.navigate('ChatV')}
                underlayColor='white'
            >
                <FontAwesomeIcon
                    icon={ faMessage }
                    size={50}
                    color={'white'}
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

export default NewsV