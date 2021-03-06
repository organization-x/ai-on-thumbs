import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo ({ style }) {
  return (
    <Image
      resizeMode='contain'
      source={require('../assets/stock/ai-on-thumbs-logo.png')}
      style={[styles.image, style]}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    height: '30%'
  }
})
