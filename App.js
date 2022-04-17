import React, { useEffect } from 'react';
import { StatusBar, Platform, Alert } from 'react-native';
//import { Platform } from 'react-native-web';
import styled from 'styled-components/native';

/* 
Props e States
*/

const Page = styled.SafeAreaView`
  flex:1;
  backgroundColor: #fff;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 45px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
`;

const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin: 15px;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default () => {

  useEffect(() => {

    //Uso do recurso alert
    Alert.alert(
      'AVISO IMPORTANTE',
      'Mensagem qualquer',
      [
        {text: 'Concordo', onPress: () => { alert('concordou') }},
        {text: 'Não Concordo', onPress: () => { alert('não concordou') }},
      ]
    );
    
  }, []);

  return (
    <Page>
      <StatusBar hidden />

      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}>
        <Logo />
        <Input />
      </KeyboardArea>

    </Page>
  );
};

//export default TextoInicial;