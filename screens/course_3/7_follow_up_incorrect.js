// You guessed wrong

import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 20: Scan all wrong ')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2ScanAll2Wrong ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.lessonContent}>
        <Text style={styles.mainText}>Uh Oh!</Text>
        <Image style={styles.image} source={require('../../assets/course_3/BrokenComputer.png')} />
        <Text style={styles.secondText}>Green is a cool color, but that's not quite what we're looking for.</Text>
        <Text style={styles.secondText}>Let's understand the role that distance plays!</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUp'
          buttonColor='#8976C2'
          buttonText='Back'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpII'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText="I'm Ready!"
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lessonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: height / 20,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20, // ~60px
    fontWeight: 'bold'
  },
  secondText: {
    flex: 1,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 26 // ~30px
  },
  image: {
    flex: 1,
    width: width / 0.75
  }
})
