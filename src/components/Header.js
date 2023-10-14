import React from 'react';
import { Header as RNHeader, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
      <RNHeader 
        style={styles.Header}
        {...props}      
      />)
    ;
};

export default Header;


