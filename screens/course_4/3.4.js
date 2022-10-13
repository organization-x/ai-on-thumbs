// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4page3_4 ({navigation}) {
    let screenSection = screen_list.section3;
    let screenName = 'Course4page3_4';
    return (
    <View style={styles.container}>
      <Text style={styles.number}>4/4</Text>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {marginTop: 100}]}>Congrats!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>You've now completed a brief introduction to neural networks</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Courses')
        }}
      >
        <View style={styles.returnButton}>
          <Text style={styles.returnText}>
            Return home
          </Text>
        </View>
      </TouchableOpacity>
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
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.8,
      alignSelf: 'center',
      marginTop: 30,
    },
    title: {
      fontFamily: "AppleSDGothicNeo-Light",
      textAlign: 'center',
      color: 'white',
      fontSize: 50,
      fontWeight: "bold"
    },
    returnButton: {
      marginTop: 150,
      backgroundColor: '#0f89ce',
      height: height/10,
      width: width/1.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      alignSelf: 'center',
      marginBottom: height/6,
    },
    returnText: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})