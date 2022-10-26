// Since brighter pixels are higher in value, and darker pixels are lower in value

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 15: Contrast 2 Screen')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast2 ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2Contrast2';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}></Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.textFont}>Since brighter pixels are higher in value, and darker pixels are lower in value,</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelContrast1.png')} />
        <Text style={styles.textFont2}>We can find their difference to get the contrast.</Text>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  interactive: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: height / 20
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
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27
  },
  textFont2: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27
  },
  image: {
    margin: height / 22,
    resizeMode: 'contain',
    height: height / 4
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
