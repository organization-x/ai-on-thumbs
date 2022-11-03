// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')
import HomeButton from '../../../components/HomeButton'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course4CaptchaExplanation ({ navigation }) {
  // set variables for section the screen is in and the screen name
  // These variables are passed into the progress bar
  const screenSection = ScreenList.section1
  const screenName = 'Course4CaptchaExplanation'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{marginTop:height/120}}/>
        <Text style={styles.number}>5/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Tasks like the captcha you just completed aren't hard for humans because of the way we take in information and recognize patterns.</Text>
        <Text style={styles.text}>However, these tasks cause a big problem for computers, which <Text style={styles.underlineText}>can't process things the same way.</Text></Text>
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
    paddingHorizontal: width/20,
    paddingVertical: height/30,
    backgroundColor: colors.background
  },
  footerButtons: {
    marginBottom: height/40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: height / 12
  },
  number: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  underlineText: {
    textDecorationLine: 'underline'
  }
})
