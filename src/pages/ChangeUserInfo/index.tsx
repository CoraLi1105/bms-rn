import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, Image, Input} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import {BorrowerUserInfoData} from './types';
import {getBorrowerUserInfo} from './service';

/**
 * 用户信息修改頁面
 */

const ChangeUserInfo: React.FC<{}> = () => {
  const [userinfo, setUserInfo] = useState<BorrowerUserInfoData>();

  useEffect(() => {
    const fetchData = async () => {
      const userInfoData = await getBorrowerUserInfo();
      setUserInfo(userInfoData);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.content}>
      <View style={styles.avator}>
        <Image
          source={require('../../image/加号1.png')}
          style={styles.avatorImg}
          onPress={async () => {
            try {
              const result = await launchImageLibrary({mediaType: 'photo'});
              Alert.alert('sss', JSON.stringify(result));
            } catch (e) {
              Alert.alert('ERROR', JSON.stringify(e));
            }
          }}
        />
      </View>
      {userinfo ? (
        <View style={styles.textcontent}>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>姓名</Text>
            <TextInput style={styles.textinput}>{userinfo.username}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>年龄</Text>
            <TextInput style={styles.textinput}>{userinfo.userage}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>身份证号</Text>
            <TextInput style={styles.textinput1}>{userinfo.IDnumber}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>联系方式</Text>
            <TextInput style={styles.textinput1}>{userinfo.tel}</TextInput>
          </View>
          <View style={styles.inputcontent}>
            <Text style={styles.infotext}>工作单位</Text>
            <TextInput style={styles.textinput1}>{userinfo.adress}</TextInput>
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
  textinput1: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: 'rgb(111,80,135)',
    fontSize: 14,
    marginLeft: 30,
  },
  textinput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: 'rgb(111,80,135)',
    fontSize: 14,
    marginLeft: 60,
  },
  text: {
    fontSize: 14,
    marginLeft: '15%',
    marginTop: 10,
  },
  btncontent: {
    width: '95%',
    marginTop: 10,
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
    marginTop: 40,
  },
});

export default ChangeUserInfo;
