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
 * 登录頁面
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
    marginTop:'5%'
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
  text:{
    fontSize:14,
    marginLeft:'15%',
    marginTop:10,
  },
});

export default LoginPassword;
