// Toggle the switch to shift between human vision and computer vision.

// We really need to appreciate the computer world.

import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 1 Screen 13.5: Human vs Computer 2 Screen')

export default function Course1HumanVsComputer2 ({ navigation }) {
  return (
    <LinearGradient colors={['#370098', '#160535']} style={styles.container}>
      <ScrollView scrollEnabled={false}>
        <View style={styles.interactive}>
          <Text style={styles.text}>See how different the worlds we live in are?</Text>
        </View>

        <Image resizeMode='contain' source={require('../../assets/course_1/combolincoln.png')} style={styles.image} />
        <Text style={styles.smallText}>Through examples like this, we will grow our understanding and appreciation for computers.</Text>
      </ScrollView>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info6' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  image: {
    alignSelf: 'center',
    marginVertical: '10%',
    height: (Dimensions.get('window').width / 1.5)
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
