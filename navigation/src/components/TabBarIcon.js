import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default TabBarIcon = (props) => {
    let imgSource = null;
    let badgeCount = 7;

    switch (props.name) {
        case 'TabHome':
            imgSource = require('../../assets/home.png');
            badgeCount = 0;
            break;
        case 'TabAbout':
            imgSource = require('../../assets/interface.png');
            badgeCount = 0;
            break;
        case 'TabConfig':
            imgSource = require('../../assets/interface.png');
            badgeCount = 8;
            break;
    }

    return (
        <View>
            <Image source={imgSource} style={styles.icon} />
            {badgeCount > 0 &&
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{badgeCount}</Text>
            </View>
            }
        </View>
    );

};

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
    badge: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: '#ff0000',
        width: 15,
        height: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: '#fff',
        fontSize: 10
    }
});