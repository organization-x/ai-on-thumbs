// To understand how facial recognition works, we will first learn about how computers interpret faces.

import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import LessonButton from '../../components/LessonButton'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 1 Screen 1: Intro Screen')

export default function Course1Intro ({ navigation }) {
  let screenSection = screen_list.course1;
  let screenName = 'Course1Intro';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>1/22</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>To understand how facial recognition works, we will first learn about how computers interpret faces.</Text>
      </View>
      <View style={styles.footerButtons}>
        {/*<LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1FaceFinder' buttonColor={['#32B59D', '#3AC55B']} buttonText="I'm Ready!" />*/}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
