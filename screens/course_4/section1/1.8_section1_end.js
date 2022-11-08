// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import HomeButton from '../../../components/HomeButton'
import SectionButton from '../../../components/SectionButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4Sect1End ({ navigation }) {
  const nextSection = ScreenList.section2
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 50 }} />
        <Text style={styles.number}>9/9</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Now let's dive further into neural networks to better understand how they are able to process information!</Text>
      </View>
      <View style={styles.sectionButton}>
        <SectionButton navigation={navigation} nextSection goSection={nextSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 30,
    backgroundColor: colors.background
  },
  footerButtons: {
    marginBottom: height / 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: height / 7
  },
  number: {
    color: 'white',
    fontSize: height / 27,
    textAlign: 'right',
    marginTop: height / 60
  },
  sectionButton: {
    marginBottom: height / 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  text: {
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 27
  }
})
