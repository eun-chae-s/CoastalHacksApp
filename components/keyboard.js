import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";
import SendButton from "./sending_button";


const MyKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

  return (
    <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder='Click here...'
          onSubmitEditing={Keyboard.dismiss}
        />
      <Text style={style.status}>{keyboardStatus}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 300,
    paddingLeft: 5,
    paddingRight:5,
    paddingTop: 5,
   backgroundColor: '#deb887'
  },
  input: {
    padding: 10,
    minWidth: 250,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  keyboardContainer: {
      peddlingTop: 0
      // flex: 1,
  }
});

export default MyKeyboard;