import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

//an action button that indicates action to the user
export default function ActionButton({ title, icon, style, ...props }) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.button, style]}
      {...props}>
        {icon?icon:null}<Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#1FBD67",
    width:"95%",
    paddingVertical:25,
    borderRadius:20,
    shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOpacity: 1
  },
  text: {
    fontWeight: '600',
    fontSize: 30,
  },
  
})