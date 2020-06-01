/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import withCounter from '../hoc/withCounter';

const ButtonCounter = (props) => {
    // We carried this part to HOC
    // const [count, setcount] = useState(0);

    // const pressed = () => {
    //     setcount(count + 1)
    // }

    const { count, increment, name } = props;
    return (
        <>
            <Text>Pressed {count}</Text>
            <Button
                title={name}
                onPress={increment} />
        </>
    );
}

export default withCounter(ButtonCounter, 1);
