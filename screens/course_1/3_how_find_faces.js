// It turns out each picture is composed by tiny color squares - pixels!

import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function Course1HowFindFaces ({ navigation }) {

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <TopLessonParagraph>So how does a {'\n'} computer detect a face? </TopLessonParagraph>

      <View style={styles.zoomView}>
        <Image source={require('../../assets/course_1/markcubanface.png')} style={styles.cubanImage}></Image>
      </View>

      {
      <BottomLessonParagraph>To understand that, we first need to understand how a computer sees photos.</BottomLessonParagraph>
      }
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1FaceFinder' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1PinchZoom' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})

