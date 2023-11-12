import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
      <TextInput 
        style={styles.input}
        {...props}      
      />)
    ;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 20,
    borderColor: 'darkgray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'gray',
  },
});

export default Input;