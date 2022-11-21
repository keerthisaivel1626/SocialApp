import {Text, View, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import FormInput from '../../components/common/FormInput';
import { AuthContext } from '../../context/AuthProvider';
import {styles} from "../../utils/styles/ForgotPasswordStyle"
import { blue } from '../../utils/colors';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const {forgotpassword} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={styles.text}>Trouble with logging in?</Text>
        <Text
          style={[
            styles.text,
            styles.labelInfo,
          ]}>
          Enter your email address and we'll send you a link to rest your
          password.
        </Text>
        <FormInput
          keyboardType="email-address"
          placeholderText="Enter Your Email"
          iconType="user"
          autoCaitalize="none"
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
        />
      </View>
      <View
        style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => forgotpassword(email)}
          style={styles.resttbtn}>
          <Text style={styles.navbtntext}>Send Link</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.outerlessButton}>
          <Text
            style={[styles.navbtntext, {color: blue, fontWeight: '500'}]}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};




export default ForgotPasswordScreen;