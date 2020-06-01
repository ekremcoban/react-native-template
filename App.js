import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonCounter from './components/ButtonCounter';
import TextCounter from './components/TextCounter';


const App: () => React$Node = () => {
  return (
    <View style={style.container}>
      <ButtonCounter name="Sütaş"/>
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

export default App;
