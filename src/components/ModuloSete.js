import React, { useState } from 'react';
import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import ListaItem from './ListaItem';
import AddItemArea from './AddItemArea';

import lista from '../lista';

const Page = styled.View`
	flex:1;
`;

const Scroll = styled.ScrollView`
    flex: 1;
`;

const Listagem = styled.FlatList`
    flex: 1;
    background-color: #e1e1e1;
`;

const Item = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
`;

/* const Item = styled.TouchableHighlight`
    padding: 10px;
    background-color: #c1c1c1;
    flex-direction: row;
`; */

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
/* 
export default () => {
    return (
        <Page>
            <Scroll>
                {lista.map((item, index) => {
                    return (
                        //activeOpacity={0.8}
                        //underlayColor="#ccc"
                        <Item key={index} onPress={() => alert(item.task)} activeOpacity={0.5}>
                            <>
                                <ItemText>{item.task}</ItemText>

                                <ItemCheck></ItemCheck>
                            </>
                        </Item>
                    );
                })}

            </Scroll>
        </Page>
    );
}; */


export default () => {

    const [items, setItems] = useState(lista);

    return (
        <Page>
            <AddItemArea items={items} setItems={setItems} />
            <Listagem
                data={items}
                renderItem={({ item }) => <ListaItem data={item} />}
                keyExtractor={(item) => item.id}
            />
        </Page>
    );
};