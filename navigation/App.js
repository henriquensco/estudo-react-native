import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';

const App = () => {
	return (
		<NavigationContainer>
			{/* <MainStack /> */}
			<MainTab/>
		</NavigationContainer>
	);
};


export default App;