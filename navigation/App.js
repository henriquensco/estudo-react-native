import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


import MainStack from './src/navigators/MainStack';

const App = () => {
	return (
		<NavigationContainer>
			<MainStack/>
		</NavigationContainer>
	);
};


export default App;