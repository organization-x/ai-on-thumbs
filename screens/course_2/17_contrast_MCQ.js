// Find the difference between all of the bright pixels

import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import GridMCQ from '../../components/GridMCQ'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const imageSide = width > 400 ? width / 2 : width / 1.6

export default function Course2ContrastMCQ ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2ContrastMCQ'

  const [paraText, setParaText] = useState('Select an answer')

  const handleAnswer = ({ correct }) => {
    if (correct) {
      setParaText('Nailed it!')
    } else {
      setParaText('Not quite, try again!')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>17/28</Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>Find the difference between all of the bright pixels and dark pixels, then select the correct contrast value.</Text>
        <Image style={styles.image} source={require('../../assets/course_2/contrastMCQ.png')} />
        <GridMCQ style={styles.MCQ} answers={['6', '-3', '0', '3']} correctAnswer='6' handleChoice={handleAnswer} />
        <Text style={styles.secondText}>{paraText}</Text>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
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
    marginTop: '2%'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: 3,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 31, // ~26px
    fontWeight: 'bold'
  },
  secondText: {
    color: 'white',
    fontSize: height / 37 // ~20px
  },
  image: {
    resizeMode: 'contain',
    width: imageSide,
    height: imageSide / 1.3
  },
  MCQ: {
    marginTop: height / 40,
    marginBottom: 20,
    width: width / 1.4,
    borderRadius: 10
  }
})
