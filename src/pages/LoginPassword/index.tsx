import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Image} from '@rneui/base';
import {Avatar} from '@rneui/themed';

/**
 * 设置密码頁面
 */

const LoginPassword: React.FC<{}> = () => {
  return (
    <View style={styles.content}>
      <View style={styles.textcontent}>
        <TextInput
          style={styles.textinput}
          placeholder="请输入新的密码"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="再次输入新的密码"></TextInput>
      </View>
      <Text style={styles.text}>6-16位密码、数字或字母</Text>
      <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
        <Text style={styles.button}>确定</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
    height: '100%',
  },
  textcontent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5%',
  },
  textinput: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderColor: 'rgb(111,80,135)',
    fontSize: 14,
    paddingLeft: 20,
    marginTop: 8,
    width: '80%',
  },
  text: {
    fontSize: 14,
    marginLeft: '15%',
    marginTop: 10,
  },
  btncontent: {
    marginTop: 35,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width:'80%',
    backgroundColor: '#604575',
    height: 45,
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#ffffff',
    borderRadius: 40,
  },
});

export default LoginPassword;
