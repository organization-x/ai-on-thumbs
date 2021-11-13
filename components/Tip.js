import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Tip ({ tipText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tip}>
        Tip
        {// <Image source={require('../assets/lightbulb.png')} style={{ width: 20, height: 20 }} />
        }

      </Text>
      <Text style={styles.explanation}>
        {tipText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
    backgroundColor: '#6357C9',
    borderRadius: 15,
    padding: 15
  },
  explanation: {
    color: 'white',
    fontSize: 18,
    marginTop: 10
  },
  tip: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
