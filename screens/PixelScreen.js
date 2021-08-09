import React from 'react'
import { StyleSheet, View } from 'react-native'
import PixelSlider from '../components/Pixel'
import Tip from '../components/Tip'
import LessonHeader from '../components/LessonHeader'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function PixelScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Pixel Ranges</LessonHeader>
      <Tip tipText='Move the slider to change the pixel number' />
      <PixelSlider />
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='ZoomScreen' buttonColor='#8976C2' buttonText='back' />
        <LessonButton navigation={navigation} nextScreen='Welcome' buttonColor='#32B59D' buttonText='continue' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
