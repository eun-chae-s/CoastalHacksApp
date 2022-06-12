import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

const Upload = ({navigation}) => {
  const [text, setText] = useState('');
  const [beach, setBeach] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>
          POST
        </Text>
      </View>
      <View style={styles.beach}>
        <TextInput
            placeholder='Which beach?'
            placeholderTextColor={'#999'}
            value={beach}
            onChangeText={(beach) => setBeach(beach)}
        />
      </View>
      <View style={styles.card}>
        <TextInput 
            placeholder="Please write it here"
            placeholderTextColor={'#999'}
            value={text}
            onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={styles.button}>
        <Button
            title={'UPLOAD'}
            color='white'
            onPress={() => navigation.navigate('NewsL', {'newdata':[{'beachname': {beach}, 'news': {text}, 'time': '2 min ago'}]})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    flex: 1,
    allignitems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  beach: {
    backgroundColor: '#fff',
    borderRadius: 10,  
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 30,
    padding: 10,
  },
  section: {
    flexDirection: 'row',
    allignitems: 'center', 
    justifyContent: 'center', 
    marginTop: 50,
    margin: 30,
    padding:20
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 30,
    padding: 10,
  },

  button: {
    width: 100,
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: '#deb887',
    alignSelf: 'center',
    borderRadius: 10,
  }
})

export default Upload