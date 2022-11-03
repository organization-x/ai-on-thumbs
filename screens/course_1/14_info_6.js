// R.I.P. We feel for you.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 1 Screen 14: Info 6 Screen')

const height = Dimensions.get('window').height

export default function Course1Info6 ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1Info6'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>16/22</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>R. I. P.</Text>
        <Text style={styles.text}>We feel for you</Text>
        <Text style={styles.smallText}>*caresses computer*</Text>
      </View>
      <View>
        <Image source={require('../../assets/course_1/computerhand.png')} resizeMode='contain' style={styles.hand} />
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info7' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: height / 16,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: '500'
  },
  bigText: {
    marginTop: height / 8,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 15,
    fontWeight: '500'
  },
  smallText: {
    marginTop: height / 30,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35
  },
  hand: {
    marginBottom: height / 8,
    alignSelf: 'center',
    height: (Dimensions.get('window').width / 1.5)
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
