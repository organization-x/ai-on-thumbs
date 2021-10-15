import React from 'react'
import { StyleSheet, Text } from 'react-native'

// A header title for pronouced areas of the app.

export default function BottomLessonParagraph ({ children, style }) {
  return <Text style={[styles.header, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 60,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    marginHorizontal: 20
  }
})
