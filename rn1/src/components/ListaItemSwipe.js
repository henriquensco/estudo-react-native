import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { DeleteIcon } from 'native-base';

const ListaItemSwipe = styled.TouchableHighlight`
    width: 100%;
    height: 50px;
    background-color: #ff3333;
    justify-content: center;
`;

export default (props) => { 
    return (
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#red">
            <DeleteIcon size="30" color="white" style={{ margin: 10 }}/>
        </ListaItemSwipe>
    );
};