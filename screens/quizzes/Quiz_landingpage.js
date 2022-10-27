import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import CourseCard from '../../components/CourseCard'
import CourseAd from '../../components/CourseAd'
import { LinearGradient } from 'expo-linear-gradient'

// // import * as Analytics from 'expo-firebase-analytics'// Analytics.setCurrentScreen('Courses Screen')

export default function QuizzesScreen ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Quizzes</Text>
        <CourseCard
          navigation={navigation}
          lessonScreen='Course1Intro'
          gradColors={['#8233C5', '#F02FE2']}
          title='Facial Recognition I'
          desc='This lesson will teach you how to see through the "eyes" of a computer, and the first steps for facial recognition.'
          ratingandduration='Beginner: 5 minutes'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='Course2Intro'
          gradColors={['#8233C5', '#3C4687']}
          title='Facial Recognition II'
          desc='This lesson will teach you how facial recognition works using a real-life algorithm, starting right from where we left off last lesson.'
          ratingandduration='Beginner: 5 minutes'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='Course3Introduction'
          gradColors={['#8233C5', '#3C4687']}
          title='K Nearest Neighbors I'
          desc='This lesson will teach how distance influences our observations of the world around us, an important part of the KNN algorithm.'
          ratingandduration='Beginner: 5 minutes'
        />
        <CourseCard
          navigation={navigation}
          lessonScreen='Course4page1_1'
          gradColors={['#8233C5', '#3C4687']}
          title='Neural Networks I'
          desc="This lesson is going to explain what a neural network is, how it's similar to a human brain, and the basics of how they work. We'll also be exploring some real world applications of neural networks."
          ratingandduration='Beginner: 10 minutes'
        />
        <CourseCard 
          navigation={navigation}
          lessonScreen=''
          gradColors={['#8233C5', '#3C4687']}
          title='Quizzes'
          desc='Test your knowledge with questions from each lesson!'
          ratingandduration='Intermediate: 15 minutes'
        />
        <CourseAd
          gradColors={['#33D05F', '#09713F']}
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
