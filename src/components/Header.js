import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
    width: 100%;
    height: 60px;
    backgroundColor: #ccc;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.Text`
    fontSize: 25px;
`;

export default () => {
    return (
        <Header>
            <HeaderText>Texto Qualquer</HeaderText>
        </Header>
    );
};