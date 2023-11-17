import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContext';
import MyButton from '../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { login } from '../services/auth.services.js';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setUserId, setName } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    login({
      email: email,
      password: password
    }).then(res => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
        setUserId(res.user.id);

        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      } else {
        Alert.alert('Atenção', 'Usuário ou senha incorretos! Por favor, tente novamente');
      }
    });
  };

  return (
    <ScrollView style={styles.container} behavior="padding" enabled>
      <View style={styles.innerContainer}>
        <View>
          <Image
            source={require('../assets/logoSmartWallet.png')}
            style={{
              width: 250,
              height: 150,
              marginTop: 50,
              marginBottom: 30,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-Mail</Text>
          <View style={styles.passwordContainer}>
            <Input
              placeholder="Digite o seu e-mail"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Digite a sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="darkblue" />
            </TouchableOpacity>
          </View>
        </View>

        <MyButton
          title="Entrar"
          onPress={handleLogin}
          color="#010D8C"
          style={{ marginBottom: 10 }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={[styles.registerText, { textAlign: 'center' }]}>
            Ainda não tem uma conta? {'\n'} Cadastre-se!
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image
          source={require('../assets/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    marginBottom: 0,
    paddingLeft: 10,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    color: 'darkblue',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'darkblue',
    marginBottom: 10,
    flex: 1,
    height: 50,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPasswordButton: {
    padding: 10,
  },
  registerText: {
    fontSize: 15,
    color: '#007AFF',
  },
  footer: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
});

export default Login;
