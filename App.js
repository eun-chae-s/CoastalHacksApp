import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigator from './navigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigator/>
    </NavigationContainer>
  );
}

