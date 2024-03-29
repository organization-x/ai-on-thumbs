// It turns out each picture is composed by tiny color squares - pixels!

import React from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import TopLessonParagraph from '../../components/TopLessonParagraph'
import BottomLessonParagraph from '../../components/BottomLessonParagraph'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course1HowFindFaces ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1HowFindFaces'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>3/22</Text>
      </View>
      <TopLessonParagraph style={styles.text}>So how does a {'\n'} computer detect a face? </TopLessonParagraph>

      <View style={styles.zoomView}>
        <Image source={require('../../assets/course_1/markcubanface.png')} style={styles.cubanImage} resizeMode='contain' />
      </View>

      <BottomLessonParagraph style={styles.text}>To understand that, we first need to understand how a computer sees photos.</BottomLessonParagraph>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1FaceFinder' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1PinchZoom' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  zoomView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cubanImage: {
    width: (Dimensions.get('window').width / 1.5)
  },
  text: {
    color: 'white',
    fontSize: height / 30,
    fontWeight: '500'
  }
})
