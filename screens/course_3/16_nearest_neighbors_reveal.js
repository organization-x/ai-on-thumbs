// The people that live closest to you are your nearest neighbors.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 16: Nearest Neighbors Reveal')

const width = Dimensions.get('window').width

export default function Course3NearestNeighborsReveal ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.text}>The people that live closest to you are your</Text>
        <Text style={styles.boldText}>nearest neighbors</Text>
        <Image style={styles.image} source={require('../../assets/course_3/CartoonNeighborhood.png')} />
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3FollowUpIIB' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course3CommonTraitQuestion' buttonColor={['#32B59D', '#3AC55B']} buttonText='Next' />
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
    marginTop: '20%',
    marginBottom: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 40,
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
