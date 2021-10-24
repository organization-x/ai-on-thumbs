import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height

export default function Course1FaceFinder ({ navigation }) {
  const [numCorrectFaces, setNumCorrectFaces] = React.useState(0)
  const [disableTopLeft, setDisableTopLeft] = React.useState(false)
  const [disableTopRight, setDisableTopRight] = React.useState(false)
  const [disableBottomLeft, setDisableBottomLeft] = React.useState(false)
  const [disableBottomRight, setDisableBottomRight] = React.useState(false)
  const [sourceTopLeft, setSourceTopLeft] = React.useState(require('../../assets/course_1/treeface.png'))
  const [sourceTopRight, setSourceTopRight] = React.useState(require('../../assets/course_1/memeface.png'))
  const [sourceBottomLeft, setSourceBottomLeft] = React.useState(require('../../assets/course_1/moonface.png'))
  const [sourceBottomRight, setSourceBottomRight] = React.useState(require('../../assets/course_1/veggieface.png'))
  const [lowerScreenText, setLowerScreenText] = React.useState('There are 3 faces remaining.')

  const handlePress = (num) => {
    if (num === 0) {
      setNumCorrectFaces(numCorrectFaces + 1)
      setDisableTopLeft(true)
      setSourceTopLeft(require('../../assets/course_1/greentreeface.png'))
      setText()
    } else if (num === 1) {
      setNumCorrectFaces(numCorrectFaces + 1)
      setDisableTopRight(true)
      setSourceTopRight(require('../../assets/course_1/greenmemeface.png'))
      setText()
    } else if (num === 2) {
      setDisableBottomLeft(true)
      setSourceBottomLeft(require('../../assets/course_1/redmoonface.png'))
      if (numCorrectFaces !== 3) {
        setLowerScreenText('Not quite, even though some of us see a face on the moon :) Try a different photo!')
      }
    } else if (num === 3) {
      setNumCorrectFaces(numCorrectFaces + 1)
      setDisableBottomRight(true)
      setSourceBottomRight(require('../../assets/course_1/greenveggieface.png'))
      setText()
    }
  }

  const setText = () => {
    const facesLeft = 2 - numCorrectFaces
    if (facesLeft === 2) {
      setLowerScreenText('Good eye! There are ' + facesLeft + ' faces remaining.')
    } else if (facesLeft === 1) {
      setLowerScreenText('Nice one! There is ' + facesLeft + ' face remaining.')
    } else if (facesLeft === 0) {
      setLowerScreenText('Great job! It took you no time! But this job is a very difficult task for computers. Tap continue to learn why.')
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Text style={styles.bigText}>To show computers how facial recognition is done, tap on all the faces in the pictures below. </Text>
      <View style={{ flex: 1 }}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => handlePress(0)}
            disabled={disableTopLeft}
          >
            <Image style={styles.image} source={sourceTopLeft} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(1)} disabled={disableTopRight}>
            <Image style={styles.image} source={sourceTopRight} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => handlePress(2)} disabled={disableBottomLeft}>
            <Image style={styles.image} source={sourceBottomLeft} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(3)} disabled={disableBottomRight}>
            <Image style={styles.image} source={sourceBottomRight} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}> {lowerScreenText} </Text>
        </View>
        <View style={styles.footerButtons}>
          <LessonButton navigation={navigation} nextScreen='Course1Intro' buttonColor='#8976C2' buttonText='Back' />
          <LessonButton navigation={navigation} nextScreen='Course1HowFindFaces' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>
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
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'black',
    marginTop: '0%',
    fontSize: height / 40,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    marginBottom: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: 60,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
