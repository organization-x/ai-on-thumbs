// Pending Refactor
/* eslint react/jsx-indent: "off" */
import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import FootPrint from '../components/FootPrint'
import ActionButton from '../components/ActionButton'
import { AntDesign } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import Toast from '../components/Toast'
import * as FileSystem from 'expo-file-system'
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator'

export default function Try ({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [toast, setToast] = useState({ value: '', type: '' })
  const [startCamera, setStartCamera] = useState(false)
  const [imageBase64, setImageBase64] = useState(null)
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

  const sendFaceRequest = async (ImageString) => {
    let res
    try {
      res = await fetch('https://app.ai-camp.org/image',
        {
          method: 'POST',
          body: JSON.stringify(
            { base_64: ImageString }
          ),
          headers: {
            'Content-type': 'application/json'
          }
        }
      )
    } catch (error) {
      console.log(error.response.data) // NOTE - use "error.response.data` (not "error")
    }

    const data = await res.text()
    return data
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return (
      <Background style={{ justifyContent: 'center' }}>
        <ActivityIndicator size={100} />
      </Background>
    )
  }

  function openCamera () {
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
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' })
      console.log(base64.length)
      await onUpload(base64)
      setLoading(false)
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
          onPress={async () => { await takePhoto() }}
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
    <Background>
      <Header style={styles.left_align}>Try it out!</Header>

      <FootPrint style={styles.left_align}>Use your own product in real life!</FootPrint>

      <ActionButton
        onPress={() => hasPermission
          ? openCamera()
          : setToast(
            { type: 'error', message: 'Go to settings to enable the camera.' }
          )}
        title='Open Camera'
        icon={<AntDesign name='camera' style={{ marginLeft: 5 }} size={30} color='black' />}
      />
      {loading
        ? <ActivityIndicator size='large' color='#409C69' style={{ marginTop: '50%' }} />
        : imageBase64
          ? <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: `data:image/png;base64,${imageBase64}` }} />
            </View>
          : null}

      <View style={styles.buttonView}>
        <ActionButton onPress={() => navigation.navigate('Ad')} title='Done' />
      </View>

      <Toast {...toast} onDismiss={() => setToast({ value: '', type: toast.type })} />
    </Background>
  )
}

const styles = StyleSheet.create({
  left_align: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 5
  },
  logo: {
    marginVertical: 50
  },
  buttonView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageContainer: {
    margin: 30,
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  image: {
    width: '90%',
    height: '150%',
    marginTop: 10
  }
})
