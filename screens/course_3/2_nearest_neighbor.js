// To understand how KNN works, we need to first understand nearest neighbors.

import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import colors from '../../config/colors'
import ScreenList from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 3 Screen 2: Nearest Neighbor')

const height = Dimensions.get('window').height

export default function Course3NearestNeighbor ({ navigation }) {
  const screenSection = ScreenList.course3
  const screenName = 'Course3NearestNeighbor'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>2/21</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>To understand how KNN works, we need to first understand</Text>
        <Text style={styles.boldText}>nearest neighbors</Text>
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
  top: {
    marginTop:'2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: height/22,
    fontWeight: '500'
  },
  boldText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: height/22,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
