// DO YOU HAVE THUMBS?

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Thumbs Screen')

const height = Dimensions.get('window').height

export default function Thumbs ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.biggestText}>DO</Text>
        <Text style={styles.bigText}>YOU</Text>
        <Text style={styles.smallText}>HAVE</Text>
        <Text style={styles.smallestText}>THUMBS?</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='NoThumbs' buttonColor='#8976C2' buttonText='No' />
        <LessonButton navigation={navigation} nextScreen='YesThumbs' buttonColor={['#32B59D', '#3AC55B']} buttonText='Yes' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  interactive: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    resizeMode: 'contain',
    alignItems: 'center'
  },
  smallestText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 12,
    fontWeight: 'bold'
  },
  smallText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 7,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 6,
    fontWeight: 'bold'
  },
  biggestText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 4,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
