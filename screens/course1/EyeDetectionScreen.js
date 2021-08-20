import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import EyeDetection from '../../components/EyeDetection'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function EyeDetectionScreen ({ navigation }) {
  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)

  const [filterText, setFilterText] = useState('')

  const [found, setFound] = useState(false)

  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Detection Time</LessonHeader>
      <Tip tipText='Drag to see which face feature the filter matches with' />

      <View
        style={{ flex: 1 }} onLayout={(event) => {
          // get dimensions of container and
          const { x, y } = event.nativeEvent.layout
          setImageXOffset(x)
          setImageYOffset(y)
        }}
      >
        <EyeDetection found={found} setFound={setFound} setFilterText={setFilterText} imageXOffset={imageXOffset} imageYOffset={imageYOffset} />
      </View>

      <ParagraphBox text={`${filterText}`} />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Calculation' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='NoseDetectionScreen' buttonColor={found ? ['#32B59D', '#3AC55B'] : '#808080'} buttonText={found ? 'Continue' : 'Not Found'} />
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
