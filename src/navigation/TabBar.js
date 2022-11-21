import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useRef, useState,useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons,AntDesign,MaterialCommunityIcons } from '../utils/Icons';
import { SimpleLineIcons } from '../utils/Icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../context/AuthProvider';
import HomeScreen from "../screens/App/HomeScreen";
import SearchScreen from "../screens/App/SearchScreen";
import ReelScreen from '../screens/App/ReelScreen';
import LikeCommentFollowerScreen from '../screens/App/LikeCommentFollowerScreen';
import ProfileScreen from '../screens/App/ProfileScreen';
const TabBar=({navigation})=> {
  const Tab = createBottomTabNavigator();
  const [userProfile, setUserProfile] = useState(null);
  const {user, logout} = useContext(AuthContext);
  const refRBSheet = useRef();

  useEffect(() => {
    getuserProfile();
  }, []);
  const getuserProfile = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        setUserProfile(documentSnapshot.data());
      });
  };

  return (
    <>
      <>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#fff',
            },
          }}
          height={240}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000',
              textAlign: 'center',
              marginTop: '1%',
            }}>
            Login
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '12%',
            }}
            onPress={() => {
              firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                  status: firestore.FieldValue.serverTimestamp(),
                })
                .then(() => {
                  logout();
                })
                .catch(err => console.log('err', err));
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#3897f1'}}>
              Log out {user?.email}
            </Text>
          </TouchableOpacity>
        </RBSheet>
      </>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarStyle: {
            height: 52,
            shadowColor: '#fff',
          },
          tabBarLabelStyle: {
            marginBottom: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerShown: true,
            headerLeft: () => (
              <Image
                style={{width: 110, height: 40, marginLeft: '6%'}}
                source={require('../assets/images/logo.png')}
              />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign
                  style={{marginRight: '12%'}}
                  name="plussquareo"
                  color="#000"
                  size={26}
                  onPress={() => navigation.navigate('AddPost')}
                />
                <AntDesign
                  style={{marginRight: '6%'}}
                  name="message1"
                  color="#000"
                  size={24}
                  onPress={() => navigation.navigate('Messages')}
                />
              </View>
            ),
            tabBarLabel: () => null,
            tabBarIcon: ({color, size, focused}) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={({route}) => ({
            title: '',
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({color, size, focused}) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                color={color}
                size={30}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Reel"
          component={ReelScreen}
          options={({route}) => ({
            headerShown: false,
            title: '',
            tabBarLabel: () => null,
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  width: 33,
                  height: 33,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                {focused ? (
                  <Image
                    style={{width: 26, height: 26}}
                    source={require('../assets/images/reels.png')}
                  />
                ) : (
                  <Image
                    style={{width: 24, height: 24}}
                    source={require('../assets/images/reel.png')}
                  />
                )}
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="LCF"
          component={LikeCommentFollowerScreen}
          options={({route}) => ({
            title: 'Activity',
            headerShown: true,
            headerShadowVisible: false,
            tabBarLabel: () => null,
            tabBarIcon: ({color, size, focused}) => (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                color={color}
                size={30}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="lock-closed-outline" size={20} color="#000" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#000',
                    marginLeft: 4,
                  }}>
                  {userProfile?.email}
                </Text>
              </View>
            ),
            tabBarLabel: () => null,
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  backgroundColor: focused ? '#000' : '#fff',
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 15}}
                  source={{
                    uri: userProfile?.userImg
                      ? userProfile?.userImg
                      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
                  }}
                />
              </View>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SimpleLineIcons
                  style={{marginRight: '12%'}}
                  name="menu"
                  color="#000"
                  size={24}
                  onPress={() => refRBSheet.current.open()}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabBar;
