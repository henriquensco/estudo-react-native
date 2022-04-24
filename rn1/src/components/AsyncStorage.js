import React, { useEffect, useState } from 'react';
import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Page = styled.View`
	flex:1;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
`;

const Input = styled.TextInput`
    font-size: 17px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 50px;
`;

const Salvar = styled.Button`
    padding: 10px;
`;

const NameArea = styled.View`
    padding: 20px;
    background-color: #ccc;
    width: 100%;
`;

const Nome = styled.Text`
    font-size: 18px;
`;

export default () => {

    const [nome, setNome] = useState("");
    const [novoNome, setNovoNome] = useState("");

    const handleSave = async () => {
        if (novoNome.trim() != '') {
            await AsyncStorage.setItem('@nome', novoNome);
            setNome(novoNome);
        }
        
        setNovoNome('');
    };


    const getNome = async () => {
        const n = await AsyncStorage.getItem('@nome');

        setNome(n);
    }

    useEffect(() => {
        getNome();
    }, []);

    return (
        <Page>
            <Input
                placeholder="Digite algo aqui..."
                value={novoNome}
                onChangeText={(e) => setNovoNome(e)}
            />
            <Salvar title="Salvar" onPress={handleSave}/>

            <NameArea>
                <Nome>{nome}</Nome>
            </NameArea>
        </Page>
    );
};