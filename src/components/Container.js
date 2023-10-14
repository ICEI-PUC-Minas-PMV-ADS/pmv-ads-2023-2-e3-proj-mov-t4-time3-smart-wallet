import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
 container:{
    //flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginBottom: 5,
    //marginTop: 100,
  },
});

export default Container;