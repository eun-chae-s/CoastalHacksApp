import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";


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
    paddingBottom: 270,
    paddingLeft: 20,
    paddingRight: 80
  },
  input: {
    padding: 10,
    minWidth: 350,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  keyboardContainer: {
      peddlingTop: 900,
      flex: 1
  }
});

export default MyKeyboard;