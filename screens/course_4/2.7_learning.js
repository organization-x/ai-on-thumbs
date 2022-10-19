// Distance is how we measure how far apart houses are.

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import LessonButton from '../../components/LessonButton'
import HomeButton from '../../components/HomeButton'
import { LinearGradient } from 'expo-linear-gradient'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')

import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

const height = Dimensions.get('window').height

export default function Course4page2_7 ({ navigation }) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_7';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>7/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.secondText}>To begin, a <Text style={styles.underlinedText}>NN randomly assigns a number for each node.</Text> It then processes an input through the hidden layers to predict an output. </Text>
        <Text style={styles.secondText}>Then, the model <Text style={styles.underlinedText}> compares its prediction to the desired answer</Text>
        </Text>
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page2_6' buttonColor='#8976C2' buttonText='Back' /> */}
        {/* <LessonButton navigation={navigation} nextScreen='Course4page2_8' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" /> */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} /> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  boldText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: '800'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
