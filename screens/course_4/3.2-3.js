// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
<<<<<<< HEAD
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import LessonButton from '../../components/LessonButton'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
=======
import { StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native'
>>>>>>> nr_neural_network
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')
import HomeButton from '../../../components/HomeButton'
import colors from '../../../config/colors'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Course4page3_2_3({navigation}) {
    return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Not quite, why don't you give it another shot?
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Course4page3_2')
        }}
      >
        <View style={styles.returnButton}>
          <Text style={styles.returnText}>
            Try again
          </Text>
        </View>
      </TouchableOpacity>
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
      textAlign: 'right',
      paddingVertical: 30
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
      marginTop: 90,
    },
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      marginTop: '2%'
    },
    returnButton: {
      marginBottom: height/20,
      backgroundColor: '#0f89ce',
      height: height/10,
      width: width/1.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      alignSelf: 'center',
    },
    returnText: {
      color: 'white',
      fontSize: 35,
      textAlign: 'center',
      fontWeight: 'bold'
  }
})