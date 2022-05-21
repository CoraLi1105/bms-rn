import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Icon, Image} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import {useState} from 'react';

/**
 * 登录頁面
 */

const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
};
const LoginRegister: React.FC<{}> = () => {
  const [userRole, setUserRole] = useState<'manager' | 'borrower'>('borrower');
  return (
    <View style={styles.content}>
      <Text style={styles.headtext}>请选择身份</Text>
      <View style={styles.avatarcontent}>
        <View
          style={styles.avatar}
          onStartShouldSetResponder={() => setUserRole('manager')}>
          <Avatar
            size={130}
            rounded
            containerStyle={{backgroundColor: '#6733b9'}}
            source={avatarImgUrl}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Icon
              name="check-circle"
              type="FontAwesome"
              color={userRole === 'manager' ? 'green' : 'gray'}
              style={{marginRight: 10}}></Icon>
            <Text style={styles.headtitle}>管理者</Text>
          </View>
        </View>
        <View
          style={styles.avatar}
          onStartShouldSetResponder={() => setUserRole('borrower')}>
          <Avatar
            size={130}
            rounded
            containerStyle={{backgroundColor: '#6733b9'}}
            source={avatarImgUrl}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Icon
              name="check-circle"
              type="FontAwesome"
              color={userRole === 'borrower' ? 'green' : 'gray'}
              style={{marginRight: 10}}></Icon>
            <Text style={styles.headtitle}>借阅者</Text>
          </View>
        </View>
      </View>
      <View style={styles.logincontent}>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的姓名"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的身份证号"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请输入您的密码"></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="请再次输入您的密码"></TextInput>
        <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
          <Text style={styles.button}>注册</Text>
        </TouchableOpacity>
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
    borderColor: 'rgb(239,235,242)',
    backgroundColor: '#ffffff',
    borderRadius: 40,
    marginTop: 5,
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
});

export default LoginRegister;
