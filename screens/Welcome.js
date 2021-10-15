import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import * as SecureStore from 'expo-secure-store'
import * as Sentry from 'sentry-expo'

export default function Welcome ({ navigation }) {
  let next
  const [isFirstLaunch, setFirstLaunch] = useState(true)

  async function firstLaunchCheck () {
    SecureStore.getItemAsync('hasSeenThumbs').then(value => {
      if (value !== 'true') {
        SecureStore.setItemAsync('hasSeenThumbs', 'true')
        setFirstLaunch(false)
      } 
    }).catch((err) => { Sentry.captureException(err) })
  }
  
  firstLaunchCheck()

  if (!isFirstLaunch) {
    next = 'Courses'
  } else if (isFirstLaunch) {
    next = 'Thumbs'
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('../assets/stock/ai-on-thumbs-logo.png')} />
      <Text style={styles.text}>If you have thumbs,{'\n'}you can learn AI.</Text>

      <View style={styles.buttonView}>

        <LessonButton
          navigation={navigation}
          nextScreen={next}
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Get Started'
          style={styles.welcomeBtn}
        />

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 140,
    marginTop: 70
  },
  text: {
    marginTop: '20%',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: 'white',
    textAlign: 'center'
  },
  buttonView: {
    marginTop: 150
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1
  },
  welcomeBtn: {
    width: 150
  }
})
