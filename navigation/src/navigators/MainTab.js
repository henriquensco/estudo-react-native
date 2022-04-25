import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default MainTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => <TabBarIcon name={route.name} />
            })}
            initialRouteName='TabHome'
            //tabBar={(props) => <CustomTabBar {...props} />}
            
            /* screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let imgSource = null;

                    switch (route.name) {
                        case 'TabHome':
                            imgSource = require('../../assets/home.png');
                            break;
                        case 'TabAbout':
                            imgSource = require('../../assets/interface.png');
                            break;
                        case 'TabConfig':
                            imgSource = require('../../assets/interface.png');
                            break;
                    }

                    return <Image source={imgSource} style={{ width: 24, height: 24 }} />
                },
                headerStyle: {
                    height: 100,
                    backgroundColor: '#FCA311',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff',
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#14213D',
                tabBarActiveBackgroundColor: '#FCA311'
            })} */>
            <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{ title: 'About' }} />
            <Tab.Screen name="TabHome" component={TabHomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{ title: 'Config' }} />
        </Tab.Navigator>
    );
}