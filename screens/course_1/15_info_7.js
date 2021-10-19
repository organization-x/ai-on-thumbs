// so what do computers need to know to detect faces from an ocean of numbers?

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

export default function Course1Info7 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>SO</Text>
        <Text style={styles.text}>What do computers need to know to detect faces from an ocean of numbers?</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Info6' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info8' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '25%',
    textAlign: 'center',
    color: 'white',
    fontSize: 175,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
