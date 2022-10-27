// Yes they can! Computers “see” pixels as numbers because each pixel in an image can be represented by a number.

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 1 Screen 5: Info 2 Screen')

const height = Dimensions.get('window').height

export default function Course1Info2 ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1Info2'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>6/22</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>Yes they can!</Text>
        <Text style={styles.text}>Computers “see” pixels as numbers because each pixel in an image can be represented by a number.</Text>
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Info1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Brightness1' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 12,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 22
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 15,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
