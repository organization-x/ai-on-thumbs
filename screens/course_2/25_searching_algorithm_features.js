// Let’s say you find something that looks like a pair of eyes on an image, where would you search for a nose?

import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 2 Screen 25: Searching Algorithm Features')

const height = Dimensions.get('window').height

export default function Course2SearchingAlgorithmFeatures ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2SearchingAlgorithmFeatures'

  let updateOpacities = []
  const [partsLeft, setPartsLeft] = React.useState(4)
  const [currentSquare, setCurrentSquare] = React.useState(6)
  const [isVisible1, setIsVisible1] = React.useState(false)
  const [isVisible3, setIsVisible3] = React.useState(false)
  const [isVisible6, setIsVisible6] = React.useState(false)
  const [isVisible10, setIsVisible10] = React.useState(false)
  const [upperScreenText, setUpperScreenText] = React.useState("Let's say you find something that looks like a pair of eyes on an image, where would you search for a nose?")
  const [lowerScreenText, setLowerScreenText] = React.useState('Tap where you think the nose on the grid is!')
  const backgroundColor = '#D9D9D9'
  const [opacities, setOpacities] = React.useState([1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

  const grid = []
  const disableMap = { 1: isVisible1, 3: isVisible3, 6: isVisible6, 10: isVisible10 }

  for (let i = 0; i < 16; i++) {
    if ([0, 2, 5, 9].includes(i)) {
      grid.push(<TouchableOpacity key={`grid${i}`} activeOpacity={1} disabled={disableMap[i + 1]} onPress={() => handlePress(i + 1)} style={[styles.box, { backgroundColor }, { opacity: opacities[i] }]} />)
    } else {
      grid.push(<TouchableOpacity key={`grid${i}`} activeOpacity={1} onPress={() => handlePress(i + 1)} style={[styles.box, { backgroundColor }, { opacity: opacities[i] }]} />)
    }
  }

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
      updateOpacities = opacities
      updateOpacities[5] = 0
      setOpacities(updateOpacities)
      setUpperScreenText("That's right, we would look below the eyes! Now, where would you search for the left ear?")
      setLowerScreenText('Tap where you think the left ear on the grid is!')
      setCurrentSquare(1)
      setPartsLeft(3)
    } else if (partsLeft === 3) {
      setIsVisible1(true)
      updateOpacities = opacities
      updateOpacities[0] = 0
      setOpacities(updateOpacities)
      setLowerScreenText('Great job! Now, find the other ear!')
      setCurrentSquare(3)
      setPartsLeft(2)
    } else if (partsLeft === 2) {
      setIsVisible3(true)
      updateOpacities = opacities
      updateOpacities[2] = 0
      setOpacities(updateOpacities)
      setUpperScreenText("Now, we're just missing the mouth. Our face is coming together!")
      setLowerScreenText('Tap where you think the mouth on the grid is!')
      setCurrentSquare(10)
      setPartsLeft(1)
    } else if (partsLeft === 1) {
      setIsVisible10(true)
      updateOpacities = opacities
      updateOpacities[9] = 0
      setOpacities(updateOpacities)
      setUpperScreenText("Great find! That's a lot easier than searching every single square with every single filter, isn't it?")
      setLowerScreenText('')
      setPartsLeft(0)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pagenumber}>23/26</Text>
      </View>
      <View style={styles.lessonContent}>
        <Text style={styles.textFont}>{upperScreenText}</Text>

        <Text style={styles.textFont2}>{lowerScreenText}</Text>
      </View>

      <View style={styles.interactive}>
        <ImageBackground source={require('../../assets/course_2/Grid.png')} resizeMode='cover' style={styles.grid}>
          {grid}
        </ImageBackground>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

      <StatusBar style='auto' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  lessonContent: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: height / 18
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFont: {
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textFont2: {
    color: 'white',
    fontSize: height / 40,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: height / 40
  },
  interactive: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    flex: 1,
    margin: height / 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DECFBE',
    alignContent: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    borderColor: 'black',
    borderWidth: 7
  },
  box: {
    margin: 0.5,
    width: '24.3%',
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '1%'
  }
})
