// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course4RWInteractiveCorrect ({ navigation }) {
  const screenSection = ScreenList.section3
  const screenName = 'Course4RWInteractiveCorrect'
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          That’s correct! Amazon’s NN would also select the soccer ball based on John’s interests
        </Text>
        {/* </View>
      <View style={styles.textContainer}> */}
        <Text style={[styles.text, { marginTop: height / 20 }]}>
          This is a simple example, but a neural network{' '}
          <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
            can do this on a much larger scale
          </Text>
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
    paddingHorizontal: width / 20,
    paddingVertical: height / 40,
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  text: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: height / 20
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
    // paddingTop: 300
  }
})
