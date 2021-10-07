import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import NoseDetection from '../../components/NoseDetection'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function NoseDetectionScreen ({ navigation }) {
  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)

  const [filterText, setFilterText] = useState('')

  const [found, setFound] = useState(false)

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <LessonHeader>Detection Time</LessonHeader>
      <Tip tipText='Different filters scan for other features on the face.' />

      <View
        style={{ flex: 1 }} onLayout={(event) => {
          // get dimensions of container and
          const { x, y } = event.nativeEvent.layout
          setImageXOffset(x)
          setImageYOffset(y)
        }}
      >
        <NoseDetection found={found} setFound={setFound} setFilterText={setFilterText} imageXOffset={imageXOffset} imageYOffset={imageYOffset} />
      </View>

      <ParagraphBox text={`${filterText}`} />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='EyeDetectionScreen' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='FaceFoundScreen'
          buttonColor={found ? ['#32B59D', '#3AC55B'] : '#808080'}
          buttonText={found ? 'Continue' : 'Not Found'}
          enabled={found}
          actOpacity={found ? 0.3 : 1}
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
  }
})
