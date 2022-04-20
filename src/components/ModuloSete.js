import React, { useState } from 'react';
import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { SwipeListView } from 'react-native-swipe-list-view';

import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import ListaItem from './ListaItem';
import AddItemArea from './AddItemArea';
import ListaItemSwipe from './ListaItemSwipe';

import lista from '../lista';

const Page = styled.View`
	flex:1;
`;

const Scroll = styled.ScrollView`
    flex: 1;
`;

const Listagem = styled.FlatList`
    flex: 1;
    background-color: #eee;
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

    const addNewItem = (param) => { 
        //alert('foi executada! ' + param);
        let listItems = [...items];

        listItems.push({
            id: uuid(),
            task: param,
            done: false
        });

        setItems(listItems);
    };

    const toggleDone = (index) => {
        let listItems = [...items];

        listItems[index].done = !listItems[index].done

        setItems(listItems);
    };

    const deleteItem = (index) => {
        let listItems = [...items];

        listItems = listItems.filter((it, idx) => idx != index);

        setItems(listItems);
    };

    return (
        <Page>
            {/* <AddItemArea items={items} setItems={setItems} /> */}
            <AddItemArea onAdd={addNewItem} />
            <SwipeListView
                data={items}
                renderItem={({ item, index }) => <ListaItem onPress={() => toggleDone(index)} data={item} />}
                
                renderHiddenItem={({ item, index}) => <ListaItemSwipe onDelete={() => deleteItem(index)} />}
                leftOpenValue={50}
                disableLeftSwipe={true}
                
                keyExtractor={(item) => item.id}
            />
        </Page>
    );
};