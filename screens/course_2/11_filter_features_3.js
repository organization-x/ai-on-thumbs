// The computer scans for pixel patterns in the photo that best matches the structure of the filter.

import React from "react"
import { View, Text, Image , StyleSheet, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

export default function Course2FilterFeatures3({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.lessonContent}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>The short answer:</Text>
        <Image style={styles.image} source={require('../../assets/pixelpatterns.png')}/>
        <Text style={styles.secondaryText}>The computer scans for pixel patterns in the photo that best matches the structure of the filter.</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "10_filter_features_2"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "12_filter_features_4"
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
    marginVertical: 5,
    padding: 15,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  secondaryText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  }, 
  image: {
    resizeMode: 'contain',
    width: '100%',
    height : '50%',
    paddingHorizontal : 0, 
    paddingVertical : 0
  }
})

