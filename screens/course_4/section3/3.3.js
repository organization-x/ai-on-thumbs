// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course4RealWorldExplanation ({ navigation }) {
  const screenSection = ScreenList.section3
  const screenName = 'Course4RealWorldExplanation'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>3/4</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          After looking at a user's preferences, the Neural Networks{' '}
          <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
            can start recognizing patterns to generate
          </Text>
        </Text>
        <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
          accurate predictions{' '}
        </Text>
        {/* and{' '}00k */}
        <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
          and great recommendations!
        </Text>

      </View>
      <View style={[styles.footerButtons]}>
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
    fontSize: height / 25,
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '4%'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
