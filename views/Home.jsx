import React, { useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ImageBackground, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import login from '../redux/actions/loginAction'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'




const image = {uri:'https://upload.wikimedia.org/wikipedia/en/5/5d/Alice_in_Borderland_cover.jpeg'}

const Home = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const {user} = useSelector(store=>store.user_reduce)
    // const {user} = useSelector((store)=>store.user_reduce || {})
    // console.log(user)
   
    const signin = async () => {
    let data = { 
        email: email,
        password: password
    };
    dispatch(login(data))
    // .then((res) => console.log(res.payload))
    //   .catch((err) => {
    //     console.log(err)
    //   })   
    
};
  return (
    <ImageBackground source={image} style={styles.container}>
    <View style={styles.minga}>
        <Text style={styles.titleMinga}>M I N G A 雪</Text>
    </View>
    <View style={styles.hero}>    
        <Text style= {styles.heroText}>Live the emotion of the manga. Find the perfect manga for you! 🔥 </Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Let's go!!</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.login}>
        <Text style={styles.titleLogin}>Welcome back!</Text>
        <Text style={styles.correo}>Email:</Text>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.textInput}/>
        <Text style={styles.correo}>Password:</Text>
        <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.textInput}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} onPress={async()=>{
                await signin()
                if(user){
                    navigation.navigate("Mangas")
                } 
                }}>Sign In!</Text>
        </TouchableOpacity>
        <Text style={styles.correo}>you don't have an account yet?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.button}>
            <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        
    </View>

      </ImageBackground>
  );
 
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    login: {
        width: 350, 
        height: 350,
        backgroundColor: '#014ba0',
        borderRadius: 30,
        opacity: 0.9,
        alignItems: 'center'
    },
    titleLogin: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10
        
    },
    hero:{
        width: 350,
        height: 150,
        backgroundColor: '#014ba0',
        opacity: 0.9,
        marginBottom: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    heroText:{
        fontSize:17,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 20
    },
    correo: {
        fontWeight: 'bold',
        color:'white',
        marginTop: 5
    },
    textInput: {
        width: 280,
        backgroundColor: 'white',
        opacity: 0.7,
        marginBottom:20
    },
    button:{
        backgroundColor:'white',
        opacity: 0.7,
        marginTop: 10,
        width: 90,
        height: 35,
        justifyContent: 'center',
        
    },
    textButton:{
        color: '#014ba0',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    titleMinga:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        opacity: 0.9
    },
    minga:{
        height: 80
    }
})

export default Home
