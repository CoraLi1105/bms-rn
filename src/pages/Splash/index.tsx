import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppScreenProps} from '../../../App';

/**
 * 歡迎頁面
 */
const Splash: React.FC<AppScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text>启动页</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Splash;
