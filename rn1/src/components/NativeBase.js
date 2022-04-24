import React from 'react';
import styled from 'styled-components/native';

import { Button, Text, Spinner, Heading, HStack } from "native-base";

const Page = styled.SafeAreaView`
	flex:1;
`;

export default () => {
    return (
        <Page>
            <Button rounded={15} danger>
                <Text>Click Me!</Text>
            </Button>

            <HStack space={2} justifyContent="center" alignItems="center">
                <Spinner size="lg" accessibilityLabel='Loading posts' />
                <Heading color="primary.500" size="md">
                    Loading
                </Heading>
            </HStack>

        </Page>
    );
};