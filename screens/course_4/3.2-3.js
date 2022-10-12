// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import LessonButton from '../../components/LessonButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

const width = Dimensions.get('window').width

<<<<<<< HEAD
import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

=======
<<<<<<< HEAD
export default function Course4S3Incorrect({navigation}) {
=======
>>>>>>> c20284830c30e32ca7fad8d71e0a8ce935986183
export default function Course4page3_2_3({navigation}) {
>>>>>>> nr_neural_network
    return (
    <View style={styles.container}>
      <Text style={styles.number}>2/4</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Not quite...Amazon’s NN would select the soccer ball based on John’s interests
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
        <LessonButton navigation={navigation} nextScreen='Course4page3_2' buttonColor='#8976C2' buttonText='Try Again' />
        {/* <LessonButton navigation={navigation} nextScreen='Course4S3Info' buttonColor='#8976C2' buttonText='Next' /> */}
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