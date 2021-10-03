import React from 'react'
import { StyleSheet, View } from 'react-native'

import MagnifyGlass from '../../components/MagnifyGlass'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function MagnifyScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Pixels are Numbers</LessonHeader>
      <Tip tipText='Use the magnifier to see pixel values' />

      <View style={styles.interactive}>
        <MagnifyGlass
          src={require('../../assets/abe.png')}
          magSrc={require('../../assets/abePx.png')}
          mag={1}
          radius={50}
        />
      </View>

      <ParagraphBox text='Each pixel has a value that determines the intensity of the light it outputs' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='ZoomScreen' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='PixelScreen' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    overflow: 'hidden'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
