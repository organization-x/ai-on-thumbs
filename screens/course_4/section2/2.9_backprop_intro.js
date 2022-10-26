// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 4 Screen 6 Section 2: Backpropagation Matching Intro')

const height = Dimensions.get('window').height

export default function Course4BPInteractiveIntro ({ navigation }) {
  const screenSection = ScreenList.section2
  const screenName = 'Course4BPInteractiveIntro'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>6/14</Text>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.text}>Let's learn about backpropagation, a key element in how natural networks learn patterns!</Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 150
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: height / 5
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  sectionButton: {
    marginBottom: 160,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rectangle: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '100%',
    height: '45%',
    alignItems: 'center',
    marginBottom: height / 5,
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 45
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%',
    paddingBottom: 45
  }
})
