import React from 'react'
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
export default function Choice({ title, style, icon, ...props }) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.button, style]}
            {...props}>
        <Text style={styles.text}>{title}</Text>{icon?icon:null}
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems:"center",
      alignSelf:'center',
      justifyContent:"center",
      backgroundColor: "#55CE8C",
      flex:1,
      flexWrap: 'wrap',
      alignItems: "center",
      borderRadius:20,
      flexDirection:'row',
      shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1
    },
})