import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions  } from 'react-native'
import { GestureHandler } from 'expo'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

export default function Course4_second ({ navigation}) {
  const name = 'Course4_second'
  const section=screen_list.section1
  return (
    // <GestureHandler renderLeftActions={LeftActions}>
      <View style={styles.container}>
        <Text style={styles.num}>2/8</Text>
        <View style={styles.interactive}>
          <Text style={styles.text}>Neural networks are used in many real life applications, such as in speech recognition, text generation, and image-recognition.</Text>
          <Text style={styles.text}>You may have seen neural networks in action, through self-driving cars or market predictions.</Text>
          <Text style={styles.textund}>NNs are important to learn about, so let's see how they work!</Text>
        </View>
        <View style={styles.footerButtons}>
          <ProgressBar navigation={navigation} currentScreen={name} section={section}  />
        </View>
      </View>
    // </GestureHandler>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#202020",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  num: {
    fontSize: 28,
    color: "white",
    marginLeft: 300,
    marginTop: 10
  },

  box: {
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 45,
    textAlign: 'center'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

