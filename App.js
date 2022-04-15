import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Texto = styled.Text`
  color: ${props=>props.cor};
  font-size: ${props=>props.fontSize};
  font-weight: bold;
`;

export default () => {
  return (
    <Page>
      <StatusBar hidden />
      <Texto cor="red" fontSize="1.5rem">Hey!</Texto>

      <Texto cor="green" fontSize="1.5rem">Segundo texto legal</Texto>
      <Texto cor="white" fontSize="1rem">Terceiro texto legal</Texto>
    </Page>
  );
};

//export default TextoInicial;