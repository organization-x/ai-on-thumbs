import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 6: Ocean Numbers Screen')

const height = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export default function App ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2OceanNumbers'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>6/28</Text>
      </View>
      <View style={styles.lowPicture}>
        <TouchableOpacity>
          <Image
            fadeDuration={1000}
            resizeMode='cover'
            source={require('../../assets/course_2/greenWater.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lessonContent}>
        <View style={styles.textSection}>
          <Text style={styles.mainText}>SO</Text>
          <Text style={styles.secondaryText}>If a photo is an ocean on numbers, how does a computer tell eyes from noses?</Text>
        </View>

        <View style={styles.footerButtons}>
          <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lessonContent: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'flex-start'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  textSection: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: height * 0.05,
    alignItems: 'center'
  },
  mainText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height * 0.2
  },
  secondaryText: {
    marginVertical: 0,
    padding: 0,
    marginHorizontal: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height * 0.04,
    fontWeight: 'bold'
  },
  lowPicture: {
    alignSelf: 'flex-start',
    bottom: 0,
    flex: 1,
    position: 'absolute',
    width: screenWidth,
    height: height * 0.4
  }
})
