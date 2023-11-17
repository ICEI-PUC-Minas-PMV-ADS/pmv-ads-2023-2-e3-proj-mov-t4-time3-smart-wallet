import React, { useState, useRef } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, 
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import MyButton from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { register } from "../services/auth.services.js";
import Icon from 'react-native-vector-icons/FontAwesome';

const Cadastro = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleCadastro = async () => {
    if (!validateName(name) || !validateEmail(email) || !validatePassword(password)) {
      setErrorModalVisible(true);
      return;
    }

    register({
      name: name,
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res) {
        Alert.alert("Atenção", "Usuário cadastrado com sucesso!", [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ]);
      } else {
        Alert.alert(
          "Atenção",
          "Usuário não cadastrado! Tente novamente mais tarde!"
        );
      }
    });
  };

  const validateName = (inputName) => {
    if (inputName.trim() === "") {
      setNameError("Nome é obrigatório");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);

    setEmailError(isValid ? "" : "Email inválido");
    
    return isValid;
  };

  const validatePassword = (inputPassword) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    const isValid = passwordRegex.test(inputPassword);

    setPasswordError(isValid ? "" : "Senha inválida");
    
    return isValid;
  };

  return (
    <ScrollView style={styles.container} behavior="padding" enabled>
      <View style={styles.innerContainer}>
        <Image
          source={require("../assets/logoSmartWallet.png")}
          style={{
            width: 250, 
            height: 150, 
            marginTop: 100,
            marginBottom: 20,
          }}
          resizeMode="contain"
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.cadastroContainer}>
            <Input
              placeholder="Digite o seu nome"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>  
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.cadastroContainer}>
            <Input
              ref={emailInputRef}
              placeholder="Digite o seu e-mail"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.cadastroContainer}>
            <Input
              ref={passwordInputRef}
              placeholder="Digite sua senha"
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
          <Text style={styles.passwordInfo}>
            *Deve conter 1 letra maiúscula, 1 minúscula e pelo menos 1 número
          </Text>
        </View>

        <MyButton title="Cadastrar" onPress={handleCadastro} color="#010D8C" />

        <MyButton
          title="Voltar"
          onPress={() => navigation.goBack("Login")}
          color="darkgray"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 5,
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
  cadastroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInfo: {
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    color: "gray",
    paddingBottom: 10,
  },
});

export default Cadastro;
