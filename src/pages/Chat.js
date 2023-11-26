import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import HeaderPages from '../components/headerPages';
import { dicasEconomia } from '../assets/textos/comoEconomizar';

const Chat = () => {

  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: Math.random(),
        text: 'Bem vindo ao Smart Wallet helpchat, como posso ajudar?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Smart Wallet',
        },
      },
    ]);
  }, []);

  const appendMessages = (responseMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, responseMessages)
    );
  };

  const createResponseMessage = (texto) => {
    return [
      {
        _id: Math.random(),
        text: texto,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Smart Wallet',
        },
      },
    ];
  };

  const onSend = useCallback((newMessages = []) => {
    const formatedMessage = newMessages[0].text.toUpperCase();
    appendMessages(newMessages)
    if (
      formatedMessage.includes('INSERIR LANÇAMENTO') ||
      formatedMessage.includes('INSERIR LANÇAMENTOS') ||
      formatedMessage.includes('INSERIR')
    ) {
      appendMessages(
        createResponseMessage('Vá até a tela inicial para inserir um novo Lançamento, ' +
          'localize o rodapé e selecione o botão "Lançamento". ' +
          'Insira os dados e aperte salvar para concluir a operação.')
      );

    } else if (
      formatedMessage.includes('EDITAR LANÇAMENTO') ||
      formatedMessage.includes('EDITAR LANÇAMENTOS') ||
      formatedMessage.includes('EDITAR')
    ) {
      appendMessages(
        createResponseMessage('Para editar um lançamento vá até a tela inicial, ' +
        'localize o rodapé e selecione o botão "Extrato". ' +
        'Nessa tela, localize o lançamento que deseja alterar e selecione o icone do lápis, ' +
        'realize as alterações necessárias e clique em salvar para modificar a operação.')
      );

    } else if (
      formatedMessage.includes('EXCLUIR LANÇAMENTO') ||
      formatedMessage.includes('EXCLUIR LANÇAMENTOS') || 
      formatedMessage.includes('EXCLUIR')
    ) {
      appendMessages(
        createResponseMessage('Para excluir um lançamento vá até a tela inicial, ' +
        'localize o rodapé e selecione o botão "Extrato". ' +
        'Nessa tela, localize o lançamento que deseja excluir e ' +
        'selecione o icone da lixeira e confirme a operação para remover o lançamento.')
      );

    } else if (
      formatedMessage.includes('EXTRATO')
    ) {
      appendMessages(createResponseMessage('Vá até a tela inicial, localize o rodapé e ' +
      'selecione o botão de "Extrato" para acessar o extrato de sua conta.'));

    } else if (
      formatedMessage.includes('COMO ECONOMIZAR') ||
      formatedMessage.includes('ECONOMIA') ||
      formatedMessage.includes('DICA') ||
      formatedMessage.includes('DICAS') ||
      formatedMessage.includes('ECONOMIZAR')) {
      const dicaAleatoria = Math.floor(Math.random() * 13);
      appendMessages(
        createResponseMessage(dicasEconomia[dicaAleatoria])
      );
    } else {
      appendMessages(
        createResponseMessage(
          'Desculpe, não entendi o que você está tentando me dizer. Tente perguntar coisas como:\n\n' +
            '"Como inserir um lançamento"\n' +
            '"Como editar um lançamento"\n' +
            '"Como excluir um lançamento"\n' +
            '"Como acessar meu extrato"\n' +
            '"Como economizar" ou "Dicas"'
        )
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
        placeholder="Digite uma mensagem..."
        renderChatBackground={() => (
          <Image
            source={require('')}
            style={styles.backgroundImage}
          />
        )}
      />
    </>
    
  );
};

export default Chat;
