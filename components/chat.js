import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SendButton from './sending_button';
import MyKeyboard from './keyboard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
       },
    header: {
        paddingtop: 30,
        paddingBottom: 30,
        paddingRight: 80,
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    item: {
        padding: 10,
        paddingRight: 30,
        paddingBottom: 40,
        fontSize: 18,
        height: 44,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: 'powderblue'
    },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header}> ○ Ashley </Text>
      <FlatList
        data={[
          {key: 'Plz help me! I am drowning rn :('},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <SendButton/> 
      <MyKeyboard />     
      </View>
    </View>
  );
}

export default FlatListBasics;