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
 * 短信验证码登录頁面
 */

const MessageLogin: React.FC<{}> = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.headtitle}>短信验证码登录</Text>
      <View style={styles.textcontent}>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的手机号"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的验证码"></TextInput>
        <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
          <Text style={styles.button}>下一步</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headtitle: {
    marginTop:'10%',
    marginBottom:'5%',
    marginLeft:15,
    color: 'rgb(111,80,135)',
    fontSize: 20,
  },
  content: {
    backgroundColor: 'rgb(239,235,242)',
    height: '100%',
  },
  textcontent: {
    display: 'flex',
    alignItems: 'center',
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
  btncontent: {
    width:'80%',
      marginTop:35,
  },
  button: {
    backgroundColor:'#604575',
    height:45,
    fontSize:18,
    textAlignVertical:'center',
    textAlign:'center',
    color:'#ffffff',
    borderRadius:40,
  },
});

export default MessageLogin;
