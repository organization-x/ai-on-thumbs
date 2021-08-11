import React from 'react'
import { StyleSheet, Text } from 'react-native'

// A header title for pronouced areas of the app.

export default function LessonHeader ({ children, style }) {
  return <Text style={[styles.header, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  }
})
