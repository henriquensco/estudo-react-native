import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

/* 
Props e States
*/

const Page = styled.SafeAreaView`
  flex:1;
  backgroundColor: #002E2C;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 200px;
  border: 2px solid #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

const Texto = styled.Text`
  fontSize: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 5px;
`;

const Hello = (props) => {

  const [ name, setName ] = useState("novo");
  const [ backupName, setBackupName] = useState("");

  const handleClick = () => {
    setBackupName(name);
  };

  return(
    <View>
      <Texto>Escreva algo:</Texto>

      <Input onChangeText={(e) => {setName(e)}} />

      <Button title="Salvar" onPress={handleClick}/>

      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
      }}>{name}</Text>

      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f1f1f1'
      }}>{backupName}</Text>


    </View>
    /* <Text>Nome: {name}</Text> */
    /* <Text>{props.frase}</Text> */
    /* <Text>Frase Qualquer</Text> */
  );
};


export default () => {
  return (
    <Page>
      {/* <StatusBar hidden /> */}

      <Hello frase="Seja bem vindo!"/>

    </Page>
  );
};

//export default TextoInicial;