import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderPages from "../components/headerPages";
import { lancar } from "../services/lancamento.services.js";

const EditLancamento = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { lancamento } = route.params;

  const [editedLancamento, setEditedLancamento] = useState({ ...lancamento });

  const handleSave = () => {
    lancar({
    tipo: tipo,
    classificacao: classificacao,
    valor: valor,
    dataVencimento: formattedDataVencimento,
    recorrente: recorrente,
    status: status,
    descricao: descricao,
    })
    navigation.navigate("Extrato");
  };

  return (
    <View style={styles.container}>
      <HeaderPages navigation={navigation} />
      <Text style={styles.titlePage}>Editar Lançamento</Text>

      <TextInput style={styles.card}
        placeholder="Data de Vencimento"
        value={editedLancamento.dataVencimento}
        onChangeText={(text) =>
          setEditedLancamento({ ...editedLancamento, dataVencimento: text })
        }
      />
        <TextInput style={styles.card}
        placeholder="Classificação"
        value={editedLancamento.classificacao}
        onChangeText={(text) =>
          setEditedLancamento({ ...editedLancamento, classificacao: text })
        }
      />
      <TextInput style={styles.card}
        placeholder="Valor"
        value={editedLancamento.valor}
        onChangeText={(text) =>
          setEditedLancamento({ ...editedLancamento, valor: text })
        }
      />
      <TextInput style={styles.card}
        placeholder="Recorrente"
        value={editedLancamento.recorrente}
        onChangeText={(text) =>
          setEditedLancamento({ ...editedLancamento, recorrente: text })
        }
      />
      <TextInput style={styles.card}
        placeholder="Status"
        value={editedLancamento.status}
        onChangeText={(text) =>
          setEditedLancamento({ ...editedLancamento, status: text })
        }
      />
      <TextInput style={styles.card}
        placeholder="Descrição"
        value={editedLancamento.descricao}
        onChangeText={(text) =>
          setEditedLancamento({ ...editedLancamento, descricao: text })
        }
      />
          <Button style={{marginLeft: 50, marginRight: 15}}
            title="Salvar"
            onPress={handleSave}
            color="#010D8C"
            mode="contained"
          >
            Salvar
          </Button>
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
});

export default EditLancamento;
