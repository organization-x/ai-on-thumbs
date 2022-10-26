// Distance is how we measure how far apart houses are.

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'

import HomeButton from '../../../components/HomeButton'
import { LinearGradient } from 'expo-linear-gradient'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')


const height = Dimensions.get('window').height

export default function Course4page2_8 ({ navigation }) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_8';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>7/14</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.secondText}>We can learn about this process by playing a matching game. But wait, this game comes with a catch! </Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.secondText}>You will not be given a chance to look at the matches prior to starting, and will have to guess randomly the first round! Are you ready to start? </Text>
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page2_7' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4page2_9' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" /> */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} /> 
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  secondText: {
    padding: 20,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 28
  },
  underlinedText: {
    textDecorationLine: 'underline', 
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height /28
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  interactive: {
    flex: 1,
    paddingTop: 5,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  boldText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: '800'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
