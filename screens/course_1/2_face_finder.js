// To show computers how facial recognition is done, tap on all the faces in the picture below.

import React from 'react'
import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function Course1Complete ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Text style={styles.bigText}>To show computers how facial recognition is done, tap on all the faces in the pictures below. </Text>
      <View style = {styles.rowContainer}>
        <TouchableOpacity
         activeOpacity = {.5} 
         onPress = { this.callFun }
         >
          <Image style = {styles.image} source = {require('../../assets/course_1/treeface.png')} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = {.5} onPress = { this.callFun }>
          <Image style = {styles.image} source = {require('../../assets/course_1/memeface.png')} />
        </TouchableOpacity>
      </View>
      <View style = {styles.rowContainer}>
      <Image style = {styles.image} source = {require('../../assets/course_1/treeface.png')} />
      <Image style = {styles.image} source = {require('../../assets/course_1/memeface.png')} />
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Intro' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1HowFindFaces' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 15,
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    marginBottom: '40%',
    fontSize: 22
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: 90,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

