import React from 'react'
import { ImageBackground, Text, View, StyleSheet, ScrollView, Image } from 'react-native'

const naruto = 'https://i.pinimg.com/originals/07/1a/0a/071a0aa3e8bf6459abaab5eb2ea599a5.jpg'
const imagen1= 'https://static.wikia.nocookie.net/doblaje/images/a/a6/Bleach_%28anime%29.png/revision/latest?cb=20220116194311&path-prefix=es'
const Mangas = () => {
  return (
    <ImageBackground source={{uri: naruto}} style={styles.container}>
      <ScrollView>
        <View style={styles.minga}></View>
        <View style={styles.card}>
          <Text>Title</Text>
          <Image source = {{uri: imagen1}}/>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    backgroundColor: "orange",
    width: 300,
    height: 200
  },
  minga:{
    backgroundColor: 'orange',
  }
})

export default Mangas
