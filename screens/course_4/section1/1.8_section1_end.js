// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
import SectionButton from '../../../components/SectionButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 4 Screen 8: Section 1 End')

const height = Dimensions.get('window').height

export default function Course4Sect1End ({ navigation }) {
  const screenSection = ScreenList.section1
  const nextSection = ScreenList.section2
  const screenName = 'Course4Sect1End'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>8/8</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Now let's dive further into neural networks to better understand how they are able to process information!</Text>
      </View>
      <View style={styles.sectionButton}>
        <SectionButton navigation={navigation} nextSection goSection={nextSection} />
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
    justifyContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: height / 7
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
})
