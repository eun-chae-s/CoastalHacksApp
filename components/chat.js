import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import MyKeyboard from './keyboard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
       },
    header: {
        paddingBottom: 10,
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'italic',
        backgroundColor: "#ff6347"
      },
    item: {
        padding: 10,
        paddingRight: 100,
        paddingBottom: 40,
        fontSize: 18,
        height: 44,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: 'powderblue'
    },
});

const FlatListBasics = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Button 
                title="                                                                         X"
                color='white'>
                onPress={()=>navigation.navigate('NewsL')}
            </Button>           
            <Text style={styles.header}> □ Visitor1 </Text>
        </View>
        <FlatList
            data={[
            {key: 'Plz help me! I am drowning rn ( ͡° ͜ʖ ͡°)'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      <MyKeyboard />     
      </View>
  );
}

export default FlatListBasics;