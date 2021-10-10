// Continue your journey by going to ai-camp.org

import React from 'react'
import { Platform, StyleSheet, View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'

import LessonButton from '../../components/LessonButton'
import EmailPrompt from '../../components/EmailPrompt'

import { LinearGradient } from 'expo-linear-gradient'

export default function Course1EmailPrompt ({ navigation }) {
  const renderInputs = (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View>
        <EmailPrompt />
      </View>
    </ScrollView>
  )
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/ai-on-thumbs-logo.png')} />
        <Text style={styles.text}>Continue your journey by going to ai-camp.org</Text>
      </View>
      {Platform.OS === 'android'
        ? (
            renderInputs
          )
        : (
          <KeyboardAvoidingView behavior='padding'>
            {renderInputs}
          </KeyboardAvoidingView>
          )}
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Rating' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Complete' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    height: 140,
    marginTop: 70
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: '20%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
