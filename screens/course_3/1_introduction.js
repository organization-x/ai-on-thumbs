// To understand how facial recognition works, we will first learn about how computers interpret faces.

import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 1 Screen 1: Intro Screen')

export default function Course1Intro ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.text}>KNN is a machine learning algorithm used for classification.</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course3NearestNeighbor' buttonColor={['#32B59D', '#3AC55B']} buttonText="Tell Me More!" />
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
    marginTop: '70%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
