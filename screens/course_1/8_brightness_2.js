// Now, slide the bar to change pixel value and see its brightness change!

import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import PixelSlider from '../../components/Pixel'
import LessonButton from '../../components/LessonButton'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'
import { LinearGradient } from 'expo-linear-gradient'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 1 Screen 8: Brightness 2 Screen')

const height = Dimensions.get('window').height

export default function Course1Brightness2 ({ navigation }) {
  const [pixelValue, setPixelValue] = useState(0);
  let screenSection = screen_list.course1;
  let screenName = 'Course1Brightness2';

  return (
    <View style={styles.container}>
      <TopLessonParagraph style={styles.text}>Now, slide the bar to change pixel value and see its brightness change!</TopLessonParagraph>

      <View style={{ flex: 1 }}>
        <PixelSlider setPixelValue={setPixelValue} />
      </View>

      <BottomLessonParagraph style={styles.text}>{(pixelValue >= 255) ? 'Pure Awesomeness! \n Great Job!' : '\n\n\n'}</BottomLessonParagraph>

      <View style={styles.footerButtons}>
        {/*<LessonButton navigation={navigation} nextScreen='Course1Brightness1.5' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info3' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />*/}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    marginTop: height / 20,
    fontSize: height / 35
  }
})
