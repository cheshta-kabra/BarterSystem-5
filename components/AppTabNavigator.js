import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ItemDonateScreen from '../screens/ItemDonateScreen';
import ItemRequestScreen from '../screens/ItemRequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: ItemDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/donate.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Items",
    }
  },
  BookRequest: {
    screen: ItemRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/exchange.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request Items ",
    }
  }
});