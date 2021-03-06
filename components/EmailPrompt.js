import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, Modal, View, Dimensions } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'
import * as Sentry from 'sentry-expo'

const height = Dimensions.get('window').height

async function createUser (email) {
  const res = await fetch('https://app.ai-camp.org/sub', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(
      { email }
    )
  })

  const resText = await res.text()
  return resText
}

export default function EmailPrompt () {
  const [email, onChangeEmail] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  async function onLoginPress () {
    const res = await createUser(email)

    if (res === 'OK') {
      setModalVisible(true)
      closeModalAfterDelay()
    }
  }

  function closeModalAfterDelay () {
    setTimeout(function () {
      setModalVisible(false)
    }, 2000)
  }
  return (
    <LinearGradient colors={['#3421A6', '#6D298A']} style={styles.container}>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView source={require('../assets/stock/1818-success-animation.json')} autoPlay loop={false} />
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>You can also enter your email to get notified of new lessons.</Text>
      <View style={styles.flexRow}>
        <View style={styles.flexBig}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeEmail}
            value={email}
            placeholder='Email'
            textAlign='center'
            returnKeyType='done'
            autoCorrect={false}
            keyboardType='email-address'
            clearButtonMode='while-editing'
            textContentType='emailAddress'
            autoCompleteType='email'
            autoCapitalize='none'
            placeholderTextColor='grey'
          />
        </View>
        <View style={styles.flexSmall}>
          <TouchableOpacity
            onPress={() => { onLoginPress().catch((err) => { Sentry.Native.captureException(err) }) }}
            style={[styles.submitButton]}
            underlayColor='#fff'
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#32B59D', '#3AC55B']}
              style={styles.gradientContainer}
            >
              <Text style={styles.submitText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  flexSmall: {
    flex: 1
  },
  flexBig: {
    flex: 3
  },
  flexRow: {
    flexDirection: 'row',
    marginBottom: '2%'
  },
  container: {
    opacity: 0.57,
    borderRadius: 12
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  text: {
    fontSize: height / 35,
    color: 'white',
    textAlign: 'center',
    margin: '10%'
  },
  submitText: {
    fontSize: height / 70,
    color: 'white',
    textAlign: 'center'
  },
  gradientContainer: {
    paddingVertical: height / 40,
    paddingHorizontal: height / 60
  },
  submitButton: {
    alignSelf: 'flex-end',
    height: height / 15,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: height / 75
  },
  textInput: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: height / 15,
    borderRadius: 10,
    marginLeft: height / 75
  },
  button: {
    justifyContent: 'flex-end'
  }
})
