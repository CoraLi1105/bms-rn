import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

/**
 * 首頁
 */
const BorrowerMine: React.FC<{}> = () => {
  return (
    <View style={styles.content}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatar}
          source={require('../../image/头像1.png')}
        />
      </View>
      <View style={styles.userContent}>
        <Text style={styles.userTitleStyle}>皮皮琪</Text>
        <Text style={styles.userTitleStyle}>22岁</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'red',
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userContent: {
    width: 100,
    height: 100,
    flexDirection: 'column',
  },
  userTitleStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  avatorImg: {
    width: '100%',
    height: '100%',
  },
});

export default BorrowerMine;
