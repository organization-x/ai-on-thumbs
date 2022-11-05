import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course Card')

const width = Dimensions.get('window').width
export default function CourseCardHorizontal ({ navigation, lessonScreen, gradColors, title, desc, ratingandduration, disabled }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(lessonScreen)}
      disabled={disabled}
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
        <Text style={styles.courseRating}>{ratingandduration}</Text>
      </LinearGradient>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  cardTouchableContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    marginRight:5,
    width: width/1.2
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
    lineHeight: 30,
    color: 'white'
  },
  courseRating: {
    paddingTop: 10,
    paddingBottom:50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
})
