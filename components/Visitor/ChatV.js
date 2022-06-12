import React from 'react';
import { faPersonCircleExclamation, faWater, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Alert, StyleSheet, View, Text, TouchableHighlight, FlatList} from 'react-native'

const ChatV = ({ navigation }) => {
    const chatting = [
        {'name': 'guard1'}
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Chat</Text>
            </View>

            {/* List of chat boxes */}
            <View style={styles.chatlist}>
                
                <FlatList
                    data={chatting}
                    renderItem={({item}) => 
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Chat')}
                    >
                        <ChatBox name={item.name}></ChatBox>
                    </TouchableHighlight>
                    }
                >
                </FlatList>
                
            </View>

            {/* Navigation */}
            <View style={styles.buttons}>
            <TouchableHighlight
                underlayColor={'grey'}
                onPress={() => navigation.navigate('Beach')}
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
                underlayColor={'white'}
                onPress={() => navigation.navigate('NewsV')}
            >
                <FontAwesomeIcon
                    icon={ faHome }
                    size={50}
                    color={'white'}
                ></FontAwesomeIcon>
            </TouchableHighlight>
          </View>
        </View>
    );
}

const ChatBox = ({name}) => {
    return (
      <View style={styles.container1}>
          <FontAwesomeIcon style={{marginRight: 20}} icon={faWater} size={50} color='#6C9DFF'></FontAwesomeIcon>
        <Text style={{color: '#6C9DFF', fontSize: 17}}>{name}</Text>
          
      </View>
    )
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
        backgroundColor: '#deb887',
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#deb887',
        paddingTop: 20,
        paddingBottom: 10
    },
    chatlist: {
        height: '80%',
    },
    container1: {
        borderWidth: 3,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderColor: '#6C9DFF',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'

    }
})

export default ChatV