// R.I.P. We feel for you.

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

export default function Course1Info4 ({ navigation }) {
  return (
    <LinearGradient colors={['#370098', '#160535']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>R. I. P.</Text>
        <Text style={styles.text}>We feel for you</Text>
        <Text style={styles.smallText}>*caresses computer*</Text>
      </View>
      <View>
        <Image source={require('../../assets/high-def-assets/computerhand.png')} resizeMode='contain' style={styles.hand}/>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer' buttonColor='#8976C2' buttonText='Back' />
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
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  bigText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  },
  smallText: {
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  hand: {
    marginBottom: '10%',
    alignSelf: 'center',
    height: 450
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
