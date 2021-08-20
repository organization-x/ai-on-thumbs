import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import IntImageAnim from '../../components/IntImageAnim'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function RedComplexityScreen3 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Reducing Complexity</LessonHeader>
      <Tip tipText='This approach works but...' />

      <View style={styles.interactive}>
        <Text style={styles.interactiveTitle}>Integral Image</Text>
        <IntImageAnim
          boxes={['a', 'b', 'c', 'd', 'e']}
          animate={false}
          style={styles.interactiveComponent}
        />
        <Text style={styles.interactiveCaption}>Areas: A, B, C, D, & E</Text>
      </View>

      <View style={styles.solutionBox}>
        <Text style={[styles.solutionTxt, { fontWeight: 'bold' }]}>We subtracted the overlap of B and C twice</Text>
        <Text style={styles.solutionTxt}>Right solution: D = A - B - C + E</Text>
        <Text style={[styles.solutionTxt, { marginVertical: 10 }]}>Success! We found the value of D</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='RedComplexityScreen2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='EyeDetectionScreen' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  solutionBox: {
    flex: 0,
    paddingVertical: 20
  },
  solutionTxt: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
