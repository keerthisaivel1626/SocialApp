import {View, TextInput, StyleSheet,} from 'react-native';
import React from 'react';
import { AntDesign } from '../../utils/Icons';
import { width,height } from '../../utils/strings';
const FormInput = ({iconType, labelValue, placeholderText, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconstyle}>
        <AntDesign name={iconType} size={20} color="#333" />
      </View>
      <TextInput
        style={styles.input}
        value={labelValue}
        placeholder={placeholderText}
        numberOfLines={1}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: height / 18,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderColor: '#949494',
  },
  iconstyle: {
    padding: 8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    width: 38,
    borderColor: '#949494',
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
