// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 4 Section 3 Screen 3: Real World Example Explanation')
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


  
export default function Course4RealWorldExplanation ({navigation}) {
  let screenSection = screen_list.section3;
  let screenName = 'Course4RealWorldExplanation';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>3/4</Text>
      </View>
      
      <View style={styles.textContainer}>
          <Text style={styles.text}>
            After looking at a user's preferences, the computer{' '}
            <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
              can start recognizing patterns
            </Text>
          </Text>
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            accurate predictions{' '}
          </Text>
          {/* and{' '}00k */}
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            great recommendations!
          </Text>
            
        </View>
      <View style={[styles.footerButtons, {marginTop: 50}]}>
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
    number: {
      color: 'white',
      fontSize: 35,
      textAlign: 'right'
    },
    text: {
      color: 'white',
      fontSize: 35,
      textAlign: 'center'
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.8,
      alignSelf: 'center',
      justifyContent: 'center'
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
      paddingTop: 400
    }
})