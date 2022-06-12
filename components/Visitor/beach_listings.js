import React from 'react';
import { Alert, SectionList, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import ButtonBasics from './list_items';
import { faMessage, faPersonCircleExclamation, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
   },
  header: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignItems: 'center',
  },
  list: {
    height: '80%',
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 270,
    paddingBottom: 5,
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#deb887',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#deb887'
},
})

const SectionListBasics = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>Beaches</Text>
        </View>
        <View style={styles.list}>
          <SectionList
            sections={[
              {title: 'Hawaii', data: [{'beach': 'Maui', 'likes': 0}, {'beach': 'Kauai', 'likes': 4}, {'beach':'Honolulu', 'likes': 0}]},
              {title: 'California', data: [{'beach': 'Malibu', 'likes': 0}, {'beach': 'Half Moon Bay', 'likes': 0}, {'beach': 'Laguna Beach', 'likes': 0}, {'beach': 'Monterey State Beach', 'likes': 0}]},
              {title: 'North Carolina', data: [{'beach': 'Outer Banks', 'likes': 0}]},
              {title: 'Virginia', data: [{'beach': 'Assateague Island', 'likes': 0}]},
              {title: 'Oregon', data: [{'beach': 'Cannon Beach', 'likes': 0}]},

            ]}
            renderItem={({item}) => <ButtonBasics name={item.beach} likes={item.likes} navigation={navigation}/>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}

          />
        </View>
        
        <View style={styles.buttons}>
            <TouchableHighlight
                onPress={() => navigation.navigate('NewsV')}
                underlayColor={'grey'}
            >
                <FontAwesomeIcon
                    icon={ faHome }
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

export default SectionListBasics;