import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'

export default function PixelSlider () {
  const [pixelColor, setPixelColor] = useState(0)

  return (
    <View style={styles.container}>
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

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: '20%',
  },
  box: {
    marginBottom: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 125,
    height: 125,
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
