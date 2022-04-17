import React from 'react';
import styled from 'styled-components/native';

import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Header } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


/* const Header = styled.View`
	width: 100%;
	height: 60px;
	backgroundColor: #ccc;
	justify-content: center;
	align-items: center;
	shadow-color: #000;
	shadow-offset: 0px 2px;
	shadow-opacity: 0.8;
	shadow-radius: 2px;
	elevation: 1;
`;*/

const HeaderText = styled.Text`
	fontSize: 25px;
`

export default () => {
	return (

		<NativeBaseProvider>
			<StatusBar bg="#3700B3" barStyle="light-content" />
			<Box safeAreaTop bg="#6200ee" />
			<HStack bg="#6200ee" px="1" py="4" justifyContent="space-between" alignItems="center" w="100%">
				<HStack alignItems="center">
					<IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />} />
					<Text color="white" fontSize="20" fontWeight="bold">
						Home
					</Text>
				</HStack>
				<HStack>
					<IconButton icon={<Icon as={MaterialIcons} name="favorite" size="md" color="white" />} />
					<IconButton icon={<Icon as={MaterialIcons} name="search" size="md" color="white" />} />
					<IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="md" color="white" />} />
				</HStack>
			</HStack>
    	</NativeBaseProvider>
	);
};