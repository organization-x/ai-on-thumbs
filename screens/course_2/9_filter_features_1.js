// Turns out the patterns in our facial features are distinctive

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 2 Screen 9: Filter Features 1 Screen')

const height = Dimensions.get('window').height

export default function Course2FilterFeatures1 ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2FilterFeatures1'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>9/28</Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Turns out the patterns in our facial features are distinctive, even in the pixel world!
        </Text>
        <Text style={styles.secondText}>
          We call these special patterns "filters".
        </Text>
      </View>

      <View style={styles.footerButtons}>
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
  pageNumber: {
    color: 'white',
    fontSize: height/25,
    textAlign: 'right'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginTop: height / 35,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 23,
    fontWeight: 'bold'
  },
  secondText: {
    marginTop: height / 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold'
  }
})
