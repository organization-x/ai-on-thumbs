// Notice how the more similar the brightness is,

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast3 ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2Contrast3'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>16/28</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.header}>Remember:</Text>
        <Text style={styles.textFont}>Brighter pixels are higher in value and darker pixels are lower in value.</Text>
        <Image style={styles.image} source={require('../../assets/course_2/pixelContrast2.png')} />
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
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  interactive: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  header: {
    marginTop: height / 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: height / 20,
    color: 'white',
    fontWeight: 'bold'
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

  textFont: {
    marginTop: height / 40,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27
  },

  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    height: width / 1.9,
    margin: height / 45
  },

  footerButtons: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
