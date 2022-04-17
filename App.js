import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Platform } from 'react-native-web';
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

  /* useEffect(() => {
    alert('SO: ' + Platform.OS);
  }, []); */

  return (
    <Page>
      <StatusBar hidden />

      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Logo />
        <Input />
      </KeyboardArea>

    </Page>
  );
};

//export default TextoInicial;