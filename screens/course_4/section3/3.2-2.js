// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



export default function Course4S3Correct({navigation}) {
    return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          That’s correct! Amazon’s NN would also select the soccer ball based on John’s interests
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This is a simple example, but a neural network{' '}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            can do this on a much larger scale
          </Text>
        </Text>
      </View>
      <View style={[styles.footerButtons, {marginTop: 50}]}>
<<<<<<< HEAD:screens/course_4/3.2-2.js
        <ProgressBar navigation={navigation} currentScreen={'Course4S3Intro'} section={section}  />
=======
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
>>>>>>> nr_neural_network:screens/course_4/section3/3.2-2.js
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
    number: {
      color: 'white',
      fontSize: 30,
      textAlign: 'right'
    },
    text: {
      color: 'white',
      fontSize: 35,
      textAlign: 'center'
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.8,
      alignSelf: 'center',
      marginTop: height / 30,
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
      justifyContent: 'center',
      paddingTop: 300
    }
})