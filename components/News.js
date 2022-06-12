import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

const News = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>
          POST
      </Text>
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Please write it here" placeholderTextColor={'#999'} />
      </View>
      <View style={styles.button}>
        <Button title={'UPLOAD'} />
      </View>
    </View>
  );
}

export default News;

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
    marginBottom: 30
  },

  button: {
    marginRight: 10,
    marginBottom: 30
  }
})
