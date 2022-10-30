import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import QuizCard from '../../components/QuizCard'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

// // import * as Analytics from 'expo-firebase-analytics'// Analytics.setCurrentScreen('Courses Screen')

export default function QuizzesScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        <HomeButton navigation={navigation} />
        <Text style={styles.header}>Your Quiz Journey</Text>
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz1Start'
          gradColors={['#b8860b', '#fff']}
          title='Facial Recognition I Quiz'
          desc='This Quiz will challenge you to demonstrate what you learned in Facial Recognition I'
          ratingandduration='Beginner: 5 minutes'
        />
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz2Start'
          gradColors={['#fff8dc', '#fff']}
          title='Facial Recognition II'
          desc='This Quiz on Facial Recognition II will test the skills you learned about computer filters and pixels.'
          ratingandduration='Beginner: 5 minutes'
        />
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz3Start'
          gradColors={['#d3d3d3', '#fff']}
          title='K Nearest Neighbors I'
          desc='This Quiz will help you cement the information you learned on KNN.'
          ratingandduration='Beginner: 5 minutes'
        />
        <QuizCard
          navigation={navigation}
          lessonScreen='Quiz4Start'
          gradColors={['#00008b', '#fff']}
          title='Neural Networks I'
          desc='This Quiz will test your knowledge on what you learned in Neural Networks I.'
          ratingandduration='Beginner: 5 minutes'
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 17,
    backgroundColor: colors.primary
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
