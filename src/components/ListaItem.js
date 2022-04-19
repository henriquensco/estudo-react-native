import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
`;

const ItemText = styled.Text`
    flex: 1;
    font-size: 15px;
`;

const ItemCheck = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 5px solid #fff;
`;

export default (props) => { 
    return (
        //activeOpacity={0.8}
        //underlayColor="#ccc"
        <Item onPress={() => alert(props.data.task)} activeOpacity={0.7}>
            <>
                <ItemText>{props.data.task}</ItemText>

                <ItemCheck></ItemCheck>
            </>
        </Item>
    );
};