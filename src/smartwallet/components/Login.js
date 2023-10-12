import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Input from './Input';
import { Alert as CustomAlert } from 'react-native';

import Container from './Container';

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../context/UserContext';

import {login} from '../services/auth.services.js';

const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName} = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async () => {
  login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user) {

        setSigned(true);
        setName(res.user.name);

      } else {
        Alert.alert('Atenção', 'Usuário ou senha incorretos!');
      }
    });
};

  return (
    <Container>
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
        <View style={styles.buttonContainer}>
          <Button
            title="Entrar"
            onPress={handleLogin}
            color="#010D8C"
          />
        </View>
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
  buttonContainer: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#010D8C',
  },
  inputContainer: {
    width: '80%',
    marginTop: 10,
  },
  label: {
    marginBottom: 5,
    color: 'darkblue',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 16,
    color: '#007AFF',
  },
  footer: {
    width: '100%',
    height: '55%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default Login;
