import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function CourseCard ({ gradColors, title, desc }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => Linking.openURL('https://ai-camp.org')}
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