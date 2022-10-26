// Now that we know how computers interpret photos

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 5: Interpret Pictures Screen')

const height = Dimensions.get('window').height

export default function Course2InterpretPictures ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2InterpretPictures'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pagenumber}>3/26</Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.textFont}>Now that we know how computers interpret photos, we will learn a popular face detection strategy.</Text>
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
  information: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: height / 24
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

  textFont: {
    marginTop: height / 10,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 16,
    fontWeight: 'bold'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
