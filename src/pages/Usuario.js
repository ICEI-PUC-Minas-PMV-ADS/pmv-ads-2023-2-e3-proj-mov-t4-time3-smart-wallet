import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useUser } from '../context/UserContext';
import Container from '../components/Container';
import MyButton from '../components/button';

const Usuario = ({ navigation }) => {

  const { name } = useUser();

  return (
    <Container>
      <View style={styles.container}>
        <Text>Olá {name}</Text>
        {/* Conteúdo da página do usuário aqui */}
      </View>

      <MyButton
        title="Voltar"
        onPress={() => navigation.goBack('Login')}
        color="darkgray"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 100,
  }
});

export default Usuario;
