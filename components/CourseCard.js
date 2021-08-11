import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function CourseCard ({ navigation, lessonScreen, gradColors, title, desc }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(lessonScreen)}
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
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  courseDesc: {
    fontSize: 15,
    color: 'white'
  }
})
