import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
export default function Background({children, style}) {
    return (
        <SafeAreaView style={[styles.background, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      backgroundColor: "#F3F3F3",
      alignItems:"center"
    },
})