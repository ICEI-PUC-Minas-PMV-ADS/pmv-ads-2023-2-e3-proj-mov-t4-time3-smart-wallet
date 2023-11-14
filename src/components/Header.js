import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useUser } from '../context/UserContext.js';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-paper';

const Header = ({ navigation }) => {
  
  const { userId, name } = useUser();

  return (
    <Appbar.Header style={styles.appbar}>
      <Image
        source={require("../assets/SmartWallet.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.header}>
        <Text style={styles.userName}>Olá {name}</Text>
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
    marginLeft: 20,
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
  badge: {
  marginLeft: 15,
  },
};

export default Header;