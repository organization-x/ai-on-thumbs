import React from 'react'
import { StyleSheet, Text } from 'react-native'
//A FootPrint for little notes about the header.
export default function FootPrint({children, style}) {
  return <Text style={[styles.header, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: "#6F6F6F",
    fontWeight:"500"
  },
})
