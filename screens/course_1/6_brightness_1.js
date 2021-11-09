// Each pixel has a value that represents how bright it is.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 1 Screen 6: Brightness 1 Screen')

const height = Dimensions.get('window').height

export default function Course1Brightness1 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.biggestText}>Each pixel has a value that represents how bright it is.</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/course_1/pixelcontrast.png')} resizeMode='contain' />
        </View>
        <Text style={styles.smallText}>If a pixel has a larger number, the computer will know that the pixel is brighter.</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Info2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Brightness1.5' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  smallText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: height / 35,
    fontWeight: 'bold',
    marginTop: '5%'
  },
  biggestText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    width: (Dimensions.get('window').width / 1.2)
  },
  imageContainer: {
    height: (Dimensions.get('window').width / 1.2)
  }
})
