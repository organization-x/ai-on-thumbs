// Ok, now we can find different parts of a face.

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 19: Scan all question ')

const height = Dimensions.get('window').height

export default function Course2ScanAll1 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Ok, now we can find different parts of a face.
        </Text>
        <Text style={styles.secondText}>
          So do we just take our filters and try them over and over on the
          image?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course2ScanAll2Wrong'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Yes! 👍'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course2ScanAll2Correct'
          buttonColor='#8976C2'
          buttonText='No! 👎'
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
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20, // ~40px
    fontWeight: 'bold'
  },
  secondText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20 // ~40px
  }
})
