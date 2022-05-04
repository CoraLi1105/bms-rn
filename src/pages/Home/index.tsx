import React from 'react';
import {Text, View} from 'react-native';

/**
 * 首頁
 */
const HomeScreen: React.FC<{}> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
