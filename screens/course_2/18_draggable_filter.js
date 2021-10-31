import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Course2FilterDetection from '../../components/Course2FilterDetection'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/TopLessonParagraph'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'
import TopLessonParagraph from '../../components/TopLessonParagraph'

export default function Course2DraggableFilter ({ navigation }) {
  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)

  const [filterText, setFilterText] = useState('')

  const [found, setFound] = useState(false)

  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <TopLessonParagraph>Move the filter around the face to find a matching pixel pattern.</TopLessonParagraph>
      <View
        style={{ flex: 1 }} onLayout={(event) => {
          // get dimensions of container and
          const { x, y } = event.nativeEvent.layout
          setImageXOffset(x)
          setImageYOffset(y)
        }}
      >
        <Course2FilterDetection found={found} setFound={setFound} setFilterText={setFilterText} imageXOffset={imageXOffset} imageYOffset={imageYOffset} />
      </View>

      <ParagraphBox text={`${filterText}`} />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2RatingContrast' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='Course2DraggableCompleted'
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
