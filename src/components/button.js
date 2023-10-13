import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const MyButton = (props) => {
  return (
    <View style={styles.button}>
      <Button 
        {...props}      
      />
      </View>
      )
    ;
};

const styles = StyleSheet.create({
  button: {
    width: '75%',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    color: '#010D8C',
  },
})

export default MyButton;