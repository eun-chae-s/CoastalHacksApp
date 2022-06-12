import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/LifeGuard/Login";
import NewsL from "./components/LifeGuard/NewsL"
import Register from "./components/LifeGuard/Register"
import NewsV from './components/Visitor/NewsV';
import ChatV from './components/Visitor/ChatV';
import Upload from './components/LifeGuard/Upload';
import Recommendation from './components/Visitor/Recommendation';
import calendar from './components/Visitor/calendar'
import SectionListBasics from './components/Visitor/beach_listings';

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="NewsL" component={NewsL}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="NewsV" component={NewsV}/>
            <Stack.Screen name="ChatV" component={ChatV}/>
            <Stack.Screen name="Upload" component={Upload}/>
            <Stack.Screen name="Recommendation" component={Recommendation}/>
            <Stack.Screen name="calendar" component={calendar}/>
            <Stack.Screen name="Beach" component={SectionListBasics}/>
        </Stack.Navigator>
      );
}

export default MyNavigator;