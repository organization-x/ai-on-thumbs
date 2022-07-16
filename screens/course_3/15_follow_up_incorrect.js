// The user incorrectly selects friendship.

import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 15: Follow Up II (Incorrect)')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course3FollowUpIIIncorrect ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.lessonContent}>
        <Text style={styles.mainText}>Oh Snap!</Text>
        <Image style={styles.image} source={require('../../assets/course_3/NeighborsFighting.png')} />
        <Text style={styles.secondText}>The owners hate each other, so friendship can't be the answer.</Text>
        <Text style={styles.secondText}>Remember that they share neighborhoods because they're so close to each other.</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIIB'
          buttonColor='#8976C2'
          buttonText='Back'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3NearestNeighborsReveal'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Gotcha!'
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
    marginVertical: height / 15,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  secondText: {
    flex: 1,
    padding: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30
  },
  image: {
    flex: 1,
    width: width / 0.8
  }
})
