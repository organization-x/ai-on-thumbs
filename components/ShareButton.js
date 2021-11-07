import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as Sharing from 'expo-sharing'; 
import * as FileSystem from 'expo-file-system'

export default function ShareButton ({ style, filename, objectToShare, buttonText, buttonColor, enabled = true, actOpacity = 0.3 }) {
 
  let gradColor
  // allows gradient or uniform bg colors
  // grad: ['c1', 'c2']
  // unif: 'c1'
  if (typeof buttonColor === 'string') {
    gradColor = [buttonColor, buttonColor]
  } else {
    gradColor = buttonColor
  }

  const shareData = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    try{
      let name = filename;
      let filepath = `${FileSystem.documentDirectory}/${name}`;;
      await FileSystem.writeAsStringAsync(filepath, objectToShare, {encoding: 'base64'});
      await Sharing.shareAsync(filepath, { mimeType: 'image/png' })
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <TouchableOpacity
      onPress={shareData}
      style={[styles.backButton, style]}
      underlayColor='#fff'
      activeOpacity={actOpacity}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={gradColor}
        style={styles.gradientContainer}
      >
        <Text style={styles.backText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  },
  gradientContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  backButton: {
    width: '47%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  backText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }

})
