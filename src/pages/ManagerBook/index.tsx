import {Button, Image, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import { AppScreenProps } from '../../../App';
import { getBooksList } from './service';
import { BooksList } from './types';

const USER_ICON = require('../../image/我.png');

const list = [
  {
    name: '从一到无穷大',
    avatar_url: 'https://img3.doubanio.com/view/subject/s/public/s2516920.jpg',
    subtitle: '乔治·伽莫夫',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    avatar_url: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
];

/**
 * 图书页面
 */
const ADD_ICON = require('../../image/加号.png');
const ARROW_ICON = require('../../image/右箭头.png');

const ManagerHome: React.FC<AppScreenProps> = ({navigation}) => {
  const [bookslist, setBooksList] = useState<BooksList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksListData = await getBooksList({pageSize: 5});
      setBooksList(booksListData);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <ListItem bottomDivider   onStartShouldSetResponder={() => navigation.navigate('图书详情')}>
      <Image
        source={{uri: item.imgUrl}}
        style={{width: 80, height: 100}}
        progressiveRenderingEnabled
      />
      <ListItem.Content>
        <ListItem.Title style={styles.bookname}>{item.title}</ListItem.Title>
        <ListItem.Subtitle style={styles.author}>
          {item.author}
        </ListItem.Subtitle>
        <Text style={styles.remain}>{item.remainnumber}</Text>
        <Text style={styles.remain}>{item.borrowstatus}</Text>
      </ListItem.Content>
      <Image source={ARROW_ICON} style={styles.arrow} />
    </ListItem>
  );

  return (
    <View style={styles.content}>
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600',color:'#707070'}}>图书管理</Text>
          <Image
            source={require('../../image/加号.png')}
            style={{width: 30, height: 30}}
            onPress={()=>navigation.navigate('添加图书')}
          />
        </View>

        <View style={styles.searchcontent}>
          {/* <SearchBar placeholder="Type Here..." style={styles.search}/> */}
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Type Here..."
            style={styles.searchTextInput}
            inlineImageLeft="glass1"
            inlineImagePadding={15}
          />
        </View>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={bookslist}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {},
  searchcontent: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchTextInput: {
    height: 40,
    width: '95%',
    backgroundColor: 'rgb(239,235,242)',
    borderRadius: 40,
    marginBottom: 10,
    paddingLeft: 15,
  },

  bookname: {
    color: '#604575',
    fontSize: 17,
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    marginBottom: 5,
  },
  remain: {
    fontSize: 12,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default ManagerHome;
