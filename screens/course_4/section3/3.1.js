// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import colors from '../../../config/colors'
import HomeButton from '../../../components/HomeButton'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'

const height = Dimensions.get('window').height
export default function Course4RealWorldIntro ({ navigation }) {
  const screenSection = ScreenList.section3
  const screenName = 'Course4RealWorldIntro'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>1/4</Text>
      </View>
      {/* <Text style={styles.number}>1/4</Text> */}
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
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  text: {
    color: 'white',
    fontSize: height / 20,
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    marginTop: 25,
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  titleBox: {
    backgroundColor: colors.primary,
    height: 150,
    width: '95%',
    borderRadius: 15,
    marginTop: height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  footerButtons: {
    marginBottom: height / 60,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '4%'
  }
})
