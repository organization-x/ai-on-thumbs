// The long answer:
// Remember how computers think of pixels as a matrix of numbers?
// The computer is going to perform calculations on the pixels in the photo to understand the patterns in the photo. Let's find out how!

import React from "react"
import { View, Text, Image , StyleSheet, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

export default function Course2FilterFeatures5({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.lessonContent}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The long answer:</Text>
        <Text style={styles.secondaryText}>Remember how computers think of pixels as a matrix of numbers?</Text>
        <Image style={styles.image} source={require('../../assets/pixelcalculations.png')}/>
        <Text style={styles.secondaryText}>The computer is going to perform calculations on the pixels in the photo to understand the patterns in the photo. Let's find out how!</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "12_filter_features_4"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "14_contrast_1.js"
          buttonColor = {["#32B59D", "#3AC55B"]}
          buttonText = "Continue"
        />
      </View>
    </View> 
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lessonContent: {
    flex : 1, 
    paddingHorizontal : 10 , 
    paddingVertical : 15
  },
  textSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    marginVertical: 15,
    padding: 15,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 33,
    fontWeight: "bold"
  },
  secondaryText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal : 5,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 23,
  }, 
  image: {
    resizeMode: 'contain',
    width: '80%',
    height : '25%',
    paddingHorizontal : 0, 
    paddingVertical : 0
  }
})

