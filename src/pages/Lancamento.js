import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Appbar, TextInput, Checkbox, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; // Importe o Picker da nova localização

const Lancamento = () => {
  const navigation = useNavigation();

  const [tipo, setTipo] = useState(''); // Estado para o campo "Tipo"
  const [classificacao, setClassificacao] = useState(''); // Estado para o campo "Classificação"
  const [status, setStatus] = useState(''); // Estado para o campo "Status"

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
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

      <View>
        <Text style={{marginTop: 20, marginLeft: 10, fontSize: 20, color: 'darkblue', fontWeight: "bold"}}>Adicionar Lançamento</Text>
      </View>

      <View style={styles.formContainer}>
        <Picker
          selectedValue={tipo}
          onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
        >
          <Picker.Item label="Selecione o Tipo" value="" />
          <Picker.Item label="Receita" value="Receita" />
          <Picker.Item label="Despesa" value="Despesa" />
        </Picker>
        <Picker
          selectedValue={classificacao}
          onValueChange={(itemValue, itemIndex) => setClassificacao(itemValue)}
        >
          <Picker.Item label="Selecione a Classificação" value="" />
          <Picker.Item label="Classe 1" value="classe1" />
          <Picker.Item label="Classe 2" value="classe2" />
        </Picker>
        
        <TextInput label="Data de Vencimento" mode="outlined" style={styles.input} />

        <View style={styles.checkboxContainer}>
          <Text>Recorrente</Text>
          <Checkbox status="" />
        </View>

        <TextInput label="Valor" mode="outlined" style={styles.input} />
        <Picker
          selectedValue={status}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
        >
          <Picker.Item label="Selecione o Status" value="" />
          <Picker.Item label="Ativo" value="ativo" />
          <Picker.Item label="Inativo" value="inativo" />
        </Picker>
        <TextInput label="Descrição" mode="outlined" style={styles.input} />

        <Button mode="contained" style={{backgroundColor: 'darkblue'}}>
          Salvar
        </Button>
      </View>

      <View style={styles.footer}>
        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Extrato')}>
              <Text style={styles.navItemText}><Icon name="file" size={20} color='darkblue' justifyContent='center'/>  Extrato</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Lancamento')}>
              <Text style={styles.navItemText}><Icon name="plus-square" size={20} color='darkblue' justifyContent='center'/>  Lançamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navItem}>
          <View style={styles.navItemContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
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
    bellIcon: {
      position: 'absolute',
      left: 195,
      marginLeft: 40,
    },  
    formContainer: {
      padding: 16,
    },
    input: {
      marginBottom: 16,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    submitButton: {
      marginTop: 16,
    },
  });

export default Lancamento;
