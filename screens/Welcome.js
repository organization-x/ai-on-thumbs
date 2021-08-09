import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import LessonHeader from '../components/LessonHeader'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
// import * as Analytics from 'expo-firebase-analytics'

// Analytics.setCurrentScreen('Welcome')
export default function Welcome ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <Image style={styles.logo} source={require('../assets/ai-on-thumbs-logo.png')} />
      <LessonHeader>
        AI on Thumbs
      </LessonHeader>

      <View style={styles.buttonView}>

        <LessonButton navigation={navigation} nextScreen='ZoomScreen' buttonColor='#32B59D' buttonText='Get Started' isStart />

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginTop: 70
  },
  buttonView: {
    marginTop: 150
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1
  }
})
