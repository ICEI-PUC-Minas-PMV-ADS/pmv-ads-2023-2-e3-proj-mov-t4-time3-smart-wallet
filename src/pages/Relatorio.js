import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { Svg } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import FooterNavigation from '../components/footer';
import HeaderPages from '../components/headerPages'; 

const Usuario = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderPages navigation={navigation} />

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

<FooterNavigation navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  });

export default Usuario;
