import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterNavigation = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <NavItem text=" Extrato" icon="file" onPress={() => navigation.navigate("Extrato")} />
      <NavItem text=" Lançamento" icon="plus-square" onPress={() => navigation.navigate("Lancamento")} />
      <NavItem text=" Perfil" icon="user" onPress={() => navigation.navigate("Perfil")} />
    </View>
  );
};

const NavItem = ({ text, icon, onPress }) => (
  <View style={styles.navItem}>
    <View style={styles.navItemContent}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.navItemText}>
          <Icon name={icon} size={25} color="darkblue" /> {text}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = {
    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "lightgray",
      position: "absolute",  
      bottom: 0,        
      width: "100%",
      left: 0,        
    },
      navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 3,
        border: 1,
        borderColor: 'white',
        backgroundColor: '#DCDCDC',
        borderWidth: 1,
      },
      navItemContent: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
      },
      navItemText: {
        marginTop: 1,
        color: "darkblue",
      },
};

export default FooterNavigation;
