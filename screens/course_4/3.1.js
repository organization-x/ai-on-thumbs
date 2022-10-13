// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4page3_1 ({navigation}) {
    let screenSection = screen_list.section3;
    let screenName = 'Course4page3_1';
    return (
    <View style={styles.container}>
      <Text style={styles.number}>1/4</Text>
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Real world example:
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Let’s see how Amazon uses a neural network in their recommendation system.
        </Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: "#202020",
    },
    number: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'right',
      paddingVertical: 30
    },
    text: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'center'
    },
    textContainer: {
      marginTop: 25,
      marginBottom: height/5.5,
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.7,
      alignSelf: 'center',
    },
    title: {
      fontFamily: "AppleSDGothicNeo-Light",
      textAlign: 'center',
      color: 'white',
      fontSize: 50,
      fontWeight: "bold"
    },
    titleBox: {
      backgroundColor: "#1fbd67",
      height: 150,
      width: "95%",
      borderRadius: 15,
      marginTop: 150,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    footerButtons: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    }
})