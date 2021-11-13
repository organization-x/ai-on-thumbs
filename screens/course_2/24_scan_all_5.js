// So, how can we scan less of the image

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 24: Scan all info 5')

const height = Dimensions.get('window').height

export default function Course2ScanAll5 ({navigation}) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.lessonContent} >
        <Text style={styles.mainText} >So, how can we scan less of the image and save our computer friends some time?</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
            navigation={navigation}
            nextScreen='Course2ScanAll4'
            buttonColor='#8976C2'
            buttonText='Back'
          />
          <LessonButton
            navigation={navigation}
            nextScreen='Course2SearchingAlgorithmFeatures'
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
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24,
    fontWeight: 'bold'
  },
})