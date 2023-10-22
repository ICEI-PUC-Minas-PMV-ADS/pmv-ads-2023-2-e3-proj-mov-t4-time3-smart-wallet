import * as React from "react";
import { Appbar, Avatar, Card } from "react-native-paper";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Usuario = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Image
          source={require("../assets/SmartWallet.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      <View style={styles.header}>
        <Text style={styles.userName}>Olá Usuário</Text>
        <View style={styles.bellIcon}>
          <Icon name="bell" size={30} color="darkblue" />
        </View>
      </View>
    </Appbar.Header>

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

      <BarChart
  data={{
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: [50, 45, 60, 70, 55, 80],
      },
    ],
  }}
  width={390}
  height={200}
  fromZero={true}
  chartConfig={{
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
    propsForLabels: {
      fontSize: 12,
    },
    showValuesOnTopOfBars: true, // Exibe os valores no topo das barras
  }}
  style={{ marginVertical: 8 }}
  yAxisSuffix=""
/>


      <Card.Title
        title="Próximos Eventos"
        style={{ backgroundColor: "white" }}
        titleStyle={{ color: "darkblue", fontSize: 10 }}
        right={(props) => (
          <View>
            <Text></Text>
          </View>
        )}
      />

      <Card.Title
        title="Energia Elétrica"
        subtitle="R$ 550,00"
        style={{ backgroundColor: "whitesmoke" }}
        titleStyle={{ color: "darkred", fontWeight: "bold", fontSize: 18 }}
        subtitleStyle={{ color: "darkred", fontSize: 20, fontWeight: "bold" }}
        right={(props) => <View></View>}
      />

      {/* Barra de navegação no rodapé com posicionamento absoluto */}
      <View style={styles.footer}>
        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate("Extrato")}>              
      <Text style={styles.navItemText}><Icon name="file" size={20} color='darkblue' justifyContent='center'/>  Extrato</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate("Lancamento")}>
            <Text style={styles.navItemText}><Icon name="plus-square" size={20} color='darkblue' />  Lançamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate("Relatorio")}>
            <Text style={styles.navItemText}><Icon name="pie-chart" size={20} color='darkblue' justifyContent='center'/>  Relatório</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: "whitesmoke",
    marginTop: 35,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
  userName: {
    marginLeft: 1,
  },
  card: {
    backgroundColor: "darkblue",
    color: "white",
    alignContent: "center",
    borderRadius: 17,
    margin: 5,
    marginTop: 15,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
  },
  receita: {
    backgroundColor: "#7FFFD4",
    width: "50%",
    borderRadius: 17,
  },
  despesa: {
    backgroundColor: "#FFB6C1",
    width: "50%",
    borderRadius: 17,
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
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgray",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 3,
  },
  navItemContent: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  navItemText: {
    marginTop: 1,
  },
  bellIcon: {
    position: 'absolute',
    left: 250,
    marginLeft: 40,
  },
});

export default Usuario;
