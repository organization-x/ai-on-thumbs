// Distance helps us predict which group new members belong to.

import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import colors from '../../config/colors'
import ScreenList from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 3 Screen 22: KNN Main Idea IV')

const height = Dimensions.get('window').height

export default function Course3KNNMainIdeaIV ({ navigation }) {
  const screenSection = ScreenList.course3
  const screenName = 'Course3KNNMainIdeaIV'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pagenumber}>18/21</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>This helps us predict which group new members belong to.</Text>
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
    textAlign: 'right'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
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
    marginTop: '60%',
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 40,
    fontWeight: '800'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
