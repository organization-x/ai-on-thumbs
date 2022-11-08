// Welcome to your second lesson in facial recognition! Let’s review what we learned last time.
import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'


const height = Dimensions.get('window').height

export default function Course2Intro ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2Intro'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>1/28</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Welcome to your second lesson in facial recognition!</Text>
        <Text style={styles.secondText}>Let's review what we learned last time.</Text>
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
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  text: {
    marginTop: height / 18,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 15,
    fontWeight: 'bold'
  },
  secondText: {
    marginTop: height / 18,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: '500'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
