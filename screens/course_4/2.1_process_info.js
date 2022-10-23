// Distance is how we measure how far apart houses are.

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')
// import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4page2_1 ({ navigation }) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_1';
  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <View style={styles.rectangle}>
          <Text style={styles.text}>How NNs process info</Text>
        </View>
        <Text style={styles.secondText}>Neural networks process information by <Text style={styles.underlinedText}>first taking in a vast amount of data </Text>
        </Text>
        <Text style={styles.secondText}>They then train themselves to find patterns in the data and <Text style={styles.underlinedText}>predict outputs based on the learned patterns</Text>
        </Text>
        {/* <Text style={styles.underlinedText}> first taking in a vast amount of data </Text> */}

      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page1_7' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4page2_2' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" /> */}

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
    backgroundColor: colors.background,
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold'
  },
  secondText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24
  },
  underlinedText: {
    textDecorationLine: 'underline',
    // padding: 15,
    // marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rectangle: {
    // textAlign: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: 320,
    height: 215,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10
  }
})
