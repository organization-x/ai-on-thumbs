import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import QuizCard from '../../components/QuizCard'
import { LinearGradient } from 'expo-linear-gradient'

// // import * as Analytics from 'expo-firebase-analytics'// Analytics.setCurrentScreen('Courses Screen')

export default function QuizzesScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Your Quiz Journey</Text>
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz1Start'
          gradColors={[`#b8860b`]}
          title='Facial Recognition I Quiz'
          desc='This Quiz will challenge you to demonstrate what you learned in Facial Recognition I. Take the time to compelete the quizzes as a fun and beneficial step in this course!'
          ratingandduration='Beginner: 5 minutes'
        />
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz2Start'
          gradColors={[`#fff8dc`]}
          title='Facial Recognition II'
          desc='This Quiz on Facial Recognition II will test the skills you learned about computer filters and pixels.'
          ratingandduration='Beginner: 5 minutes'
        />
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz3Start'
          gradColors={[`#d3d3d3`]}
          title='K Nearest Neighbors I'
          desc='This Quiz will help you cement the information you learned on KNN.'
          ratingandduration='Beginner: 5 minutes'
        />
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz4Start'
          gradColors={[`#00008b`]}
          title='Neural Networks I'
          desc="This Quiz will test your knowledge on what you learned in Neural Networks I."
          ratingandduration='Beginner: 10 minutes'
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
  },
})