import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import colors from '../../config/colors'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')

// const [redHouseDisabled, setDisableRedHouse] = React.useState(false)
// const [blueHouseDisabled, setDisableBlueHouse] = React.useState(false)
// const [lowerScreenText, setLowerScreenText] = React.useState('Select the house that is closest to the black house.')

const height = Dimensions.get('window').height

export default function Course4page2_4_correct ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.boldText}>Correct!</Text>
        <Text style={styles.secondText}>A NN with two or more layers is called a <Text styles={styles.underlinedText}>deep neural network.</Text></Text>
      </View>
  
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course4page2_4' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4page2_5' buttonColor='#8976C2' buttonText='Lets do it!' />    
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
