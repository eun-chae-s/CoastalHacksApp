import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class SendButton extends Component {
//   _onPressButton() {
//   }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            // onPress={this._onPressButton}
            title="Send"
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
   paddingTop: 180,
   paddingLeft: 310,
  },
  buttonContainer: {
    margin: 3,
    backgroundColor: '#deb887',
    maxWidth: 70,
    borderRadius: 20
  },
});