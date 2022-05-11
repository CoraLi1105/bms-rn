import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Button, Image, SocialIcon} from '@rneui/base';
import {Avatar, CheckBox} from '@rneui/themed';

/**
 * 第三方登录頁面
 */
const socialIconList = [
  {type: 'wechat', iconType: 'font-awesome', key: 'wechat'},
  {type: 'weibo', iconType: 'font-awesome', key: 'weibo'},
  {type: 'qq', iconType: 'font-awesome', key: 'qq'},
];
const LoginOther: React.FC<{}> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <View style={styles.content}>
      <View style={styles.upcontent}>
        <Text style={styles.headtext}>布书</Text>
        {/* <Text style={styles.headtext}>189****1537</Text> */}
        <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
          <Text style={styles.button}>一键登录/注册</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.downcontent}>
          {socialIconList.map(item => (
            <SocialIcon
              type={item.type}
              iconType={item.iconType}
              key={item.key}
            />
          ))}
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            title="Click Here"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            style={{backgroundColor: 'red'}}
            containerStyle={{backgroundColor: 'rgba(255,255,255,0)'}}
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#604575',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  upcontent: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  downcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 50,
  },
  headtext: {
    fontSize: 35,
    color: 'rgb(239,235,242)',
    marginTop: '45%',
    marginBottom: '25%',
  },
  btncontent: {
    width: '80%',
    backgroundColor: 'rgb(239,235,242)',
    borderRadius: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 40,
    fontSize: 18,
  },
  checkbox: {
    backgroundColor: '#604575',
  },
});

export default LoginOther;
