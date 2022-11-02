// You just learned your first AI algorithm. Do you see how simple it is?

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import ConfettiCannon from 'react-native-confetti-cannon'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 2 Screen 28: Congrats')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course2Congrats ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2Congrats'
  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={100}
        origin={{ x: width / 2, y: -100 }}
        fallSpeed={1500}
        autoStart
        fadeOut
      />
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>28/28</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>Congrats!</Text>
        <Text style={styles.text}>You just learned your first AI algorithm. </Text>
        <Text style={styles.text}>Do you see how simple it is?</Text>
        <Text style={styles.boldText}>Now let’s review.</Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  pageNumber: {
    color: 'white',
    fontSize: height/25,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 22
  },
  boldText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 20,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 10,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 13,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
