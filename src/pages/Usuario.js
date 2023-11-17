import React, { useEffect, useState } from "react";
import { Divider, Card } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { useIsFocused } from "@react-navigation/native";
import { useUser } from "../context/UserContext.js";
import { getLancamentos } from "../services/lancamento.services";
import FooterNavigation from "../components/footer";
import Header from "../components/Header";
import { IconButton } from "react-native-paper";
import moment from "moment";

import Swiper from 'react-native-swiper';

const Usuario = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { userId } = useUser();

  const [saldoTotal, setSaldoTotal] = useState(0);
  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [somasPorMes, setSomasPorMes] = useState([])
  // const [somasReceitasPorMes, setSomasReceitasPorMes] = useState([])
  // const [somasDespesasPorMes, setSomasDespesasPorMes] = useState([])

  useEffect(() => {
    getLancamentos().then((dados) => {
      const lancamentos = dados.filter((user) => user.userId === userId);

      const sumsByMonth = Array(12).fill(0);
      // const sumsReceitaByMonth = Array(12).fill(0);
      // const sumsDespesaByMonth = Array(12).fill(0);

      for (let month = 0; month < 12; month++) {
        const startDate = moment(`01/${month + 1}/2023`, 'DD/MM/YYYY').format('DD/MM/YYYY');
        const endDate = moment(`${moment(startDate, 'DD/MM/YYYY').daysInMonth()}/${month + 1}/2023`, 'DD/MM/YYYY').format('DD/MM/YYYY');

        const receitasPorData = filterLancamentosByDate(lancamentos, startDate, endDate, 'Receita');
        const despesasPorData = filterLancamentosByDate(lancamentos, startDate, endDate, 'Despesa');

        let sumReceitas = 0;
        receitasPorData.forEach((element) => {
          const formatedElement = formatCurrency(element.valor);
          sumReceitas += formatedElement;
        });

        let sumDespesas = 0;
        despesasPorData.forEach((element) => {
          const formatedElement = formatCurrency(element.valor);
          sumDespesas += formatedElement;
        });

        const saldoMensal = sumReceitas - sumDespesas

        sumsByMonth[month] = setCurrencyFormat(saldoMensal);
        // sumsReceitaByMonth[month] = setCurrencyFormat(sumReceitas);
        // sumsDespesaByMonth[month] = setCurrencyFormat(sumDespesas);

      }

      setSomasPorMes(sumsByMonth);
      // setSomasReceitasPorMes(sumsReceitaByMonth);
      // setSomasDespesasPorMes(sumsDespesaByMonth);
      // console.log(sumsReceitaByMonth)
      // console.log(sumsDespesaByMonth)
      console.log(somasPorMes)

      const saldoParaReceita = calculateTotalAmount(lancamentos, "Receita");
      const receita = setCurrencyFormat(saldoParaReceita);
      setReceita(receita);

      const saldoParaDespesa = calculateTotalAmount(lancamentos, "Despesa");
      const despesa = setCurrencyFormat(saldoParaDespesa);
      setDespesa(despesa);

      const somaSaldo = saldoParaReceita - saldoParaDespesa;
      const saldo = setCurrencyFormat(somaSaldo);
      setSaldoTotal(saldo);

      const percentualDespesas = (saldoParaDespesa / saldoParaReceita) * 100;
      if (percentualDespesas > 75) {
        alert("As despesas ultrapassaram 75% das suas receitas!");
      }
    });
  }, [isFocused, userId]);

  // Transforma a moeda para realizar os calculos
  const formatCurrency = (value) => {
    const replaced = value
      .replace(/^R\$\s*/, "")
      .replace(/\./g, "")
      .replace(",", ".")
      .replace(/^R\$\s*/, "");
    return parseFloat(replaced);
  };

  // Transforma em moeda brasileira
  const setCurrencyFormat = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateTotalAmount = (lancamentos, tipo) => {
    let total = 0;
    const filteredLancamentos = lancamentos.filter(
      (item) => item.tipo === tipo && item.status == "Efetivado"
    );

    for (let i = 0; i < filteredLancamentos.length; i++) {
      const element = filteredLancamentos[i].valor;
      const formattedValue = formatCurrency(element);
      total += formattedValue;
    }

    return total;
  };

  const filterLancamentosByDate = (lancamentos, startDate, endDate, tipo) => {
    const dateObject1 = moment(startDate, 'DD/MM/YYYY').toDate();
    const dateObject2 = moment(endDate, 'DD/MM/YYYY').toDate();

    return lancamentos.filter((item) => {
      const dataFormatada = moment(item.dataVencimento, 'DD/MM/YYYY').toDate();
      return (
        dataFormatada >= dateObject1 &&
        dataFormatada <= dateObject2 &&
        item.status === 'Efetivado' &&
        item.tipo === tipo
      );
    });
  };

  const data = [
    { x: 'Jan', y: 10 },
    { x: 'Fev', y: 20 },
    { x: 'Mar', y: 15 },
    { x: 'Abr', y: 15 },
    { x: 'Mai', y: 15 },
    { x: 'Jun', y: 15 },
    { x: 'Jul', y: 15 },
    { x: 'Ago', y: 15 },
    { x: 'Set', y: 15 },
    { x: 'Nov', y: 15 },
    { x: 'Dez', y: 15 },
  ];

  const SwiperComponent = () => (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      {/* Add more slides as needed */}
    </Swiper>
  );  

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Card.Title
        title="Saldo"
        subtitle={saldoTotal}
        style={styles.card}
        titleStyle={{ color: "white", fontSize: 12, paddingTop: 10 }}
        subtitleStyle={{
          color: "white",
          fontSize: 30,
          fontWeight: 900,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        right={(props) => (
          <View style={styles.Container}>
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
            subtitle={receita}
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
            subtitle={despesa}
            titleStyle={{ color: "darkred", fontSize: 12, fontWeight: "bold" }}
            subtitleStyle={{
              color: "darkred",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />
        </Card>
      </View>

      <Divider
        style={{
          borderColor: "gray",
          borderWidth: 0.2,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 0,
          marginTop: 10,
        }}
      />

      <Text style={styles.evolucao}>Evolução Mensal</Text>
<View>
<VictoryChart width={430} height={200} theme={VictoryTheme.material}>
          <VictoryBar
            data={data}
            x="x"
            y="y"
            style={{
              data: { fill: "darkblue" },
            }}
          />
        </VictoryChart>
</View>
<Divider
        style={{
          borderColor: "gray",
          borderWidth: 0.2,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 0,
          marginTop: 0,
        }}
      />

<Text style={styles.evolucao}>Próximos Eventos</Text>
<SwiperComponent />

<TouchableOpacity
  style={styles.chatButton}
  onPress={() => navigation.navigate("Chat")}
>
  <IconButton icon="chat-processing" size={50} color="#000080" />
</TouchableOpacity>

<FooterNavigation navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  card: {
    backgroundColor: "darkblue",
    borderColor: "whitesmoke",
    borderWidth: 0.3,
    borderRadius: 17,
    alignContent: "center",
    margin: 5,
    marginLeft: 35,
    marginRight: 35,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
    marginBottom: 0,
    paddingBottom: 0,
  },
  receita: {
    backgroundColor: "#F0FFF0",
    width: "43%",
    borderWidth: 0.3,
    borderRadius: 17,
    marginLeft: 40,
    marginRight: 7,
    textAlign: "left",
    alignContent: "space-between",
  },
  despesa: {
    backgroundColor: "#FFC0CB",
    width: "43%",
    borderWidth: 0.3,
    borderRadius: 17,
    marginRight: 40,
  },
  verExtratoText: {
    color: "white",
    fontSize: 12,
    marginRight: 10,
    fontWeight: 900,
  },
  evolucao: {
    fontSize: 15,
    margin: 15,
    fontWeight: "700",
    color: "darkblue",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  chatButton: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    zIndex: 2,
  },
});

export default Usuario;


/*style={{
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  margin: 10,
}}*/