// You’ve completed your first lesson!
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function Course1Complete ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/ai-on-thumbs-logo.png')} />
      <Text style={styles.bigText}> You've completed your first lesson! </Text>
      <Text style={styles.text}> Continue to lesson 2 to learn more and you’ll get a chance to upload a picture to see Face Detection in action. </Text>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1EmailPrompt' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor={['#32B59D', '#3AC55B']} buttonText='Back to home' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 325,
    height: 128,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    marginBottom: '40%',
    fontSize: 25
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
