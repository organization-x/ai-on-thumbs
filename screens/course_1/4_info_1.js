// But now, do you think computers can also see tiny pixels?

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height

export default function Course1Info1 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.text}>But now, do you think computers can also see tiny pixels?</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1PinchZoom' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    overflow: 'hidden',
    marginTop: height / 5
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
