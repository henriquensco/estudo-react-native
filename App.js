import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';

/* export default () => {
  return (
    <Text>Texto 1</Text>
  );
} */

/* function textoInicial() {
  return (
    <Text>Texto 2</Text>
  );
} */

/* class TextoInicial extends Component {
  render() {
    return (
      <Text>Texto 3</Text>
    );
  }
} */

const TextoInicial = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar hidden />

      <Text style={{ 
        color: '#ffffff',
        fontSize: 25,
      }}>Hey!</Text>

      <Text style={styles.texto}>Segundo texto legal</Text>

      <Text style={[styles.texto, {fontSize: 35}]}>Terceiro texto legal</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    width: 200,
    height: 200,
    backgroundColor: '#ff0000'
  },
  texto: { 
    color: '#ffffff',
    fontSize: 25,
  }
});

export default TextoInicial;