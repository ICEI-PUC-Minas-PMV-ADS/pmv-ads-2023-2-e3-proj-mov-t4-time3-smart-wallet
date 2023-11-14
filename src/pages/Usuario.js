import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useUser } from '../context/UserContext';
import Container from '../components/Container';
import MyButton from '../components/button';

const Usuario = ({ navigation }) => {
  const { name } = useUser();

  const newPosting = ()=>{
    navigation.navigate('NovoLançamento');
  }

  const extract = ()=>{
    navigation.navigate('Extrato');
  }

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
        <MyButton onPress={newPosting} title="Novo lançamento"></MyButton>
        <MyButton onPress={extract} title="Extrato"></MyButton>

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
    flexDirection: 'column',
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
