import {Avatar, Button, Icon, ListItem} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getManagerMineData} from './service';
import {ManagerMineData} from './types';

const USER_ICON = require('../../image/我.png');
const AVATAR_ICON = require('../../image/头像1.png');
const RIGHT_ICON = require('../../image/右箭头.png');
const SET_ICON = require('../../image/205设置.png');

const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
};

/**
 * 首頁
 */
const ManagerMine: React.FC<AppScreenProps> = ({navigation}) => {
  const [userinfo, setUserInfo] = useState<ManagerMineData>();

  useEffect(() => {
    const fetchData = async () => {
      const userInfoData = await getManagerMineData();
      setUserInfo(userInfoData);
    };

    fetchData();
  }, []);
  return (
    <View>
      {userinfo ? (
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Avatar
              size={90}
              rounded
              containerStyle={{backgroundColor: '#6733b9'}}
              source={{uri: userinfo.imgUrl}}
            />
          </View>
          <View style={styles.userContent}>
            <Text style={styles.userTitle}>{userinfo.username}</Text>
            <Text style={styles.userTitle}>{userinfo.userage}</Text>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      <View style={styles.userOptionContent}>
        <View
          style={styles.userOptionItem}
          onStartShouldSetResponder={() => navigation.navigate('修改个人信息')}>
          <View style={styles.userContentItemLeft}>
            <Image style={styles.pImg} source={USER_ICON}></Image>
            <Text style={styles.userTitle}>个人信息</Text>
          </View>
          <Image style={styles.aImg} source={RIGHT_ICON}></Image>
        </View>
        <View
          style={styles.userOptionItem}
          onStartShouldSetResponder={() => navigation.navigate('身份验证')}>
          <View style={styles.userContentItemLeft}>
            <Image style={styles.pImg} source={SET_ICON}></Image>
            <Text style={styles.userTitle}>修改密码</Text>
          </View>
          <Image style={styles.aImg} source={RIGHT_ICON}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    backgroundColor: 'rgb(239,235,242)',
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userOptionItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  userContent: {
    display: 'flex',
    marginRight: 50,
  },
  userTitle: {
    color: 'rgb(96,69,117)',
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'rgb(226,224,246)',
    marginLeft: 40,
  },
  avatorImg: {
    width: '100%',
    height: '100%',
  },
  userOptionContent: {
    display: 'flex',
    width: '100%',
    height: '70%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  userContentItemLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  pImg: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  aImg: {
    width: 20,
    height: 20,
  },
});

export default ManagerMine;
