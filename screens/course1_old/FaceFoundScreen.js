import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function FaceFoundScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <LessonHeader>Detection Time</LessonHeader>
      <Tip tipText='More Features = Better Chance of Face' />

      <View style={{ flex: 1 }}>

        <View style={styles.imageContainer}>

          <Image source={require('../../assets/obama_face_detected.png')} style={{ width: 300, height: 350 }} />

        </View>

      </View>

      <ParagraphBox text='Eyes, Nose... Face Found!' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='NoseDetectionScreen' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Ad' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    padding: 8
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
