import React, { useState } from 'react';
import { Text, Button, StyleSheet, View, TouchableHighlight } from 'react-native';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ButtonBasics = ({likes, name, navigation}) => {
    const [like, setLike] = useState(likes);
    const [color, setColor] = useState('white');

    const _onPressLikes = () => {
        setLike(like === 0 ? 1 : 0);
        setColor((color === 'white') ? '#ff6347' : 'white');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.LayoutButtonContainer}>
                <Button
                    onPress={() => {navigation.navigate("calendar");}}
                    title={name}
                    color="white"
                    
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignSelf: 'center'}}>
                        <Text style={{color: "#ff6347", backgroundColor:'powderblue', marginRight: 20}}>{like}</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.heart}
                        onPress={() => _onPressLikes()}
                    >
                        <FontAwesomeIcon
                            icon={ faHeart }
                            size={30}
                            color={ color }
                        >
                        </FontAwesomeIcon>
                    </TouchableHighlight>
                </View>
                
            
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  LayoutButtonContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: `powderblue`,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 35,
    paddingLeft: 35,
    borderRadius: 20,
  },
  heart: {
    alignSelf: 'center'
  }

});

export default ButtonBasics;