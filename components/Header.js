import React from 'react'
import { StyleSheet, Text } from 'react-native'
//A header title for pronouced areas of the app.
export default function Header({children, style}) {
  return <Text style={[styles.header, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
    color: "black",
    fontWeight: 'bold',
  },
})