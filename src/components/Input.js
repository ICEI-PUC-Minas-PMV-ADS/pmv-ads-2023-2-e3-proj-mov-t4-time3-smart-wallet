import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = forwardRef(({ style, ...props }, ref) => (
  <TextInput ref={ref} style={[styles.input, style]} {...props} />
));

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 35,
    borderColor: 'darkgray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'gray',
  },
});

export default Input;