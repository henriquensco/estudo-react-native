import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

/* const Item = styled.TouchableOpacity`
    background-color: #eee;
    padding: 10px;
    flex-direction: row;
    height: 50px;
    justify-content: center;
    align-items: center;
`;
 */

const Item = styled.TouchableHighlight`
    background-color: #eee;
    padding: 10px;
    flex-direction: row;
    height: 50px;
    justify-content: center;
    align-items: center;
`;


const ItemText = styled.Text`
    flex: 1;
    font-size: 17px;
`;

const ItemCheck = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 5px solid #fff;
    background-color: ${props=>props.done ? '#ccc' : '#fff'}
`;

export default (props) => { 
    return (
        //activeOpacity={0.8}
        //underlayColor="#ccc"
        <Item onPress={() => props.onPress()} underlayColor="#ddd" activeOpacity={0.7}>
            <>
                <ItemText>{props.data.task}</ItemText>

                <ItemCheck done={props.data.done}></ItemCheck>
            </>
        </Item>
    );
};