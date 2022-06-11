import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

MyNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      );
}

export default MyNavigator;