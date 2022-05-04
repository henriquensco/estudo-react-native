import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import Store from './src/Store';

import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';

const AppContainer = () => {
	return (
		<NavigationContainer>
			{/* <MainStack /> */}
			<MainTab/>
		</NavigationContainer>
	);
};


export default () => (
	<Provider store={Store}>
		<AppContainer />
	</Provider>
);