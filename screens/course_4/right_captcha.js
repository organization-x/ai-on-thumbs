import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import Imagel from '../../components/Image'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 4 Section 1 Screen 3A: Captcha Correct')

const width = Dimensions.get('window').width
const images = [require('../../assets/bus_1.jpg'), require('../../assets/bus_2.jpg'), require('../../assets/bus.jpg'), require('../../assets/car.jpg'), require('../../assets/house.jpg'), require('../../assets/street.jpg'), require('../../assets/streets.jpg'), require('../../assets/traf.jpg'), require('../../assets/van.jpg')]

export default function CaptchaRight ({ navigation }) {
  const section = ScreenList.section1
  const screenName = 'Course4InteractiveCaptcha'
  return (
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>See  how  you're{'\n'} able  to  identify{'\n'}what  a  bus  is!</Text>
        <View style={styles.img_container}>
          <Imagel link={images[0]} style={styles.show} />
          <Imagel link={images[1]} style={styles.show} />
          <Imagel link={images[2]} style={styles.show} />
          <Imagel link={images[3]} />
          <Imagel link={images[4]} />
          <Imagel link={images[5]} />
          <Imagel link={images[6]} />
          <Imagel link={images[7]} />
          <Imagel link={images[8]} />
        </View>
        <Text style={styles.btm}>Humans are easily able to identify buses by finding their characteristics, since we have seen them multiple times</Text>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={section} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  show: {
    opacity: 0.3
  },
  img_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: width - 50,
    paddingTop: 5,
    marginHorizontal: 3,
    borderColor: '#1FBD67',
    borderWidth: 4,
    borderRadius: 10,
    height: '55%',
    paddingLeft: 5
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btm: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center'

  },
  img: {
    width: width - 85,
    height: width - 85,
    marginBottom: 15
  },
  box: {
    backgroundColor: '#1FBD67',
    color: 'white',
    width: '95%',
    borderRadius: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  num: {
    fontSize: 28,
    color: 'white',
    marginLeft: width - 90,
    marginTop: 10,
    marginBottom: -10
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  }

})
