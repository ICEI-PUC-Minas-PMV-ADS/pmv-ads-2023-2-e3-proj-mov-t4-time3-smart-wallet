import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useUser } from '../context/UserContext.js';
import { useNavigation } from '@react-navigation/native';

const Header = ({ navigation }) => {
  
  const { name, logout } = useUser();
  const { navigate } = useNavigation();

  const handleLogout = () => {
    logout();
  };

  return (
    <Appbar.Header style={styles.appbar}>
      <Image
        source={require("../assets/SmartWallet.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.header}>
        <Text style={styles.userName}>Olá {name}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="sign-out" size={27} color="darkblue" style={styles.logoutIcon} />
        </TouchableOpacity>
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
    marginTop: 20,
    marginLeft: 20,
  },
  userName: {
    marginLeft: 1,
  },
  logoutIcon: {
    marginLeft: 200,
  },

};

export default Header;