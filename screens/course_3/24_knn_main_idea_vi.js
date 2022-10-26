// Members of each group are close to other members of the group.

import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

import { LinearGradient } from 'expo-linear-gradient'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 24: KNN Main Idea VI')

const height = Dimensions.get('window').height

export default function Course3KNNMainIdeaVI ({ navigation }) {
  let screenSection = screen_list.course3;
  let screenName = 'Course3KNNMainIdeaVI';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}></Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.topText}>Members of each group are close to other members of the group.</Text>
        <Text style={styles.bottomText}> It's all based on distance, see what I mean?</Text>
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
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  topText: {
    marginTop: '40%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '600'
  },
  bottomText: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 40,
    fontWeight: '800'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
