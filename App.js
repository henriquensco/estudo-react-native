import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

/* 
Props e States
*/

const Page = styled.SafeAreaView`
  flex:1;
  backgroundColor: #fff;
  align-items: center;
`;

const HeaderText = styled.Text`
  fontSize: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 4px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 20px;
`;

const ResultArea = styled.View`
  margin-top: 20px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
`;

const ResultItem = styled.Text`
  font-size: 15px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
  padding: 5px 5px;
`;

const PctItem = styled.Button`
`;

export default () => {

  const [ bill, setBill ] = useState("");
  const [ tip, setTip ] = useState(0);
  const [ pct, setPct ] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);
    
    if(nBill) {
      setTip((pct/100) * nBill);
    } else {
      alert("Digite o valor da conta!");
    }
  };

  return (
    <Page>
      <StatusBar hidden />

      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={e=>setBill(e)}
      />

      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)}/>
        <PctItem title="10%" onPress={() => setPct(10)}/>
        <PctItem title="15%" onPress={() => setPct(15)}/>
        <PctItem title="20%" onPress={() => setPct(20)}/>
      </PctArea>

      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />

      {tip > 0 &&
      <ResultArea>
        <ResultItemTitle>Valor da Conta</ResultItemTitle>
        <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {tip.toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Total</ResultItemTitle>
        <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>

      </ResultArea>
      }

    </Page>
  );
};

//export default TextoInicial;