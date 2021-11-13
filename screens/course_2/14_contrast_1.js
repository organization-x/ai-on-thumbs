// The secret ingredient is called contrast.
// Contrast is the difference between the dark pixels and the bright pixels. It helps objects pop out more!

import React from "react"
import { View, Text, Image , StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 14: Contrast 1 Screen')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast1({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The secret ingredient is called contrast.</Text>
        <Image style={styles.image} source={require('../../assets/course_2/contrastdemo.png')}/>
        <Text style={styles.secondaryText}>Contrast is the difference between the dark pixels and the bright pixels. It helps objects pop out more!</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2FilterFeatures5"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "Course2Contrast2"
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
    fontWeight: "bold"
  },
  secondaryText: {
    marginVertical: height / 30,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: height / 35,
    fontWeight : 'bold'
  }, 
  image: {
    resizeMode: 'contain',
    height : '25%',
    width : width / 1.1,
    marginVertical : '10%'
  }
})

