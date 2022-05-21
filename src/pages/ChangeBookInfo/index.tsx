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
import {Button, CheckBox, Image, Input} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import {AppScreenProps} from '../../../App';
import {BookeInfoData} from './types';
import {getBooksInfo} from './service';

/**
 * 书籍信息修改頁面
 */

const ChangeBookInfo: React.FC<AppScreenProps> = ({navigation}) => {
  const [checked, setChecked] = useState<boolean>(false);
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
      {booksinfo ? (
        <>
          <ScrollView style={{backgroundColor: '#ffffff'}}>
            <View style={styles.textcontent}>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>书籍名称</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.summary.title}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>书籍类别</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.info.category}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>出版年月</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.info.pubDate}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>出版社</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.info.pubhouse}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>语言</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.info.language}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>ISBN</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.info.ISBN}
                </TextInput>
              </View>
              <View style={styles.inputcontent1}>
                <Text style={styles.text}>简介</Text>
                <TextInput
                  style={styles.textinput1}
                  multiline={true}
                  numberOfLines={10}>
                  {booksinfo.detail}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>剩余量</Text>
                <TextInput style={styles.textinput}>
                  {booksinfo.summary.remain}
                </TextInput>
              </View>
              <View style={styles.inputcontent}>
                <Text style={styles.text}>借阅状态</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingRight: 30,
                  }}>
                  <CheckBox
                    title="可以借阅"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{backgroundColor: 'rgba(255,255,255,0)'}}
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                    textStyle={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#604575',
                    }}
                    checkedColor="#604575"
                    size={18}
                  />
                  <CheckBox
                    title="不可借阅"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{backgroundColor: 'rgba(255,255,255,0)'}}
                    textStyle={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#604575',
                    }}
                    checked={checked}
                    checkedColor="#604575"
                    size={18}
                    onPress={() => setChecked(!checked)}
                  />
                </View>
              </View>
              <View style={styles.inputcontent1}>
                <Text style={styles.text}>书评</Text>
                <TextInput
                  style={styles.textinput1}
                  multiline={true}
                  numberOfLines={10}>
                  {booksinfo.comment}
                </TextInput>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <Text>Loading...</Text>
      )}

      <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
        <Text style={styles.button}>确认修改</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    height: '100%',
    alignItems: 'center',
  },
  textcontent: {
    display: 'flex',
    width: '100%',
  },
  inputcontent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E7DEEE',
  },
  textinput: {
    backgroundColor: '#ffffff',
    fontSize: 14,
    marginLeft: 20,
  },
  inputcontent1: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  textinput1: {
    backgroundColor: '#ffffff',
    fontSize: 14,
    textWrap: 'wrap',
    height: 150,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 14,
    color: '#604575',
  },
  btncontent: {
    width: '95%',
    marginTop: 10,
    marginBottom: 5,
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

export default ChangeBookInfo;
