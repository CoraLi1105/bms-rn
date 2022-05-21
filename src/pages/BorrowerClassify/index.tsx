import {Button, Divider, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface BookItemType {
  title: string;
  key: number;
  imgUrl: string;
}

const bookRow = [
  {
    title: '图书名称',
    key: 1,
    imgUrl: 'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
  },
  {
    title: '图书名称',
    key: 2,
    imgUrl: 'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
  },
  {
    title: '图书名称',
    key: 3,
    imgUrl: 'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
  },
];
const data: any[] = [];

for (let i = 0; i < 6; i++) {
  data.push(bookRow);
}

const BorrowerClassify: React.FC<{}> = () => {
  /**
   * 渲染图书列表行
   * @param bookRowItem
   * @returns
   */
  const renderItem = (bookRowItem: BookItemType[]) => (
    <View
      style={{
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.bookItemRow}>
        {bookRowItem.map(item => (
          <View key={item.key} style={styles.bookItem}>
            <Image
              style={styles.bookItemImg}
              source={{
                uri: item.imgUrl,
              }}
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
      <ScrollView style={{backgroundColor: 'rgb(239,235,242)'}}>
        <View>
          <Text style={styles.classifytext}>
            “我写了一位普通中国女性一生的故事，写了我们一家人如何像水中的浮木般挣扎求生，写了中南腹地那些乡间人物的生生死死。我知道自己写出的故事如同一滴水，最终将汇入人类历史的长河。”
          </Text>
        </View>
        {data.map(item => renderItem(item))}
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
  classifytext: {
    color: '#604575',
    fontSize: 16,
    flexWrap: 'wrap',
    padding: 15,
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

export default BorrowerClassify;
