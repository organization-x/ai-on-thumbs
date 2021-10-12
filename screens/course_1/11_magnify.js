// To get the feeling of a computer when it sees a photo, use the magnifier over the photo.

import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import MagnifyGlass from '../../components/MagnifyGlass'
import LessonButton from '../../components/LessonButton'

export default function Course1Magnify ({ navigation }) {
  const smallScreen = Dimensions.get('window').height < 700

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Text style={smallScreen ? smallStyles.instructTxt : styles.instructTxt}>To get the feeling of a computer when it sees a photo, use the magnifier over the photo.</Text>

      <View style={styles.interactive}>
        <MagnifyGlass
          src={require('../../assets/course_1/normallincoln.png')}
          magSrc={require('../../assets/course_1/pixelizedlincoln.png')}
          mag={smallScreen ? 2 : 1.3}
          radius={60}
        />
      </View>
      <Text style={smallScreen ? smallStyles.captionTxt : styles.captionTxt}>Can you tell the difference between eyes and noses yet?</Text>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course1Info4' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info5' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    maxHeight: 400
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  instructTxt: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: '10%',
    color: '#fff'
  },
  captionTxt: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: '15%',
    fontWeight: '500'
  }
})

const smallStyles = StyleSheet.create({
  instructTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: '7%',
    color: '#fff'
  },
  captionTxt: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: '7%',
    fontWeight: '400'
  }
})
