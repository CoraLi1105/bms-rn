import {Avatar, Button, Icon, ListItem} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getBorrowerMineData} from './service';
import {BorrowerMineData} from './types';

const USER_ICON = require('../../image/我.png');
const LOVE_ICON = require('../../image/爱心1.png');
const RIGHT_ICON = require('../../image/右箭头.png');
const SET_ICON = require('../../image/205设置.png');

const OptionData = [
  {key: 'user-info', icon: USER_ICON, title: '个人信息'},
  {key: 'account-password', icon: SET_ICON, title: '账户密码'},
  {key: 'my-collect', icon: LOVE_ICON, title: '我的收藏'},
];

const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
};

/**
 * 借阅者我的
 */
const BorrowerMine: React.FC<AppScreenProps> = ({navigation}) => {
  const [userinfo, setUserInfo] = useState<BorrowerMineData>();

  useEffect(() => {
    const fetchData = async () => {
      const userInfoData = await getBorrowerMineData();
      setUserInfo(userInfoData);
    };

    fetchData();
  }, []);
  return (
    <View>
      {userinfo ? (
        <>
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
          <View style={styles.userOptionContent}>
            <View
              style={styles.userOptionItem}
              onStartShouldSetResponder={() =>
                navigation.navigate('修改个人信息')
              }>
              <View style={styles.userContentItemLeft}>
                <Image style={styles.pImg} source={USER_ICON}></Image>
                <Text style={styles.userTitle}>{userinfo.userinfo}</Text>
              </View>
              <Image style={styles.aImg} source={RIGHT_ICON}></Image>
            </View>
            <View
              style={styles.userOptionItem}
              onStartShouldSetResponder={() => navigation.navigate('身份验证')}>
              <View style={styles.userContentItemLeft}>
                <Image style={styles.pImg} source={SET_ICON}></Image>
                <Text style={styles.userTitle}>{userinfo.changepassword}</Text>
              </View>
              <Image style={styles.aImg} source={RIGHT_ICON}></Image>
            </View>
            <View
              style={styles.userOptionItem}
              onStartShouldSetResponder={() => navigation.navigate('我的收藏')}>
              <View style={styles.userContentItemLeft}>
                <Image style={styles.pImg} source={LOVE_ICON}></Image>
                <Text style={styles.userTitle}>{userinfo.usercollect}</Text>
              </View>
              <Image style={styles.aImg} source={RIGHT_ICON}></Image>
            </View>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
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

export default BorrowerMine;
