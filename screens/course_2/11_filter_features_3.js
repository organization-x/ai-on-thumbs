// The computer scans for pixel patterns in the photo

import React from "react"
import { View, Text, Image , StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 11: Filter Features 3 Screen')

const height = Dimensions.get('window').height

export default function Course2FilterFeatures3({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The short answer:</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelpatterns.png')}/>
        <Text style={styles.secondaryText}>The computer scans for pixel patterns in the photo that best match the structure of the filter.</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2FilterFeatures2"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "Course2FilterFeatures4"
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
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: height / 30,
    fontWeight: "bold"
  }, 
  image: {
    resizeMode: 'contain',
    marginVertical : '10%',
    height : height / 3
  }
})
