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
import {AppScreenProps} from '../../../App';

/**
 * 身份验证頁面
 */

const Authentication: React.FC<AppScreenProps> = ({navigation}) => {
  return (
    <View style={styles.content}>
      {/* <Text style={styles.headtitle}>身份信息验证</Text> */}
      <View style={styles.textcontent}>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的姓名"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的身份证号"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的手机号码"></TextInput>
        <TouchableOpacity
          style={styles.btncontent}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('设置密码')}>
          <Text style={styles.button}>验证</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headtitle: {
    marginTop: '10%',
    marginBottom: '5%',
    marginLeft: 15,
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
    marginTop:20,
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
    width: '80%',
    marginTop: 35,
  },
  button: {
    backgroundColor: '#604575',
    height: 45,
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#ffffff',
    borderRadius: 40,
  },
});

export default Authentication;
