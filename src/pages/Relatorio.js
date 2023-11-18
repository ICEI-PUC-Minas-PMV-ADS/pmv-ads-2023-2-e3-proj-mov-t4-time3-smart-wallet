import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FooterNavigation from '../components/footer';
import HeaderPages from '../components/headerPages'; 

const Usuario = () => {
  const navigation = useNavigation();

  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
    datasets: [
      {
        data: [500, 1000, 800, 1200, 600, 1500, 900, 1300, 700, 1100, 1000, 1400],
        color: () => 'green',
      },
      {
        data: [700, 800, 500, 200, 100, 500, 500, 200, 100, 10, 10, 40],
        color: () => 'red',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <HeaderPages navigation={navigation} />
      
        <LineChart
          data={chartData}
          width={screenWidth}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

<FooterNavigation navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Usuario;
