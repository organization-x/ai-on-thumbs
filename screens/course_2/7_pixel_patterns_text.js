import React from "react"
import { Dimensions, StyleSheet, Text, View} from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function Course2PixelPatternsText ({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          The pixel patterns for our eyes are different than the pixel patterns for our nose.
        </Text>
        <Text style={styles.main2Text}>
          But what distinctive patterns do our eyes have?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
            navigation = {navigation}
            nextScreen = "Course2OceanNumbers"
            buttonColor = "#8976C2"
            buttonText = "Back"
          />
          <LessonButton
            navigation={navigation}
            nextScreen = "Course2PixelPatternsInteractive"
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
    marginVertical: 5,
    padding: 10,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: windowHeight/22,
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
    fontSize: windowHeight/22
  }
})
