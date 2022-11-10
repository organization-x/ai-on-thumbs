// Scanning across the image with filters won’t work

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course2ScanAll3 ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2ScanAll3'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>22/28</Text>
      </View>
      <View style={styles.lessonContent}>
        <Text style={styles.mainText}>Scanning across the image with filters won’t work because it’s not how us humans identify faces anyways.</Text>
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
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  lessonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24,
    fontWeight: 'bold'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '5%'
  }
})
