import {Divider, Text} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getBooksList} from './service';
import {BookItemInfoType} from './types';

const BorrowerBook: React.FC<AppScreenProps> = ({navigation}) => {
  const [books, setBooks] = useState<BookItemInfoType[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksCategoryData = await getBooksList({pageSize: 18, current: 1});
      const data: BookItemInfoType[][] = [];
      let element: BookItemInfoType[] = [];
      for (let i = 0; i < booksCategoryData.length; i++) {
        element.push(booksCategoryData[i]);
        if (i % 3 === 2) {
          data.push(element);
          element = [];
        }
      }
      setBooks(data);
    };

    fetchData();
  }, []);

  /**
   * 渲染图书列表行
   * @param bookRowItem
   * @returns
   */
  const renderItem = (bookRowItem: BookItemInfoType[]) => (
    <View
      style={{
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.bookItemRow}>
        {bookRowItem.map(item => (
          <View key={item.id} style={styles.bookItem}>
            <Image
              style={styles.bookItemImg}
              source={{
                uri: item.imgUrl,
              }}
              onStartShouldSetResponder={() => navigation.navigate('图书详情')}
            />
            <Text style={styles.bookItemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
      <Divider style={{width: '95%', marginTop: 10}} />
    </View>
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
      <ScrollView style={{backgroundColor: 'rgb(239,235,242)'}}>
        {books.map(item => renderItem(item))}
        <Text
          style={{
            marginBottom: 60,
            marginTop: 10,
            textAlign: 'center',
            color: 'gray',
          }}>
          ---------- 已经到底啦 ----------
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
  },
  bookItemRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgb(239,235,242)',
    marginTop: 5,
  },

  bookItem: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookItemImg: {
    height: 140,
    width: '90%',
  },
  bookItemTitle: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchTextInput: {
    height: 40,
    width: '95%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C0A7D2',
    borderRadius: 40,
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
  },
  remain: {
    fontSize: 12,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default BorrowerBook;
