import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const options = descriptors[route.key].options;

                let label = route.name;

                if (options.tabBarLabel != undefined) {
                    label = options.tabBarLabel;
                } else if (options.title != undefined) {
                    label = options.title;
                }

                const isFocused = state.index === index;

                const handleTabPress = () => {
                    navigation.navigate(route.name);
                };

                if (route.name == 'TabHome') {
                    return (
                        <TouchableHighlight key={index} style={styles.MiddleTab} underlayColor='0.1' onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight key={index} style={styles.tab} underlayColor='transparent' onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    );
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    MiddleTab: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        backgroundColor: '#219EBC',
        color: '#fff',
        marginTop: -20,
        borderRadius: 35
    },
    label: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },
    labelFocused: {
        fontSize: 16,
        color: '#0000ff',
        fontWeight: 'bold'
    }
})
