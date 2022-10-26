// The user correctly selects the green house as the closest.

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 5: Follow Up Question')

const height = Dimensions.get('window').height

export default function Course3FollowUp ({ navigation }) {
  let screenSection = screen_list.course3;
  let screenName = 'Course3FollowUp';

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}></Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          That's right! The green house is the closest.
        </Text>
        <Text style={styles.secondText}>
          If you guessed green, what do you think makes the green house closest to the black house?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpCorrect'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Lowest Distance'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIncorrect'
          buttonColor='#8976C2'
          buttonText='Coolest Color'
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
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  secondText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20
  }
})
