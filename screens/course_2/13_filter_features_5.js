// The long answer:
// Remember how computers think of pixels as a matrix of numbers?
// The computer is going to perform calculations on the pixels in the photo to understand the patterns in the photo. Let's find out how!

import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 13: Filter Features 5 Screen')

const height = Dimensions.get('window').height

export default function Course2FilterFeatures5 ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2FilterFeatures5';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>11/</Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The long answer:</Text>
        <Text style={styles.secondaryText}>Remember how computers think of pixels as a matrix of numbers?</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelcalculations.png')} />
        <Text style={styles.secondaryText2}>The computer is going to perform calculations on the pixels in the photo to understand the patterns in the photo. Let's find out how!</Text>
      </View>

      <View style={styles.footerButtons}>
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
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
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
    marginTop: '1%'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold',
    marginTop: height / 30,
    marginBottom: height / 30
  },
  secondaryText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35,
    marginTop: height / 25,
    marginBottom: height / 30
  },
  secondaryText2: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35,
    marginTop: height / 25,
    marginBottom: height / 30
  },
  image: {
    resizeMode: 'contain',
    width: '95%',
    height: height / 4
  }
})
