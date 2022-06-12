import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';


const Recommendation= () => {
  return (
    <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.header}>
        Did you like the service?
        Would you recommend this staff? 
        </Text>
      <TouchableOpacity
        onPress={Addnum}
        style={{ backgroundColor: '#deb887' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Yes</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const state = {
  count: 0
};

const Addnum= () => {
  state.count +=1 
  alert("Thank you for your response! n_likes: "+String(state.count))}

export default Recommendation;

const styles = StyleSheet.create({
  header: {
    font: 'helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    margin: 8
    
  },
  container: {
    flex: 1,
    // allignitems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'powderblue',
  },

  section: {
    fontSize: 80,
    fontWeight: 'bold',
    flexDirection:'column',
    allignitems: 'center', 
    justifyContent: 'center', 
    marginTop: 50,
    margin: 30,
    padding:20
  }
})