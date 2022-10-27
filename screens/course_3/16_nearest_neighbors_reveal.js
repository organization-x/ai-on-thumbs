// The people that live closest to you are your nearest neighbors.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import colors from '../../config/colors'
import ScreenList from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 3 Screen 16: Nearest Neighbors Reveal')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course3NearestNeighborsReveal ({ navigation }) {
  const screenSection = ScreenList.course3
  const screenName = 'Course3NearestNeighborsReveal'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pagenumber}>12/21</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>The people that live closest to you are your</Text>
        <Text style={styles.boldText}>nearest neighbors</Text>
        <Image style={styles.image} source={require('../../assets/course_3/CartoonNeighborhood.png')} />
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
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '20%',
    marginBottom: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 40,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: width / 0.9
  }
})
