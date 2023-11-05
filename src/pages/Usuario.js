import * as React from "react";
import { Divider, Card } from "react-native-paper";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";
import FooterNavigation from "../components/footer";
import Header from "../components/Header";

const Usuario = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Card.Title
        title="Saldo"
        subtitle="R$ 3.000,00"
        style={styles.card}
        titleStyle={{ color: "white", fontSize: 12, paddingTop: 10 }}
        subtitleStyle={{
          color: "white",
          fontSize: 30,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        right={(props) => (
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Extrato")}>
              <Text style={styles.verExtratoText}>Ver Extrato</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.cardContainer}>
        <Card style={styles.receita}>
          <Card.Title
            title="Receitas"
            subtitle="R$ 23.000,00"
            titleStyle={{
              color: "darkgreen",
              fontSize: 12,
              fontWeight: "bold",
            }}
            subtitleStyle={{
              color: "darkgreen",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />
        </Card>
        <Card style={styles.despesa}>
          <Card.Title
            title="Despesas"
            subtitle="R$ 20.000,00"
            titleStyle={{ color: "darkred", fontSize: 12, fontWeight: "bold" }}
            subtitleStyle={{
              color: "darkred",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />
        </Card>
      </View>

      <Text style={styles.evolucao}>Evolução Mensal</Text>

      <Divider style={{borderColor: 'darkblue', borderWidth: 0.5, marginLeft: 20, marginRight: 20}} />

      <View>

      </View>

      <Text style={styles.evolucao}>Próximos Eventos</Text>
      <Divider style={{borderColor: 'darkblue', borderWidth: 0.5, marginLeft: 20, marginRight: 20}} />

      <Card.Title
        title="Energia Elétrica"
        subtitle="R$ 550,00"
        style={{ backgroundColor: "whitesmoke" }}
        titleStyle={{ color: "darkred", fontWeight: "bold", fontSize: 18 }}
        subtitleStyle={{ color: "darkred", fontSize: 20, fontWeight: "bold" }}
        right={(props) => <View></View>}
      />

      <FooterNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#000080",
    color: "white",
    alignContent: "center",
    borderRadius: 17,
    margin: 5,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
  },
  receita: {
    backgroundColor: "#F0FFF0",
    width: "50%",
    borderRadius: 17,
    marginLeft: 20,
  },
  despesa: {
    backgroundColor: "#FFC0CB",
    width: "50%",
    borderRadius: 17,
    marginRight: 30,
  },
  verExtratoText: {
    color: "white",
    fontSize: 12,
    marginRight: 10,
  },
  evolucao: {
    fontSize: 15,
    padding: 20,
    fontWeight: "700",
    color: "darkblue",
    textAlign: "left",
  },
});

export default Usuario;
