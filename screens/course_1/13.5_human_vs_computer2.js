// Toggle the switch to shift between human vision and computer vision.

// We really need to appreciate the computer world.

import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height

export default function Course1HumanVsComputer2 ({ navigation }) {
  const screenSection = ScreenList.course1
  const screenName = 'Course1HumanVsComputer2'

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>15/22</Text>
      </View>
      <ScrollView scrollEnabled={false}>
        <View style={styles.interactive}>
          <Text style={styles.text}>See how different the worlds we live in are?</Text>
        </View>

        <Image resizeMode='contain' source={require('../../assets/course_1/combolincoln.png')} style={styles.image} />
        <Text style={styles.smallText}>Through examples like this, we will grow our understanding and appreciation for computers.</Text>
      </ScrollView>

      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1Info6' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
    alignSelf: 'center',
    marginVertical: '10%',
    height: (Dimensions.get('window').width / 1.75)
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '500'
  },
  smallText: {
    fontSize: height / 40,
    color: 'white',
    textAlign: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
