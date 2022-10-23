// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'

import LessonButton from '../../components/LessonButton'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4S3Info ({navigation}) {
    return (
    <View style={styles.container}>
      <Text style={styles.number}>3/4</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          After looking at a user's preferences, the computer{' '}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            can start recognizing patterns
          </Text>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This allows the neural network to make{' '}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            accurate predictions{' '}
          </Text>
          and{' '}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            great recommendations
          </Text>
          !
        </Text>
      </View>
      <View style={[styles.footerButtons, {marginTop: 50}]}>
        <ProgressBar navigation={navigation} currentScreen={'Course4S3Intro'} section={section}  />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: "#202020",
    },
    number: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'right',
      paddingVertical: 30
    },
    text: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'center'
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.8,
      alignSelf: 'center',
      marginTop: 90,
    },
    footerButtons: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})