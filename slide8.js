import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import LessonButton from "../../components/LessonButton"

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;


export default function App ({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style={styles.lowPicture}>
        <TouchableOpacity>
          <Image 
            fadeDuration={1000}
            resizeMode={'stretch'}
            source={{
              width: screenWidth,
              height: screenHeight * 0.35,
              uri: "https://s3-alpha-sig.figma.com/img/234a/4f5e/ceea7eb66dc606c735ace5b23993d3cd?Expires=1635724800&Signature=GCrAiCVrtCeuA-J5VcFOiqxt6Zg5fqVi0JfFkX1VYy7-swUQTPVIBiBw~1GvphvUMVKbnT15YQDmfriQpiKTZ4JHwfnevnU2YiMUKJQQwfdfWYQCigbV-8d0CnISDLAK07yBRYVMTsUnd~oPjC2cGyuBaGt3hSnRzvHo5p7zcDr4FBy6WAhXA2TFXa34LpodnxxI1D8vWEzYDkTFejT5K~vS5-jVMnYOEpcbmCxiPwjA7okHxbkakv2-RrN2o1ijVn1aqfty5~jH1c57Nxtm3OGLKUcQ0TpX3XeZEKfbK7ETWA8skmv1jSy747VhPeEezPcqb6EEDs6TkVrC4OB2wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }}
          />
        </TouchableOpacity>
      </View>
    <View style = {styles.lessonContent}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>SO</Text>
        <Text style={styles.secondaryText}>if a photo is an ocean on numbers, how does a computer tell eyes from noses?</Text>
      </View>

      <View style={styles.footerButtons}> 
        <LessonButton
          navigation = {navigation}
          nextScreen = "7_pixel_patterns_1.js"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />
        <LessonButton
          navigation={navigation}
          nextScreen = "9_pixel_patterns_3.js"
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
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10
  },
  footerButtons: {
    marginBottom: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lessonContent: {
    flex : 1, 
    flexDirection: 'column',
    paddingHorizontal : 0, 
    paddingVertical : 0,
    justifyContent: "flex-start"
  },
  textSection: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: screenHeight * 0.05,
    alignItems: "center"
  },
  mainText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 120,
    fontWeight: "bold"
  },
  secondaryText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal : 0 ,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  lowPicture: {
    alignSelf: "flex-end",
    bottom: 0,
    flex: 1,
    position: "absolute"
  }
})