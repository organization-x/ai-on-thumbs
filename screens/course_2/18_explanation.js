import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'

export default function Course2DraggableExplanation ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <View style={{ flex: 1 }}>
        <TopLessonParagraph>How does the computer use contrast to help?</TopLessonParagraph>
        <View style={styles.image}>
          <Image
            style={{ width: 300, height: 300 }}
            source={require('../../assets/course_2/markcuban_hybrid_with_filter.png')}
          />
        </View>
        <BottomLessonParagraph> The computer adds the pixels under bright areas of the filter and subtracts the pixels under dark areas of the filter. High Contrast = Better Match</BottomLessonParagraph>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2DraggableCompleted' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='Course2ScanAll1'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Continue'
          actOpacity={1}
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
  image: {
    margin: 30
  }
})
