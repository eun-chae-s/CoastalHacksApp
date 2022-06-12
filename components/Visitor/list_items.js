import React, { Component } from 'react';
import { Text, Button, StyleSheet, View, TouchableHighlight } from 'react-native';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default class ButtonBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
            color: 'white'
        }
    }
    
    _onPressButton() {
        alert('Please Select a Date')
    }
    _onPressLikes () {
        this.setState({ likes: (this.state.likes === 0) ? 1 : 0 });
        this.setState({ color: (this.state.color === 'white') ? '#ff6347' : 'white'})
    }
    
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.LayoutButtonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title={this.props.name}
                    color="powderblue"
                    
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignSelf: 'center'}}>
                        <Text style={{color: "#ff6347", backgroundColor:'powderblue', marginRight: 20}}>{this.state.likes}</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.heart}
                        onPress={() => this._onPressLikes()}
                    >
                        <FontAwesomeIcon
                            icon={ faHeart }
                            size={30}
                            color={ this.state.color }
                        >
                        </FontAwesomeIcon>
                    </TouchableHighlight>
                </View>
                
            
            </View>
        </View>
        );
    }
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