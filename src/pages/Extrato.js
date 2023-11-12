import React, { useState, useEffect } from "react";
import { Card, Divider } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FooterNavigation from "../components/footer";
import HeaderPages from "../components/headerPages";
import Icon from "react-native-vector-icons/MaterialIcons";

const Extrato = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const jsonFileUrl = "https://smartwallet.loca.lt/extrato";

    fetch(jsonFileUrl)
      .then((response) => response.text())
      .then((text) => {
        console.log("Response:", text);
        return JSON.parse(text);
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error reading JSON:", error));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderPages navigation={navigation} />
      <View>
        <View>
          <Text style={styles.titlePage}>Extrato</Text>
        </View>

        {/* Caixa de pesquisa */}
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
          {data
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
                  Data de Vencimento: {item.dataVencimento || "N/A"}
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
                  • Tipo: {item.status}
                </Text>
                <Text>• Descrição: {item.descricao || "N/A"}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() =>
                      navigation.navigate("EditLancamento", {
                        lancamento: item,
                      })
                    }
                  >
                    <Icon name="edit" size={20} color="darkblue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item.id)}
                  >
                    <Icon name="delete" size={20} color="darkblue" />
                  </TouchableOpacity>
                </View>
              </Card>
            ))}
        </ScrollView>
      </View>

      <FooterNavigation navigation={navigation} />
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
});

export default Extrato;
