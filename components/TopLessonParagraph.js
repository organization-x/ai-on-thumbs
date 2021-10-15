import React from 'react'
import { StyleSheet, Text } from 'react-native'

// A header title for pronouced areas of the app.

export default function TopLessonParagraph ({ children, style }) {
  return <Text style={[styles.header, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    marginHorizontal: 20,
    lineHeight: 35
  }
})
