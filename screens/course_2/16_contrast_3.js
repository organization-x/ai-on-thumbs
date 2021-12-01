// Notice how the more similar the brightness is,

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 16: Contrast 3 Screen')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast3 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.header}>Remember:</Text>
        <Text style={styles.textFont}>Brighter pixels are higher in value and darker pixels are lower in value.</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelContrast2.png')} />
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2Contrast2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2ContrastMCQ' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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

  interactive: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  header: {
    marginTop: height / 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: height / 20,
    color: 'white',
    fontWeight: 'bold'
  },

  textFont: {
    marginTop: height / 40,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27
  },

  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    height: width / 1.9,
    margin: height / 45
  },

  footerButtons: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
