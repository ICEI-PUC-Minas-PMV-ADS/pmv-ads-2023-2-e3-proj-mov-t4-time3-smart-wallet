import * as React from 'react';
import { Appbar, Avatar, Card } from 'react-native-paper';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

const MyPage = ({ name }) => (
  <View style={styles.container}>
    <Appbar.Header style={styles.appbar}>
      <Image
        source={require('../assets/SmartWallet.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.header}>
        <Text style={styles.userName}>Olá Usuário</Text>
      </View>
    </Appbar.Header>

    <Card.Title
      title="Saldo"
      subtitle="R$ 3.000,00"
      style={styles.card}
      titleStyle={{ color: 'white', fontSize: 12, paddingTop: 10, }}
      subtitleStyle={{ color: 'white', fontSize: 30, paddingTop: 10, paddingBottom: 20 }}
      right={(props) => (
        <View style={styles.rightContainer}>
          <Text style={styles.verExtratoText}>Ver Extrato</Text>
        </View>
      )}
    />

    <View style={styles.cardContainer}>
      <Card style={styles.receita}>
        <Card.Title
          title="Receitas"
          subtitle="R$ 23.000,00"
          titleStyle={{ color: 'dark', fontSize: 10, fontWeight: 1000 }}
          subtitleStyle={{ color: 'darkgreen', fontSize: 20, fontWeight: 1000 }}
        />
      </Card>
      <>      .</>
      <Card style={styles.despesa}>
        <Card.Title
          title="Despesas"
          subtitle="R$ 20.000,00"
          titleStyle={{ color: 'dark', fontSize: 10, fontWeight: 1000 }}
          subtitleStyle={{ color: 'darkred', fontSize: 20, fontWeight: 1000 }}
        />
      </Card>
    </View>

    <Text style={styles.evolucao}>
      Evolução Mensal
    </Text>

    <BarChart
      data={{
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            data: [50, 45, 60, 70, 55, 80],
          },
        ],
      }}
      width={350}
      height={200}
      yAxisLabel="" // Define o título do eixo Y como uma string vazia
      fromZero={true}
      chartConfig={{
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        barPercentage: 0.5,
        propsForLabels: {
          fontSize: 12,
        },
      }}
      style={{ marginVertical: 8 }}
      showValuesOnTopOfBars={true}
      yAxisSuffix="" // Define um sufixo vazio para ocultar os valores do eixo Y
    />


    <Card.Title
     title="Próximos Eventos"
      style={{backgroundColor: 'white'}}
      titleStyle={{ color: 'darkblue', fontSize: 10, alignItems: 'left'}}
      right={(props) => (
        <View>
          <Text style={{alignItems: 'left'}}></Text>
        </View>
      )}
    />

<Card.Title
  title="Energia Elétrica"
  subtitle="R$ 550,00"
  style={{ backgroundColor: 'whitesmoke' }}
  titleStyle={{ color: 'darkred', fontWeight: 1000, fontSize: 18, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}
  subtitleStyle={{ color: 'darkred', fontSize: 20, fontWeight: 1000, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}
  right={(props) => (
    <View></View>
  )}
/>


    {/* Barra de navegação no rodapé com posicionamento absoluto */}
    <View style={styles.footer}>

    <View style={styles.navItem}>
      <View style={styles.navItemContent}>
        <FontAwesome name="list" size={20} color={'darkblue'} />
        <Text style={styles.navItemText}>Extrato</Text>
      </View>
    </View>

    <View style={styles.navItem}>
      <View style={styles.navItemContent}>
        <FontAwesome name="plus-circle" size={30} color={'darkblue'} />
        <Text style={styles.navItemText}>Lançamentos</Text>
      </View>
    </View>

    <View style={styles.navItem}>
      <View style={styles.navItemContent}>
        <FontAwesome name="bar-chart" size={20} color={'darkblue'} />
        <Text style={styles.navItemText}>Relatório</Text>
      </View>
    </View>

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: 'whitesmoke',
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  userName: {
    marginLeft: 1,
  },
  card: {
    backgroundColor: 'darkblue',
    color: 'red',
    alignContent: 'center',
    borderRadius: 10,
    margin: 5,
    marginTop: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  receita: {
    backgroundColor: '#7FFFD4',
    width: '50%',
    borderRadius: 10,
  },
  despesa: {
    backgroundColor: '#FFB6C1',
    width: '50%',
    borderRadius: 10,
  },
  verExtratoText: {
    color: 'white',
    fontSize: 12,
    marginRight: 10,
  },
  evolucao: {
    fontSize: 15,
    alignItems: 'center',
    padding: 20,
    fontWeight: 700,
    color: 'darkblue',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    position: 'absolute', // Torna a barra de navegação posicionada de forma absoluta
    bottom: 0, // A fixa no rodapé
    width: '100%', // Ocupa a largura total da tela
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 3,
  },
  navItemContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  navItemText: {
    marginTop: 1, // Espaço para posicionar o texto abaixo do ícone
  },
});

export default MyPage;
