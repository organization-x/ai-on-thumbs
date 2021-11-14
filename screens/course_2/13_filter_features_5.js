// The long answer:
// Remember how computers think of pixels as a matrix of numbers?
// The computer is going to perform calculations on the pixels in the photo to understand the patterns in the photo. Let's find out how!

import React from "react"
import { View, Text, Image , StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 13: Filter Features 5 Screen')

const height = Dimensions.get('window').height

export default function Course2FilterFeatures5({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The long answer:</Text>
        <Text style={styles.secondaryText}>Remember how computers think of pixels as a matrix of numbers?</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelcalculations.png')}/>
        <Text style={styles.secondaryText}>The computer is going to perform calculations on the pixels in the photo to understand the patterns in the photo. Let's find out how!</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2FilterFeatures4"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "Course2Contrast1"
          buttonColor = {["#32B59D", "#3AC55B"]}
          buttonText = "Continue"
        />
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: height / 25,
    fontWeight: "bold",
    marginTop : height / 30,
    marginBottom : height / 30
  },
  secondaryText: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: height / 35,
    marginTop : height / 25,
    marginBottom : height / 30
  }, 
  image: {
    resizeMode: 'contain',
    width : '95%',
    height : height / 4
  }
})

