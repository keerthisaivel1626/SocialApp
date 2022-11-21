import React, {useEffect, useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import TabBar from "./TabBar"
import AddPostScreen from '../screens/App/AddPostScreen';
import PostReelScreen from "../screens/App/PostReelScreen";
import ProfileScreen from '../screens/App/ProfileScreen';
import MessageScreen from '../screens/App/MessageScreen';
import EditProfileScreen from '../screens/App/EditProfileScreen';
import CommentScreen from '../screens/App/CommentScreen';
import ChatScreen from "../screens/App/ChatScreen";
import { AuthContext } from '../context/AuthProvider';
const AppStack=({navigation})=> {
  
const Stack = createNativeStackNavigator();
  const [userProfile, setUserProfile] = useState(null);
  const {user} = useContext(AuthContext);

  const getuserProfile = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        setUserProfile(documentSnapshot.data());
      });
  };

  useEffect(() => {
    getuserProfile();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabBar}
        options={{headerShown: false, headerShadowVisible: false}}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ReelPost"
        component={PostReelScreen}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="HomeProfile"
        component={ProfileScreen}
        options={({route}) => ({
          headerShadowVisible: false,
          headerTitle: () => (
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
                {route.params.email}
              </Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerShadowVisible: false,
          title: userProfile?.email,
          headerTitleStyle: {
            color: '#000',
          },
        }}
      />
      <Stack.Screen
        name="Chats"
        component={ChatScreen}
        options={({route}) => ({
          headerShadowVisible: false,
          headerTitle: () => (
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
                {route.params.userName}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#949494'}}>
                {moment(route.params.status).calendar()}
              </Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={({route}) => ({
          headerShadowVisible: false,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="comments"
        component={CommentScreen}
        options={({route}) => ({
          title: 'Comment',
        })}
      />
    </Stack.Navigator>
  
  );
}
export default AppStack;
