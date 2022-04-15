import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  backgroundColor: #0F110C;
`;

const Header = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  backgroundColor: #eee;
`;

const Quadrado = styled.View`
  height: 50px;
  width: 50px;
  backgroundColor: ${props=>props.cor};
`;

export default () => {
  return (
    <Page>
      <StatusBar hidden />
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>

        <Quadrado cor="black"></Quadrado>
      </Header>
    </Page>
  );
};

//export default TextoInicial;