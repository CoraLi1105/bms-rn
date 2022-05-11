import {Avatar, Button, Icon, ListItem} from '@rneui/themed';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const USER_ICON = require('../../image/我.png');
const AVATAR_ICON = require('../../image/头像1.png');
const RIGHT_ICON = require('../../image/右箭头.png');

const OptionData = [
  {key: 'user-info', icon: USER_ICON, title: '个人信息'},
  {key: 'account-password', icon: USER_ICON, title: '账户密码'},
];

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
  // uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
};

/**
 * 首頁
 */
const ManagerMine: React.FC<{}> = () => {
  return (
    <View>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Avatar
            size={90}
            rounded
            containerStyle={{backgroundColor: '#6733b9'}}
            source={avatarImgUrl}
          />
        </View>
        <View style={styles.userContent}>
          <Text style={styles.userTitle}>皮皮琪</Text>
          <Text style={styles.userTitle}>22岁</Text>
        </View>
      </View>
      <View style={styles.userOptionContent}>
        <ListItem.Swipeable>
          <Icon name="My Icon" />
          <ListItem.Content>
            <ListItem.Title>Hello Swiper</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable>
        {/* {OptionData.map(item => (
          <View key={item.key} style={styles.userOptionItem}>
            <View style={styles.userContentItemLeft}>
              <Image style={styles.pImg} source={item.icon}></Image>
              <Text style={styles.userTitle}>{item.title}</Text>
            </View>
            <Image style={styles.aImg} source={RIGHT_ICON}></Image>
          </View>
        ))} */}
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
