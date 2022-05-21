import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Image} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import {AppScreenProps} from '../../../App';
import {BookeInfoData, BookInfoSummaryType} from './types';
import {getBooksInfo} from './service';

/**
 * 图书详情頁面
 */

const BookInfo: React.FC<AppScreenProps> = ({navigation}) => {
  const [booksinfo, setBooksInfo] = useState<BookeInfoData>();

  useEffect(() => {
    const fetchData = async () => {
      const booksInfoData = await getBooksInfo();
      setBooksInfo(booksInfoData);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.content}>
      <ScrollView>
        {booksinfo ? (
          <>
            <View style={styles.firstcontent}>
              <View style={styles.imagecontent}>
                <Image
                  source={{uri: booksinfo.summary.imgUrl}}
                  style={styles.Image}
                />
              </View>

              <View style={styles.headcontent}>
                <Text style={{fontSize: 18, color: '#604575'}}>
                  {booksinfo.summary.title}
                </Text>
                <Text style={styles.headauthor}>
                  {booksinfo.summary.author}
                </Text>
                <Text style={styles.headtext}>{booksinfo.summary.remain}</Text>
                <Text style={styles.headtext}>{booksinfo.summary.state}</Text>
              </View>
            </View>
            <View style={styles.basicinfo}>
              <Text style={styles.basictext}>{booksinfo.info.basicinfo}</Text>
              <View style={{marginTop: 5}}>
                <Text style={styles.infotext}>{booksinfo.info.category}</Text>
                <Text style={styles.infotext}>{booksinfo.info.pubDate}</Text>
                <Text style={styles.infotext}>{booksinfo.info.pubhouse}</Text>
                <Text style={styles.infotext}>{booksinfo.info.language}</Text>
                <Text style={styles.infotext}>{booksinfo.info.ISBN}</Text>
              </View>
            </View>
            <View style={styles.basicinfo}>
              <Text style={styles.basictext}>{booksinfo.desc}</Text>
              <Text style={styles.infotext}>
                {booksinfo.detail}
              </Text>
            </View>
            <View style={styles.basicinfo}>
              <Text style={styles.basictext}>{booksinfo.commenttitle}</Text>
              <Text style={styles.infotext}>{booksinfo.comment}</Text>
            </View>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.btncontent}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('修改')}>
          <Text style={styles.button}>修改</Text>
        </TouchableOpacity>

        <Image
          source={require('../../image/删除.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
    height: '100%',
  },
  firstcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagecontent: {
    marginTop: 30,
    marginLeft: 20,
  },
  Image: {
    width: 100,
    height: 140,
  },
  headauthor: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
  },
  basictext: {
    color: '#604575',
    fontSize: 18,
    paddingLeft: 10,
  },
  headtext: {
    fontSize: 14,
    color: '#604575',
  },
  infotext: {
    fontSize: 14,
    color: '#604575',
    paddingLeft: 20,
    paddingTop: 5,
  },
  headcontent: {
    marginRight: 80,
    marginTop: 20,
  },
  basicinfo: {
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
  },
  btncontent: {
    width: '80%',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#604575',
    height: 45,
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#ffffff',
    borderRadius: 40,
  },
});

export default BookInfo;
