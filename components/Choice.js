import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Choice ({ title, style, icon, ...props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>{icon || null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#55CE8C',
    marginBottom: 10,
    marginHorizontal: 3,
    minWidth: '45%',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1
  }
})
