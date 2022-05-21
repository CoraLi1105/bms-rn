import {Text} from '@rneui/base';
import Swiper from 'react-native-swiper';
import {ListItem} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenProps} from '../../../App';
import {
  getBooksRecommentdList,
  getBorrowerBooksCategory,
  getHomeSwiperList,
} from './service';
import {BookCategoryItem, BookRecommendItem, SwiperItem} from './types';

/**
 * 图书页面
 */
const CLASSIFY_ICON = require('../../image/草莓甜甜圈.png');

const BorrowerRecommend: React.FC<AppScreenProps> = ({navigation}) => {
  const [booksCategory, setBooksCategory] = useState<BookCategoryItem[]>([]);
  const [booksRecommendList, setBooksRecommendList] = useState<
    BookRecommendItem[]
  >([]);
  const [swiperList, setSwiperList] = useState<SwiperItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksCategoryData = await getBorrowerBooksCategory();
      setBooksCategory(booksCategoryData);

      const booksRecommendList = await getBooksRecommentdList({pageSize: 5});
      setBooksRecommendList(booksRecommendList);

      const swiperListResult = await getHomeSwiperList();
      setSwiperList(swiperListResult);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <ListItem.Content style={styles.itemcontent}>
        <ListItem.Title style={styles.name}>{item.title}</ListItem.Title>
        <View style={styles.commentcontent}>
          <ListItem.Subtitle style={styles.subtitle}>
            {item.desc}
          </ListItem.Subtitle>
          <Image
            source={{uri: item.imgUrl}}
            style={{width: 120, height: 70, marginLeft: 20}}
            progressiveRenderingEnabled
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <ScrollView style={styles.content}>
      <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={5}>
        {swiperList.map(item => (
          <View style={styles.slide} key={item.id}>
            <Image
              key={item.id}
              style={styles.slideImage}
              source={{uri: item.uri}}
            />
          </View>
        ))}
      </Swiper>
      <View style={styles.classifycontent}>
        {booksCategory.map(item => (
          <View key={item.key} style={styles.classifyItemWrapper}>
            <Image
              source={CLASSIFY_ICON}
              style={{width: 35, height: 35}}></Image>
            <Text style={styles.classifytext}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.listcontent}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={booksRecommendList}
          renderItem={renderItem}
          style={styles.flatcontent}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {height: 230},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
  },

  content: {
    backgroundColor: 'rgb(239,235,242)',
  },

  classifycontent: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 5,
    paddingTop: 10,
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
  },
  classifyItemWrapper: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  classifytext: {
    color: '#604575',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  name: {
    fontSize: 17,
    marginBottom: 10,
    color: '#604575',
    ellipsizeMode: 'clip',
  },
  commentcontent: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
  },
  listcontent: {
    borderTopWidth: 1,
    borderTopColor: 'rgb(239,235,242)',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemcontent: {
    marginTop: 15,
    marginBottom: 5,
    height: 80,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 5,
    color: '#604575',
    ellipsizeMode: 'clip',
  },
  flatcontent: {
    width: '95%',
  },
  classify: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  borrowtext: {
    fontSize: 20,
    color: '#604575',
  },
  noreturntext: {
    fontSize: 20,
    color: '#8a8a8a',
    marginLeft: 20,
  },
});

export default BorrowerRecommend;
