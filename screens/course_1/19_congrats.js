// Congrats! You just learned all about how computers see. You also learned an important insight into facial recognition!

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course1Congrats ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1Congrats'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>22/22</Text>
      </View>
      <ConfettiCannon
        count={100}
        origin={{ x: width / 2, y: -100 }}
        fallSpeed={1500}
        autoStart
        fadeOut
      />
      <View style={styles.interactive}>
        <Text style={styles.bigText}>Congrats!</Text>
        <Text style={styles.text}>You just learned all about how computers see. You also learned an important insight into facial recognition!</Text>
        <Text style={styles.boldText}>Now let’s review.</Text>
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1FaceParts2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Review' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
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
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: '500'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 14,
    fontWeight: '500'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
