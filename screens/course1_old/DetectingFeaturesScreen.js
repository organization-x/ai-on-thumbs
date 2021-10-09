import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DetectingFeatures from '../../components/DetectingFeatures'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function EyeDetectionScreen ({ navigation }) {
  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)

  const [similarity, setSimilarity] = useState('Current Similarity Match: 1')

  const [found, setFound] = useState(false)

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <LessonHeader>Detecting Features</LessonHeader>
      <Tip tipText={found ? 'Notice where the filter activates' : 'Move filter to increase the score.'} />

      <View
        style={{ flex: 1 }} onLayout={(event) => {
          // get dimensions of container and
          const { x, y } = event.nativeEvent.layout
          setImageXOffset(x)
          setImageYOffset(y)
        }}
      >
        <DetectingFeatures found={found} setFound={setFound} setSimilarity={setSimilarity} imageXOffset={imageXOffset} imageYOffset={imageYOffset} />
      </View>

      <ParagraphBox text={`${similarity}`} />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='FaceDetectionBasics' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='HowContrastWorks'
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
