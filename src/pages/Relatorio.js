// Relatorio.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FooterNavigation from '../components/footer';
import HeaderPages from '../components/headerPages';
import { getLancamentos } from '../services/lancamento.services';

const Relatorio = () => {
  const navigation = useNavigation();

  // State para armazenar os lançamentos pendentes
  const [lancamentosPendentes, setLancamentosPendentes] = useState([]);

  useEffect(() => {
    // Obtém os lançamentos
    getLancamentos()
      .then((dados) => {
        console.log('Todos os lançamentos:', dados);

        // Filtra os lançamentos pendentes
        const lancamentosPendentes = dados.filter(
          (lancamento) => lancamento.status.toLowerCase() === 'pendente'
        );
        console.log('Lançamentos pendentes:', lancamentosPendentes);

        // Atualiza o estado com os lançamentos pendentes
        setLancamentosPendentes(lancamentosPendentes);
      })
      .catch((error) => {
        console.error('Erro ao obter lançamentos:', error);
      });
  }, []); // Executa apenas uma vez, quando o componente é montado

  console.log('Lançamentos pendentes no estado:', lancamentosPendentes);

  return (
    <View style={styles.container}>
      <HeaderPages navigation={navigation} />

      <ScrollView>
        <Text style={styles.title}>Lançamentos Pendentes</Text>
        {lancamentosPendentes.map((item) => (
          <View key={item.id} style={styles.lancamentoContainer}>
            <Text>{`Vencimento: ${item.dataVencimento || 'N/A'}`}</Text>
            <Text>{`Tipo: ${item.tipo}`}</Text>
            <Text>{`Classificação: ${item.classificacao}`}</Text>
            <Text>{`Valor: ${item.valor || 'N/A'}`}</Text>
            <Text style={{ color: item.status === 'Efetivado' ? 'green' : 'red' }}>
              {`Status: ${item.status}`}
            </Text>
          </View>
        ))}
      </ScrollView>

      <FooterNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  lancamentoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

export default Relatorio;
