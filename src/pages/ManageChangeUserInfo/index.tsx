import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Image, Input} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import {UsersInfo} from './types';
import {getUsers} from './service';

/**
 * 用户信息修改頁面
 */
const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
  // uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
};

const ManageChangeUserInfo: React.FC<{}> = () => {
  const [user, setUser] = useState<UsersInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const UserInfoData = await getUsers();
      setUser(UserInfoData);
    };

    fetchData();
  }, []);
  return (
    <View style={styles.content}>
      <View style={styles.avator}>
        <Avatar
          size={120}
          rounded
          containerStyle={{backgroundColor: '#6733b9'}}
          source={avatarImgUrl}
        />
      </View>
      {user ? (
        <View style={styles.textcontent}>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>姓名</Text>
            <TextInput style={styles.textinput}>{user.username}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>年龄</Text>
            <TextInput style={styles.textinput}>{user.userage}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>身份证号</Text>
            <TextInput style={styles.textinput}>{user.IDnumber}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>联系方式</Text>
            <TextInput style={styles.textinput}>{user.tel}</TextInput>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
        <Text style={styles.button}>确认修改</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
    height: '100%',
    alignItems: 'center',
  },
  avator: {
    backgroundColor: '#ffffff',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatorImg: {
    width: 50,
    height: 50,
  },
  infotext: {
    color: '#604575',
    marginLeft: 20,
  },
  textcontent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5%',
    width: '98%',
  },
  inputcontent: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  textinput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: 'rgb(111,80,135)',
    fontSize: 14,
    marginLeft:20,
  },
  text: {
    fontSize: 14,
    marginLeft: '15%',
    marginTop: 10,
  },
  btncontent: {
    width: '95%',
    marginTop: 50,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#604575',
    height: 45,
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#ffffff',
    borderRadius: 10,
  },
});

export default ManageChangeUserInfo;
