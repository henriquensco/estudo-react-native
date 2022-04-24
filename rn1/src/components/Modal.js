import React, { useEffect, useState } from 'react';
import { Text, Modal } from 'react-native';
import styled from 'styled-components/native';


const Page = styled.View`
	flex:1;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
`;

const Box = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const BoxBody = styled.View`
    width: 90%;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
`;

const Botao = styled.Button``;

export default () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Page>
            <Botao title="Abrir Modal" onPress={() => setModalVisible(true)}/>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >

                <Box>
                    <BoxBody>
                        <Botao title="Fechar Modal" onPress={() => setModalVisible(false)}/>
                    </BoxBody>
                </Box>

            </Modal>
        </Page>
    );
};