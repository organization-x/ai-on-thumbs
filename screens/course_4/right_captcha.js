import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import Imagel from '../../components/Image'
import HomeButton from '../../components/HomeButton'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const images = [require('../../assets/bus_1.jpg'), require('../../assets/bus_2.jpg'), require('../../assets/bus.jpg'), require('../../assets/car.jpg'), require('../../assets/house.jpg'), require('../../assets/street.jpg'), require('../../assets/streets.jpg'), require('../../assets/traf.jpg'), require('../../assets/van.jpg')]

export default function CaptchaRight ({ navigation }) {
  const section = ScreenList.section1
  const screenName = 'Course4InteractiveCaptcha'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>4/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.box}>Awesome, you were{'\n'} able to identify{'\n'}all busses correctly!</Text>
        <View style={styles.img_container}>
          <Imagel link={images[0]} style={styles.show} />
          <Imagel link={images[1]} style={styles.show} />
          <Imagel link={images[2]} style={{ opacity: 0.3 }} />
          <Imagel link={images[3]} />
          <Imagel link={images[4]} />
          <Imagel link={images[5]} />
          <Imagel link={images[6]} />
          <Imagel link={images[7]} />
          <Imagel link={images[8]} />
        </View>
        <Text style={styles.btm}>Humans are easily able to find the buses by in this scenario by identifying their characteristics</Text>
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: height / 100
  },
  img_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: width - 50,
    paddingTop: 10,
    marginHorizontal: 3,
    borderColor: '#1FBD67',
    borderWidth: 4,
    borderRadius: 10,
    height: '50%',
    paddingLeft: 5
  },
  footerButtons: {
    marginBottom: height / 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btm: {
    color: 'white',
    fontSize: height / 37,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
    lineHeight: height / 30,
    marginTop: height / 45

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
    fontWeight: '700',
    lineHeight: 35,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: width / 20,
    paddingVertical: height / 35
  },
  number: {
    fontSize: height / 25,
    color: 'white'
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
