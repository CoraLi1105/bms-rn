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

  //?????????
  // const HomeStack = createNativeStackNavigator();
  // const HomeStackScreen = () => {
  //   return (
  //     <HomeStack.Navigator>
  //       <HomeStack.Screen
  //         name="??????"
  //         component={BorrowerRecommend}
  //         options={{headerShown: false}}
  //       />
  //       <HomeStack.Screen
  //        name="????????????"
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
  //         name="????????????"
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
  //         name="????????????"
  //         component={BorrowerManage}
  //         options={{headerShown: false}}
  //       />
  //       <BorrowManageStack.Screen
  //         name="????????????"
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
  //         name="??????????????????"
  //         component={ChangeUserInfo}
  //         options={{}}
  //       />
  //       <UserInfoStack.Screen
  //         name="????????????"
  //         component={Authentication}
  //         options={{}}
  //       />
  //       <UserInfoStack.Screen
  //         name="????????????"
  //         component={LoginPassword}
  //         options={{}}
  //       />
  //       <UserInfoStack.Screen
  //         name="????????????"
  //         component={BorrowCollect}
  //         options={{}}
  //       />
  //     </UserInfoStack.Navigator>
  //   );
  // };

  //?????????

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
          name="????????????"
          component={BookInfo}
          options={{}}
        />
        <ManageBookStack.Screen
          name="??????"
          component={ChangeBookInfo}
          options={{}}
        />
        <ManageBookStack.Screen
          name="????????????"
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
          name="????????????"
          component={ManagerManage}
          options={{}}
        />
        <ManageBookStack.Screen
          name="????????????"
          component={UserInfoDetail}
          options={{}}
        />
        <ManageBookStack.Screen
          name="??????????????????"
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
          name="??????????????????"
          component={ChangeUserInfo}
          options={{}}
        />
        <UserInfoStack.Screen
          name="????????????"
          component={Authentication}
          options={{}}
        />
        <UserInfoStack.Screen
          name="????????????"
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
              name="??????"
              component={HomeStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              key="Books"
              name="??????"
              component={ManageBookStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              key="Manager"
              name="????????????"
              component={ManagerManageStackScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              key="My"
              name="??????"
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
