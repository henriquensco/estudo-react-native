import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Header from './src/components/Header';
//import Images from './src/components/Images';
import NativeBase from './src/components/NativeBase';

import { NativeBaseProvider } from "native-base";

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
				<StatusBar hidden />

				<Header />
				{/* <Images /> */}
				<NativeBase />
			</Page>
		</NativeBaseProvider>
	);
};

//export default TextoInicial;