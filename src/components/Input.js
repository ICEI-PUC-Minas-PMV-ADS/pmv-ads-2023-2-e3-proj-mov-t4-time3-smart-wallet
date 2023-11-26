import React, { forwardRef } from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = forwardRef((props, ref) => {
  return <TextInput ref={ref} {...props} style={[styles.input, props.style]} />;
});

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "darkblue",
    marginBottom: 20,
    marginTop: 10,
    height: 50,
    width: "80%", // Ajuste para o layout
  },
});

export default Input;