import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native'

const image= {uri: 'https://los40.cl/wp-content/uploads/2021/11/eren-jaeger-nueva-foto-temporada-final-shingeki-no-kyojin-1.jpg'}

const Register = (props) => {
  return (
    
        <ImageBackground source={image} style={styles.container}>
    <View style={styles.minga}>
        <Text style={styles.titleMinga}>M I N G A 雪</Text>
    </View>
    <View style={styles.welcome}>
        <Text style={styles.textWelcome}>Welcome!</Text>
        <Text style={styles.textWelcomeSmall}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
    </View>
    <View style={styles.register}>
        <Text style={styles.textInputWrite}>Email:</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.textInputWrite}>Photo (as URL)</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.textInputWrite}>Password</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.textInputWrite}>Confirm password</Text>
        <TextInput style={styles.textInput}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Sign up</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.sign}>
        <Text style={styles.textSign}> Do you have an account?<TouchableOpacity onPress={()=>props.navigation.navigate('Home')}><Text style={styles.textSign}>Sign In</Text></TouchableOpacity></Text>
        
    </View>
   
        </ImageBackground>

    
  )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    minga: {
        height: 60,
        // backgroundColor: '#96b3ff',
        justifyContent: 'center',
        borderRadius: 30,
        width: 220
    }, 
    titleMinga:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        opacity: 0.9,
        textAlign: 'center'
    },
    welcome:{
        height: 120,
        backgroundColor: '#96b3ff',
        width:350,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.9
    },
    textWelcome:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    textWelcomeSmall:{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    register:{
        height: 380,
        width: 350,
        backgroundColor: '#96b3ff',
        opacity: 0.9,
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30
    },
    textInputWrite:{
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5
    },
    textInput: {
        width: 280,
        backgroundColor: 'white',
        opacity: 0.7,
        
    },
    button:{
        backgroundColor:'white',
        opacity: 0.7,
        marginTop: 20,
        width: 90,
        height: 35,
        justifyContent: 'center',
        
    },
    textButton:{
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    sign:{
        height: 50,
        backgroundColor: '#96b3ff',
        marginTop: 20,
        width: 350,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textSign:{
        fontWeight: 'bold',
    }

})


export default Register
