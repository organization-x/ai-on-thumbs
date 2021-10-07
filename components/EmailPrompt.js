import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Shadow } from 'react-native-shadow-2'

export default function EmailPrompt () {
  function logEmail (email) {
    console.log(email)
  }
  const [text, setText] = useState('')
  return (
    <Shadow distance={4} offset={[2, 2]}>
      <LinearGradient colors={['#3421A6', '#6D298A']} style={styles.container}>
        <Text style={styles.text}>You can also enter your email to get notified of new lessons.</Text>
        <TextInput
          onSubmitEditing={logEmail(text)}
          onChangeText={text => setText(text)}
          defaultValue={text}
          textAlign='center'
          returnKeyType='done'
          autoCorrect={false}
          keyboardType='email-address'
          clearButtonMode='while-editing'
          textContentType='emailAddress'
          autoCompleteType='email'
          autoCapitalize='none'
          style={styles.textInput}
          placeholder='Your email goes here'
          placeholderTextColor='grey'
        />
      </LinearGradient>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.57,
    borderRadius: 12
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    margin: '10%'
  },
  textInput: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10
  }
})
