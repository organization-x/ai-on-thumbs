// Ok, how about the long answer?

import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

export default function Course2FilterFeatures4({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.container}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Ok, how about the long answer?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        

        <LessonButton
          navigation = {navigation}
          nextScreen = "11_filter_features_3"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />

        <LessonButton
          navigation={navigation}
          nextScreen = "13_filter_features_5"
          buttonColor = {["#32B59D", "#3AC55B"]}
          buttonText = "Let's find out!"
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
    marginVertical: 5,
    padding: 10,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
})

