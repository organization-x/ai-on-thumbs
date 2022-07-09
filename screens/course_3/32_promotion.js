// Summer Camp Promotion

import React from 'react'
import { Platform, StyleSheet, View, Text, Image, KeyboardAvoidingView, ScrollView, Dimensions, Linking } from 'react-native'
import LessonButton from '../../components/LessonButton'
import EmailPrompt from '../../components/EmailPrompt'
import { LinearGradient } from 'expo-linear-gradient'
import * as Sentry from 'sentry-expo'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 32: Promotion')

const height = Dimensions.get('window').height

export default function Promotion ({ navigation }) {
  async function handlePress () {
    Linking.openURL('https://www.ai-camp.org/virtual-summer-camp')
    await Analytics.logEvent('Webpage Visit').catch(err => { Sentry.Native.captureException(err.response.data) })
  }

  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.interactive}>
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/stock/ai-on-thumbs-logo.png')} />
        <Text style={styles.text}>If you had fun here, you'll certainly want to check out our after-school and summer programs at AI Camp.</Text>
        <Text style={styles.text}>At AI Camp, you will make lifelong friends and connections and we will teach you how to build amazing AI products!</Text>
        <Text style={styles.promoText} onPress = {handlePress}>Click here to see what else AI Camp has to offer!</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3AppStoreReview' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor={['#32B59D', '#3AC55B']} buttonText='Back to Home' />
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
  logo: {
    height: height / 6.5,
    marginTop: height / 20
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 15,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35,
    fontWeight: 'bold'
  },
  promoText: {
    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 15,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: height / 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emailView: {
    overflow: 'hidden'
  }
})
