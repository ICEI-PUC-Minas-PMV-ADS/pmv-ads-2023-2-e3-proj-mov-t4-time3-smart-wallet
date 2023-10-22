import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { Svg } from 'react-native-svg';
import { Appbar } from 'react-native-paper';


const Usuario = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
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
        title="Próximos Eventos"
        style={{ backgroundColor: 'white' }}
        titleStyle={{ color: 'darkblue', fontSize: 10, textAlign: 'left' }}
        right={() => <View />}
      />

      <Card.Title
        title="Energia Elétrica"
        subtitle="R$ 550,00"
        style={{ backgroundColor: 'whitesmoke' }}
        titleStyle={{
          color: 'darkred',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
        }}
        subtitleStyle={{
          color: 'darkred',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        right={() => <View />}
      />

      <View style={styles.footer}>
        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Extrato')}>
              <Text style={styles.navItemText}>Extrato</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Lancamento')}>
              <Text style={styles.navItemText}>Lancamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
              <Text style={styles.navItemText}>Relatorio</Text>
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
      backgroundColor: 'whitesmoke',
      marginTop: 35,
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
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
      backgroundColor: 'darkblue',
      color: 'white',
      alignContent: 'center',
      borderRadius: 10,
      margin: 5,
      marginTop: 15,
    },
    cardContainer: {
      flexDirection: 'row',
      margin: 5,
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
      padding: 20,
      fontWeight: '700',
      color: 'darkblue',
      justifyContent: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      padding: 3,
    },
    navItemContent: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    },
    navItemText: {
      marginTop: 1,
    },
  });

export default Usuario;
