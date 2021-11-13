// But how exactly does a computer use these filters to find facial features?

import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 10: Filter Features 2 Screen')

const height = Dimensions.get('window').height

export default function Course2FilterFeatures2({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          But how exactly does a computer use these filters to find facial features?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2FilterFeatures1"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />

        <LessonButton
          navigation={navigation}
          nextScreen = "Course2FilterFeatures3"
          buttonColor = {["#32B59D", "#3AC55B"]}
          buttonText = "Let's find out!"
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
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    fontSize: height / 22,
    fontWeight: "bold"
  }
})
