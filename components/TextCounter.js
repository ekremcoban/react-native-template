/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import withCounter from '../hoc/withCounter';

const TextCounter = (props) => {
    // We carried this part to HOC
    // const [count, setcount] = useState(0);

    // const pressed = () => {
    //     setcount(count + 1)
    // }

    const { count, onPress } = props;
    return (
        <View style={styles.container}>
            <Text>Press the number</Text>
            <View style={styles.title}>
                <Text onPress={onPress}>{count}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 20,
    },
    title: {
        alignSelf: 'center',
    },
});

export default withCounter(TextCounter, 5);
