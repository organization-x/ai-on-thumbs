import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'

export default function PixelSlider () {
  const [pixelColor, setPixelColor] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pixels Are Just Numbers!</Text>
      <View style={[styles.box, { backgroundColor: `rgb(${pixelColor},${pixelColor},${pixelColor})` }]}>
        <Text style={styles.number}>{Math.floor(pixelColor)}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#000000'
        onValueChange={value => setPixelColor(value)}
      />

      <Text style={styles.paragraph}>Grayscale pixel values range from 0 (black, low intensity) to 255 (white, high intensity)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue',
    padding: 8
  },
  box: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    height: 100
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontStyle: 'italic'

  },
  number: {
    fontSize: 50,
    color: 'orange',
    textAlign: 'center'
  },
  header: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 24,
    textAlign: 'center'
  }
})
