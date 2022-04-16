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

const Quadrado = styled.View`
  backgroundColor: #fff;
  width: 200px;
  height: 200px;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 4px;
`;

const Hello = (props) => {

  const [ name, setName ] = useState("novo");
  const [ backupName, setBackupName] = useState("");
  const [ mostrar, setMostrar ] = useState(false);

  const handleClick = () => {
    setBackupName(name);
    
    //setMostrar(true);
    if(mostrar == true) {
      setMostrar(false);
    } else {
      setMostrar(true);
    }

  };

  return(
    <View>
      <Texto>Qual o seu nome?</Texto>

      <Input onChangeText={(e) => {setName(e)}} />

      <Button title={mostrar ? 'Esconder Nome' : 'Mostrar Nome'} onPress={handleClick}/>

      {/* <Button title="Salvar" onPress={handleClick}/> */}

      {/* <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
      }}>{name}</Text> */}

      {mostrar &&
        <Quadrado>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#000'
          }}>Seu nome é: {backupName}</Text>
        </Quadrado>
      }

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