import React, { useMemo, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Button,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Form from '../form/Form';
import IMG from '../quickie-jpeg-example.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegistrationScreen = () => {
  const [heightDiv, setHeight] = useState('');

  const heightDivFunc = useMemo(() => {
    styles => {
      setHeight({
        ...styles.registerBlock,
        height: 200,
      });
      console.log('first');
    };
  }, []);

  console.log('rev', styles.registerBlock);

  Keyboard.addListener('keyboardDidShow', heightDivFunc);
  return (
    <View style={heightDiv && styles.registerBlock}>
      <Image style={styles.registerAvatar} source={IMG} />
      <Text style={styles.registerText}>Реєстрація</Text>

      <Form />

      <Button title="Hide modal" />
    </View>
  );
};
// 0.46
const styles = StyleSheet.create({
  registerBlock: {
    width: windowWidth,
    height: windowHeight * 0.8,
    // flex: 1,
    backgroundColor: 'powderblue',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: 'red',
  },
  registerAvatar: {
    width: 100,
    height: 100,
  },
  containerB: {
    // flex: 0.64,
    // height: 600,
    // height: windowHeight * 0.46,
    // padding: 0,
    // margin: 0,
  },
});
export default RegistrationScreen;
