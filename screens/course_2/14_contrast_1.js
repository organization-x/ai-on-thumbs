// The secret ingredient is called contrast.
// Contrast is the difference between the dark pixels and the bright pixels. It helps objects pop out more!

import React from "react"
import { View, Text, Image , StyleSheet, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

export default function Course2Contrast1({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.lessonContent}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The secret ingredient is called contrast.</Text>
        <Image style={styles.image} source={require('../../assets/contrastdemo.png')}/>
        <Text style={styles.secondaryText}>Contrast is the difference between the dark pixels and the bright pixels. It helps objects pop out more!</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "13_filter_features_5"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "15_contrast_2.js"
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
    marginVertical: 20,
    padding: 0,
    marginHorizontal : 25,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight : 'bold'
  }, 
  image: {
    resizeMode: 'contain',
    width: '95%',
    height : '25%',
    paddingHorizontal : 0, 
    paddingVertical : 0
  }
})

