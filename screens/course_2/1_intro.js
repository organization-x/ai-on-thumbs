// Welcome to your second lesson in facial recognition! Let’s review what we learned last time.
import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 1: Intro Screen')

const height = Dimensions.get('window').height

export default function Course2Intro ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2Intro';
  return (
    <ImageBackground source={require('../../assets/stock/objectregbackground.png')} style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}></Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Welcome to your second lesson in facial recognition!</Text>
        <Text style={styles.text}>Let's review what we learned last time.</Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </ImageBackground>
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
    alignItems: 'center'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  text: {
    marginTop: height / 18,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 15,
    fontWeight: 'bold'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '1%'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
