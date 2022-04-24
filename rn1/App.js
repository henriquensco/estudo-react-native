import React, { useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
import styled from 'styled-components/native';

import Header from './src/components/Header';
//import Images from './src/components/Images';
import ModuloSete from './src/components/ModuloSete';
import NativeBase from './src/components/NativeBase';
import AsyncStorage from './src/components/AsyncStorage';
import Modal from './src/components/Modal';

import { NativeBaseProvider } from "native-base";

import FilmesEmCartaz from './src/apps/FilmesEmCartaz';

/* 
Separação dos components
*/

const Page = styled.SafeAreaView`
	flex:1;
`;

export default () => {

	return (
		<NativeBaseProvider>
			<Page>
				{/* <StatusBar hidden /> */}

				<Header />

				{/* <Images /> */}
				{/* <NativeBase /> */}
				
				{/* <ModuloSete /> */}

				{/* <AsyncStorage /> */}

				{/* <Modal /> */}

				<FilmesEmCartaz />
				
			</Page>
		</NativeBaseProvider>
	);
};

//export default TextoInicial;