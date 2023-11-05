import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const headerPages = ({ navigation }) => {
  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={() => navigation.navigate('Usuario')} />
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
  );
};

const styles = {
  appbar: {
    backgroundColor: 'whitesmoke',
    marginTop: 35,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
  userName: {
    marginLeft: 1,
  },
  bellIcon: {
    position: 'absolute',
    left: 195,
    marginLeft: 40,
  },
};

export default headerPages;
