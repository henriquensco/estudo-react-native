import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

const Section = styled.View`
    flex: 1;
    width: 100%;
    backgroundColor: #E7E7E7;
    justify-content: center;
    align-items: center;
`;

const SectionText = styled.Text`
    fontSize: 18px;
`;

export default () => {

    const [ status, setStatus ] = useState('');

    return (
        <Section>
            {/* uso de imagens locais */}
            <SectionText>Imagem local</SectionText>
            <Image 
                source={require('../assets/images/spacemonkey.jpg')} 
                style={{ width: 250, height: 250}}
                resizeMode="cover"
            />

            {/* uso de imagens remotas */}
            <SectionText>Imagem remota</SectionText>
            <Image 
                source={{uri: 'https://static.displate.com/280x392/displate/2015-11-25/a13de54d7d36171e0d58643044ff97ed.jpg'}} 
                style={{ width: 250, height: 250}}
                resizeMode="cover"
                defaultSource={require('../assets/images/placeholder.png')}
                onLoadStart={() => setStatus('carregando...')}
                onLoadEnd={() => setStatus('carregou!!!')}
                onError={(e) => setStatus(e.nativeEvent.error)}
                onProgress={(e) => setStatus(e.nativeEvent.total)}
            />

            <SectionText style={{fontWeight: 'bold'}}>Tempo de carregamento da imagem remota</SectionText>
            <Text>{status}</Text>

        </Section>
    );
};