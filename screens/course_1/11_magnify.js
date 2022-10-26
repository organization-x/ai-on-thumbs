// To get the feeling of a computer when it sees a photo, use the magnifier over the photo.

import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import MagnifyGlass from '../../components/MagnifyGlass'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 1 Screen 11: Magnify Screen')

export default function Course1Magnify ({ navigation }) {
  const smallScreen = Dimensions.get('window').height < 700

  const screenSection = ScreenList.course1
  const screenName = 'Course1Magnify'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>12/22</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={smallScreen ? smallStyles.instructTxt : styles.instructTxt}>To get the feeling of a computer when it sees a photo, use the magnifier over the photo.</Text>

        <View style={styles.interactive}>
          <MagnifyGlass
            src={require('../../assets/course_1/normallincoln.png')}
            magSrc={require('../../assets/course_1/pixelizedlincoln.png')}
            mag={smallScreen ? 2 : 1.3}
            radius={60}
          />
        </View>
        <Text style={smallScreen ? smallStyles.captionTxt : styles.captionTxt}>Can you tell the difference between eyes and noses yet?</Text>
      </View>

      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Info4' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info5' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
    maxHeight: 400
  },
  mainContent: {
    flex: 1
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
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
  instructTxt: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: '10%',
    color: '#fff'
  },
  captionTxt: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: '15%',
    fontWeight: '500',
    color: '#fff'
  }
})

const smallStyles = StyleSheet.create({
  instructTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: '7%',
    color: '#fff'
  },
  captionTxt: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: '7%',
    fontWeight: '400',
    color: '#fff'
  }
})
