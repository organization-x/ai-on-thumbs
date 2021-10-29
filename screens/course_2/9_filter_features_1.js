// Turns out the patterns in our facial features are distinctive

import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Filter_features({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.container}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Turns out the patterns in our facial features are distinctive, even in the pixel world!
        </Text>
        <Text style={styles.secondText}>
          We call these special patterns "filters".
        </Text>
      </View>

      <View style={styles.footerButtons}>
        

        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2PixelPatternsInteractive"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />

        <LessonButton
          navigation={navigation}
          nextScreen = "Course2FilterFeatures2"
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
    marginTop : height / 30,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: height / 23,
    fontWeight: "bold"
  },
  secondText: {
    marginTop: height / 20,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: height / 30,
    fontWeight : 'bold'
  }
})
