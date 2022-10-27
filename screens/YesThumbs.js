// DO YOU HAVE THUMBS?

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('YesThumbs Screen')

const height = Dimensions.get('window').height

export default function YesThumbs ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Image style={styles.image} source={require('../assets/stock/thumbsup.png')} resizeMode='cover' />
        <Text style={styles.biggestText}>You have thumbs?</Text>
        <Text style={styles.biggestText}>Then you can learn AI!</Text>
        <Text style={styles.smallText}>AI is not a mystical or evil thing, tap continue to open the world of AI.</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    color: 'white',
    fontSize: height / 30,
    marginTop: height / 10
  },
  biggestText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 13,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    alignItems: 'center'
  },
  image: {
    marginTop: '30%'
  }
})
