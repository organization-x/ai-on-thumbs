import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Course2FilterDetection from '../../components/Course2FilterDetection'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 18.1: Draggable Filter Screen')

const height = Dimensions.get('window').height

export default function Course2DraggableFilter ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2DraggableFilter';

  const [imageXOffset, setImageXOffset] = useState(0)
  const [imageYOffset, setImageYOffset] = useState(0)
  const [filterText, setFilterText] = useState('')
  const [found, setFound] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>16/</Text>
      </View>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  component: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '1%'
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
