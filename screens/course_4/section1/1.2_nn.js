import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 2: Real Life Applications')
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4IntroRealLifeApplications ({ navigation }) {
  const screenSection = ScreenList.section1
  const screenName = 'Course4IntroRealLifeApplications'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>2/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Neural networks are used in many real life applications, such as in speech recognition, text generation, and image-recognition.</Text>
        <Text style={styles.text}>You may have seen neural networks in action, through self-driving cars or market predictions.</Text>
        <Text style={styles.textund}>NNs are important to learn about, so let's see how they work!</Text>
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
    backgroundColor: colors.background,
    paddingHorizontal: width / 20,
    paddingVertical: height / 25
  },
  number: {
    fontSize: height / 25,
    color: 'white',
    textAlign: 'right'
  },
  box: {
    backgroundColor: colors.primary,
    color: 'white',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: width / 20,
    paddingVertical: height / 10,
    fontSize: 50,
    textAlign: 'center'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: height / 12
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: height / 32,
    width: '100%',
    fontWeight: '600',
    lineHeight: height / 23,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: height / 32,
    width: '100%',
    fontWeight: '600',
    marginTop: height / 30,
    lineHeight: height / 23,
    textDecorationLine: 'underline'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: height / 100
  },
  footerButtons: {
    marginBottom: height / 100,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
