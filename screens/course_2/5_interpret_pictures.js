// Now that we know how computers interpret photos

import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 5: Interpret Pictures Screen')

const height = Dimensions.get('window').height

export default function Course2InterpretPictures ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2InterpretPictures';
  return (
    <ImageBackground source={require('../../assets/stock/objectregbackground.png')} style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}></Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.textFont}>Now that we know how computers interpret photos, we will learn a popular face detection strategy.</Text>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  information: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: height / 24
  },

  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '1%'
  },

  textFont: {
    marginTop: height / 10,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 16,
    fontWeight: 'bold'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
