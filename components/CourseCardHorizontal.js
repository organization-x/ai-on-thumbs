import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
=======
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
>>>>>>> 6b1a4c618b5c2847501da52224bcf49e791deda3
import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course Card')

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
    borderRadius: 20,
    overflow: 'hidden',
<<<<<<< HEAD
    height: '95%',
    width: width / 1.2,
    marginRight: 5
=======
    marginRight:5,
    width: width/1.2
>>>>>>> 6b1a4c618b5c2847501da52224bcf49e791deda3
  },
  cardGradientContainer: {
    padding: 20
  },
  courseTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  courseDesc: {
    fontFamily: 'Avenir',
    fontSize: 20,
    lineHeight: 30,
    color: 'white'
  },
  courseRating: {
    paddingTop: 10,
    paddingBottom: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
})
