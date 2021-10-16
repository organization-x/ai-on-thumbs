// It turns out each picture is composed by tiny color squares - pixels!

import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Zoom from '../../components/Zoom'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function Course1PinchZoom ({ navigation }) {
  const [currentZoom, setCurrentZoom] = useState(1)

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <TopLessonParagraph>It turns out each picture is composed of tiny color squares - pixels! {'\n\n'} Pinch the photo to see pixels. </TopLessonParagraph>

      <View style={styles.zoomView}>
        <Zoom setCurrentZoom={setCurrentZoom} />
      </View>

      <BottomLessonParagraph>{(currentZoom > 1.8) ? 'Great! \n\n Now you know photos are made up of tiny pixels' : '\n\n\n'}</BottomLessonParagraph>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1HowFindFaces' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info1' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  zoomView: {
    flex: 1,
    padding: 10
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
