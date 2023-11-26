import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Appbar, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/UserContext";
import Icon from "react-native-vector-icons/FontAwesome";
import MyButton from "../components/button";
import { editarSenha } from "../services/auth.services";

const UserProfile = ({ route }) => {
  const { item } = route.params ? route.params : {};
  const navigation = useNavigation();
  const { userId, name, userEmail, logout } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      console.log("As senhas não coincidem");
      return;
    } else {
      editarSenha({
        name: name,
        email: userEmail,
        password: newPassword,
        id: userId
      }).then((res) => {
        navigation.goBack();
      });
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.navigate("Usuario")} />
        <Image
          source={require("../assets/SmartWallet.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={handleLogout}>
            <Icon
              name="sign-out"
              size={27}
              color="darkblue"
              style={styles.logoutIcon}
            />
          </TouchableOpacity>
        </View>
      </Appbar.Header>

      <Text style={styles.titlePage}>Perfil do Usuário</Text>

      <View style={styles.userContainer}>
        <View style={styles.userIconContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="user" size={75} color="darkblue" />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>Nome: {name}</Text>
          <Text style={styles.userInfoText}>E-mail: {userEmail}</Text>
        </View>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.passwordContainer}>
        <Text style={styles.sectionTitle}>
          Trocar Senha
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              paddingLeft={20}
              color="darkblue"
            />
          </TouchableOpacity>
        </Text>

        <TextInput
          placeholder="Nova Senha"
          secureTextEntry={!showPassword}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          style={styles.input}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Nova Senha"
          secureTextEntry={!showPassword}
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
        />

        <MyButton
          title="Trocar Senha"
          onPress={handleChangePassword}
          color="#010D8C"
          style={styles.changePasswordButton}
        />
      </View>

      <View style={styles.footer}>
        <Image
          source={require("../assets/background.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePage: {
    marginTop: 35,
    marginLeft: 20,
    marginBottom: 1,
    fontSize: 20,
    color: "darkblue",
    fontWeight: "bold",
  },
  userContainer: {
    flexDirection: "row",
    paddingLeft: 40,
    paddingTop: 20,
    alignItems: "center",
  },
  userIconContainer: {
    marginRight: 20,
  },
  userInfoContainer: {
    flex: 1,
  },
  userInfoText: {
    fontSize: 16,
  },
  appbar: {
    backgroundColor: "whitesmoke",
    marginTop: 35,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  logoutIcon: {
    marginLeft: 220,
  },
  divider: {
    borderColor: "darkblue",
    borderWidth: 0.5,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  passwordContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    marginTop: 35,
    color: "darkblue",
    textAlign: "left",
    marginLeft: 0,
  },
  showPasswordButton: {
    marginLeft: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "darkblue",
    marginBottom: 20,
    marginTop: 10,
    height: 50,
    width: "80%", // Ajuste para o layout
  },
  footer: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    top: 52,
  },
});

export default UserProfile;
