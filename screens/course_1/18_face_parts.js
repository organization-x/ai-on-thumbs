// Our faces have some unique features that stand out and make them recognizable.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'


const height = Dimensions.get('window').height

export default function Course1FaceParts ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1FaceParts'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>20/22</Text>
      </View>
      <Text style={styles.bigText}>Our faces have some unique features that stand out and make them recognizable.</Text>
      <View style={styles.interactive}>
        <Image style={styles.image} source={require('../../assets/course_1/markcubanface.png')} />
      </View>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Info9' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1FaceParts2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  image: {
    height: height / 2.75,
    width: height / 2.75,
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '25%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '28%',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '500'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
