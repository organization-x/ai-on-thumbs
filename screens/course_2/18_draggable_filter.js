import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Course2FilterDetection from '../../components/Course2FilterDetection'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 18.1: Draggable Filter Screen')

const height = Dimensions.get('window').height

export default function Course2DraggableFilter ({ navigation }) {
  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)
  const [filterText, setFilterText] = useState('')
  const [found, setFound] = useState(false)

  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <Text style={styles.topText}>Drag and release the filter around the face to find a matching pixel pattern.</Text>
      <View
        style={styles.component} onLayout={(event) => {
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
        <LessonButton navigation={navigation} nextScreen='Course2ContrastMCQ' buttonColor='#8976C2' buttonText='Back' />
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
  component: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  topText: {
    marginTop: height / 20,
    padding: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold',
    marginBottom: height / 25
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
