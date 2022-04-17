import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Header from './src/components/Header';

/* 
Separação dos components
*/

const Page = styled.SafeAreaView`
	flex:1;
`;

export default () => {

	return (
		<Page>
			<StatusBar hidden />

			<Header />
		</Page>
	);
};

//export default TextoInicial;