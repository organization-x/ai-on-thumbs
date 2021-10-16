// Toggle the switch to shift between human vision and computer vision.

// We really need to appreciate the computer world.

import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Switch, ScrollView, Dimensions } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height

export default function Course1HumanVsComputer ({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  let src
  if (isEnabled === true) {
    src = require('../../assets/course_1/pixelizedlincoln.png')
  } else {
    src = require('../../assets/course_1/normallincoln.png')
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <ScrollView scrollEnabled={false}>
        <View style={styles.interactive}>
          <Text style={styles.text}>Toggle the switch to shift between human vision and computer vision.</Text>
        </View>

        <Image source={src} style={styles.image} resizeMode='contain' />

        <View style={styles.flexRow}>
          <View style={styles.flexLeft}>
            <Text style={styles.smallText}>Human{'\n'}Vision</Text>
          </View>
          <View style={styles.flexCenter}>
            <Switch
              trackColor='#767577'
              thumbColor='#34BF7D'
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.flexRight}>
            <Text style={styles.smallText}>Computer{'\n'}Vision</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Info5' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  flexRow: {
    marginTop: '5%',
    marginBottom: '20%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center'
  },
  flexLeft: {
    flex: 1,
    alignItems: 'center'
  },
  flexRight: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginVertical: '10%',
    height: height / 3
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold'
  },
  smallText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    textAlign: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
