import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import IntImageAnim from '../../components/IntImageAnim'
import GridMCQ from '../../components/GridMCQ'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function RedComplexityScreen2 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Reducing Complexity</LessonHeader>
      <Tip tipText='How can we find the value of D?' />

      <View style={styles.interactive}>
        <Text style={styles.interactiveTitle}>Integral Image</Text>
        <IntImageAnim
          boxes={['a', 'b', 'c', 'd']}
          animate={false}
          style={styles.interactiveComponent}
        />
        <Text style={styles.interactiveCaption}>Areas: A, B, C, & D</Text>
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionTxt}>We can subtract from total area</Text>
        <Text style={styles.questionTxt}>D = A - B - C</Text>
        <Text style={[styles.questionTxt, { marginBottom: 10 }]}>Does this Work?</Text>
        <GridMCQ
          answers={['yes', 'no']}
          correctAnswer='no'
          cols={2}
          handleChoice={() => {}}
        />
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='RedComplexityScreen1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='RedComplexityScreen3' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
    backgroundColor: '#8378e8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  interactiveTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10
  },
  interactiveCaption: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'normal',
    marginVertical: 10
  },
  interactiveComponent: {
    width: '100%',
    maxHeight: 300,
    maxWidth: 800
  },
  questionBox: {
    flex: 0,
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 20
  },
  questionTxt: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
