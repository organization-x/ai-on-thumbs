/* To implement:
1. import ProgressBar and import screen_list
2. create variables for screen section and screen name
(e.g.
    let screenSection = screen_list.section1;
    let screenName = 'Course4CaptExplain';)
3. put <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} /> */

import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../config/colors'

export default function ProgressBar ({ navigation, section, currentScreen, context, enabled = true, actOpacity = 0.3 }) {
  let buttonWidth = section.buttonWidth
  const screens = section.screens

  const progressBar = []
  let buttonColor
  let currentScreenIdx
  let firstScreenIdx
  for (let i = 0; i < screens.length; i++) {
    if (screens[i] === currentScreen) {
      currentScreenIdx = i
      break
    }
  }
  // setting first button screen
  if (currentScreenIdx < 2) {
    firstScreenIdx = 0
  } else if (currentScreenIdx > screens.length - 3) {
    firstScreenIdx = screens.length - 5
  } else {
    firstScreenIdx = currentScreenIdx - 2
  }

  for (let i = firstScreenIdx; i < firstScreenIdx + 5; i++) {
    // the first button is small when you're farther from the beginning
    if (progressBar.length === 0 && i > 0) {
      buttonWidth = 20
    } else if (progressBar.length === 4 && i < screens.length - 1) {
      buttonWidth = 20
    } else if (progressBar.length === screens.length && screens.length < 5) {
      break
    } else {
      buttonWidth = 50
    }
    // set color of each button
    if (i === currentScreenIdx) {
      buttonColor = colors.primary
    } else {
      buttonColor = colors.progressButton
    }
    // put all the buttons together
    progressBar.push(
      <TouchableOpacity
        key={i}
        onPress={() => enabled && navigation.navigate(screens[i], { context })}
        style={[styles.button, { backgroundColor: buttonColor, width: buttonWidth }]}
        activeOpacity={actOpacity}
      />)
  }

  return progressBar
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.progressButton,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 12,
    height: 20,
    width: 35
  },
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
