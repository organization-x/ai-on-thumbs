import React from 'react'
import { StyleSheet, View } from 'react-native'
import Zoom from '../components/Zoom'
import Tip from '../components/Tip'
import LessonHeader from '../components/LessonHeader'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function ZoomScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Images are Pixels</LessonHeader>
      <Tip tipText='Zoom in to see individual pixels' />
      <View style={styles.zoomView}>
        <Zoom />
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Welcome' buttonColor='#8976C2' buttonText='back' />
        <LessonButton navigation={navigation} nextScreen='PixelScreen' buttonColor='#32B59D' buttonText='continue' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  zoomView: {
    flex: 1,
    marginHorizontal: 10
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
