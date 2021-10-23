// Getting the hang of the algorithm? Let’s try one final example with two real faces!

import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

export default function Course2GettingHangAlgorithms({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.container}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Getting the hang of the algorithm?
        </Text>
        <Text style={styles.mainText}>
          Let’s try one final example with two real faces!
        </Text>
      </View>

      <View style={styles.footerButtons}>
        

        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2SearchingAlgorithmFeatures"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />

        <LessonButton
          navigation={navigation}
          nextScreen = "Course2SearchingAlgorithmMark"
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
  textSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    marginVertical: 15,
    padding: 10,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 35,
    fontWeight: "bold"
  }
})

