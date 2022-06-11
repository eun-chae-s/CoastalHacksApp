import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You have been successfully checked-in!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Would you like to check-in for:
            2022-06-12"
            color='white'
          />
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
    margin: 5,
    backgroundColor: '#ff6347',
    borderRadius: 20
  },
});