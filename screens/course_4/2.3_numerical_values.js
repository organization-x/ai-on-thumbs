// Distance is how we measure how far apart houses are.

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import LessonButton from '../../components/LessonButton'

import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')

const height = Dimensions.get('window').height

export default function Course4page2_3 ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
      <Text style={styles.boldText}></Text>
        <Text style={styles.secondText}>Since computers can't understand words or images, <Text style={styles.underlinedText}>they represent these inputs with numerical values</Text> 
        </Text>
        <Text style={styles.secondText}>These numerical values change with multiple <Text style={styles.underlinedText}>calculations in the hidden layer(s),</Text> resulting in the predicted output from the output layer
        </Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course4page2_2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4page2_4' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" />
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
    alignItems: 'center'
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
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
