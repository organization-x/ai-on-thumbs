// Find the difference between all of the bright pixels

import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import GridMCQ from '../../components/GridMCQ'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const imageSide = width / 1.4

export default function Course2ContrastMCQ ({navigation}) {
  const [paraText, setParaText] = useState('Select an answer')

  const handleAnswer = ({ correct }) => {
    if(correct) {
      setParaText('Nailed it!')
    } else {
      setParaText('Not quite, try again!')
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.textSection} >
        <Text style={styles.mainText} >Find the difference between all of the bright pixels and dark pixels, then select the correct contrast value.</Text>
        <Image style={styles.image} source={require('../../assets/course_2/contrastMCQ.png')} />
        <GridMCQ style={styles.MCQ} answers={['6', '-3', '0', '3']}  correctAnswer='6' handleChoice={handleAnswer} />
        <Text style={styles.secondText} >{paraText}</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
            navigation={navigation}
            nextScreen='Course2Contrast3'
            buttonColor='#8976C2'
            buttonText='Back'
          />
          <LessonButton
            navigation={navigation}
            nextScreen='Course2DraggableFilter'
            buttonColor={['#32B59D', '#3AC55B']}
            buttonText='Continue'
          />
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30, // ~26px
    fontWeight: 'bold'
  },
  secondText: {
    color: 'black',
    fontSize: height / 36 // ~20px
  },
  image: {
    resizeMode: 'contain',
    width: imageSide,
    height: imageSide
  },
  MCQ: {
    marginTop: 25,
    marginBottom: 15,
    width: width / 1.4,
    borderRadius: 10,
  }
})