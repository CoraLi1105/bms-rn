import {Button, Image, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';

const USER_ICON = require('../../image/我.png');

const list = [
  {
    name: '皮皮琪',
    subtitle: '乔治·伽莫夫',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
    subtitle: '兰小欢',
    Text: '剩余量：66本',
    String: '借阅状态：可以借阅',
  },
  {
    name: '置身事内',
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

const ManagerHomeNoReturn: React.FC<{}> = () => {
  const renderItem = ({item}) => (
    <ListItem bottomDivider style={styles.itemcontent}>
      <ListItem.Content >
        <ListItem.Title style={styles.author}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.author}>
          {item.subtitle}
        </ListItem.Subtitle>
        <Text style={styles.author}>{item.Text}</Text>
        <Text style={styles.author}>{item.String}</Text>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.content}>
      <View style={styles.searchcontent}>
        {/* <SearchBar placeholder="Type Here..." style={styles.search}/> */}
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Type Here..."
          style={styles.searchTextInput}
          inlineImageLeft="glass2"
          inlineImagePadding={15}
        />
      </View>
      <View style={styles.classify}>
        <Text style={styles.borrowtext}>借阅信息</Text>
        <Text style={styles.noreturntext}>未归还用户</Text>
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
    marginTop: 15,
    
  },
  searchcontent: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchTextInput: {
    height: 40,
    width: '95%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C0A7D2',
    borderRadius: 40,
    marginBottom: 10,
    paddingLeft: 15,
  },
  classify: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  borrowtext: {
    fontSize: 20,
    color: '#8a8a8a',
  },
  noreturntext: {
    fontSize: 20,
    color: '#604575',
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

export default ManagerHomeNoReturn;
