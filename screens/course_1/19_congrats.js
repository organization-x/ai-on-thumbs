// Congrats! You just learned all about how computers see. You also learned an important insight into facial recognition!

import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

export default function Course1Congrats ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <ImageBackground source={require('../../assets/course_1/confetti.png')} style={styles.container}>
        <View style={styles.interactive}>
          <Text style={styles.bigText}>Congrats!</Text>
          <Text style={styles.text}>You just learned all about how computers see. You also learned an important insight into facial recognition!</Text>
          <Text style={styles.boldText}>Now let’s review.</Text>
        </View>
        <View style={styles.footerButtons}>
          <LessonButton navigation={navigation} nextScreen='Course1FaceParts2' buttonColor='#8976C2' buttonText='Back' />
          <LessonButton navigation={navigation} nextScreen='Course1Review' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>
      </ImageBackground>
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
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  boldText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 52,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
