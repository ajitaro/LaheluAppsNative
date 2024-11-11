import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../features/home';
import Colors from '../constants/Colors';
import {Appearance} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from '../features/community';
import CreatePost from '../features/createPost';
import Profile from '../features/profile';

function HomeIcon({color}: {color: string}) {
  return <AntDesign name="home" size={24} color={color} />;
}

function CommunityIcon({color}: {color: string}) {
  return <Octicons name="people" size={24} color={color} />;
}

function CreatePostIcon({color}: {color: string}) {
  return <AntDesign name="pluscircleo" size={24} color={color} />;
}

function ProfileIcon({color}: {color: string}) {
  return <Ionicons name="person-circle" size={24} color={color} />;
}
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor:
            Colors[Appearance.getColorScheme() ?? 'dark'].background,
        },
        tabBarActiveTintColor:
          Colors[Appearance.getColorScheme() ?? 'dark'].primary,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: HomeIcon}}
      />
      <BottomTab.Screen
        name="community"
        component={Community}
        options={{tabBarIcon: CommunityIcon}}
      />
      <BottomTab.Screen
        name="createPost"
        component={CreatePost}
        options={{tabBarIcon: CreatePostIcon}}
      />
      <BottomTab.Screen
        component={Profile}
        name="profile"
        options={{tabBarIcon: ProfileIcon}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
