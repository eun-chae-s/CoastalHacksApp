import { title } from 'process';
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';



export default class ButtonBasics extends Component {
    _onPressButton() {
        alert('Please Select a Date')
    }
    _onPress () {
        alert('Wishlist Modified')
    }
    
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.LayoutButtonContainer}>
            <Button
                onPress={this._onPressButton}
                title="Insert Beach Name"
                color="white"
                
            />
            <Button
                onPress={this._onPress}
                title="         12  ♡"
                color="#ff6347"
            />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
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
}
});