
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import Home from '../views/Home'
import Mangas from '../views/Mangas'
import Register from '../views/Register'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logout from '../views/Logout'
import { TouchableOpacity, Text } from 'react-native'




const Drawer=createDrawerNavigator()

export const DrawerNavigator = () => {


    const role = useSelector(store=>store.user_reduce?.user?.role)
    console.log(role)
    

  return (
    <NavigationContainer initialRouteName={role < 0 ? 'Home' : 'Mangas'} >
    <Drawer.Navigator >
    
    <Drawer.Screen name='Home' component={Home}/>
    {role >= 0 ?  (<Drawer.Screen name='Mangas' component={Mangas}/>) : (<Drawer.Screen name='Register' component = {Register}/>)}
    {role >= 0 ? (<Drawer.Screen name = 'Logout' component ={Logout}/>) : null}
    
   

    </Drawer.Navigator>
    </NavigationContainer>
  )
}
