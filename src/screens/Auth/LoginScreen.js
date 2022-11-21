import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import FormInputPassword from '../../components/auth/FormInputPassword';
import FormInput from '../../components/common/FormInput';
import { AuthContext } from '../../context/AuthProvider';
import FormButton from '../../components/common/FormButton';
import SocialButton from '../../components/common/SocialButton';
import { gray } from '../../utils/colors';
import {styles} from "../../utils/styles/LoginStyle"
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <Image
          style={styles.authImage}
          source={require('../../assets/images/logo.png')}
        />
        <FormInput
          keyboardType="email-address"
          placeholderText="Email"
          iconType="user"
          autoCaitalize="none"
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
        />
        <FormInputPassword
          placeholderText="Password"
          iconType="lock"
          labelValue={password}
          secureTextEntry
          onChangeText={userPassword => setPassword(userPassword)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={[styles.forgotbtn, {marginRight: 4}]}>
          <Text style={styles.navbtntext}>Forgot Password?</Text>
        </TouchableOpacity>
        <FormButton
          buttonTitle="Login"
          onPress={() => login(email, password)}
        />
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>
        {Platform.OS === 'android' && (
          <View>
            <SocialButton onPress={() => googleLogin()} />
          </View>
        ) }

        <View style={styles.bottomContainer}>
          <Text style={{...styles.navbtntext,color:gray}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={[
              styles.forgotbtn,
              {
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              },
            ]}>
            <Text
              style={[styles.navbtntext, { marginLeft: 4}]}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;