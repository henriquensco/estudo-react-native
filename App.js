import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, Text, StyleSheet, Alert } from 'react-native';
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

  const [name, setName] = useState("novo");

  return(
    <View>
      <Texto>Escreva algo:</Texto>
      <Input onChangeText={(e) => {setName(e)}} />
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
      }}>{name}.</Text>
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