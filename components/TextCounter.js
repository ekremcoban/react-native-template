/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import withCounter from '../hoc/withCounter';

const TextCounter = (props) => {
    // We carried this part to HOC
    // const [count, setcount] = useState(0);

    // const pressed = () => {
    //     setcount(count + 1)
    // }

    const { count, increment } = props;
    return (
        <View style={styles.container}>
            <Text>Press the text</Text>
            <View style={styles.title}>
                <Text onPress={increment}>{count}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 20,
    },
    title: {
        alignSelf: 'center',
    },
    text: {
        color: 'red',
    },
});

export default withCounter(TextCounter, 5);
