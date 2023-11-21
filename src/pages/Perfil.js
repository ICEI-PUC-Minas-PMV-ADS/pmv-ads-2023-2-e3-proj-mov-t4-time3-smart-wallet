import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Appbar, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/UserContext.js";
import Icon from "react-native-vector-icons/FontAwesome";
import MyButton from "../components/button.js";

const UserProfile = () => {
  const navigation = useNavigation();
  const { name, email, logout } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    // Lógica para atualizar a senha no servidor (pode ser implementada conforme a sua estrutura)
    // Certifique-se de lidar com erros e sucesso adequadamente.
    console.log("Senha atualizada com sucesso!");
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
            <Icon
              name="user"
              size={75}
              color="darkblue"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={{ fontSize: 16 }}>Nome: {name}</Text>
          <Text style={{ fontSize: 16 }}>E-mail: {email}</Text>
        </View>
      </View>

      <Divider style={{ borderColor: 'darkblue', borderWidth: 0.5, marginTop: 15, marginLeft: 5, marginRight: 5 }} />

      <View style={styles.passwordContainer}>
        <Text style={styles.sectionTitle}>Trocar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha Atual"
          secureTextEntry
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <MyButton
          title="Trocar Senha"
          onPress={handleChangePassword}
          color="#010D8C"
          style={{ marginBottom: 10 }}
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
  passwordContainer: {
    width: "90%",
    paddingLeft: 40,
    paddingRight: 20,
    marginTop: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "darkblue",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
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
  userContainer: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    alignItems: 'center',
  },
  userIconContainer: {
    marginRight: 20,
  },
  userInfoContainer: {
    flex: 1,
  },
});

export default UserProfile;
