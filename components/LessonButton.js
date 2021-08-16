import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function LessonButton ({ style, navigation, nextScreen, buttonText, buttonColor, enabled=true, actOpacity=0.3 }) {
  let gradColor
  // allows gradient or uniform bg colors
  // grad: ['c1', 'c2']
  // unif: 'c1'
  if (typeof buttonColor === 'string') {
    gradColor = [buttonColor, buttonColor]
  } else {
    gradColor = buttonColor
  }

  return (
    <TouchableOpacity
      onPress={() => enabled && navigation.navigate(nextScreen)}
      style={[styles.backButton, style]}
      underlayColor='#fff'
      activeOpacity={actOpacity}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={gradColor}
        style={styles.gradientContainer}
      >
        <Text style={styles.backText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  },
  gradientContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  backButton: {
    width: '47%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  backText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }

})
