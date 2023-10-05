import React from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const mangas = "https://i.pinimg.com/originals/29/1c/08/291c083541c1120c87a03f18cc07c70e.jpg"
const Logout = () => {
    const navigation = useNavigation()
    
  return (
    <ImageBackground source={{uri: mangas}} style={styles.container}>
        <View style={styles.mini}>
            <Text style={styles.texto}>We hope you really enjoy our mangas!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Home')}}>
            <Text>Sign out!</Text>
        </TouchableOpacity>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
      alignItems: 'center',
    },
    mini:{
     width: 300,
     height: 200,
     backgroundColor: 'white',
     borderRadius: 30,
     opacity: 0.9,
     justifyContent: 'center',
     alignItems: 'center'   
    },
    texto:{
        fontSize: 22
    },
    button:{
        width:300,
        height: 50,
        backgroundColor: 'white',
        opacity: 0.9,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})
export default Logout
