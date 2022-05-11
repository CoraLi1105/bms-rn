// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationScreenProp} from 'react-navigation';
import ManagerMine from './src/pages/ManagerMine';
import ManagerBook from './src/pages/ManagerBook';
import ManagerHomeInfo from './src/pages/ManagerHomeInfo';
import ManagerHomeNoReturn from './src/pages/ManagerHomeNoReturn';
import Login from './src/pages/Login';
import LoginOther from './src/pages/LoginOther';
import MessageLogin from './src/pages/MessageLogin';
import LoginPassword from './src/pages/LoginPassword';
import LoginRegister from './src/pages/LoginRegister';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
  route: RouteProp<{params: {itemId: any; otherParam: any}}, 'params'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 626,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
};

const DetailsScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.key) {
              case 'Home':
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                break;

              default:
                iconName = focused ? 'ios-list-box' : 'ios-list';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen key="Home" name="首页" component={LoginRegister} />
        <Tab.Screen key="Books" name="图书" component={ManagerBook} />
        <Tab.Screen key="Manager" name="管理" component={MessageLogin} />
        <Tab.Screen key="My" name="我的" component={ManagerMine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
