// Computers use facial features to help them detect faces.

import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonHeader from '../../components/LessonHeader'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 4: Review 3 Screen')

const height = Dimensions.get('window').height

export default function Course2Review3 ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2Review3';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>2/26</Text>
      </View>
      <View style={styles.textSection}>
        <LessonHeader style={styles.header}>Facial Recognition Review</LessonHeader>

        <View style={styles.number}>
          <Text style={styles.numberFont}>1</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Photos are composed of smaller parts: pixels.</Text>
        </View>

        <View styles={styles.number}>
          <Text style={styles.numberFont}>2</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Computers see pixels as a matrix of numbers. The brighter the pixel, the larger the number!</Text>
        </View>

        <View style={styles.number}>
          <Text style={styles.numberFont}>3</Text>
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont}>Computers use facial features to help them detect faces.</Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

      <StatusBar style='auto' />
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
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    textAlign: 'center',
    marginBottom: 5
  },

  num: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },

  number: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  numberFont: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 14,
    fontWeight: 'bold',
    opacity: 0.5
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 12
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 30
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
