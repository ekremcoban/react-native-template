/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { SCREEN } from '../Utilities/Texts';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Button title="Pass" onPress={() => navigation.navigate(SCREEN.Main)} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
