// Precisely! A photo is just a matrix of numbers to a computer.

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height

export default function Course1Info4 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>Precisely!</Text>
        <Text style={styles.text}>A photo is just a matrix of numbers to a computer.</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Info3' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Magnify' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height/20,
    textAlign: 'center',
    color: 'white',
    fontSize: height/23
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height/3,
    textAlign: 'center',
    color: 'white',
    fontSize: height/15,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
