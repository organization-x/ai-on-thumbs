import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4Intro ({ navigation }) {
  const screenSection = ScreenList.section1
  const screenName = 'Course4Intro'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>1/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.box}>Neural{'\n'}networks</Text>
        <Text style={styles.text}>are computer algorithms that are designed to imitate how the human brain learns.</Text>
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
    backgroundColor: colors.background,
    paddingHorizontal: width / 20,
    paddingVertical: height / 35
  },
  number: {
    color: 'white',
    textAlign: 'right',
    fontSize: height / 25
  },
  box: {
    backgroundColor: colors.primary,
    color: 'white',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: width / 20,
    paddingVertical: height / 40,
    fontSize: height / 15,
    textAlign: 'center'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height / 30
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    width: '80%',
    fontWeight: '600',
    lineHeight: height / 20,
    marginTop: height / 50
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // marginTop: height/200
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: height / 40,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
