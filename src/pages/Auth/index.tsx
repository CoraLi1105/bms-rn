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
 * 登录頁面
 */

const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
  // uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
};
const Auth: React.FC<AppScreenProps> = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.headtext}>请选择身份</Text>
      <View style={styles.avatarcontent}>
        <View style={styles.avatar}>
          <Avatar
            size={130}
            rounded
            containerStyle={{backgroundColor: '#6733b9'}}
            source={avatarImgUrl}
          />
          <Text style={styles.headtitle}>管理者</Text>
        </View>
        <View style={styles.avatar}>
          <Avatar
            size={130}
            rounded
            containerStyle={{backgroundColor: '#6733b9'}}
            source={avatarImgUrl}
          />
          <Text style={styles.headtitle}>借阅者</Text>
        </View>
      </View>
      <View style={styles.logincontent}>
        <TextInput
          style={styles.textinput}
          placeholder="请输入账号"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请输入密码"></TextInput>
        <TouchableOpacity
          style={styles.btncontent}
          activeOpacity={0.5}
          onPress={() => {
            navigation.reset('Base');
          }}>
          <Text style={styles.button}>登录</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.otheraccount}>使用第三方账号登录</Text>
      <View style={styles.passwordcontent}>
        <Text style={styles.forgetpassword}>忘记密码？</Text>
        <Text style={styles.noaccount}>没有账户？点击注册</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headtext: {
    color: 'rgb(111,80,135)',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headtitle: {
    color: 'rgb(111,80,135)',
    fontSize: 16,
    marginTop: 20,
  },
  content: {
    backgroundColor: 'rgb(239,235,242)',
    height: '100%',
  },
  avatarcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 10,
  },
  avatar: {
    width: 160,
    height: 200,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 10,
  },
  logincontent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textinput: {
    height: 45,
    width: '80%',
    borderWidth: 1,
    borderColor: '#C0A7D2',
    backgroundColor: '#ffffff',
    borderRadius: 40,
    marginTop: 15,
    paddingLeft: 20,
  },
  btncontent: {
    width: '80%',
    marginTop: 15,
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
  title: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  otheraccount: {
    color: 'rgb(111,80,135)',
    marginTop: 20,
    marginLeft: 40,
    fontSize: 16,
  },
  passwordcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    padding: 20,
  },
  forgetpassword: {
    fontSize: 16,
    color: 'rgb(111,80,135)',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(111,80,135)',
  },
  noaccount: {
    fontSize: 16,
    color: 'rgb(111,80,135)',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(111,80,135)',
  },
});

export default Auth;
