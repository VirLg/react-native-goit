import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import Form from '../form/Form';
import IMG from '../quickie-jpeg-example.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegistrationScreen = () => {
  controlHeightRegisterBlock = value => {
    console.log('value', value);
  };
  return (
    <View style={styles.registerBlock}>
      <Image style={styles.registerAvatar} source={IMG} />
      <Text style={styles.registerText}>Реєстрація</Text>

      <Form controlHeightRegisterBlock={controlHeightRegisterBlock} />

      <Button title="Hide modal" />
    </View>
  );
};

const styles = StyleSheet.create({
  registerBlock: {
    width: windowWidth,
    height: windowHeight * 0.67,
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
});
export default RegistrationScreen;
