import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = (props) => {

    const [name, setName] = useState('');

    const navigation = useNavigation();

    const handleSendButton = () => {
        //props.navigation.navigate('About')
        navigation.navigate('About', {
            name: name
        });
    };

    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <Text>Qual o seu nome?</Text>
            <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                style={styles.input}
            />

            <Button title='Enviar' onPress={handleSendButton}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 250,
        padding: 10,
        fontSize: 15,
        backgroundColor: '#ccc',
        borderRadius: 4
    }
});

export default HomeScreen;