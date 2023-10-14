import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import { Alert as CustomAlert } from 'react-native';
import Container from '../components/Container';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContext';
import MyButton from '../components/button';

import { login } from '../services/auth.services.js';

const Login = () => {

  const navigation = useNavigation();
  const { setSigned, setName } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    login({
      email: email,
      password: password
    }).then(res => {
      console.log(res);

      if (res && res.user) {

        setSigned(true);
        setName(res.user.name);

      } else {
        Alert.alert('Atenção', 'Usuário ou senha incorretos! Por favor, tente novamente');
      }
    });
  };

  return (
    <Container>
        <View>
          <Image
            source={require('../assets/logoSmartWallet.png')} 
            style={{
              width: 250, 
              height: 150, 
              marginTop: 100,
              marginBottom: 50,
            }}
            resizeMode="contain"
          />
        </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-Mail</Text>
        <Input
          placeholder="Digite o seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <Input
          placeholder="Digite a sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

        <MyButton
          title="Entrar"
          onPress={handleLogin}
          color="#010D8C"
        />

      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={[styles.registerText, { textAlign: 'center' }]}>
          Ainda não tem uma conta? {'\n'} Cadastre-se!
        </Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Image
          source={require('../assets/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: 'darkblue',
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 15,
    color: '#007AFF',
  },
    footer: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default Login;
