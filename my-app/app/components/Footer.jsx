import { StyleSheet, View, Text } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import * as React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';


export default function Footer({ navigation }) {
    return (
        <View style={styles.footer}>
            <Icon 
                name="home"
                size={40}
                color="#141414"
                onPress={() => navigation.navigate('Home')}
            />
            <Icon 
                name="inbox"
                size={40}
                color="#141414"
                onPress={() => navigation.navigate('Messages')}
            />
            <Icon 
                name="picture"
                size={40}
                color="#141414"
                onPress={() => navigation.navigate('PhotoShare')}
            />
            <Icon 
                name="user"
                size={40}
                color="#141414"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
    },
    footer: {
        height: 70,
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around', 
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -6, 
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        zIndex: 5,
        borderTopWidth: 1,
        borderTopColor: '#14141410',
        position: 'absolute',
        bottom: 0,
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
    },
});
