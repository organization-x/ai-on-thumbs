import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

// an action button that indicates action to the user
export default function ActionButton ({ title, icon, style, ...props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button, style]}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>{icon || null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#8976C2',
    width: '80%',
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 25
  }
})
