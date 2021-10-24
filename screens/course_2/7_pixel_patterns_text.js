import React from "react"
import { StyleSheet, Text, SafeAreaView} from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

export default function Course2PixelPatternsText ({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <SafeAreaView style = {styles.container}> 
      <SafeAreaView style={styles.textSection}>
        <Text style={styles.mainText}>
          The pixel patterns for our eyes are different than the pixel patterns for our nose.
        </Text>
        <Text style={styles.main2Text}>
          But what distinctive patterns do our eyes have?
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.footerButtons}>
      <LessonButton
          navigation = {navigation}
          nextScreen = "8_pixel_patterns_interactive.js"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "10_filter_features_2.js"
          buttonColor = {["#32B59D", "#3AC55B"]}
          buttonText = "Continue"
        />
      </SafeAreaView>
    </SafeAreaView> 
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
    fontSize: 30,
    fontWeight: "bold"
  },
  main2Text: {
    
    marginVertical: 5,
    padding: 10,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 30
  }
})
