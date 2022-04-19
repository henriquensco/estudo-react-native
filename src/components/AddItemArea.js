import React, { useState } from 'react';
import styled from 'styled-components/native';

import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';


const AddItemArea = styled.View`
    background-color: #ccc;
    padding: 10px;
`;

const AddItemInput = styled.TextInput`
    background-color: #fff;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
`;

export default (props) => {

    const [item, setItem] = useState('');

    const handleSubmit = () => {
        let items = [...props.items];

        if (item.trim() != '') {
            items.push({
                id: uuid(),
                task: item,
                done: false
            });

            props.setItems(items);

            alert('cadastrado!');
        } else {
            alert('Você precisar adicionar um item!');
        }

        setItem('');
    };

    return (
        <AddItemArea>
            <AddItemInput
                placeholder="Digite um novo item"
                value={item}
                onChangeText={(e) => setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            >    
            </AddItemInput>
        </AddItemArea>
    );
};