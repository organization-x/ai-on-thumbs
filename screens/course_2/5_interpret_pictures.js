// Now that we know how computers interpret photos

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course2InterpretPictures ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2InterpretPictures'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>5/28</Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.textFont}>Now that we know how computers interpret photos, we will learn a popular face detection strategy.</Text>
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
  information: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: height / 24
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
    marginTop: height / 10,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 16,
    fontWeight: 'bold'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
