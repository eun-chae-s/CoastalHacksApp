import React from 'react';
// import { ChatBoxV, ChatBoxL } from './ChatBox';
import { faPersonCircleExclamation, faPlusCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Alert, StyleSheet, View, Text, TouchableHighlight, FlatList} from 'react-native'

const Chat = ({ navigation }) => {
    const chatting = [
        {'name': 'Visitor1', 'type': 'V'},
        {'name': 'visitor2', 'type': 'V'},
        {'name': 'guard1', 'type': 'L'}
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
                        onPress={() => Alert.alert('hey!')}
                    >
                        { (item.type === 'V') ? <ChatBoxV name={item.name}></ChatBoxV> : <ChatBoxL name={item.name}></ChatBoxL>}
                    </TouchableHighlight>
                    }
                >
                </FlatList>
                
            </View>

            {/* Navigation */}
            <View style={styles.buttons}>
            <TouchableHighlight
                underlayColor={'grey'}
                onPress={() => console.log('Hello!')}
            >
                <FontAwesomeIcon
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
                    color='red'
                ></FontAwesomeIcon>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => navigation.navigate('NewsL')}
            >
                <FontAwesomeIcon
                    icon={ faHome }
                    size={50}
                    color='black'
                ></FontAwesomeIcon>
            </TouchableHighlight>
          </View>
        </View>
    );
}

const ChatBoxV = ({name}) => {
    return (
      <View style={styles.container1}>
          <Text style={{color: 'black', fontSize: 15}}>{name}</Text>
      </View>
    )
  }
  
  const ChatBoxL = ({name}) => {
      return (
          <View style={styles.container2}>
              <Text style={{color: 'black', fontSize: 15}}>{name}</Text>
          </View>
      )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        justifyContent: 'flex-start',
    },
    header: {
        height: '10%',
        backgroundColor: 'black',
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
    },
    chatlist: {
        height: '80%',
    },
    container1: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderColor: 'blue'

    },
    container2: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderColor: 'red'
    }
})

export default Chat