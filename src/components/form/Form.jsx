import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
const Form = ({ controlHeightRegisterBlock }) => {
  const [name, useName] = useState('');
  const [number, useNumber] = useState('');
  const [email, useEmail] = useState('');
  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <View>
        <TextInput
          style={styles.input}
          name="name"
          value={name}
          onFocus={() => controlHeightRegisterBlock(true)}
        />
        <TextInput
          style={styles.input}
          name="number"
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          name="email"
          value={email}
          placeholder="useless placeholder"
          keyboardType="email"
        />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Form;
