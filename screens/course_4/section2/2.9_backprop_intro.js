// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4BPInteractiveIntro ({ navigation }) {
  const screenSection = ScreenList.section2
  const screenName = 'Course4BPInteractiveIntro'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>6/14</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.rectangle}>
          <Text style={styles.text}>Now let's learn about backpropagation, a key element in how neural networks learn patterns!</Text>
        </View>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: height / 5
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  sectionButton: {
    marginBottom: 160,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rectangle: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '100%',
    height: '45%',
    alignItems: 'center',
    marginBottom: height / 5,
    justifyContent: 'center',
    padding: width / 70
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: height / 25
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '4%',
    paddingBottom: 45
  }
})
