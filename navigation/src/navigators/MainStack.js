import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#023047',
                height: 100
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold'
            },
            headerBackTitle: 'Voltar',
            headerTruncatedBackTitle: 'Voltar'
        }}>
            <MainStack.Screen name='Home' component={HomeScreen} options={{
                title: 'Início',
                /* headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#023047',
                    height: 200
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 23,
                    fontWeight: 'bold'
                } */
            }} />
            <MainStack.Screen name='About' component={AboutScreen} />
        </MainStack.Navigator>
    );
}