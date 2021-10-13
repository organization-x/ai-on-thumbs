// No, we don’t! But do you know why?

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'

export default function Course2ScanAll2Correct ({navigation}) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.lessonContent}>
        <Text style={styles.mainText} >No, we don't!</Text>
        <Text style={styles.secondText} >But do you know why?</Text>
        <Text style={styles.thirdText} >Let’s understand why next.</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
            navigation={navigation}
            nextScreen=''
            buttonColor='#8976C2'
            buttonText='Back'
          />
          <LessonButton
            navigation={navigation}
            nextScreen=''
            buttonColor={['#32B59D', '#3AC55B']}
            buttonText='Continue'
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
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  },
  secondText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 45
  },
  thirdText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
})