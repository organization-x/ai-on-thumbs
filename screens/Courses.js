import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

import CourseCard from '../components/CourseCard'
import CourseAd from '../components/CourseAd'
import { LinearGradient } from 'expo-linear-gradient'

export default function CoursesScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Text style={styles.header}>Your AI Journey</Text>
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        <CourseCard
          navigation={navigation}
          lessonScreen='Course1Info5'
          gradColors={['#8233C5', '#F02FE2']}
          title='Intro to Facial Recognition'
          desc='This lesson will teach you how to see through the "eyes" of a computer, and the first steps for facial recognition.'
          ratingandduration='Beginner: 5 minutes'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='ZoomScreen'
          gradColors={['#8233C5', '#3C4687']}
          title='Facial Recognition, part 2'
          desc='This lesson will teach you how facial recognition works using a real-life algorithm, starting right from where we left off in lesson 1.'
          ratingandduration='Beginner: 10 minutes'
        />
        <CourseAd
          gradColors={['#5D4672', '#A193A8']}
          title='Want to learn more about AI?'
          desc='Immerse yourself in artificial intelligence and learn to build incredible real-world AI products at ai-camp.org. No prior experience necessary!'
        />
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 17
  },
  header: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20
  },
  courseList: {
    flexDirection: 'column',
    minHeight: 200
  }
})
