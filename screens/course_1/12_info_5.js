// We really need to appreciate the computer world.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 1 Screen 12: Info 5 Screen')

const height = Dimensions.get('window').height

export default function Course1Info5 ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1Info5'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>13/22</Text>
      </View>
      <Image resizeMode='cover' source={require('../../assets/course_1/ocean.png')} style={styles.backgroundImage} />
      <View style={styles.interactive}>
        <Text style={styles.text}>We really need to appreciate the computer world.</Text>
      </View>

      <View style={styles.bottomText}>
        <Text style={styles.altText}>An ocean of numbers, numbers, and numbers...</Text>
      </View>

      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Magnify' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  backgroundImage: {
    flex: 1,
    marginTop: height / 1.6,
    position: 'absolute',
    overflow: 'visible',
    height: '50%'
  },
  interactive: {
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  bottomText: {
    flex: 1,
    marginTop: height / 3,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  altText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
