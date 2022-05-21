import {Button, Image, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import { AppScreenProps } from '../../../App';

const USER_ICON = require('../../image/我.png');

const list = [
  {
    name: '从一到无穷大',
    avatar_url: 'https://img3.doubanio.com/view/subject/s/public/s2516920.jpg',
    subtitle: '乔治·伽莫夫',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
  },
];

/**
 * 我的收藏页面
 */
const LOVE_ICON = require('../../image/爱心.png');

const BorrowNewCollect: React.FC<AppScreenProps> = ({navigation}) => {
  const renderItem = ({item}) => (
    <ListItem bottomDivider style={styles.itemcontent}>
      <Image
        source={{uri: item.avatar_url}}
        style={{width: 80, height: 100}}
        progressiveRenderingEnabled
      />
      <ListItem.Content >
        <ListItem.Title style={styles.bookname}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.author}>
          {item.subtitle}
        </ListItem.Subtitle>
      </ListItem.Content>
      <Image source={LOVE_ICON} style={styles.love} />
    </ListItem>
  );

  return (
    <View style={styles.content}>
      <View style={styles.classify}>
        <Text style={styles.borrowtext} onPress={()=>navigation.navigate('推荐')}>推荐</Text>
        <Text style={styles.noreturntext}>收藏上新</Text>
      </View>
      <View style={styles.listcontent}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderItem}
          style={styles.flatcontent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
  },
  classify: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    paddingLeft: 20,
  },
  borrowtext: {
    fontSize: 20,
    color: '#8a8a8a',
  },
  noreturntext: {
    fontSize: 20,
    color: '#604575',
    marginLeft: 20,
  },
  flatcontent: {
    width: '95%',
  },
  itemcontent:{
    marginTop:10,
  },
  listcontent: {
    backgroundColor: 'rgb(239,235,242)',
    display: 'flex',
    alignItems: 'center',
    borderRadius:2
    
  },
  bookname: {
    color: '#604575',
    fontSize: 14,
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    marginBottom: 5,
  },
  love: {
    width: 20,
    height: 20,
    marginTop:90,
  },
});

export default BorrowNewCollect;
