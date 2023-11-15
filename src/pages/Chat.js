import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import HeaderPages from '../components/headerPages';

const Chat = () => {

  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: Math.random(),
        text: 'Bem vindo ao Smart Wallet helpbot, como posso ajudar?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Smart Wallet',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    const uniqueMessages = newMessages.map((message) => ({
      ...message,
      _id: Math.random(), // Generate a unique ID for each message
    }));

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, uniqueMessages)
    );

    if (newMessages[0].text === 'Lançamentos') {
      const responseMessages = [
        {
          _id: Math.random(),
          text:
            'Para realizar um novo Lançamento, basta apertar o botão "Lançamentos" no rodapé da tela inicial!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Smart Wallet',
          },
        },
      ];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, responseMessages)
      );
    } else {
      const responseMessages = [
        {
          _id: Math.random(),
          text:
            'Desculpe, não entendi o que você está tentando me dizer. Tente digitar "Lançamentos" ou "Extrato"',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Smart Wallet',
          },
        },
      ];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, responseMessages)
      );
    }
  }, []);

  return (
    <>
      <HeaderPages navigation={navigation} />
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </>
    
  );
};

export default Chat;
