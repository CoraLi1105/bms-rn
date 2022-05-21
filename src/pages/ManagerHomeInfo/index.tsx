import {Button, Image, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getBorrowInfoList} from './service';
import {BorrowInfoList} from './types';


/**
 * 图书页面
 */
const ADD_ICON = require('../../image/加号.png');
const ARROW_ICON = require('../../image/右箭头.png');

const ManagerHomeInfo: React.FC<AppScreenProps> = ({navigation}) => {
  const [tabActive, setTabAction] = useState<'borrow' | 'not-return'>('borrow');
  const [borrowinfolist, setBorrowInfoList] = useState<BorrowInfoList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksListData = await getBorrowInfoList({pageSize: 5});
      setBorrowInfoList(booksListData);
    };

    fetchData();
  }, []);
  const renderItem = ({item}) => (
    <ListItem bottomDivider style={styles.itemcontent}>
      <ListItem.Content>
        {tabActive === 'borrow' ? (
          <>
            <ListItem.Title style={styles.author}>
              {item.username}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.author}>
              {item.tel}
            </ListItem.Subtitle>
            <Text style={styles.author}>{item.IDnumber}</Text>
            <Text style={styles.author}>{item.bookname}</Text>
            <Text style={styles.author}>{item.borrowtime}</Text>
            <Text style={styles.author}>{item.returntime}</Text>
          </>
        ) : (
          <>
            <ListItem.Title style={styles.borrowername}>
              {item.noreturnname}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.author}>
              {item.borrowbook}
            </ListItem.Subtitle>
            <Text style={styles.author}>{item.overduetime}</Text>
            <Text style={styles.author}>{item.noreturntel}</Text>
          </>
        )}
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
        <Text
          style={
            tabActive === 'borrow' ? styles.borrowtext : styles.noreturntext
          }
          onPress={() => setTabAction('borrow')}>
          借阅信息
        </Text>
        <Text
          style={
            tabActive === 'not-return' ? styles.borrowtext : styles.noreturntext
          }
          onPress={() => setTabAction('not-return')}>
          未归还用户
        </Text>
      </View>
      <View style={styles.listcontent}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={borrowinfolist}
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
  itemcontent: {
    marginTop: 10,
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
    marginTop: 20,
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
    color: '#604575',
  },
  noreturntext: {
    fontSize: 20,
    color: '#8a8a8a',
  },

  bookname: {
    color: '#604575',
    fontSize: 17,
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    marginBottom: 5,
    color: '#604575',
  },
  borrowername: {
    fontSize: 20,
    fontWeight:'700',
    marginBottom: 15,
    color: '#604575',
  },
  remain: {
    fontSize: 12,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default ManagerHomeInfo;
