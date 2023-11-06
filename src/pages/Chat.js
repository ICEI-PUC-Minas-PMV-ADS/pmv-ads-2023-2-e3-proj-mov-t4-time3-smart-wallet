import React, { useEffect, useState } from 'react';

import { View, FlatList, StyleSheet } from 'react-native'
import { List } from 'react-native-paper';

import { getMessages } from '../services/chat.services';

const Chat = () => {

    const [mensagem, setMensagem] = useState([]);

    useEffect(() => {
        getMessages().then(dados => {
            setMensagem(dados)
        });
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>
                    <FlatList
                        data={mensagem}
                        renderItem={({ item }) =>
                            <List.Item
                                title={"Hello, msg id: " + item.id}
                                description={"Message: " + item.mensagem}
                            />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
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