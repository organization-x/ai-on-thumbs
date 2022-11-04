// Now, tap the pixel that has the largest value!

import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 1 Screen 7: Brightness 1.5 Screen')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course1Brightness1Point5 ({ navigation }) {
  const [text, changeText] = useState(null)
  const screenSection = ScreenList.course1
  const screenName = 'Course1Brightness1.5'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>8/22</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.biggestText}>Now, tap the pixel that has the largest value!</Text>
        <View style={styles.flexRow}>
          <Pressable onPress={() => changeText('Not quite :(')}>
            <Image style={styles.image} source={require('../../assets/course_1/000000square.png')} resizeMode='contain' />
          </Pressable>

          <Pressable onPress={() => changeText('Not quite :(')}>
            <Image style={styles.image} source={require('../../assets/course_1/4D4D4Dsquare.png')} resizeMode='contain' />
          </Pressable>

          <Pressable onPress={() => changeText('Perfect!')}>
            <Image style={styles.image} source={require('../../assets/course_1/FFFFFFsquare.png')} resizeMode='contain' />
          </Pressable>
        </View>
        <Text style={styles.smallText}>{text}</Text>

        {text
          ? (
            <Text style={styles.smallestText}>The brighter the pixel is, the bigger the value!</Text>
            )
          : (
              null
            )}

      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Brightness1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Brightness2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  smallText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: '500',
    marginTop: '20%'
  },
  smallestText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35,
    fontWeight: '500',
    marginTop: '15%'
  },
  biggestText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: '500'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: '30%'
  },
  image: {
    width: width / 3.5
  }
})
