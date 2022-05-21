import {Button, Image, SocialIcon, Text} from '@rneui/base';
import {Avatar, ListItem, SearchBar} from '@rneui/themed';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const USER_ICON = require('../../image/我.png');

const list = [
  {
    name: '在遗忘的深渊，以记忆作为回音',
    avatar_url:
      'https://img2.baidu.com/it/u=2460285813,2541569031&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500',
    subtitle:
      '沉迷在塞巴尔德冗繁复杂的长句和行文里，沉迷在作品迷宫一般分岔的小径里，沉迷在诗意的语言隐约流露的哀伤里，仿佛错过了许多，仿佛捕捉到了一些，塞巴尔德是如此的难以捉摸，而又具有无法抵御的魅力，让我沉迷在他的文学世界，沉迷在他的记忆。',
  },
  {
    name: '在遗忘的深渊，以记忆作为回音',
    avatar_url:
      'https://img2.baidu.com/it/u=2460285813,2541569031&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500',
    subtitle:
      '沉迷在塞巴尔德冗繁复杂的长句和行文里，沉迷在作品迷宫一般分岔的小径里，沉迷在诗意的语言隐约流露的哀伤里，仿佛错过了许多，仿佛捕捉到了一些，塞巴尔德是如此的难以捉摸，而又具有无法抵御的魅力，让我沉迷在他的文学世界，沉迷在他的记忆。',
  },
  {
    name: '在遗忘的深渊，以记忆作为回音',
    avatar_url:
      'https://img2.baidu.com/it/u=2460285813,2541569031&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500',
    subtitle:
      '沉迷在塞巴尔德冗繁复杂的长句和行文里，沉迷在作品迷宫一般分岔的小径里，沉迷在诗意的语言隐约流露的哀伤里，仿佛错过了许多，仿佛捕捉到了一些，塞巴尔德是如此的难以捉摸，而又具有无法抵御的魅力，让我沉迷在他的文学世界，沉迷在他的记忆。',
  },
];

/**
 * 书评页面
 */

const avatarImgUrl = {
  uri: 'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
};
const socialIconList = [
  {type: 'wechat', iconType: 'font-awesome', key: 'wechat', color: 'green'},
  {type: 'weibo', iconType: 'font-awesome', key: 'weibo', color: 'red'},
  {type: 'qq', iconType: 'font-awesome', key: 'qq', color: 'deepskyblue'},
];

const BookComment: React.FC<{}> = () => {
  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <ListItem.Content style={styles.itemcontent}>
        <ListItem.Title style={styles.name}>{item.name}</ListItem.Title>
        <View style={styles.commentcontent}>
          <ListItem.Subtitle style={styles.subtitle}>
            {item.subtitle}
          </ListItem.Subtitle>
          <Image
            source={{uri: item.avatar_url}}
            style={{width: 120, height: 70,marginLeft:20,}}
            progressiveRenderingEnabled
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <ScrollView style={styles.content}>
      <View style={styles.upcontent}>
        <View>
          <Text style={styles.title}>幽灵之旅，或历史的眩晕症</Text>
          <Text style={styles.passage}>
            1909年到1914年之间，在布拉格工伤事故保险局任职的弗兰茨·卡夫卡曾两次来到意大利加尔达湖畔的里瓦小镇疗养，期间共写下三个不同版本的《猎人格拉胡斯》，然而这篇作品最终并未完成，也从未在卡夫卡生前公开发表。考虑到这个残篇遗失在历史中的巨大可能性——如果不是马克思·布罗德违背了卡夫卡的意愿，决定出版卡夫卡的全部作品（包括草稿、书信、日记），以及这些作品在西方社会带来的一连串奇迹般的回应——那么近一个世纪后，另一位德语作家温弗里德·塞巴尔德的小说处女作《眩晕》，很可能完全不是我们现在看见的样子。
            历史的小径有无数分岔的可能，存在于此刻的事物，被一个个脆弱的偶然性所维持，有着极不稳定的结构。正如塞巴尔德后来在他的另一部作品《土星之环》中提到的：
            “燕子们成群结队在还
            有最后一丝光线的天空盘旋，那时我就会想，世界只是被它们从天空中穿行的轨迹捆扎起来的。”
            塞巴尔德的小说美学，正是建立对虚无的行迹的长久观察和耐心描摹之上——甚至有时，会由于人物的消失，细节无休止的蔓延，被视为随笔或旅行文学，或者某种百科全书式的跨文体写作，然而《眩晕》，作为塞巴尔德第一次从学术写作转向虚构文体的尝试，它明确的主题和精心编织的线索，完整地演示了《眩晕》如何作为小说而成立，以及塞巴尔德小说美学的运行机制。
          </Text>
          <View >
            <Image
              source={{
                uri: 'https://img0.baidu.com/it/u=1242925303,650409786&fm=253&fmt=auto&app=138&f=JPEG?w=853&h=500',
              }}
              style={styles.pimage}
            />
          </View>
        </View>
        <View style={styles.bookcontent}>
          <Image
            source={{
              uri: 'https://img2.doubanio.com/view/subject/l/public/s33871233.jpg',
            }}
            style={{width: 100, height: 140, marginTop: 40, marginLeft: 20}}
            progressiveRenderingEnabled
          />
          <View style={styles.booktext}>
            <Text style={{color: '#604575', fontSize: 15}}>眩晕</Text>
            <Text style={{color: '#8a8a8a', fontSize: 15}}>{`[德国]温弗里德 
塞尔巴德`}</Text>
            <Text style={{color: '#8a8a8a', fontSize: 15}}>8人已借</Text>
          </View>

          <TouchableOpacity style={styles.btncontent} activeOpacity={0.5}>
            <Text style={styles.button}>借阅</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#604575',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 40,
          }}>
          分享到
        </Text>
        <View style={styles.bookcomment}>
          <View style={styles.iconcontent}>
            {socialIconList.map(item => (
              <SocialIcon
                style={{backgroundColor: item.color}}
                type={item.type}
                iconType={item.iconType}
                key={item.key}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.downcontent}>
        <Text style={styles.bookrecommend}>书评推荐</Text>
        <View style={styles.listcontent}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={renderItem}
            style={styles.flatcontent}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgb(239,235,242)',
  },
  upcontent: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    color: '#604575',
    marginLeft: 20,
    marginTop: 5,
  },
  passage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#604575',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  booktext: {
    marginLeft: 30,
    marginTop: 10,
  },
  pimage: {
    width: '90%',
    height: 150,
    marginTop: 10,
    marginLeft: 20,
  },
  bookcontent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatcontent: {
    width: '95%',
  },
  bookcomment: {},
  itemcontent: {
    marginTop: 15,
    marginBottom:5,
    height: 80,
  },
  bookrecommend: {
    color: '#604575',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  listcontent: {
    borderTopWidth: 1,
    borderTopColor: 'rgb(239,235,242)',
  },
  name: {
    fontSize: 17,
    marginBottom: 10,
    color: '#604575',
    ellipsizeMode: 'clip',
  },
  subtitle:{
    fontSize: 15,
    marginBottom: 5,
    color: '#604575',
    ellipsizeMode: 'clip',
  },
  commentcontent: {
    display: 'flex',
    flexDirection: 'row',
    width:'60%',
  },
  iconcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  downcontent: {
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  btncontent: {},
  button: {
    backgroundColor: 'rgb(239,235,242)',
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 30,
    borderRadius: 20,
    color: '#604575',
    marginLeft: 10,
  },
});

export default BookComment;
