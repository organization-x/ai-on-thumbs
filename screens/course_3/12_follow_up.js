// User incorrectly selects Neighborhood B.

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 12: Follow Up II A')

const height = Dimensions.get('window').height

export default function Course3FollowUpIIA ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Actually, the black and green houses both belong to Neighborhood A.
        </Text>
        <Text style={styles.secondText}>
          What do you think makes them neighbors?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIICorrect'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Distance'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIIIncorrect'
          buttonColor='#8976C2'
          buttonText='Friendship'
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
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20, // ~40px
    fontWeight: 'bold'
  },
  secondText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20 // ~40px
  }
})
