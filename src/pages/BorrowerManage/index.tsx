import {Button, Image, LinearProgress, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getBorrowManageBookList} from './service';
import {ManageBookList} from './types';

/**
 * 图书页面
 */
const ADD_ICON = require('../../image/加号.png');
const ARROW_ICON = require('../../image/右箭头.png');

const BorrowerManage: React.FC<AppScreenProps> = ({navigation}) => {
  const [bookslist, setBooksList] = useState<ManageBookList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksListData = await getBorrowManageBookList({pageSize: 5});
      setBooksList(booksListData);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <View
      style={styles.listcontent}
      onStartShouldSetResponder={() => navigation.navigate('图书详情')}
      key={item.id}>
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
        <Text style={styles.remain}>{item.borroetime}</Text>
        <Text style={styles.remain}>{item.retruntime}</Text>
        <LinearProgress
          style={{
            width: '90%',
            marginLeft: 20,
            marginTop: 15,
            borderRadius: 5,
          }}
          value={0.78}
          trackColor="rgb(239,235,242)"
          color="#604575"
        />
      </ListItem.Content>

      <Image source={ARROW_ICON} style={styles.arrow} />
    </View>
  );

  return (
    <View style={styles.content}>
      <View style={styles.searchcontent}>
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
      <ScrollView style={{width: '95%', height: '100%', marginTop: 5}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={bookslist}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
    display: 'flex',
    alignItems: 'center',
  },
  searchcontent: {
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
  },
  listcontent: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    padding: 20,
  },
  searchTextInput: {
    height: 40,
    width: '95%',
    backgroundColor: 'rgb(239,235,242)',
    borderRadius: 40,
    paddingLeft: 15,
  },
  itemcontent: {
    backgroundColor: 'red',
    width: '90%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  bookname: {
    color: '#604575',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 20,
  },
  author: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 20,
  },
  remain: {
    fontSize: 12,
    marginLeft: 20,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default BorrowerManage;
