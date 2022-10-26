// User correctly selects distance.

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 6: Follow Up Correct')

const height = Dimensions.get('window').height

export default function Course3FollowUpCorrect ({ navigation }) {
  let screenSection = screen_list.course3;
  let screenName = 'Course3FollowUpCorrect';

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>6/21</Text>
      </View>
      <View style={styles.lessonContent}>
        <Text style={styles.mainText}> You're absolutely right!</Text>
        <Text style={styles.secondText}>Distance is how we measure how far apart houses are.</Text>
        <Text style={styles.thirdText}>Let’s expand on this idea!</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUp'
          buttonColor='#8976C2'
          buttonText='Back'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3Neighborhoods'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText="Let's Expand!"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lessonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 16,
    fontWeight: 'bold'
  },
  secondText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 18
  },
  thirdText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 22
  }
})
