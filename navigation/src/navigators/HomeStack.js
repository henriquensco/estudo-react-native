import React from 'react'
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabHome2Screen from '../pages/TabHome2Screen';


const MainStack = createStackNavigator();

export default HomeStack = () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name="TabHome" component={TabHomeScreen} />
            <MainStack.Screen name="TabHome2Screen" component={TabHome2Screen} />
        </MainStack.Navigator>
    );
}