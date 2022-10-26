import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'

import * as Sentry from 'sentry-expo'
Analytics.setCurrentScreen('Course Ad')

export default function CourseCard ({ gradColors, title, desc }) {
  async function handlePress () {
    Linking.openURL('https://ai-camp.org')
    await Analytics.logEvent('Webpage Visit').catch(err => { Sentry.Native.captureException(err.response.data) })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={styles.cardTouchableContainer}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={gradColors}
        style={styles.cardGradientContainer}
      >
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.courseDesc}>{desc}</Text>
      </LinearGradient>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  cardTouchableContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20
  },
  cardGradientContainer: {
    padding: 20
  },
  courseTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  courseDesc: {
    fontFamily: 'Avenir',
    fontSize: 18,
    lineHeight: 25,
    color: 'white'
  }
})
