// User correctly selects distance.

import React from 'react'
import { View, Text, StyleSheet,  Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 6: Follow Up Correct')

const height = Dimensions.get('window').height

export default function Course4page1_7 ({ navigation }) {
  let screenSection = screen_list.section1;
  let screenName = 'Course4page1_7'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <HomeButton navigation={navigation}/>
          <Text style={styles.number}>7/8</Text>
      </View>
      <View style={styles.lessonContent}>
        <Text style={styles.secondText}>As you can see in the image, <Text style={styles.underlinedText}>NNs are made of nodes (the purple circles) </Text>
        </Text>

        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../assets/course_4/nn_layers.gif')}></Image>
        </View>

        <Text style={styles.thirdText}>Information is sent from node to node, similarly to the transmission of signals between neurons in the brain, in the form of numbers.</Text>
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
    // padding: 15,
    // marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
},
  footerButtons: {
    marginBottom: 20,
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
    padding: 15,
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
    padding: 20,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
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
