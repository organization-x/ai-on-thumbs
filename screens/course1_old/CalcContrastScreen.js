import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Image } from 'react-native'

import GridMCQ from '../../components/GridMCQ'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function CalcContrastScreen ({ navigation }) {
  const [paraText, setParaText] = useState('Select an answer')
  const [canContinue, setCanContinue] = useState(false)

  const { width } = Dimensions.get('window')

  let imgWidth = width - 40
  if (width < 370) {
    imgWidth = 200
  }

  const handleAnswer = ({ correct }) => {
    if (correct) {
      setParaText('Success! You are getting this!')
      setCanContinue(true)
    } else if (!canContinue) {
      setParaText('Not quite. Maybe you missed something. Try again!')
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <LessonHeader>Calculating Contrast</LessonHeader>
      <Tip tipText='Select the correct filter contrast' />

      <View style={styles.interactive}>
        <Image
          style={[styles.figure, { width: imgWidth, height: imgWidth }]}
          source={require('../../assets/calcContrastFilter.png')}
        />

        <View style={{ flex: 0, borderRadius: 10, overflow: 'hidden' }}>
          <GridMCQ
            answers={['41', '36', '-27', '45']}
            correctAnswer='41'
            cols={2}
            handleChoice={handleAnswer}
          />
        </View>
      </View>

      <ParagraphBox
        text={paraText}
      />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='HowContrastWorks' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='Calculation'
          buttonColor={
            canContinue ? ['#32B59D', '#3AC55B'] : '#d3d3d3'
          }
          actOpacity={canContinue ? 0.3 : 1}
          buttonText={canContinue ? 'Continue' : 'Not answered'}
          enabled={canContinue}
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
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  figure: {
    resizeMode: 'stretch',
    width: '100%',
    marginHorizontal: 'auto',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20
  }
})
