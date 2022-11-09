import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height 
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
    height: height/3.5,
    width: width / 1.2,
    marginRight: 5
  },
  cardGradientContainer: {
    padding: 20
  },
  courseTitle: {
    fontSize: height/40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: height/100
  },
  courseDesc: {
    fontFamily: 'Avenir',
    fontSize: height/45,
    color: 'white'
  },
  courseRating: {
    marginBottom: height/15,
    fontSize: height/45,
    fontWeight: 'bold',
    color: 'white'
  }
})
