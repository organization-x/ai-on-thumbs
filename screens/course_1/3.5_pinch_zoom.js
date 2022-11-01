// It turns out each picture is composed by tiny color squares - pixels!

import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Zoom from '../../components/Zoom'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 1 Screen 3.5: Pinch Zoom Screen')

const height = Dimensions.get('window').height

export default function Course1PinchZoom ({ navigation }) {
  const [currentZoom, setCurrentZoom] = useState(1)

  const screenSection = ScreenList.course1
  const screenName = 'Course1PinchZoom'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>4/22</Text>
      </View>
      <TopLessonParagraph style={styles.text}>It turns out each picture is composed of tiny color squares - pixels! {'\n\n'} Pinch the photo to see pixels. </TopLessonParagraph>

      <View style={styles.zoomView}>
        <Zoom setCurrentZoom={setCurrentZoom} />
      </View>

      <BottomLessonParagraph style={styles.text}>{(currentZoom > 1.8) ? 'Great! \n\n Now you know photos are made up of tiny pixels.' : '\n\n\n'}</BottomLessonParagraph>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1HowFindFaces' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info1' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  zoomView: {
    flex: 1,
    padding: 10
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
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  text: {
    fontSize: height / 35,
    color: 'white'
  }
})
