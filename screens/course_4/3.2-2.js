// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'


export default function Course4page3_2_2 ({navigation}) {
    
  let screenSection = screen_list.section3;
  let screenName = 'Course4page3_2_2';

  return (
    <View style={styles.container}>
      <Text style={styles.number}>2/4</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          That’s correct! Amazon’s NN would also select the soccer ball based on John’s interests
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This is a simple example, but a neural network{' '}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            can do this on a much larger scale
          </Text>
        </Text>
      </View>
      <View style={[styles.footerButtons, {marginTop: 50}]}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page3_2' buttonColor='#8976C2' buttonText='Back' /> */}
        {/* <LessonButton navigation={navigation} nextScreen='Course4page3_3' buttonColor='#8976C2' buttonText='Next' /> */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: colors.background,
    },
    number: {
      color: 'white',
      fontSize: 30,
      textAlign: 'right'
    },
    text: {
      color: 'white',
      fontSize: 35,
      textAlign: 'center'
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.8,
      alignSelf: 'center',
      marginTop: height / 30,
    },
    footerButtons: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    }
})