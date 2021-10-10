// We really need to appreciate the computer world.

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

export default function Course1Info5 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Image resizeMode='cover' source={require('../../assets/high-def-assets/ocean.png')} style={styles.backgroundImage} />
      <View style={styles.interactive}>
        <Text style={styles.text}>We really need to appreciate the computer world.</Text>
      </View>

      <View style={styles.bottomText}>
        <Text style={styles.altText}>An ocean of numbers, numbers, and numbers...</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Magnify' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  backgroundImage: {
    flex: 1,
    marginTop: '140%',
    position: 'absolute',
    overflow: 'visible',
    height: '50%'
  },
  interactive: {
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  bottomText: {
    flex: 1,
    marginTop: '50%',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  altText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
