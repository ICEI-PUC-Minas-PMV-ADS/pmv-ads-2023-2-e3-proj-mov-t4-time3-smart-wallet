import React, { useState, useRef } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import Input from "../components/Input";
import MyButton from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { register } from "../services/auth.services.js";

const Cadastro = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState(""); 

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

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
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Image
        source={require("../assets/logoSmartWallet.png")}
        style={{
          width: 250, 
          height: 150, 
          marginTop: 100,
          marginBottom: 5,
        }}
        resizeMode="contain"
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <Input
          placeholder="Digite o seu nome"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <Input
          ref={emailInputRef}
          placeholder="Digite o seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <Input
          ref={passwordInputRef}
          placeholder="Digite a sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
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

      <Modal
        visible={errorModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setErrorModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image
            source={require("../assets/SmartWallet.png")}
            style={{
              width: 250,
              height: 150,
            }}
            resizeMode="contain"
          />
          <Text style={styles.errorText}>
            Por favor!{"\n"} Verifique as informações e tente novamente
          </Text>
          <Button title="Fechar" onPress={() => setErrorModalVisible(false)} />
        </View>
      </Modal>
      <View style={styles.footer}>
        <Image
          source={require("../assets/background.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    marginTop: 5,
  },
  label: {
    marginBottom: 5,
    color: "darkblue",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#010D8C",
  },
  errorText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
    marginBottom: 50,
    paddingLeft: 70,
    paddingRight: 70,
  },
  passwordInfo: {
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    color: "gray",
    paddingBottom: 20,
  },
  footer: {
    width: "100%",
    height: "25%",
    resizeMode: "cover",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default Cadastro;
