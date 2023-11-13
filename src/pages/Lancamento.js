import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { Divider, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import { postLancamento, putLancamento } from "../services/lancamento.services.js";
import { useUser } from '../context/UserContext.js';
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import FooterNavigation from '../components/footer';
import HeaderPages from '../components/headerPages';

const Lancamento = ({ route }) => {

  const navigation = useNavigation();

  const { item } = route.params ? route.params : {};

  const { userId } = useUser();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [tipo, setTipo] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [valor, setValor] = useState("");
  // const [dataVencimento, setDatavencimento] = useState(new Date());
  const [dataVencimento, setDatavencimento] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [recorrente, setRecorrente] = useState("");
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (item) {
      setTipo(item.tipo)
      setClassificacao(item.classificacao)
      setValor(item.valor)
      setDatavencimento(item.dataVencimento)
      setRecorrente(item.recorrente)
      setStatus(item.status)
      setDescricao(item.descricao)
    }
  }, [item]);

  const handleSave = async () => {
    // const formattedDataVencimento = moment(dataVencimento).format("DD / MM / YYYY");
    if (item) {
      putLancamento({
        tipo: tipo,
        classificacao: classificacao,
        valor: valor,
        // dataVencimento: formattedDataVencimento,
        dataVencimento: dataVencimento,
        recorrente: recorrente,
        status: status,
        descricao: descricao,
        userId: userId,
        id: item.id
      }).then((res) => {
        navigation.goBack();
      });
    } else {
      postLancamento({
        tipo: tipo,
        classificacao: classificacao,
        valor: valor,
        // dataVencimento: formattedDataVencimento,
        dataVencimento: dataVencimento,
        recorrente: recorrente,
        status: status,
        descricao: descricao,
        userId: userId
      }).then((res) => {
        // resetState();
        // navigation.navigate("Extrato");
        navigation.navigate('Extrato');
      });
    }
  };

  // const resetState = () => {
  //   setTipo("");
  //   setClassificacao("");
  //   setValor("");
  //   setDatavencimento("");
  //   setRecorrente("");
  //   setStatus("");
  //   setDescricao("");
  // };


  return (
    <KeyboardAvoidingView style={styles.container}>
            <HeaderPages navigation={navigation} />
      <ScrollView>
        <View>
          <Text style={styles.titlePage}>
            Adicionar Lançamento
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.pickerContainer}>


            <Text style={styles.label}>Tipo</Text>
            <Divider style={{ borderColor: 'darkblue', borderWidth: 0.5, marginTop: 5, marginLeft: 5, marginRight: 5 }} />
            <Picker
              style={styles.picker}
              selectedValue={tipo}
              onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
            >
              <Picker.Item label="Selecione o Tipo" value="" />
              <Picker.Item label="Receita" value="Receita" />
              <Picker.Item label="Despesa" value="Despesa" />
            </Picker>

            <Text style={styles.label}>Classificação</Text>
            <Divider style={{ borderColor: 'darkblue', borderWidth: 0.5, marginTop: 5, marginLeft: 5, marginRight: 5 }} />
            <Picker
              style={styles.picker}
              selectedValue={classificacao}
              onValueChange={(itemValue, itemIndex) =>
                setClassificacao(itemValue)
              }
            >
              <Picker.Item label="Selecione a Classificação" value="" />
              <Picker.Item label="Alimentação" value="Alimentação" />
              <Picker.Item label="Cartão de Crédito" value="CartãoDeCrédito" />
              <Picker.Item label="Educação" value="Educação" />
              <Picker.Item label="Empréstimos" value="Empréstimos" />
              <Picker.Item label="Entretenimento" value="Entretenimento" />
              <Picker.Item label="Eventos" value="Eventos" />
              <Picker.Item label="Impostos" value="Impostos" />
              <Picker.Item label="Imprevistos" value="Imprevistos" />
              <Picker.Item label="Investimentos" value="Investimentos" />
              <Picker.Item label="Moradia" value="Moradia" />
              <Picker.Item label="Salário" value="Salário" />
              <Picker.Item label="Saúde" value="Saúde" />
              <Picker.Item label="Seguros" value="Seguros" />
              <Picker.Item label="Taxas" value="Taxas" />
              <Picker.Item label="Transporte" value="Transporte" />
              <Picker.Item label="Veículo" value="Veículo" />
              <Picker.Item label="Vestuário" value="Vestuário" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>


            <View style={styles.formContainer}>
              {show && (
                <DateTimePicker
                  style={styles.dateTimePicker}
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onTouchCancel={() => setShow(false)}
                  onChange={(event, date) => {
                    setShow(false);
                    setDatavencimento(moment(date).format('DD/MM/YYYY'));
                  }}
                />
              )}

              <View style={styles.columnsContainer}>
                <View style={styles.column}>
                  <Text style={styles.label}>Valor</Text>
                  <TextInput
                    mode="outlined"
                    keyboardType="numeric"
                    style={{ fontSize: 14, color: "darkblue", height: 40 }}
                    value={valor}
                    onChangeText={(itemValue) => {
                      const numericValue = itemValue.replace(/[^0-9]/g, '');
                      const formattedValue = numericValue
                        ? `R$ ${parseFloat(numericValue / 100).toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}`
                        : '';

                      setValor(formattedValue);
                    }}
                    placeholder="R$ 0,00"
                  />
                </View>

                <View style={styles.column}>
                  <Text style={styles.label}>Vencimento</Text>
                  <TouchableOpacity onPress={() => setShow(true)}>
                    <TextInput
                      style={{ fontSize: 14, color: "darkblue", height: 50 }}
                      value={dataVencimento}
                      left={<TextInput.Icon name="calendar" />}
                      editable={false}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.columnsContainer}>
                <View style={styles.column}>
                  <Text style={styles.label}>Recorrente?</Text>
                  <Divider style={{ borderColor: 'darkblue', borderWidth: 0.5, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }} />
                  <RadioButton.Group
                    onValueChange={(value) => setRecorrente(value)}
                    value={recorrente}
                  >
                    <View style={styles.radioContainer}>
                      <Text>Sim</Text>
                      <RadioButton value="Sim" />
                    </View>
                    <View style={styles.radioContainer}>
                      <Text>Não</Text>
                      <RadioButton value="Não" />
                    </View>
                  </RadioButton.Group>
                </View>

              <View style={styles.column}>
                <Text style={styles.label}>Status</Text>
                <Divider style={{borderColor: 'darkblue', borderWidth: 0.5, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}} />
                <RadioButton.Group
                  onValueChange={(value) => setStatus(value)}
                  value={status}
                >
                  <View style={styles.radioContainer}>
                    <Text>Pendente</Text>
                    <RadioButton value="Pendente" />
                  </View>
                  <View style={styles.radioContainer}>
                    <Text>Efetivado</Text>
                    <RadioButton value="Efetivado" />
                  </View>
                </RadioButton.Group>
              </View>
            </View>

            <Text style={styles.label}>Descrição</Text>          
            <TextInput
              mode="outlined"
              style={{marginLeft: 10, marginRight: 10, marginBottom: 5, fontSize: 14, color: "darkblue", height: 40,}}
              value={descricao}
              onChangeText={(itemValue) => setDescricao(itemValue)}
            />
          </View>
        </View>
        </View>
        <View style={styles.column}>
          <Button style={{ marginLeft: 15, marginRight: 15 }}
            title="Cadastrar"
            onPress={handleSave}
            color="#010D8C"
            mode="contained"
          >
            Salvar
          </Button>
        </View>
      </ScrollView>
      <FooterNavigation navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePage: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 1,
    fontSize: 20,
    color: "darkblue",
    fontWeight: "bold",
  },
  pickerContainer: {
    margin: 10,
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 50,
    margin: 10,
    borderWidth: 1,
    color: "black",
    fontSize: 5,
  },
  formContainer: {
    padding: 1,
    marginTop: 1,
  },
  input: {
    marginBottom: 10,
    margin: 0,
    backgroundColor: "white",
  },
  submitButton: {
    marginTop: 1,
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
  label: {
    marginTop: 2,
    marginBottom: 5,
    fontWeight: "bold",
    marginLeft: 10,
    color: "darkblue"
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: 5,
  },
});

export default Lancamento;
