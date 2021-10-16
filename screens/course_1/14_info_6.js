// R.I.P. We feel for you.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height

export default function Course1Info4 ({ navigation }) {
  return (
    <LinearGradient colors={['#370098', '#160535']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>R. I. P.</Text>
        <Text style={styles.text}>We feel for you</Text>
        <Text style={styles.smallText}>*caresses computer*</Text>
      </View>
      <View>
        <Image source={require('../../assets/course_1/computerhand.png')} resizeMode='contain' style={styles.hand} />
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info7' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    marginTop: height/16,
    textAlign: 'center',
    color: 'white',
    fontSize: height/25,
    fontWeight: 'bold'
  },
  bigText: {
    marginTop: height/8,
    textAlign: 'center',
    color: 'white',
    fontSize: height/15,
    fontWeight: 'bold'
  },
  smallText: {
    marginTop: height/30,
    textAlign: 'center',
    color: 'white',
    fontSize: height/35
  },
  hand: {
    marginBottom: height/8,
    alignSelf: 'center',
    height: (Dimensions.get('window').width/1.5)
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
