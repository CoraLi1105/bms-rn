import {Button, Image, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {getCollectBooksList} from './service';
import {CollectBookList} from './types';

/**
 * 我的收藏页面
 */
const LOVE_ICON = require('../../image/爱心.png');

const BorrowCollect: React.FC<{}> = () => {
  const [bookslist, setBooksList] = useState<CollectBookList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksListData = await getCollectBooksList({pageSize: 5});
      setBooksList(booksListData);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <ListItem bottomDivider style={styles.itemcontent}>
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
      </ListItem.Content>
      <Image source={LOVE_ICON} style={styles.love} />
    </ListItem>
  );

  return (
    <View style={styles.content}>
      <View style={styles.listcontent}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={bookslist}
          renderItem={renderItem}
          style={styles.flatcontent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
  },
  flatcontent: {
    width: '95%',
  },
  itemcontent: {
    marginTop: 10,
  },
  listcontent: {
    backgroundColor: 'rgb(239,235,242)',
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 2,
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
    marginTop: 90,
  },
});

export default BorrowCollect;
