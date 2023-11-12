import React, { useEffect, useState } from "react";
import { Divider, Card } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../context/UserContext.js';
import { getLancamentos } from '../services/lancamento.services';
import FooterNavigation from "../components/footer";
import Header from "../components/Header";

import Icon from 'react-native-vector-icons/MaterialIcons';

const Usuario = () => {

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const { userId } = useUser();

  const [saldoTotal, setSaldoTotal] = useState(0)
  const [receita, setReceita] = useState(0)
  const [despesa, setDespesa] = useState(0)

  useEffect(() => {
    getLancamentos().then(dados => {
      const lancamentos = dados.filter(user => user.userId === userId);

      const saldoParaReceita = calculateTotalAmount(lancamentos, 'Receita');
      const receita = setCurrencyFormat(saldoParaReceita);
      setReceita(receita);

      const saldoParaDespesa = calculateTotalAmount(lancamentos, 'Despesa');
      const despesa = setCurrencyFormat(saldoParaDespesa);
      setDespesa(despesa);

      const somaSaldo = saldoParaReceita - saldoParaDespesa;
      const saldo = setCurrencyFormat(somaSaldo);
      setSaldoTotal(saldo);

    });

  }, [isFocused]);

  // Transforma a moeda para realizar os calculos
  const formatCurrency = (value) => {
    const replaced = value.replace(/^R\$\s*/, '').replace(/\./g, '').replace(',', '.').replace(/^R\$\s*/, '');
    return parseFloat(replaced);
  };

  // Transforma em moeda brasileira 
  const setCurrencyFormat = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const calculateTotalAmount = (lancamentos, tipo) => {
    let total = 0;
    const filteredLancamentos = lancamentos.filter((item) => item.tipo === tipo && item.status == "Efetivado");

    for (let i = 0; i < filteredLancamentos.length; i++) {
      const element = filteredLancamentos[i].valor;
      const formattedValue = formatCurrency(element);
      total += formattedValue;
    }

    return total;
  };


  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Chat')}>
        <Text>CHAT CHAT CHAT</Text>
      </TouchableOpacity>

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

      <Divider style={{ borderColor: 'darkblue', borderWidth: 0.5, marginLeft: 20, marginRight: 20 }} />

      <View>

      </View>

      <Text style={styles.evolucao}>Próximos Eventos</Text>
      <Divider style={{ borderColor: 'darkblue', borderWidth: 0.5, marginLeft: 20, marginRight: 20 }} />

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
