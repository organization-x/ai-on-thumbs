import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

export default function ParagraphBox ({ text }) {
  return (
    <View style={styles.box}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    backgroundColor: '#8378e8',
    borderRadius: 10,
    padding: 8
  },
  paragraph: {
    color: 'white',
    fontSize: height / 36,
    textAlign: 'center'
  }
})
