import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TabAboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TabAbout</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabAboutScreen;