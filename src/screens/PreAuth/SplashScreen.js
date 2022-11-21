import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {styles } from "../../utils/styles/SplashStyle"
const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/instagram.png')}
        />
      </View>
      <Text style={styles.from}>from</Text>
      <View style={styles.metacontainer}>
        <Image
          style={styles.metaimg}
          source={require('../../assets/icons/meta.png')}
        />
        <Text style={styles.title}>meta</Text>
      </View>
    </View>
  );
};




export default SplashScreen;