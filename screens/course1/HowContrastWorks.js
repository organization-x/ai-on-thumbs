import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function HowContrastWorks ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>How It Works</LessonHeader>
      <Tip tipText='Filters look for contrast (e.g B﹠W)' />

      <View style={[styles.imageContainer]}>

        <Image source={require('../../assets/how_contrast_works.png')} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />

      </View>

      <ParagraphBox text='Contrast is the difference between the light and dark areas in a section.' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='FaceDetectionBasics' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='CalcContrastScreen' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
