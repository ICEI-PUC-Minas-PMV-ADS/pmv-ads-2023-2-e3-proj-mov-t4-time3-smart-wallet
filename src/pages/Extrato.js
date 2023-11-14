import { StyleSheet, Text, View, Button, Touchable, Switch, TextInputComponent } from "react-native";
import { TextInput } from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import NewPostingStyles from "./styles/NovoLancamento.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import ExtractStyles from "./styles/Extrato.styles";

const Extrato = ({navigation}) => {

    const [category, setCategory] = useState(false);
    const [transactionsByDate, setTransactionByDate] = useState([
      {
        transactions: [{
          name: "Salário",
          value: 1000,
          type : "income"
        },
        {
          name: "Compras",
          value: 458,
          type : "expenditure"
        }
      ],
        date: new Date(2023,11,11)
      },
      {
        transactions: [{
          name: "Refeição",
          value: 23,
          type : "expenditure"
        }],
        date: new Date(2023,11,10)
      }
    ]);

    const goBack = ()=>{
        navigation.goBack();
    }

    return (
        <View style={ExtractStyles.style}>
            <View style={ExtractStyles.header.container}>
                <Text style={ExtractStyles.header.headerText}>Extrato</Text>
                <TouchableOpacity onPress={goBack} style={ExtractStyles.header.headerCloseButton} ><Text>X</Text></TouchableOpacity>
            </View>
            <View style={ExtractStyles.filter.container}>
              <Picker
                  style={ExtractStyles.filter.picker}
                  selectedValue={category}
                  placeholder="Categoria"
                  onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                  }>
                  <Picker.Item label="Opção 1" value="option1" />
                  <Picker.Item label="Opção 2" value="option2" />
              </Picker>
              <Picker
                  style={ExtractStyles.filter.picker}
                  selectedValue={category}
                  placeholder="Categoria"
                  onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                  }>
                  <Picker.Item label="Opção 1" value="option1" />
                  <Picker.Item label="Opção 2" value="option2" />
              </Picker>
              <Picker
                  style={ExtractStyles.filter.picker}
                  selectedValue={category}
                  placeholder="Classificação"
                  onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                  }>
                  <Picker.Item label="Opção 1" value="option1" />
                  <Picker.Item label="Opção 2" value="option2" />
              </Picker>
            </View>
            <View style={ExtractStyles.data.container}>
              {
                transactionsByDate.map((item, index)=>{
                  return(
                    <View key={index}>
                      <Text style={ExtractStyles.data.text}>{item.date.toLocaleDateString()}</Text>
                      <View style={ExtractStyles.data.separator}></View>
                      {
                        item.transactions.map((transaction, index)=>{
                          return(
                            <View style={ExtractStyles.data.group} key={index}>
                              <Text style={ExtractStyles.data.text}>{transaction.name}</Text>
                              <Text 
                                style={{
                                  ...ExtractStyles.data.text,
                                  ...(transaction.type == "income" ? ExtractStyles.data.green : ExtractStyles.data.red)
                                }}
                                >{transaction.value.toLocaleString(
                                  'pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</Text>
                            </View>
                          )
                        })
                      }
                    </View>
                  )
                })
              }
            </View>
        </View>
    );
}



export default Extrato;
