import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ParagraphBox ({ text }) {
  return (
    <View style={styles.box}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 20,
    backgroundColor: '#8378e8',
    borderRadius: 10,
    padding: 15
  },
  paragraph: {
    color: 'white',
    fontSize: 18
  }
})
