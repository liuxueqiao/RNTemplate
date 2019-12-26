/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {HomeView} from './src/home/HomeView';
import {MeView} from './src/me/MeView';
import {Images} from './src/common/index';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const TestIDs = require('./src/testIDs');

const AppContainer = createAppContainer(
  createMaterialTopTabNavigator(
    {
      HomeView: {
        screen: HomeView,
        navigationOptions: {
          tabBarLabel: '首页',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? Images.home_s : Images.home_n}
                style={focused ? styles.imageSelected : styles.image}
              />
            );
          },
          tabBarTestID: TestIDs.tabBarItemHome,
        },
      },
      MeView: {
        screen: MeView,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? Images.mine_s : Images.mine_n}
                style={focused ? styles.imageSelected : styles.image}
              />
            );
          },
          tabBarTestID: TestIDs.tabBarItemMe,
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#0888FF',
        inactiveTintColor: '#888888',
        style: {
          backgroundColor: 'white',
          marginBottom: -8,
        },
        labelStyle: {
          fontSize: 12,
          marginTop: 0,
        },
        indicatorStyle: {
          height: 0,
        },
        showIcon: true,
      },
      // lazy: true,
      swipeEnabled: true,
      tabBarPosition: 'bottom',
      backBehavior: 'none',
    },
  ),
);

const App = () => {
  return <AppContainer />;
};

export default App;

const styles = StyleSheet.create({
  image: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: '#888888',
  },
  imageSelected: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#0888FF',
  },
});
