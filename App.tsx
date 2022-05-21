// In App.js in a new project

import * as React from 'react';
// import * as SecureStore from 'expo-secure-store';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationScreenProp} from 'react-navigation';

import Login from './src/pages/Login';
import Splash from './src/pages/Splash';
import Auth from './src/pages/Auth';
import BaseLayout from './src/layout/BaseLayout';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/pages/Home';
import ManagerBook from './src/pages/ManagerBook';
import ManagerHome from './src/pages/ManagerBook';
import ManagerMine from './src/pages/ManagerMine';
import ManagerManage from './src/pages/ManagerManage';
import Authentication from './src/pages/Authentication';
import BookComment from './src/pages/BookComment';
import BorrowCollect from './src/pages/BorrowCollect';
import BorrowerRecommend from './src/pages/BorrowerRecommend';
import LoginPassword from './src/pages/LoginPassword';
import MessageLogin from './src/pages/MessageLogin';
import RegisterAfter from './src/pages/RegisterAfter';
import BorrowNewCollect from './src/pages/BorrowNewCollect';
import ManagerHomeInfo from './src/pages/ManagerHomeInfo';
import BorrowerBook from './src/pages/BorrowerBook';
import BorrowerClassify from './src/pages/BorrowerClassify';
import BorrowerMine from './src/pages/BorrowerMine';
import UserInfoDetail from './src/pages/UserInfoDetail';
import ChangeUserInfo from './src/pages/ChangeUserInfo';
import BorrowerManage from './src/pages/BorrowerManage';
import ChangeBookInfo from './src/pages/ChangeBookInfo';
import LoginRegister from './src/pages/LoginRegister';
import BookInfo from './src/pages/BookInfo';
import ManageChangeUserInfo from './src/pages/ManageChangeUserInfo';
import {createKeyboardAwareNavigator} from 'react-navigation';
import AddBook from './src/pages/AddBook';
import UserBookInfo from './src/pages/UserBookInfo';
import UserReturnBookInfo from './src/pages/UserReturnBookInfo';
export interface AppScreenProps {
  navigation: NavigationScreenProp<any, any>;
  route?: RouteProp<{params: {itemId: any; otherParam: any}}, 'params'>;
}

const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );
  // React.useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   const bootstrapAsync = async () => {
  //     let userToken;

  //     try {
  //       userToken = await SecureStore.getItemAsync('userToken');
  //     } catch (e) {
  //       // Restoring token failed
  //     }

  //     // After restoring token, we may need to validate it in production apps

  //     // This will switch to the App screen or Auth screen and this loading
  //     // screen will be unmounted and thrown away.
  //     dispatch({type: 'RESTORE_TOKEN', token: userToken});
  //   };

  //   bootstrapAsync();
  // }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  const isLogin = false;

  //借阅者
  // const HomeStack = createNativeStackNavigator();
  // const HomeStackScreen = () => {
  //   return (
  //     <HomeStack.Navigator>
  //       <HomeStack.Screen
  //         name="推荐"
  //         component={BorrowerRecommend}
  //         options={{headerShown: false}}
  //       />
  //       <HomeStack.Screen
  //        name="收藏上新"
  //        component={BorrowNewCollect}
  //        options={{headerShown: false}}
  //       />
  //     </HomeStack.Navigator>
  //   );
  // };
  // const BorrowBookStack = createNativeStackNavigator();
  // const BorrowBookStackScreen = () => {
  //   return (
  //     <BorrowBookStack.Navigator>
  //       <BorrowBookStack.Screen
  //         name="BorrowerBook"
  //         component={BorrowerBook}
  //         options={{headerShown: false}}
  //       />
  //       <BorrowBookStack.Screen
  //         name="图书详情"
  //         component={UserBookInfo}
  //         options={{}}
  //       />
  //     </BorrowBookStack.Navigator>
  //   );
  // };
  // const BorrowManageStack = createNativeStackNavigator();
  // const BorrowManageStackScreen = () => {
  //   return (
  //     <BorrowManageStack.Navigator>
  //       <BorrowManageStack.Screen
  //         name="用户管理"
  //         component={BorrowerManage}
  //         options={{headerShown: false}}
  //       />
  //       <BorrowManageStack.Screen
  //         name="图书详情"
  //         component={UserReturnBookInfo}
  //         options={{}}
  //       />
  //     </BorrowManageStack.Navigator>
  //   );
  // };

  // const UserInfoStack = createNativeStackNavigator();
  // const UserInfoStackScreen = () => {
  //   return (
  //     <UserInfoStack.Navigator>
  //       <UserInfoStack.Screen
  //         name="BorrowerMine"
  //         component={BorrowerMine}
  //         options={{headerShown: false}}
  //       />
  //       <UserInfoStack.Screen
  //         name="修改个人信息"
  //         component={ChangeUserInfo}
  //         options={{}}
  //       />
  //       <UserInfoStack.Screen
  //         name="身份验证"
  //         component={Authentication}
  //         options={{}}
  //       />
  //       <UserInfoStack.Screen
  //         name="设置密码"
  //         component={LoginPassword}
  //         options={{}}
  //       />
  //       <UserInfoStack.Screen
  //         name="我的收藏"
  //         component={BorrowCollect}
  //         options={{}}
  //       />
  //     </UserInfoStack.Navigator>
  //   );
  // };

  //管理者

  const HomeStack = createNativeStackNavigator();
  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeInfo"
          component={ManagerHomeInfo}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
    );
  };
  const ManageBookStack = createNativeStackNavigator();
  const ManageBookStackScreen = () => {
    return (
      <ManageBookStack.Navigator>
        <ManageBookStack.Screen
          name="ManageBook"
          component={ManagerBook}
          options={{headerShown: false}}
        />
        <ManageBookStack.Screen
          name="图书详情"
          component={BookInfo}
          options={{}}
        />
        <ManageBookStack.Screen
          name="修改"
          component={ChangeBookInfo}
          options={{}}
        />
        <ManageBookStack.Screen
          name="添加图书"
          component={AddBook}
          options={{}}
        />
      </ManageBookStack.Navigator>
    );
  };
  const ManagerManageStack = createNativeStackNavigator();
  const ManagerManageStackScreen = () => {
    return (
      <ManagerManageStack.Navigator>
        <ManageBookStack.Screen
          name="用户管理"
          component={ManagerManage}
          options={{}}
        />
        <ManageBookStack.Screen
          name="用户信息"
          component={UserInfoDetail}
          options={{}}
        />
        <ManageBookStack.Screen
          name="修改用户信息"
          component={ManageChangeUserInfo}
          options={{}}
        />
      </ManagerManageStack.Navigator>
    );
  };

  const UserInfoStack = createNativeStackNavigator();
  const UserInfoStackScreen = () => {
    return (
      <UserInfoStack.Navigator>
        <UserInfoStack.Screen
          name="BorrowerMine"
          component={ManagerMine}
          options={{headerShown: false}}
        />
        <UserInfoStack.Screen
          name="修改个人信息"
          component={ChangeUserInfo}
          options={{}}
        />
        <UserInfoStack.Screen
          name="身份验证"
          component={Authentication}
          options={{}}
        />
        <UserInfoStack.Screen
          name="设置密码"
          component={LoginPassword}
          options={{}}
        />
      </UserInfoStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isLogin ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </>
      ) : (
        <>
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
            <Tab.Screen
              key="Home"
              name="首页"
              component={HomeStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              key="Books"
              name="图书"
              component={ManageBookStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              key="Manager"
              name="用户管理"
              component={ManagerManageStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              key="My"
              name="我的"
              component={UserInfoStackScreen}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default App;
