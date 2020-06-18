/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonCounter from '../components/ButtonCounter';
import TextCounter from '../components/TextCounter';
import { BUTTON } from '../Utilities/Colors';

const MainScreen = () => {
    return (
        <View style={style.container}>
            <ButtonCounter name="Inc" color={BUTTON.INCREMENT_RED} />
            <TextCounter />
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

export default MainScreen;
