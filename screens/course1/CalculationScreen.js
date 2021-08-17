import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Calculation from '../../components/Calculation'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function CalculationScreen ({ navigation }) {
  const [calculations, setCalculations] = useState('')

  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)

  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Total Calculations</LessonHeader>
      <Tip tipText='Drag to see how many calculations are performed on a certain part.' />

      <View
        style={{ flex: 1 }} onLayout={(event) => {
          // get dimensions of container and
          const { x, y } = event.nativeEvent.layout
          setImageXOffset(x)
          setImageYOffset(y)
        }}
      >
        <Calculation setCalculations={setCalculations} imageXOffset={imageXOffset} imageYOffset={imageYOffset} />
      </View>

      <ParagraphBox text={`Calculations: ${calculations}. ${'\n'}As you get closer to the face, there are more calculations to make sure the section is a face`} />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='PixelScreen' buttonColor='#8976C2' buttonText='Back' />
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
