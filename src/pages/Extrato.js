import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TextInput, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FooterNavigation from '../components/footer';
import HeaderPages from '../components/headerPages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../context/UserContext.js';
import { getLancamentos, deleteLancamento } from '../services/lancamento.services';

const Extrato = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { userId } = useUser();
  const [searchText, setSearchText] = useState('');
  const [lancamentos, setLancamentos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // useEffect(() => {
  //   const jsonFileUrl = 'https://smartwallet.loca.lt/extrato';

  //   fetch(jsonFileUrl)
  //     .then((response) => response.text())
  //     .then((text) => {
  //       console.log('Response:', text); // Exibe a resposta no console para depuração
  //       return JSON.parse(text);
  //     })
  //     .then((jsonData) => setData(jsonData))
  //     .catch((error) => console.error('Error reading JSON:', error));

  // }, []);

  useEffect(() => {

    getLancamentos().then(dados => {
      const lancamentos = dados.filter(user => user.userId === userId);
      setLancamentos(lancamentos);
    });
  }, [isFocused]);

  const openModal = (item) => {
    setItemToDelete(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  const handleDelete = (item) => {
    openModal(item);
  };

  const handleConfirmDelete = () => {
    closeModal();
    if (itemToDelete) {
      deleteLancamento(itemToDelete.id).then(res => {
        const updatedLancamentos = lancamentos.filter((l) => l.id !== itemToDelete.id);
        setLancamentos(updatedLancamentos);
        navigation.navigate('Extrato');
      });
    }
  };

  return (

    <View style={styles.container}>
      <HeaderPages navigation={navigation} />
      <ScrollView >
      <View>

        <View>
          <Text style={styles.titlePage}>
            Extrato
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <Divider
          style={{
            borderColor: "darkblue",
            borderWidth: 0.5,
          }}
        />

        <ScrollView>
          {lancamentos
    .filter((item) => {
      const includesSearchText = item.classificacao.toLowerCase().includes(searchText.toLowerCase()) ||
                                (item.valor || "").toString().includes(searchText) ||
                                item.recorrente.toLowerCase().includes(searchText.toLowerCase()) ||
                                item.status.toLowerCase().includes(searchText.toLowerCase()) ||
                                (item.descricao || "").toLowerCase().includes(searchText.toLowerCase()) ||
                                (item.tipo.toLowerCase() === 'receita' && 'receita'.includes(searchText.toLowerCase())) ||
                                (item.tipo.toLowerCase() === 'despesa' && 'despesa'.includes(searchText.toLowerCase()));

      return includesSearchText;
    })
            .map((item) => (
              <Card key={item.id} style={styles.card}>
                <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                  Vencimento: {item.dataVencimento || "N/A"}
                </Text>
                <Divider
                  style={{
                    borderColor: "gray",
                    borderWidth: 0.5,
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 15,
                  }}
                />
                <Text
                  style={{
                    color: item.tipo === "Receita" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  • Tipo: {item.tipo}
                </Text>
                <Text>• Classificação: {item.classificacao}</Text>
                <Text>• Valor: {item.valor || "N/A"}</Text>
                <Text>• Recorrente: {item.recorrente}</Text>
                <Text
                  style={{
                    color: item.status === "Efetivado" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  • Status: {item.status}
                </Text>
                <Text>• Descrição: {item.descricao || "N/A"}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() =>
                      navigation.navigate("Lancamento", {item})
                    }
                  >
                    <Icon name="edit" size={20} color="darkblue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item)}
                  >
                    <Icon name="delete" size={20} color="darkblue" />
                  </TouchableOpacity>
                </View>
              </Card>
            ))}
        </ScrollView>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
        <Image
            source={require('../assets/SmartWallet.png')}
            style={{
              width: 250,
              height: 150,
              marginBottom: 30,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
          <Text style={styles.modalText}>Tem certeza que deseja excluir?</Text>
          <View style={styles.modalButtonContainer}>      
            <Button title="Cancelar" onPress={closeModal} />
            <Button title="Confirmar" onPress={handleConfirmDelete} />
          </View>
        </View>
      </Modal>
      </ScrollView>
      <View style={{marginTop: 70,}}>
      <FooterNavigation navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  card: {
    backgroundColor: "white",
    alignContent: "center",
    borderRadius: 10,
    margin: 5,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
    marginBottom: 15,
  },
  titlePage: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 1,
    fontSize: 20,
    color: "darkblue",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "white",
    marginLeft: 290,
    marginRight: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: "white",
    marginRight: 45,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    padding: 5,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    height: 35,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default Extrato;
