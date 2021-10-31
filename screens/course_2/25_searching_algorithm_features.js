// Let’s say you find something that looks like a pair of eyes on an image, where would you search for a nose?

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

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

      case 0:
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
      <View style={styles.container}>

        <View style={styles.information}>
          <Text style={styles.textFont}>{upperScreenText}</Text>
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont2}>{lowerScreenText}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => handlePress(0)}>
            <Image style={styles.grid} source={require('../../assets/Grid.png')} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handlePress(10)} disabled={isVisible10}>
            {isVisible10 ? (
              <Image style={styles.mouth} source={require('../../assets/Mouth.png')} />
            ) : <Image style={styles.mouth2} source={require('../../assets/Mouth.png')} />}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handlePress(3)} disabled={isVisible3}>
            {isVisible3 ? (
              <Image style={styles.rightEar} source={require('../../assets/rightEar.png')} />
            ) : <Image style={styles.rightEar2} source={require('../../assets/rightEar.png')} />}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handlePress(1)} disabled={isVisible1}>
            {isVisible1 ? (
              <Image style={styles.leftEar} source={require('../../assets/leftEar.png')} />
            ) : <Image style={styles.leftEar2} source={require('../../assets/leftEar.png')} />}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handlePress(6)} disabled={isVisible6}>
            {isVisible6 ? (
              <Image style={styles.nose} source={require('../../assets/Nose.png')} />
            ) : <Image style={styles.nose2} source={require('../../assets/Nose.png')} />}
          </TouchableOpacity>
        </View>

        <View style={styles.footerButtons}>
          <LessonButton navigation={navigation} nextScreen='Course2ScanAll5' buttonColor='#8976C2' buttonText='Back' />
          <LessonButton navigation={navigation} nextScreen='Course2GettingHangAlgorithms' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>

        <StatusBar style='auto' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    zIndex: 1
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
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  textFont2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30
  },

  grid: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 1.2,
    height: width / 1.2,
    position: 'absolute',
    zIndex: 2
  },

  nose: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    position: 'absolute',
    marginLeft: 90,
    marginTop: 95,
    zIndex: 3
  },

  nose2: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    position: 'absolute',
    marginLeft: 90,
    marginTop: 95,
    opacity: 0,
    zIndex: 3
  },

  leftEar: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    zIndex: 4
  },

  leftEar2: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    opacity: 0,
    zIndex: 4
  },

  rightEar: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    marginLeft: 175,
    marginTop: 10,
    position: 'absolute',
    zIndex: 5
  },

  rightEar2: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    marginLeft: 175,
    marginTop: 10,
    position: 'absolute',
    opacity: 0,
    zIndex: 5
  },

  mouth: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    marginLeft: 92,
    marginTop: 175,
    position: 'absolute',
    zIndex: 6
  },

  mouth2: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 8,
    height: width / 8,
    marginLeft: 92,
    marginTop: 175,
    position: 'absolute',
    opacity: 0,
    zIndex: 6
  },

  footerButtons: {
    marginTop: height / 2,
    marginBottom: height / 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
