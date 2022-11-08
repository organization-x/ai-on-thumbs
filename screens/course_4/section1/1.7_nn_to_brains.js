// User correctly selects distance.

import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 7: Comparison to Brains')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course4CompToBrain ({ navigation }) {
  const screenSection = ScreenList.section1
  const screenName = 'Course4CompToBrain'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 50 }} />
        <Text style={styles.number}>8/9</Text>
      </View>
      <View style={styles.lessonContent}>
        <Text style={styles.secondText}>As you can see in the image, <Text style={styles.underlinedText}>NNs are made of nodes (the purple circles) </Text>
        </Text>

        <Image style={styles.image} source={require('../../../assets/course_4/nn_layers.gif')} />

        <Text style={styles.thirdText}>Information is sent from node to node, (similarly to the transmission of signals between neurons in the brain), in the form of numbers.</Text>
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page1_6' buttonColor='#8976C2' buttonText='Back' /> */}
        {/* <LessonButton navigation={navigation} nextScreen='Course4page1_8' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" /> */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  underlinedText: {
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 27
  },
  container: {
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 30,
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: height / 27,
    textAlign: 'right',
    marginTop: 10
  },
  footerButtons: {
    marginBottom: height / 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lessonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  mainText: {
    padding: height / 40,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 16,
    fontWeight: 'bold'
  },
  secondText: {
    padding: height / 40,
    marginVertical: height / 30,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 27
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  thirdText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30
  }
})
