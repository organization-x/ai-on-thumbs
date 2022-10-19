// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'

import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


  
export default function Course4page3_3 ({navigation}) {
  let screenSection = screen_list.section3;
  let screenName = 'Course4page3_3';
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
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            accurate predictions{' '}
          </Text>
          {/* and{' '}00k */}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            great recommendations!
          </Text>
            
        </View>
      
      
      <View style={[styles.footerButtons, {marginTop: 50}]}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page3_2_2' buttonColor='#8976C2' buttonText='Back' />  */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} /> 
        {/*need to figure out how to access variable determining if the user answered correctly or incorrectly*/}

        {/* <LessonButton navigation={navigation} nextScreen='Course4page3_4' buttonColor='#8976C2' buttonText='Next' /> */}
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
      fontSize: 35,
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
      justifyContent: 'center'
    },
    footerButtons: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center'
<<<<<<< HEAD
    }
=======
    },
>>>>>>> nr_neural_network
})