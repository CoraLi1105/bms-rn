import {Button, Image, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getUsersInfo} from './service';
import {UsersInfoList} from './types';

/**
 * 管理者管理页面
 */

const ManagerManage: React.FC<AppScreenProps> = ({navigation}) => {
  const [userinfolist, setUserInfoList] = useState<UsersInfoList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksListData = await getUsersInfo({pageSize: 8});
      setUserInfoList(booksListData);
    };

    fetchData();
  }, []);
  const renderItem = ({item}) => (
    <ListItem
      bottomDivider
      style={styles.listcontent}
      onPress={() => navigation.navigate('用户信息')}>
      <Avatar
        size={76}
        rounded
        containerStyle={{backgroundColor: '#6733b9'}}
        source={{uri: item.imgUrl}}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.bookname}>{item.username}</ListItem.Title>
        <ListItem.Subtitle style={styles.author}>
          {item.userage}
        </ListItem.Subtitle>
        <Text style={styles.remain}>{item.bookname}</Text>
        <Text style={styles.remain}>{item.borrowtime}</Text>
      </ListItem.Content>
      <Text>{item.Isoverdue}</Text>
    </ListItem>
  );

  return (
    <View style={styles.content}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={userinfolist}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
  },
  listcontent: {
    marginTop: 5,
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
});

export default ManagerManage;
