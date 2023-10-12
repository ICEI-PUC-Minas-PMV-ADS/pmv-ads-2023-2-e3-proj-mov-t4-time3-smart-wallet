import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import {useUser} from '../context/UserContext';


const Usuario = ({ navigation }) => {
  
  const {name} = useUser();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ marginLeft: 0, alignItems: 'left'}}>
        <Image
          source={require('../assets/SmartWallet.png')} // Imagem para a tela Usuario.js
          style={{
            width: 40, // Defina a largura desejada da imagem no cabeçalho da tela Usuario.js
            height: 40, // Defina a altura desejada da imagem no cabeçalho da tela Usuario.js
            resizeMode: 'contain',
            justifyContent: 'flex-start' // Ajusta a imagem ao espaço
          }}
        />
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Olá {name}</Text>
      {/* Conteúdo da página do usuário aqui */}
    </View>
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
