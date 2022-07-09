// Congratulations!

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import ConfettiCannon from 'react-native-confetti-cannon'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 25: Congratulations')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course3Congratulations ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <ConfettiCannon
        count={100}
        origin={{ x: width / 2, y: -100 }}
        fallSpeed={1500}
        autoStart
        fadeOut
      />
      <View style={styles.interactive}>
        <Text style={styles.bigText}>Congratulations!</Text>
        <Text style={styles.text}>This lesson was all about using distance to make observations about the world around you and you did amazing!</Text>
        <Text style={styles.text}>In the next lesson, we will see exactly how KNN uses distance to make observations.</Text>
        <Text style={styles.boldText}>Let’s review!</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3KNNMainIdeaVI'
          buttonColor='#8976C2'
          buttonText='Back'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3AlgorithmReview1'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText="Can't Wait!"
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
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30
  },
  boldText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 20,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 10,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
