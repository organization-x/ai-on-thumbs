import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'

export default function Course2DraggableCompleted ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <View style={{ flex: 1 }}>
        <TopLessonParagraph>Move the filter around the face to find a matching pixel pattern.</TopLessonParagraph>
        <View style={styles.image}>
          <Image
            style={{ width: 300, height: 300 }}
            source={require('../../assets/course_2/markcuban_hybrid_with_filter.png')}
          />
        </View>
        <BottomLessonParagraph>This is a great time to celebrate with our computer, since we both can now recognize important facial features!!</BottomLessonParagraph>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2DraggableFilter' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='Course2DraggableExplanation'
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
