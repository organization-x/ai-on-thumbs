/*
That’s a great question!
For this lesson, we will focus on the first thing computers need to know to detect a face. Any guesses?
*/

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course1Info8 ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1Info8'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>18/22</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>That’s a great question!</Text>
        <Text style={styles.text}>For this lesson, we will focus on the first thing computers need to know to detect a face. Any guesses?</Text>
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Info7' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info9' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
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
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '35%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 19,
    fontWeight: '500'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
