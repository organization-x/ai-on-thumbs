// so what do computers need to know to detect faces from an ocean of numbers?

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 1 Screen 15: Info 7 Screen')

const height = Dimensions.get('window').height

export default function Course1Info7 ({ navigation }) {
  let screenSection = screen_list.course1;
  let screenName = 'Course1Info7';

  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>SO</Text>
        <Text style={styles.text}>what do computers need to know to detect faces from an ocean of numbers?</Text>
      </View>
      <View style={styles.footerButtons}>
        {/*<LessonButton navigation={navigation} nextScreen='Course1Info6' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info8' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />*/}
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
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '35%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 6,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
