import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
    flex: 1;
    background-color: #333;
`;

const TotalItemsText = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
    padding: 10px;
`;

export default () => {

    const [loading, setLoading] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([]);

    useEffect(() => {
        const requestMovies = async () => {
            setLoading(true);

            const req = await fetch('https://api.b7web.com.br/cinema/');
            const json = await req.json();
    
            //alert('quantidade de filmes: ' + json.length)
    
            if (json) {
                setListaFilmes(json);
            }

            setLoading(false);
        };

        requestMovies();
    }, []);

    return (
        <Page>
            {/* <Button title='Carregar Filmes' onPress={handleLoadButton} /> */}
            
            {loading &&
                <View style={styles.loadingArea}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Carregando...</Text>
                </View>
            }

            {!loading &&
                <>
                    <TotalItemsText>Total de filmes: {listaFilmes.length}</TotalItemsText>

                    <FlatList
                        style={styles.list}
                        data={listaFilmes}
                        renderItem={({ item }) => (
                            <View style={styles.movieItem}>
                                <Image
                                    source={{ uri: item.avatar }}
                                    style={styles.movieImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.movieTitle}>{item.titulo}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.titulo}
                    />
                </>
            }
            
        </Page>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    movieItem: {
        marginBottom: 30
    },
    movieImage: {
        height: 400
    },
    movieTitle: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 5
    },
    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: '#fff',    
        fontSize: 18
    }
});