import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal, Dimensions } from 'react-native'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import * as SecureStore from 'expo-secure-store'
import * as Sentry from 'sentry-expo'

const height = Dimensions.get('window').height

export default function Welcome ({ navigation }) {
  const [next, setNext] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  function displayModal (show) {
    setModalVisible(show)
  }

  useEffect(() => {
    SecureStore.getItemAsync('hasSeenThumbs').then(value => {
      if (value !== 'true') {
        SecureStore.setItemAsync('hasSeenThumbs', 'true')
        setNext('Courses')
      } else {
        setNext('Thumbs')
      }
    }).catch((err) => {
      Sentry.captureException(err)
      setNext('Courses')
    })
  }, [])

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
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
            <Text style={styles.modalBigText}> Lesson 1 Credits! </Text>
            <Text style={styles.modalBoldText}> Axel Mora (19) </Text>
            <Text style={styles.modalText}> Design Lead </Text>
            <Text style={styles.modalBoldText}> Alexander Zhou (17) </Text>
            <Text style={styles.modalText}> Engineer </Text>
            <Text style={styles.modalBoldText}> Rohan Joshi (14) </Text>
            <Text style={styles.modalText}> Engineer </Text>
            <Text style={styles.modalBoldText}> Jackson Choyce (19)</Text>
            <Text style={styles.modalText}> Engineering Manager </Text>
            <Text style={styles.modalBoldText}> Mitch Cutts (23) </Text>
            <Text style={styles.modalText}> Product Manager </Text>
            <Text style={styles.closeText}
              onPress={ () => {
              setModalVisible(!modalVisible) }}
            > Close </Text>
          </View>
        </View>
        </Modal>

      <TouchableOpacity onPress={() => {displayModal(true);}}>
      <Image style={styles.logo} resizeMode='contain' source={require('../assets/stock/ai-on-thumbs-logo.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>If you have thumbs,{'\n'}you can learn AI.</Text>

      <View style={styles.buttonView}>

        <LessonButton
          navigation={navigation}
          nextScreen={next}
          buttonColor={next ? ['#32B59D', '#3AC55B'] : '#808080'}
          buttonText={next ? 'Get Started' : 'Loading...'}
          enabled={next}
          actOpacity={next ? 0.3 : 1}
          style={styles.welcomeBtn}
        />

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 140,
    marginTop: 70
  },
  text: {
    marginTop: '20%',
    fontSize: height / 25,
    fontFamily: 'Avenir',
    color: 'white',
    textAlign: 'center'
  },
  modalBigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'Avenir',
    marginTop: '2%',
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold'
  },
  modalText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '2%',
    fontSize: height / 40,
    fontFamily: 'Avenir',
    color: 'white',
    textAlign: 'center'
  },
  modalBoldText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '4%',
    fontSize: height / 40,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  closeText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    fontSize: height / 35,
    fontFamily: 'Avenir',
    color: 'black',
    textAlign: 'center'
  },
  buttonView: {
    marginTop: 150
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1
  },
  welcomeBtn: {
    width: 150
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: height / 25,
    backgroundColor: '#3AC55B',
    borderRadius: 15,
    padding: height / 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 50
  },
})
