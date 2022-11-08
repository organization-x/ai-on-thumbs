// Continue your journey by going to ai-camp.org

import React from 'react'
import { Platform, StyleSheet, View, Text, Image, KeyboardAvoidingView, ScrollView, Dimensions, Linking } from 'react-native'
import LessonButton from '../../components/LessonButton'
import EmailPrompt from '../../components/EmailPrompt'
import * as Sentry from 'sentry-expo'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 6: Email Prompt Screen')

const height = Dimensions.get('window').height

export default function Course4Email ({ navigation }) {
  async function handlePress () {
    Linking.openURL('https://ai-camp.org')
    await Analytics.logEvent('Webpage Visit').catch(err => { Sentry.Native.captureException(err.response.data) })
  }

  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/stock/ai-on-thumbs-logo.png')} />
        <Text style={styles.text} onPress={handlePress}>Continue your journey by going to ai-camp.org</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={height / 10}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.emailView}>
            <EmailPrompt />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course4End' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4Promo' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#202020'
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
    fontSize: height / 23,
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
