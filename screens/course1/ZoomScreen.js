import React from 'react'
import { StyleSheet, View } from 'react-native'
import Zoom from '../../components/Zoom'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function ZoomScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Images are Pixels</LessonHeader>
      <Tip tipText='Zoom in to see individual pixels' />
      <View style={styles.zoomView}>
        <Zoom imageFile="../assets/image.png"/>
      </View>

      <ParagraphBox text='As you zoom in, the tiny pixels should become larger and more defined.' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='MagnifyScreen' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    flex: 1
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
