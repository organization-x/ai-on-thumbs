import React from 'react'
import { StyleSheet, View } from 'react-native'
import PixelSlider from '../../components/Pixel'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function PixelScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Pixel Ranges</LessonHeader>
      <Tip tipText='Move slider to change pixel number' />

      <View style={{ flex: 1 }}>
        <PixelSlider />
      </View>

      <ParagraphBox text='Grayscale pixel values range from 0 (black) to 255 (white)' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='ZoomScreen' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Welcome' buttonColor='#32B59D' buttonText='Continue' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 17
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
