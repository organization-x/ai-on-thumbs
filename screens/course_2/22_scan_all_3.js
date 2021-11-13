// Scanning across the image with filters won’t work

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 22: Scan all info 3')


const height = Dimensions.get('window').height

export default function Course2ScanAll3 ({navigation}) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.lessonContent} >
        <Text style={styles.mainText} >Scanning across the image with filters won’t work because it’s not how us humans identify faces anyways.</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
            navigation={navigation}
            nextScreen='Course2ScanAll1'
            buttonColor='#8976C2'
            buttonText='Back'
          />
          <LessonButton
            navigation={navigation}
            nextScreen='Course2ScanAll4'
            buttonColor={['#32B59D', '#3AC55B']}
            buttonText='Continue'
          />
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lessonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24,
    fontWeight: 'bold'
  },
})