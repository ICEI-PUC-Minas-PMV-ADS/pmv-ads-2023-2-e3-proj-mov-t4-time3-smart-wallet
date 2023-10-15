import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useUser } from '../context/UserContext';
import Container from '../components/Container';
import MyButton from '../components/button';

const Usuario = ({ navigation }) => {
  const { name } = useUser();

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          source={require('../assets/SmartWallet.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Container style={styles.container}>
        <Text>Olá {name}</Text>
        {/* Conteúdo da página do usuário aqui */}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    flexDirection: '1',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 100,
  },
});

export default Usuario;
