import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Imagel from '../../../components/Image'
import HomeButton from '../../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 4 Screen 3: Interactive Captcha')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course4InteractiveCaptcha ({ navigation, context }) {
  const [images] = useState([require('../../../assets/bus_1.jpg'), require('../../../assets/bus_2.jpg'), require('../../../assets/bus.jpg'), require('../../../assets/car.jpg'), require('../../../assets/house.jpg'), require('../../../assets/street.jpg'), require('../../../assets/streets.jpg'), require('../../../assets/traf.jpg'), require('../../../assets/van.jpg')])
  const [pressed, setPressed] = useState([])
  const [full, setFull] = useState([])

  const verify = () => {
    let count = 0
    if (pressed.length == 0) {
      navigation.navigate('CaptchaWrong', { context })
    } else {
      for (let i = 0; i < pressed.length; i++) {
        if (pressed[i] === false || pressed[i] == null) {
          navigation.navigate('CaptchaWrong', { context })
        } else if (pressed[i] === true) {
          count += 1
          if (count === 3) {
            navigation.navigate('CaptchaRight', { context })
          }
        } else {
          navigation.navigate('CaptchaWrong', { context })
        }
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{marginTop:height/50}}/>
        <Text style={styles.number}>3/9</Text>
      </View>

      <View style={styles.interactive}>
        <Text style={styles.box}>Select all images with a{'\n'}<Text style={styles.bold}> Bus</Text>{'\n'}Click verify when done</Text>

        <View style={styles.img_container}>
          <Imagel link={images[0]} press={pressed} presser={setPressed} one ind={0} fill={full} filler={setFull} />
          <Imagel link={images[1]} press={pressed} presser={setPressed} one ind={1} fill={full} filler={setFull} />
          <Imagel link={images[2]} press={pressed} presser={setPressed} one ind={2} fill={full} filler={setFull} />
          <Imagel link={images[3]} press={pressed} presser={setPressed} one={false} ind={3} fill={full} filler={setFull} />
          <Imagel link={images[4]} press={pressed} presser={setPressed} one={false} ind={4} fill={full} filler={setFull} />
          <Imagel link={images[5]} press={pressed} presser={setPressed} one={false} ind={5} fill={full} filler={setFull} />
          <Imagel link={images[6]} press={pressed} presser={setPressed} one={false} ind={6} fill={full} filler={setFull} />
          <Imagel link={images[7]} press={pressed} presser={setPressed} one={false} ind={7} fill={full} filler={setFull} />
          <Imagel link={images[8]} press={pressed} presser={setPressed} one={false} ind={8} fill={full} filler={setFull} />

        </View>
        <Text style={styles.verify} onPress={verify}>Verify!</Text>

      </View>
      {/* <View style={styles.footerButtons} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  img_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: width - 50,
    paddingTop: height/70,
    marginHorizontal: 3,
    borderColor: '#1FBD67',
    borderWidth: 4,
    borderRadius: 10,
    height: '55%',
    marginVertical: height/20,
    paddingLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: width/15,
    paddingVertical: height/30
  },
  num: {
    fontSize: height/40,
    color: 'white',
    marginLeft: width - 90,
    marginTop: height/50,
    marginBottom: -height/50
  },
  number: {
    color: 'white',
    fontSize: height/25,
    textAlign: 'right',
    marginTop: height/100
  },
  verify: {
    backgroundColor: '#1FBD67',
    borderRadius: 20,
    paddingVertical: height/70,
    width: '75%',
    marginBottom: height/60,
    textAlign: 'center',
    fontSize: height/35,
    fontWeight: 'bold',
    color: 'white'
  },
  box: {
    backgroundColor: '#1FBD67',
    color: 'white',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: height/40,
    fontWeight: 'bold'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: height/200
  },

  bold: {
    fontSize: height/20,
    textAlign: 'center'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height/15
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: height/40,
    width: '100%',
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: '100%',
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
