// Our faces have some unique features that stand out and make them recognizable.

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 1 Screen 18: Face Parts Screen')

export default function Course1FaceParts ({ navigation }) {
  let screenSection = screen_list.course1;
  let screenName = 'Course1FaceParts';

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Our faces have some unique features that stand out and make them recognizable.</Text>
      <View style={styles.interactive}>
        <Image style={styles.image} source={require('../../assets/course_1/markcubanface.png')} />
      </View>
      <View style={styles.footerButtons}>
        {/*<LessonButton navigation={navigation} nextScreen='Course1Info9' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1FaceParts2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />*/}
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
  image: {
    height: 300,
    width: 300,
    marginTop: 15,
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
