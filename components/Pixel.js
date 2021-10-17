import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Slider from '@react-native-community/slider'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function PixelSlider ({ setPixelValue }) {
  const [pixelColor, setPixelColor] = useState(0)

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: `rgb(${pixelColor},${pixelColor},${pixelColor})` }]}>
        <Text style={styles.number}>{Math.floor(pixelColor)}</Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#000000'
        onValueChange={value => {
          setPixelColor(value)
          setPixelValue(value)
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: '10%'
  },
  box: {
    marginBottom: height / 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width / 1.5,
    height: width / 1.5
  },
  number: {
    fontSize: 50,
    color: 'orange',
    textAlign: 'center'
  }
})
