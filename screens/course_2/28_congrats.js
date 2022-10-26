// You just learned your first AI algorithm. Do you see how simple it is?

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import ConfettiCannon from 'react-native-confetti-cannon'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 28: Congrats')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course2Congrats ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2Congrats';
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
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>26/26</Text>
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
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '1%'
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
