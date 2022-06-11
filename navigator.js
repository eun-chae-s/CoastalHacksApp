import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
      );
}

export default MyNavigator;