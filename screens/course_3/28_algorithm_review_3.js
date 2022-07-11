// Review 3

import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import LessonHeader from '../../components/LessonHeader'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 28: Algorithm Review 3')

const height = Dimensions.get('window').height

export default function Course3AlgorithmReview3 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.textSection}>
        <LessonHeader style={styles.header}>Algorithm Review</LessonHeader>

        <View style={styles.number}>
          <Text style={styles.numberFont}>1</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>KNN is a machine learning algorithm used for classification.</Text>
        </View>

        <View styles={styles.number}>
          <Text style={styles.numberFont}>2</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Distance is how we measure how far apart houses are.</Text>
        </View>

        <View style={styles.number}>
          <Text style={styles.numberFont}>3</Text>
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont}>Our nearest neighbors are the ones closest to us.</Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3AlgorithmReview2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course3AlgorithmReview4' buttonColor={['#32B59D', '#3AC55B']} buttonText='Next' />
      </View>

      <StatusBar style='auto' />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    textAlign: 'center',
    marginBottom: 5
  },

  number: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  numberFont: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 14,
    fontWeight: 'bold',
    opacity: 0.5
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 12
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 35
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
