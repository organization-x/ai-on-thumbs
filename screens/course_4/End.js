import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity, Dimensions, Modal } from 'react-native'
import LessonButton from '../../components/LessonButton'
import StarRating from 'react-native-star-rating'
import LottieView from 'lottie-react-native'
import * as Sentry from 'sentry-expo'

const height = Dimensions.get('window').height

export default function Course4End ({ navigation }) {
  const [starCount, setStarCount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  async function onFeedbackPress () {
    const res = await sendFeedback(starCount)

    if (res === 'OK') {
      setModalVisible(true)
      CloseModalAfterDelay()
    }
  }

  function CloseModalAfterDelay () {
    setTimeout(function () {
      setModalVisible(false)
    }, 2000)
  }

  async function sendFeedback (rating) {
    const res = await fetch('https://app.ai-camp.org/set-rating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating
      })
    })

    const resText = await res.text()
    return resText
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/stock/ai-on-thumbs-logo.png')} />
      <Text style={styles.mainText}> Did you have fun learning AI with us?</Text>
      <View style={styles.starView}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          selectedStar={(rating) => setStarCount(rating)}
          fullStarColor='yellow'
        />
        <TouchableOpacity style={styles.button} onPress={() => { onFeedbackPress().catch((err) => { Sentry.Native.captureException(err) }) }}>
          <Text>Send Feedback</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>We told you that if you have thumbs, you can learn AI</Text>
      </View>
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
            <LottieView source={require('../../assets/stock/1818-success-animation.json')} autoPlay loop={false} />
          </View>
        </View>
      </Modal>
      <View style={styles.footerButtons}>
        <LessonButton style={{ marginRight: 20 }} navigation={navigation} nextScreen='Course4Review' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4Email' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </View>
  )
}

const styles = {
  logo: {
    height: height / 6.5,
    marginTop: height / 20
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#202020'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '50%'
  },
  starView: {
    marginVertical: height / 30,
    flex: 1
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
    }
  },
  mainText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: height / 25,
    textAlign: 'center',
    marginTop: height / 20,
    fontWeight: 'bold'
  },
  subText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: height / 35,
    textAlign: 'center',
    marginTop: height / 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    margin: 20
  }
}
