// But how exactly does a computer use these filters to find facial features?

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 10: Filter Features 2 Screen')

const height = Dimensions.get('window').height

export default function Course2FilterFeatures2 ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2FilterFeatures2';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>8/26</Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          But how exactly does a computer use these filters to find facial features?
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
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
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
    marginTop: '1%'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 22,
    fontWeight: 'bold'
  }
})
