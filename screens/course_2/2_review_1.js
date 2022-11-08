// Photos are composed of smaller parts: pixels.

import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import LessonHeader from '../../components/LessonHeader'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'


const height = Dimensions.get('window').height

export default function Course2Review1 ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2Review1'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>2/28</Text>
      </View>
      <View style={styles.textSection}>
        <LessonHeader style={styles.header}>Facial Recognition Review</LessonHeader>

        <View style={styles.number}>
          <Text style={styles.numberFont}>1</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Photos are composed of smaller parts: pixels.</Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

      <StatusBar style='auto' />
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
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    textAlign: 'center',
    marginBottom: 5
  },
  number: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  numberFont: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 14,
    fontWeight: 'bold',
    opacity: 0.5
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 1.90
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 30
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
