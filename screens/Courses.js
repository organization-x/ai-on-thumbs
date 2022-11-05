import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native'
import CourseCardHorizontal from '../components/CourseCardHorizontal'
import CourseCard from '../components/CourseCard'
import CourseAd from '../components/CourseAd'
import colors from '../config/colors'

import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Courses Screen')
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function CoursesScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Image style={styles.logo} resizeMode='contain' source={require('../assets/stock/ai-on-thumbs-logo.png')} />
          <Text style={styles.header}>Your AI Journey</Text>
        </View>
        <Text style={styles.header2}>Lessons</Text>
        <View style={{ marginBottom: height / 20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CourseCardHorizontal
              navigation={navigation}
              lessonScreen='Course1Intro'
              gradColors={['#8233C5', '#F02FE2']}
              title='Facial Recognition I'
              desc='This lesson will teach you how to see through the "eyes" of a computer, and the first steps for facial recognition.'
              ratingandduration='Beginner: 5 minutes'
            />
            <CourseCardHorizontal
              navigation={navigation}
              lessonScreen='Course2Intro'
              gradColors={['#8233C5', '#3C4687']}
              title='Facial Recognition II'
              desc='This lesson will teach you how facial recognition works using a real-life algorithm, starting right from where we left off last lesson.'
              ratingandduration='Beginner: 5 minutes'
            />
            <CourseCardHorizontal
              navigation={navigation}
              lessonScreen='Course3Introduction'
              gradColors={['#8233C5', '#F02FE2']}
              title='K Nearest Neighbors I'
              desc='This lesson will teach how distance influences our observations of the world around us, an important part of the KNN algorithm.'
              ratingandduration='Beginner: 5 minutes'
            />
            <CourseCardHorizontal
              navigation={navigation}
              lessonScreen='Course4Intro'
              gradColors={['#8233C5', '#3C4687']}
              title='Neural Networks'
              desc='This lesson will teach you about Neural Networks, including their relation to the brain and how they learn patterns through data.'
              ratingandduration='Beginner: 10 minutes'
            />
            <CourseCardHorizontal
              navigation={navigation}
              lessonScreen='Courses'
              gradColors={['#33D05F', '#09713F']}
              title='More Lessons are right around the corner'
              desc='The AI Camp team is always looking for new topics to develop lessons for, so keep an eye out!'
              ratingandduration=''
            />
          </ScrollView>
        </View>
        <CourseCard
          navigation={navigation}
          lessonScreen='QuizzesScreen'
          gradColors={['#0F89CE', '#3C4687']}
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40,
    backgroundColor: colors.background
  },
  top: {
    marginTop: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: height / 3
  },
  logo: {
    height: height / 7,
    width: '100%',
    marginTop: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
    textAlign: 'center',
    fontSize: height / 28,
    color: 'white',
    fontWeight: 'bold'
  },
  header2: {
    textAlign: 'left',
    fontSize: height / 30,
    color: 'white',
    fontWeight: '400',
    marginBottom: 15
  }
})
