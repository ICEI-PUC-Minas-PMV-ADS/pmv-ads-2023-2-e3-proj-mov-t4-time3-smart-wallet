import { StyleSheet, Text, View, Button, Touchable, Switch, TextInputComponent } from "react-native";
import { TextInput } from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import NewPostingStyles from "./styles/NovoLancamento.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

const NovoLançamento = ({navigation}) => {

    const [category, setCategory] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const goBack = ()=>{
        navigation.goBack();
    }

    return (
        <View style={NewPostingStyles.style}>
            <View style={NewPostingStyles.header.container}>
                <Text style={NewPostingStyles.header.headerText}>Novo Lançamento</Text>
                <TouchableOpacity onPress={goBack} style={NewPostingStyles.header.headerCloseButton} ><Text>X</Text></TouchableOpacity>
            </View>
            <View style={NewPostingStyles.form.container}>
                <View style={NewPostingStyles.form.group}>
                  <Text style={NewPostingStyles.form.label}>Categoria</Text>
                  <Picker
                      style={NewPostingStyles.form.picker}
                      selectedValue={category}
                      onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                      }>
                      <Picker.Item label="Receita" value="income" />
                      <Picker.Item label="Despesa" value="expenditure" />
                  </Picker>
                </View>
                <View style={NewPostingStyles.form.group}>
                  <Text style={NewPostingStyles.form.label}>Classificação</Text>
                  <Picker
                      style={NewPostingStyles.form.picker}
                      selectedValue={category}
                      onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                      }>
                      <Picker.Item label="Receita" value="income" />
                      <Picker.Item label="Despesa" value="expenditure" />
                  </Picker>
                </View>
                <View style={NewPostingStyles.form.superGroup}>
                  <View style={NewPostingStyles.form.subGroup}>
                    <Text style={NewPostingStyles.form.label}>Data de vencimento</Text>
                    <RNDateTimePicker value={new Date()}></RNDateTimePicker>
                  </View>
                  <View style={NewPostingStyles.form.subGroup}>
                    <Text style={NewPostingStyles.form.label}>Recorrente?</Text>
                    <Switch
                      onValueChange={()=>{setIsEnabled(!isEnabled)}}
                      value={isEnabled}
                    />
                  </View>
                </View>
                <View style={NewPostingStyles.form.superGroup}>
                  <View style={NewPostingStyles.form.subGroup}>
                    <Text style={NewPostingStyles.form.label}>Valor</Text>
                    <TextInput style={NewPostingStyles.form.input}/>
                  </View>
                  <View style={NewPostingStyles.form.subGroup}>
                    <Text style={NewPostingStyles.form.label}>Status</Text>
                    <Picker
                      style={NewPostingStyles.form.picker}
                      selectedValue={category}
                      onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                      }>
                      <Picker.Item label="Receita" value="Opção 1" />
                      <Picker.Item label="Despesa" value="Opção 2" />
                  </Picker>
                  </View>
                </View>
                <View style={NewPostingStyles.form.group}>
                  <Text style={NewPostingStyles.form.label}>Descrição</Text>
                  <TextInput style={NewPostingStyles.form.input}/>
                </View>
                <View style={NewPostingStyles.form.buttonGroup}>
                  <TouchableOpacity style={NewPostingStyles.form.buttonEdit}>
                    <Text style={NewPostingStyles.form.buttonText}>Editar</Text>
                    </TouchableOpacity>
                  <TouchableOpacity style={NewPostingStyles.form.buttonSave}>
                    <Text style={NewPostingStyles.form.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}



export default NovoLançamento;
