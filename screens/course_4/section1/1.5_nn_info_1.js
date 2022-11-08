// Developers created Neural Networks to mimic how the human brain learns.

import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4NNInfo1 ({ navigation }) {
  const screenSection = ScreenList.section1
  const screenName = 'Course4NNInfo1'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>6/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>To solve this problem, developers created <Text style={styles.underlineText}>Neural Networks</Text> to <Text style={styles.underlineText}>mimic the human brain.</Text></Text>
        <View style={styles.rectangle}>
          <Image source={require('../../../assets/course_4/brain_1.5.png')} style={styles.image} />
        </View>

      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.progressButton,
    padding: 10,
    borderRadius: 12,
    height: 20,
    width: 35
  },
  container: {
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 25,
    backgroundColor: colors.background
  },
  currentButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 12,
    height: 20,
    width: 35
  },
  footerButtons: {
    marginBottom: height / 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    width: width - 50,
    resizeMode: 'contain',
    height: height / 4
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: height / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rectangle: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: width - 50,
    height: height / 3.5,
    alignItems: 'center',
    marginBottom: height / 5,
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    paddingVertical: 10
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  underlineText: {
    textDecorationLine: 'underline'
  }
})
