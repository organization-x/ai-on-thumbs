// Computers see pixels as a matrix of numbers. The brighter the pixel, the larger the number!

import React from 'react'
import { StyleSheet, Text, View, StatusBar } from  'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import LessonHeader from '../../components/LessonHeader'

export default function Course2Review2({navigation}) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.container}>
        <LessonHeader style={styles.header}>Facial Recognition Review</LessonHeader>
      </View>

      <View style={styles.number}>
        <Text style={styles.numberFont}>1</Text>
      </View>

      <View style={styles.information}>
        <Text style={styles.textFont}>Photos are composed of smaller parts: pixels.</Text>
      </View>

      <View styles={styles.number}>
        <Text style={styles.numberFont}>2</Text>
      </View>

      <View style={styles.information2}>
        <Text style={styles.textFont}>Computers see pixels as a matrix of numbers. The brighter the pixel, the larger the number!</Text>
      </View>
      
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2Review1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2Review3' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>

      <StatusBar style='auto' />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
  },

  header: {
    textAlign: 'center',
    marginBottom: 5,
  },

  number: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  numberFont: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    opacity: 0.5,
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 215,
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
