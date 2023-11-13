import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from "react-native";
import { List, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/UserContext.js";
import { useIsFocused } from "@react-navigation/native";
import { getMessages, postMessages } from "../services/chat.services";
import HeaderPages from "../components/headerPages";
import MyButton from "../components/button.js";

const Chat = () => {
  const navigation = useNavigation();

  const { name, userId } = useUser();

  const isFocused = useIsFocused();

  const [mensagem, setMensagem] = useState([]);

  const [text, setText] = useState("");

  useEffect(() => {
    updateMessages();
  }, [isFocused]);

  const updateMessages = () => {
    getMessages().then((dados) => {
      const mensagens = dados.filter((user) => user.userId === userId);
      setMensagem(mensagens);
    });
  };

  const handleSendMessage = () => {
    postMessages({
      nome: name,
      mensagem: text,
      userId: userId,
    }).then((res) => {
      updateMessages();
      setText("");
      navigation.navigate("Chat");
    });
  };

  return (
    <>
      <HeaderPages navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            data={mensagem}
            renderItem={({ item }) => (
              <List.Item title={name + ":"} description={item.mensagem} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ margin: 10, marginBottom: 10, marginTop: 10 }}>
          <Divider
            style={{
              borderColor: "blue",
              borderWidth: 0.5,
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 15,
            }}
          />
          <TextInput
          placeholder="digite aqui sua mensagem.."
            mode="outlined"
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 5,
              fontSize: 14,
              height: 40,
              backgroundColor: "Whitesmoke",
            }}
          />

<MyButton onPress={handleSendMessage} title="Enviar" color="darkblue"/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  body: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 8,
  },
  enviar: {
    paddingLeft: 10,
},
});

export default Chat;
