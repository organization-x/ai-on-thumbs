import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

import CourseCard from '../components/CourseCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function CoursesScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <Text style={styles.header}>Courses</Text>
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        <CourseCard
          navigation={navigation}
          lessonScreen='ZoomScreen'
          gradColors={['#8233C5', '#F02FE2']}
          title='Getting Started'
          desc='Learn AI with zero coding experience. This course will teach you how to learn.'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='ZoomScreen'
          gradColors={['#8233C5', '#3C4687']}
          title='Face Detection in Python'
          desc='Learn AI with zero coding experience. This course will teach you how to learn.'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='ZoomScreen'
          gradColors={['#607CEA', '#3C4687']}
          title='Computer Vision Basics'
          desc='Learn AI with zero coding experience. This course will teach you how to learn.'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='ZoomScreen'
          gradColors={['#32B59D', '#3C4687']}
          title='Natural Language Basics'
          desc='Learn AI with zero coding experience. This course will teach you how to learn.'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='ZoomScreen'
          gradColors={['#4FCF6E', '#32B59D']}
          title='Data Science Basics'
          desc='Learn AI with zero coding experience. This course will teach you how to learn.'
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
    textAlign: 'left',
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
