import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/Login";
import NewsL from "./components/NewsL"
import Register from "./components/Register"

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="NewsL" component={NewsL}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      );
}

export default MyNavigator;