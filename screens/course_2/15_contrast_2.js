// Since brighter pixels are higher in value, and darker pixels are lower in value

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 15: Contrast 2 Screen')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast2 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textFont}>Since brighter pixels are higher in value, and darker pixels are lower in value,</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelContrast1.png')} />
        <Text style={styles.textFont}>we can find their difference to get the contrast.</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2Contrast1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2Contrast3' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: height / 20
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27
  },

  image: {
    margin: height / 22,
    resizeMode: 'contain',
    height: height / 4
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
