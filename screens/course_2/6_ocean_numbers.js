import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 6: Ocean Numbers Screen')

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export default function App ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.lowPicture}>
        <TouchableOpacity>
          <Image
            fadeDuration={1000}
            resizeMode='cover'
            source={require('../../assets/course_2/greenWater.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lessonContent}>
        <View style={styles.textSection}>
          <Text style={styles.mainText}>SO</Text>
          <Text style={styles.secondaryText}>If a photo is an ocean on numbers, how does a computer tell eyes from noses?</Text>
        </View>

        <View style={styles.footerButtons}>
          <LessonButton
            navigation={navigation}
            nextScreen='Course2InterpretPictures'
            buttonColor='#8976C2'
            buttonText='Back'
          />
          <LessonButton
            navigation={navigation}
            nextScreen='Course2PixelPatternsText'
            buttonColor={['#32B59D', '#3AC55B']}
            buttonText='Continue'
          />
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lessonContent: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'flex-start'
  },
  textSection: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: screenHeight * 0.05,
    alignItems: 'center'
  },
  mainText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: screenHeight * 0.2
  },
  secondaryText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: screenHeight * 0.04,
    fontWeight: 'bold'
  },
  lowPicture: {
    alignSelf: 'flex-start',
    bottom: 0,
    flex: 1,
    position: 'absolute',
    width: screenWidth,
    height: screenHeight * 0.4
  }
})
