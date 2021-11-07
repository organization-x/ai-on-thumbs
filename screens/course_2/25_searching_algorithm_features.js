// Let’s say you find something that looks like a pair of eyes on an image, where would you search for a nose?

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height

export default function Course2SearchingAlgorithmFeatures ({ navigation }) {
  const [partsLeft, setPartsLeft] = React.useState(4)
  const [currentSquare, setCurrentSquare] = React.useState(6)
  const [isVisible1, setIsVisible1] = React.useState(false)
  const [isVisible3, setIsVisible3] = React.useState(false)
  const [isVisible6, setIsVisible6] = React.useState(false)
  const [isVisible10, setIsVisible10] = React.useState(false)
  const [upperScreenText, setUpperScreenText] = React.useState("Let's say you find something that looks like a pair of eyes on an image, where would you search for a nose?")
  const [lowerScreenText, setLowerScreenText] = React.useState('Tap where you think you might find the nose on the grid until it pops up!')

  const handlePress = (square) => {
    switch (square) {
      case 1:
        if (currentSquare === 1) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another square!')
        break

      case 3:
        if (currentSquare === 3) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another square!')
        break

      case 6:
        if (currentSquare === 6) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another square!')
        break

      case 10:
        if (currentSquare === 10) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another square!')
        break

      default:
        setUpperScreenText('Not quite! Try another square!')
        break
    }
  }

  const setText = () => {
    if (partsLeft === 4) {
      setIsVisible6(true)
      setUpperScreenText("That's right, we would look below the eyes! Now, where would you search for the left ear?")
      setLowerScreenText('Tap where you think you may find the left ear on the grid until it pops up!')
      setCurrentSquare(1)
      setPartsLeft(3)
    } else if (partsLeft === 3) {
      setIsVisible1(true)
      setLowerScreenText('Great job! Now, find the other ear!')
      setCurrentSquare(3)
      setPartsLeft(2)
    } else if (partsLeft === 2) {
      setIsVisible3(true)
      setUpperScreenText("Now, we're just missing the mouth. Our face is coming together!")
      setLowerScreenText('Tap where you think you may find the mouth on the grid until it pops up!')
      setCurrentSquare(10)
      setPartsLeft(1)
    } else if (partsLeft === 1) {
      setIsVisible10(true)
      setUpperScreenText('Awesome job!!!')
      setLowerScreenText("Great find! That's a lot easier than searching every single square with every single filter, isn't it?")
      setPartsLeft(0)
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View styles={styles.lessonContent}>
        <Text style={styles.textFont}>{upperScreenText}</Text>

        <Text style={styles.textFont2}>{lowerScreenText}</Text>

        <ImageBackground source={require('../../assets/Grid.png')} resizeMode='cover' style={styles.grid}>
          <TouchableOpacity onPress={() => handlePress(1)} disabled={isVisible1} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(2)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(3)} disabled={isVisible3} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(4)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(5)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(6)} disabled={isVisible6} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(7)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(8)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(9)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(10)} disabled={isVisible10} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(11)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(12)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(13)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(14)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(15)} style={styles.box} />
          <TouchableOpacity onPress={() => handlePress(16)} style={styles.box} />
        </ImageBackground>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2ScanAll5' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2GettingHangAlgorithms' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>

      <StatusBar style='auto' />
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  lessonContent: {
    flex: 1,
    paddingHorizontal: 20,
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 30
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  textFont: {
    marginTop: height / 20,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 30,
    fontWeight: 'bold',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  textFont2: {
    height: '20%',
    color: 'black',
    textAlign: 'center',
    fontSize: height / 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / -15
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DECFBE',
    alignContent: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center'
  },

  box: {
    margin: 1,
    width: '24.3%',
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
