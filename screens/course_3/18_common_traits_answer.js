// You share your neighborhood in common with your neighbors.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 18: Common Trait Answer')

const width = Dimensions.get('window').width

export default function Course3CommonTraitAnswer ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.text}>Your neighborhood of course!</Text>
        <Text style={styles.boldText}>That's the group you belong to.</Text>
        <Image style={styles.image} source={require('../../assets/course_3/NeighborsGreeting.png')} />
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3CommonTraitQuestion' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course3KNNMainIdea' buttonColor={['#32B59D', '#3AC55B']} buttonText='Read My Mind!' />
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
    alignItems: 'center',
    marginBottom: 30
  },
  text: {
    marginTop: '30%',
    marginBottom: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    marginBottom: '5%',
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    width: width / 0.9
  }
})
