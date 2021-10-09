// To understand how facial recognition works, we will first learn about how computers interpret faces.

import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'

import LessonButton from '../../components/LessonButton'

export default function Course1Intro ({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/high-def-assets/objectregbackground.png')} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.text}>To understand how facial recognition works, we will first learn about how computers interpret faces.</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1FaceFinder' buttonColor={['#32B59D', '#3AC55B']} buttonText="I'm Ready!" />
      </View>
    </ImageBackground>
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
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
