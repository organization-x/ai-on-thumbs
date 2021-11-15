import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 27: Searching Algorithm Mark Cuban')

const height = Dimensions.get('window').height

export default function Course2SearchingAlgorithmMark ({ navigation }) {
  const [topText, setTopText] = useState('Let’s say we find what we think are some noses in a photo.')
  const [information, setInformation] = useState('Tap all the squares where the computer should look for ears, eyes, and mouths!')
  const touchedArray = new Array(16).fill(false)
  const [numCorrect, setNumCorrect] = useState(0)
  const [touched, setTouched] = useState(touchedArray)
  const [isFinished, setIsFinished] = useState(false)

  const handlePress = (number) => {
    const updateTouched = [...touched]
    updateTouched[number] = true
    setTouched(updateTouched)
    let updateNum
    if (!isFinished) {
      if ([5, 6, 7, 8, 9, 13].includes(number)) {
        setInformation('Nailed it! Searching in the same square, or the squares right next to the nose are great bets.')
        updateNum = numCorrect
        if (updateNum + 1 === 6) {
          setTopText('Great job! Think about how much time this method will save us!')
          setInformation('We only needed to look in seven of the sixteen squares after scanning for a nose.')
          setIsFinished(true)
        }
        setNumCorrect(updateNum + 1)
      } else {
        setInformation('Not quite, try again! Where are your ears and mouth in relation to your nose?')
      }
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Text style={styles.bigText}> {topText} </Text>
      <Text style={styles.darkSmallBoldText}> {information} </Text>
      <View style={styles.grid}>
        <ImageBackground source={require('../../assets/course_2/markcuban_and_wife.png')} resizeMode='cover' style={styles.gridContainer}>
          <TouchableOpacity onPress={() => handlePress(0)} style={[styles.box, { backgroundColor: touched[0] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(1)} style={[styles.box, { backgroundColor: touched[1] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(2)} style={[styles.box, { backgroundColor: touched[2] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(3)} style={[styles.box, { backgroundColor: touched[3] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(4)} style={[styles.box, { backgroundColor: touched[4] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(5)} style={[styles.box, { backgroundColor: touched[5] ? '#32CD32' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(6)} style={[styles.box, { backgroundColor: touched[6] ? '#32CD32' : '#E5D3B3', opacity: 0.3 }]} />
          <TouchableOpacity onPress={() => handlePress(7)} style={[styles.box, { backgroundColor: touched[7] ? '#32CD32' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(8)} style={[styles.box, { backgroundColor: touched[8] ? '#32CD32' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(9)} style={[styles.box, { backgroundColor: touched[9] ? '#32CD32' : '#E5D3B3', opacity: 0.3 }]} />
          <TouchableOpacity onPress={() => handlePress(10)} style={[styles.box, { backgroundColor: touched[10] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(11)} style={[styles.box, { backgroundColor: touched[11] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(12)} style={[styles.box, { backgroundColor: touched[12] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(13)} style={[styles.box, { backgroundColor: touched[13] ? '#32CD32' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(14)} style={[styles.box, { backgroundColor: touched[14] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
          <TouchableOpacity onPress={() => handlePress(15)} style={[styles.box, { backgroundColor: touched[15] ? 'red' : '#E5D3B3', opacity: 0.75 }]} />
        </ImageBackground>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2GettingHangAlgorithms' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2Congrats' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  grid: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridContainer: {
    flex: 1,
    margin: height / 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DECFBE',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    borderColor: 'black',
    borderWidth: 7
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24,
    fontWeight: 'bold'
  },
  darkSmallBoldText: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: height / 38,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    margin: 0.5,
    width: '24.2%',
    height: '24.2%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  footerButtons: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
