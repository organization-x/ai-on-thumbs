import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import IntImageAnim from '../../components/IntImageAnim'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function RedComplexityScreen1 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <LessonHeader>Reducing Complexity</LessonHeader>
      <Tip tipText='We need to reduce calculations' />

      <View style={styles.interactive}>
        <Text style={styles.interactiveTitle}>Integral Image</Text>
        <IntImageAnim
          boxes={['a', 'b', 'c', 'd']}
          animate
          style={styles.interactiveComponent}
        />
        <Text style={styles.interactiveCaption}>Areas: A, B, C, & D</Text>
      </View>

      <ParagraphBox text='An integral image allow us to quickly sum the pixel values in a given area' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Calculation' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='RedComplexityScreen2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
