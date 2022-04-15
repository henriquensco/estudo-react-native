import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

/* 
Props e States
*/

const Page = styled.SafeAreaView`
  flex:1;
  backgroundColor: #CED4DA;
  justify-content: center;
  align-items: center;
`;


const Hello = (props) => {

  const [name, setName] = useState("Henrique");

  return(
    <Text>Nome: {name}</Text>
    /*<Text>{props.frase}</Text>*/
    /* <Text>Frase Qualquer</Text> */
  );
};


export default () => {
  return (
    <Page>
      <StatusBar hidden />

      <Hello frase="Seja bem vindo!"/>

    </Page>
  );
};

//export default TextoInicial;