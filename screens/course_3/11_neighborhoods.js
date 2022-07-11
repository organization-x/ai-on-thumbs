// What neighborhood is the green house part of?

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 11: Green House Neighborhood')

const width = Dimensions.get('window').width

export default function Course3GreenHouseNeighborhood ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={{ flex: 1, marginTop: '5%' }}>
        <Text style={styles.boldText}>That's right! The black house is part of Neighborhood A.</Text>
        <Text style={styles.text}>Which neighborhood would you predict the green house is a part of?</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3FollowUpIIB' buttonColor='#8976C2' buttonText='Neighborhood A' />
        <LessonButton navigation={navigation} nextScreen='Course3FollowUpIIA' buttonColor={['#32B59D', '#3AC55B']} buttonText='Neighborhood B' />
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
  rowContainer: {
    flex: 1.5,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
    opacity: 0.8,
    marginTop: '30%'
  },
  smallText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: '10%'
  },
  cell: {
    width: width * 0.22,
    height: width * 0.22,
    marginRight: 5,
    backgroundColor: '#E6E8FB',
    borderRadius: 5
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  boldText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
    marginTop: '30%'

  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
