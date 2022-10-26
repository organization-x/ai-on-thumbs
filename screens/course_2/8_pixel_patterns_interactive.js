import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Switch, ScrollView, Dimensions, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 8: Pixel Patterns Interactive Screen')

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function Course2PixelPatternsInteractive ({ navigation }) {
  let screenSection = screen_list.course2;
  let screenName = 'Course2PixelPatternsInteractive';

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const [button1Pressed, button1NotPressed] = useState(false)
  const pressButton1 = () => {
    button1NotPressed(previousState => !previousState)
    if (button2Pressed === true) {
      button2NotPressed(previousState => !previousState)
    }
    if (button3Pressed === true) {
      button3NotPressed(previousState => !previousState)
    }
  }

  const [button2Pressed, button2NotPressed] = useState(false)
  const pressButton2 = () => {
    button2NotPressed(previousState => !previousState)
    if (button1Pressed === true) {
      button1NotPressed(previousState => !previousState)
    }
    if (button3Pressed === true) {
      button3NotPressed(previousState => !previousState)
    }
  }

  const [button3Pressed, button3NotPressed] = useState(false)
  const pressButton3 = () => {
    button3NotPressed(previousState => !previousState)
    if (button1Pressed === true) {
      button1NotPressed(previousState => !previousState)
    }
    if (button2Pressed === true) {
      button2NotPressed(previousState => !previousState)
    }
  }

  let lowerText
  if (button1Pressed === true) {
    lowerText = 'Of course! Our eyes have dark centers and are horizontally aligned!'
  } else if (button2Pressed === true) {
    lowerText = 'Not quite! Our eyes are not vertically aligned.'
  } else if (button3Pressed === true) {
    lowerText = 'Not quite! Unless you think our eyes look like spiders!'
  } else {
    lowerText = 'Hint: Toggle the switch to find the similarity like a computer would.'
  }

  let src
  let darkOrLightBoldStyle
  let backgroundColor
  let darkOrLightRegularStyle

  if (isEnabled === true) {
    src = require('../../assets/course_2/colorlessEyes.png')
    darkOrLightBoldStyle = styles.lightSmallBoldText
    darkOrLightRegularStyle = styles.lightSmallRegularText
    backgroundColor = ['#370098', '#160535']
  } else {
    src = require('../../assets/course_2/eyesWithColor.png')
    darkOrLightBoldStyle = styles.darkSmallBoldText
    darkOrLightRegularStyle = styles.darkSmallRegularText
    backgroundColor = ['#8976C2', '#E6E8FB']
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>6/</Text>
      </View>
      <ScrollView scrollEnabled={false}>
        <SafeAreaView style={styles.container}>

          <View style={styles.interactive}>
            <Text style={styles.headerText}>Choose the pixel pattern that you think will match what our eyes look like.</Text>
          </View>

          <View style={styles.image}>
            <Image source={src} style={styles.image} />
          </View>

          <View style={styles.allButtonArea}>
            <View style={styles.button1and3Area}>
              <View style={styles.button1Background}>
                <TouchableOpacity onPress={pressButton1}>
                  <ImageBackground source={require('../../assets/course_2/rectangleButton1.png')} style={styles.button1Background}>
                    <Image source={require('../../assets/course_2/eyeButton1.png')} style={styles.eyeButton1} />
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={styles.button3Background}>
                <TouchableOpacity onPress={pressButton3}>
                  <ImageBackground source={require('../../assets/course_2/rectangleButton3.png')} style={styles.button3Background}>
                    <Image source={require('../../assets/course_2/eyeButton3.png')} style={styles.eyeButton3} />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.button2Area}>
              <View style={styles.button2Background}>
                <TouchableOpacity onPress={pressButton2}>
                  <ImageBackground source={require('../../assets/course_2/rectangleButton2.png')} style={styles.button2Background}>
                    <Image source={require('../../assets/course_2/eyeButton2.png')} style={styles.eyeButton2} />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.interactive}>
            <Text style={darkOrLightRegularStyle}>{lowerText}</Text>
          </View>

          <View style={styles.flexRow}>
            <View style={styles.flexLeft}>
              <Text style={darkOrLightBoldStyle}>Human{'\n'}Vision</Text>
            </View>

            <View style={styles.switch}>
              <Switch
                trackColor='#767577'
                thumbColor='#34BF7D'
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />

            </View>
            <View style={styles.flexRight}>
              <Text style={darkOrLightBoldStyle}>Computer{'\n'}Vision</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

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
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  },
  interactive: {
    flex: 1,
    borderRadius: 3,
    overflow: 'hidden',
    alignItems: 'center',
    margin: 1
  },
  flexRow: {
    flex: 1,
    marginTop: '5%',
    marginBottom: '10%',
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
    flexDirection: 'column',
    alignItems: 'center',
    height: windowHeight / 5,
    resizeMode: 'contain',
    top: 0,
    marginBottom: 5,
    position: 'relative'
  },
  number: {
    color: 'white',
    fontSize: windowHeight / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '1%'
  },
  headerText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '3%',
    textAlign: 'center',
    color: 'white',
    fontSize: windowHeight / 33,
    fontWeight: 'bold'
  },
  lightSmallBoldText: {
    fontWeight: 'bold',
    fontSize: windowHeight / 42,
    color: 'white',
    textAlign: 'center'
  },
  darkSmallBoldText: {
    fontWeight: 'bold',
    fontSize: windowHeight / 42,
    color: 'white',
    textAlign: 'center'
  },
  lightSmallRegularText: {
    fontSize: windowHeight / 42,
    color: 'white',
    textAlign: 'center'
  },
  darkSmallRegularText: {
    fontSize: windowHeight / 42,
    color: 'white',
    textAlign: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button1and3Area: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  button2Area: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  allButtonArea: {
    flex: 1,
    top: -5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  eyeButton1: {
    height: windowHeight / 7.5 / 3,
    width: windowWidth / 2.75 / 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eyeButton2: {
    height: windowHeight / 3.75 / 1.35,
    width: windowWidth / 2.75 / 3.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eyeButton3: {
    height: windowHeight / 7.5 / 1.85,
    width: windowWidth / 2.75 / 1.75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button1Background: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2.6,
    height: windowHeight / 7.5
  },
  button2Background: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2.6,
    height: windowHeight / 3.75
  },
  button3Background: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2.6,
    height: windowHeight / 7.5
  },
  switch: {
    bottom: 0,
    position: 'relative',
    alignItems: 'center'
  }
})
