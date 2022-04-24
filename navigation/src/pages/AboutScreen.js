import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AboutScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

    //const name = props.route.params.name
    const name = route.params.name;

    const handleBackClick = () => {
        //navigation.navigate('Home');
        navigation.goBack();
        //navigation.push('Home');
    };

    return (
        <View style={styles.container}>
            <Text>About</Text>
            <Text>O nome digitado foi: {name}</Text>
            <Button title='Voltar' onPress={handleBackClick}/>
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

export default AboutScreen;