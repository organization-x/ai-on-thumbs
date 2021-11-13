// Take a photo of yourself to let the AI algorithm detect your face.

import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, View, ActivityIndicator, Dimensions, Text, Image } from 'react-native'
import Background from '../../components/Background'
import ActionButton from '../../components/ActionButton'
import LessonButton from '../../components/LessonButton'
import { AntDesign } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import Toast from '../../components/Toast'
import * as FileSystem from 'expo-file-system'
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator'
import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 2 Screen 34: Selfie Screen')


const height = Dimensions.get('window').height

export default function Course2Selfie ({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [toast, setToast] = useState({ value: '', type: '' })
  const [startCamera, setStartCamera] = useState(false)
  const [imageBase64, setImageBase64] = useState(null)
  const [isProcessed, setIsProcessed] = useState(false)
  const camera = useRef(null)
  const [loading, setLoading] = useState(false)

  const onUpload = async (text) => {
    const data = await sendFaceRequest(text)
    setImageBase64(data)
  }

  const compressImage = async (uri, format = SaveFormat.JPEG) => {
    const result = await manipulateAsync(
      uri,
      [{ resize: { width: 250 } }],
      { compress: 0.7, format }
    )

    return result.uri
  }

  const sendFaceRequest = async (imageString) => {
    let res
    try {
      res = await fetch('https://app.ai-camp.org/image',
        {
          method: 'POST',
          body: JSON.stringify(
            { base_64: imageString }
          ),
          headers: {
            'Content-type': 'application/json'
          }
        }
      )
    } catch (error) {
      console.log(error.response.data) // NOTE - use "error.response.data` (not "error")
      // TODO: add SENTRY error handling
    }
    // TODO: If try catch fails, the uncaught exception will be thrown here. TALK to alex about what to add down the line to catch it.
    const data = await res.text().catch((error) => {
      // TODO: add SENTRY error handling
      console.log(error.message) // NOTE - use "error.response.data` (not "error")
    })
    return data
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })().catch(error => {
      // TODO: ADD SENTRY LOGGIN' and erase line below

      console.log(error.message)
    })
  }, [])

  if (hasPermission === null) {
    return (
      <Background style={{ justifyContent: 'center' }}>
        <ActivityIndicator size={100} />
      </Background>
    )
  }

  const openCamera = () => {
    setStartCamera(true)
  }

  async function takePhoto () {
    if (!camera.current) {
      return null
    }
    await camera.current.takePictureAsync().then(async photo => {
      setLoading(true)
      setStartCamera(false)
      const uri = await compressImage(photo.uri)
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 })
      await onUpload(base64)
      setLoading(false)
      setIsProcessed(true)
    }
    )
  }

  if (startCamera) {
    return (
      <Camera
        style={styles.camera}
        ref={(r) => { camera.current = r }}
      >
        <ActionButton
          style={{ marginBottom: 30 }}
          onPress={() => takePhoto().catch(err => { console.log(err.response.data) })} // TODO: ADD SENTRY LOG
          title='Take Photo'
          icon={<AntDesign
            name='camera' style={{ marginLeft: 5 }}
            size={30}
            color='black'
                />}
        />
      </Camera>
    )
  }

  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>

      <View style={{ alignItems: 'center' }}>
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/stock/ai-on-thumbs-logo.png')} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>You've completed your first lesson!</Text>
        <Text style={styles.secondText}>Take a photo of yourself to let the AI algorithm detect your face.</Text>
        {isProcessed
          ? <Text style={styles.thirdText}> Your photo is taken! Go to the next page to see your results!</Text>
          : null}
      </View>

      <View style={{ alignItems: 'center' }}>
        <ActionButton
          onPress={() => hasPermission
            ? openCamera()
            : setToast(
              { type: 'error', message: 'Go to settings to enable the camera.' }
            )}
          title='Open Camera'
          icon={<AntDesign name='camera' style={{ marginLeft: 5 }} size={30} color='black' />}
        />
      </View>

      {loading
        ? <ActivityIndicator size='large' color='#409C69' style={{ marginTop: '40%' }} />
        : null}

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course2Email'
          buttonColor='#8976C2'
          buttonText='Back'
        />

        <LessonButton
          navigation={navigation}
          nextScreen='Course2FaceDetection'
          buttonColor={['#32B59D', '#3AC55B']}
          context={imageBase64}
          buttonText='Continue'
        />
      </View>

      <Toast {...toast} onDismiss={() => setToast({ value: '', type: toast.type })} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: height / 7,
    marginTop: height / 12
  },
  buttonView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 17
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainText: {
    marginTop: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: 'bold'
  },
  secondText: {
    marginTop: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 32
  },
  thirdText: {
    marginTop: '8%',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: height / 33
  }
})
