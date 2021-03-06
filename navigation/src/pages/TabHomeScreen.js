import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const TabHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>TabHomeScreen</Text>
            <Button title='Ir para a tela 2' onPress={() => navigation.navigate('TabHome2Screen')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default TabHomeScreen;