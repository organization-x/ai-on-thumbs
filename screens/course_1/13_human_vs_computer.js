// Toggle the switch to shift between human vision and computer vision.

// We really need to appreciate the computer world.

import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Switch, ScrollView, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course1HumanVsComputer ({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  let src
  const screenSection = ScreenList.course1
  const screenName = 'Course1HumanVsComputer'

  if (isEnabled === true) {
    src = require('../../assets/course_1/pixelizedlincoln.png')
  } else {
    src = require('../../assets/course_1/normallincoln.png')
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>14/22</Text>
      </View>
      <ScrollView scrollEnabled={false}>
        <View style={styles.interactive}>
          <Text style={styles.text}>Toggle the switch to shift between human vision and computer vision.</Text>
        </View>
        <View style={styles.flexCenter}>
          <Image source={src} style={styles.image} />
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flexLeft}>
            <Text style={styles.smallText}>Human{'\n'}Vision</Text>
          </View>
          <View style={styles.flexCenter}>
            <Switch
              trackColor='#767577'
              thumbColor='#34BF7D'
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.flexRight}>
            <Text style={styles.smallText}>Computer{'\n'}Vision</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course1Info5' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1HumanVsComputer2' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
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
  interactive: {
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  flexRow: {
    marginTop: '5%',
    marginBottom: '20%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center'
  },
  flexLeft: {
    flex: 1,
    alignItems: 'center'
  },
  flexRight: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    alignItems: 'center',
    marginVertical: '10%',
    height: height / 3,
    resizeMode: 'contain'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: '500'
  },
  smallText: {
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
