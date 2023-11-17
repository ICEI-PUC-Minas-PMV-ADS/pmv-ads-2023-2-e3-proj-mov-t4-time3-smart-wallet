import React, { useEffect, useState } from "react";
import { Divider, Card } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";
import { useIsFocused } from "@react-navigation/native";
import { useUser } from "../context/UserContext.js";
import { getLancamentos } from "../services/lancamento.services";
import FooterNavigation from "../components/footer";
import Header from "../components/Header";
import { IconButton } from "react-native-paper";
import moment from "moment";

import Icon from "react-native-vector-icons/MaterialIcons";

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

      <Text style={styles.evolucao}>Evolução Mensal</Text>

      <Divider
        style={{
          borderColor: "darkblue",
          borderWidth: 0.5,
          marginLeft: 20,
          marginRight: 20,
        }}
      />

      <Text style={styles.evolucao}>Próximos Eventos</Text>
      <Divider
        style={{
          borderColor: "darkblue",
          borderWidth: 0.5,
          marginLeft: 20,
          marginRight: 20,
        }}
      />

      <Card.Title
        title="Energia Elétrica"
        subtitle="R$ 550,00"
        style={{ backgroundColor: "whitesmoke" }}
        titleStyle={{ color: "darkred", fontWeight: "bold", fontSize: 18 }}
        subtitleStyle={{ color: "darkred", fontSize: 20, fontWeight: "bold" }}
        right={(props) => <View></View>}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: 10,
        }}
      >
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => navigation.navigate("Chat")}
        >
          <IconButton icon="chat-processing" size={50} color="#000080" />
          <Text
            style={{ textAlign: "center", color: "darkblue", marginLeft: 5 }}
          >
            CHAT
          </Text>
        </TouchableOpacity>
      </View>

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
