import {Avatar, Button, Divider, Icon, ListItem} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AppScreenProps} from '../../../App';
import {getUsers, getUsersBorrowList} from './service';
import {BorrowListItem, UsersInfo} from './types';

const avatarImgUrl = {
  uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
};

/**
 * 首頁
 */
const UserInfoDetail: React.FC<AppScreenProps> = ({navigation}) => {
  const [user, setUser] = useState<UsersInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const UserInfoData = await getUsers();
      setUser(UserInfoData);
    };

    fetchData();
  }, []);
  const [bookslist, setBooksList] = useState<BorrowListItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const BooksListData = await getUsersBorrowList({pageSize: 8});
      setBooksList(BooksListData);
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.content}>
      <View style={styles.userInfo}>
        {user ? (
          <>
            <View style={styles.usercontent}>
              <View style={styles.avatar}>
                <Avatar
                  size={80}
                  rounded
                  containerStyle={{backgroundColor: '#6733b9'}}
                  source={{uri: user.imgUrl}}
                />
              </View>
              <View style={styles.userContent}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.username}>{user.userage}</Text>
                <View style={styles.valuecontent}>
                  <Text style={styles.username}>身份证号</Text>
                  <Text style={styles.uservalue}>{user.IDnumber}</Text>
                </View>
                <View style={styles.valuecontent}>
                  <Text style={styles.username}>联系方式</Text>
                  <Text style={styles.uservalue}>{user.tel}</Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <Text>Loading...</Text>
        )}

        <View style={styles.buttoncontent}>
          <TouchableOpacity
            style={styles.btncontent}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('修改用户信息')}>
            <Text style={styles.button1}>修改</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
            <Text style={styles.button2}>删除</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.borrowtitle}>借阅图书</Text>
      </View>
      {bookslist.map(item => (
        <View style={styles.borrowcontent}>
          <View
            style={styles.listcontent}
            onStartShouldSetResponder={() => navigation.navigate('用户信息')}>
            <Image
              source={{
                uri: item.imgUrl,
              }}
              style={{width: 80, height: 100}}
            />
            <View
              style={{
                marginLeft: 10,
                display: 'flex',
                justifyContent: 'center',
              }}>
              <View style={styles.textcontent}>
                <Text style={styles.username}>图书名称</Text>
                <Text style={styles.uservalue}>{item.bookname}</Text>
              </View>
              <View style={styles.textcontent}>
                <Text style={styles.username}>借阅日期</Text>
                <Text style={styles.uservalue}>{item.borrowtime}</Text>
              </View>
              <View style={styles.textcontent}>
                <Text style={styles.username}>归还截止日期</Text>
                <Text style={styles.uservalue}>{item.returntime}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
    height: '100%',
  },
  title: {
    color: '#604575',
  },
  username: {
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#604575',
  },
  valuecontent: {
    display: 'flex',
    flexDirection: 'row',
  },
  uservalue: {
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 14,
  },
  btncontent: {marginTop: 20, marginBottom: 5, width: 100},
  button1: {
    backgroundColor: 'rgb(239,235,242)',
    height: 35,
    fontSize: 14,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#604575',
    borderRadius: 10,
    marginTop: 10,
  },
  button2: {
    backgroundColor: 'rgb(239,235,242)',
    height: 35,
    fontSize: 14,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'red',
    borderRadius: 10,
    marginTop: 10,
  },
  buttoncontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  borrowtitle: {
    fontSize: 18,
    color: '#604575',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  borrowcontent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  listcontent: {
    width: '94%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  textcontent: {
    display: 'flex',
    flexDirection: 'row',
  },
  userInfo: {
    backgroundColor: '#ffffff',
    width: '94%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  usercontent: {
    display: 'flex',
    flexDirection: 'row',
  },
  userContent: {
    display: 'flex',
    marginLeft: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'rgb(226,224,246)',
    marginTop: 20,
  },
});

export default UserInfoDetail;
