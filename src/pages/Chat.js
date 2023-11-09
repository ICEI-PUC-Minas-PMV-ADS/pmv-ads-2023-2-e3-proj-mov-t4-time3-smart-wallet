import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Button } from 'react-native'
import { List } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useUser } from '../context/UserContext.js';
import { useIsFocused } from '@react-navigation/native';
import { getMessages, postMessages } from '../services/chat.services';
import HeaderPages from '../components/headerPages';

const Chat = () => {

    const navigation = useNavigation();

    const { name ,emails } = useUser();

    const isFocused = useIsFocused();

    const [mensagem, setMensagem] = useState([]);

    const [text, setText] = useState('');

    useEffect(() => {
        updateMessages()
    }, [isFocused]);

    const updateMessages = () => {
        getMessages().then(dados => {
            const mensagens = dados.filter(user => user.email === emails);
            setMensagem(mensagens);
        });
    };

    const handleSendMessage = () => {
        postMessages({
            nome: name,
            mensagem: text,
            email: emails
        }).then((res) => {
            updateMessages()
            setText('');
            navigation.navigate('Chat');
          });
    }

    return (
        <>
            <HeaderPages navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <FlatList
                        data={mensagem}
                        renderItem={({ item }) =>
                            <List.Item
                                title={name + ":"}
                                description={item.mensagem}
                            />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
                <TextInput
                mode="outlined"
                style={{ backgroundColor: "darkblue"}}
                value={text}
                onChangeText={(text) => setText(text)}
              />
                <Button
                    onPress={handleSendMessage}
                    title="Send"
                    color="#841584"
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    body: {
        flex: 1,
        backgroundColor: '#FFF',
        margin: 8
    }
});

export default Chat;