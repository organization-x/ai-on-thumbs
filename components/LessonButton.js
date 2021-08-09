import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function LessonButton ({ navigation, nextScreen, buttonText, buttonColor }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(nextScreen)}
      style={[styles.backButton, { backgroundColor: buttonColor }]}
      underlayColor='#fff'
    >
      <Text style={styles.backText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  },

  backButton: {
    marginHorizontal: 20,
    width: '40%',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  backText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }

})
