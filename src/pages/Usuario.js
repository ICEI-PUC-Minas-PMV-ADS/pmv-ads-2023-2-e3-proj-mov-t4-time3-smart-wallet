import React, { useEffect, useState } from "react";
import { Divider, Card } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { useUser } from "../context/UserContext.js";
import { getLancamentos } from "../services/lancamento.services";
import FooterNavigation from "../components/footer";
import Header from "../components/Header";
import { IconButton } from "react-native-paper";
import moment from "moment";
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Usuario = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { userId } = useUser();

  const [saldoTotal, setSaldoTotal] = useState(0);
  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [somasPorMes, setSomasPorMes] = useState([])
  const [somasReceitasPorMes, setSomasReceitasPorMes] = useState([])
  const [somasDespesasPorMes, setSomasDespesasPorMes] = useState([])
  
  const [lancamentosPendentes, setLancamentosPendentes] = useState([]); 
  const [mostrarInformacoes, setMostrarInformacoes] = useState(false);
 
  useEffect(() => {
    getLancamentos().then((dados) => {
      const lancamentos = dados.filter((user) => user.userId === userId);

      const sumsByMonth = Array(12).fill(0);
      const sumsReceitaByMonth = Array(12).fill(0);
      const sumsDespesaByMonth = Array(12).fill(0);

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
        sumsReceitaByMonth[month] = setCurrencyFormat(sumReceitas);
        sumsDespesaByMonth[month] = setCurrencyFormat(sumDespesas);

      }

      setSomasPorMes(sumsByMonth);
      setSomasReceitasPorMes(sumsReceitaByMonth);
      setSomasDespesasPorMes(sumsDespesaByMonth);
      console.log(sumsReceitaByMonth)
      console.log(sumsDespesaByMonth)
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

      const lancamentosPendentes = lancamentos.filter((lancamento) => lancamento.status.toLowerCase() === 'pendente');
      setLancamentosPendentes(lancamentosPendentes);

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


  const SwiperComponent = () => (
    <Swiper
    style={styles.swiperWrapper}
    showsButtons={true}
    buttonWrapperStyle={styles.buttonWrapper}
    nextButton={<Icon name="chevron-right" size={20} color="blue" />}
    prevButton={<Icon name="chevron-left" size={20} color="blue" />}
  >
      {lancamentosPendentes.map((item, index) => (
        <View key={index} style={styles.slide}>
          <View style={styles.lancamentoContainer}>
            <Text style={styles.swiperText}>{`Vencimento: ${item.dataVencimento || 'N/A'}`}</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: item.tipo === "Receita" ? "green" : "red",
              }}
            >
              {item.tipo === "Receita" ? (
                <>
                  <Icon name="upload" size={20} color="green" /> Tipo:{" "}
                  {item.tipo}
                </>
              ) : (
                <>
                  <Icon name="download" size={20} color="red" /> Tipo:{" "}
                  {item.tipo}
                </>
              )}
            </Text>
            <Text style={styles.swiperText}>{`Classificação: ${item.classificacao}`}</Text>
            <Text style={styles.swiperText}>{`Valor: ${item.valor || 'N/A'}`}</Text>
            <Text style={{ color: item.status === 'Efetivado' ? 'green' : 'red', backgroundColor:
                        item.status === "Efetivado" ? "lightgreen" : "pink", }}>
              {`Status: ${item.status}`}
            </Text>
          </View>
        </View>
      ))}
    </Swiper>
  );

  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
    datasets: [
      {
        data: [500, 1000, 800, 1200, 600, 1500, 900, 1300, 700, 1100, 1000, 1400],
        color: () => 'green',
      },
      {
        data: [700, 800, 500, 200, 100, 500, 500, 200, 100, 10, 55, 40],
        color: () => 'red',
      },
    ],
  };

  return (
<View style={styles.container}>
      <Header navigation={navigation} />
      <Card.Title
        title="Saldo"
        subtitle={mostrarInformacoes ? saldoTotal : "****"}
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
            <TouchableOpacity onPress={() => setMostrarInformacoes(!mostrarInformacoes)}>
              <Icon name={mostrarInformacoes ? "eye-slash" : "eye"} size={20} color="white" />
            </TouchableOpacity>
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
            subtitle={mostrarInformacoes ? receita : "****"}
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
            subtitle={mostrarInformacoes ? despesa : "****"}
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
          borderColor: "gray",
          borderWidth: 0.2,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 5,
          marginBottom: 25,
        }}
      />

      <LineChart
          data={chartData}
          width={screenWidth}
          height={200}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: 'whitesmoke',
            backgroundGradientFrom: 'whitesmoke',
            backgroundGradientTo: 'whitesmoke',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
          }}
        />

<Text style={styles.evolucao}>Lançamentos Pendentes e à Vencer</Text>
<Divider
        style={{
          borderColor: "gray",
          borderWidth: 0.2,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 0,
          marginTop: 5,
        }}
      />

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
    marginTop: 25,
    marginBottom: 5,
  },
  wrapper: {
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
slide:{
  backgroundColor: "#FFF0F5",
    color: "red",
    paddingTop: 15,
    paddingBottom: 40,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  swiperText: {
    fontSize: 15,
  },
  swiperHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingBottom: 70,
    alignItems: 'center',
    zIndex: 2,
  },
  buttonText: {
    fontSize: 35,
    color: 'blue',
  },
  chatButton: {
    position: 'absolute',
    bottom: 27,
    right: 10,
    zIndex: 2,
  },
});

export default Usuario;