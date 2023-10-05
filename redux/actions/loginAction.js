import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = 'https://minga-green-back-production.up.railway.app';
// Acción asincrónica para iniciar sesión
const login = createAsyncThunk('login', async (data) => {
  
  try {
    let res = await axios.post(api + '/auth/signin', data)
    await AsyncStorage.setItem('token', res.data.token);
    let user = res.data.user;
    // console.log(user)
    // console.log(user.email)
    const email = JSON.stringify(user.email)
    const photo = JSON.stringify(user.photo)
    const role = JSON.stringify(user.role)
    await AsyncStorage.setItem("email",email)
    await AsyncStorage.setItem("photo",photo)
    await AsyncStorage.setItem("role",role)
    
    return res.data


  } catch (error) {
    console.log("error",error)
    throw error;
  }
})

export default login