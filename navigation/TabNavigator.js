import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateStory from '../screens/CreateStory';
import StoryFeed from '../screens/StoryFeed';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>{return({
      tabBarIcon : ({focused,color,size})=>{
        let iconName;
        if(route.name === 'Feed'){
          iconName = focused?'home' : 'home-outline'
        }
        if(route.name === 'Create'){
          iconName = focused?'add-circle' : 'add-circle-outline'
        }

        return(<Ionicons name={iconName} size={30} color={color}/>)
      },
      headerShown : false
    })}}
    tabBarOptions={{
      activeTintColor : 'tomato',
      inactiveTintColor : 'grey'
    }}>
      <Tab.Screen name="Feed" component={StoryFeed} />
      <Tab.Screen name="Create" component={CreateStory} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
