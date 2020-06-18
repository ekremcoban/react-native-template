/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import withCounter from '../hoc/withCounter';
import { BUTTON } from '../Utilities/Colors';

const ButtonCounter = (props) => {
    console.log(props);
    // We carried this part to HOC
    // const [count, setcount] = useState(0);

    // const pressed = () => {
    //     setcount(count + 1)
    // }

    const { count, onPress, name, color } = props;
    return (
        <>
            <Text>Pressed {count}</Text>
            <Button
                color={color == null ? BUTTON.INCREMENT_GREEN : color}
                title={name}
                onPress={onPress} />
        </>
    );
};

ButtonCounter.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    onPress: PropTypes.func,
};

export default withCounter(ButtonCounter, 1);
