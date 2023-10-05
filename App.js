import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import Register from './views/Register';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mangas from './views/Mangas';
import  store  from './redux/store.js';
import { Provider } from 'react-redux';
import storage from './utils/asyncStorage.js'
import { DrawerNavigator } from './components/DrawerNavigator';



{/* <View style={styles.container}>
      <Register/>
      <StatusBar style="auto" translucent={false} backgroundColor='white' />
    </View> */}
export default function App() {
 
  return (
    <Provider store={store}>
    
    <DrawerNavigator/>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
