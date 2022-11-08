import React, { useRef } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView'

export default function Zoom ({ setCurrentZoom }) {
  const zoomableViewRef = useRef(null)

  function setNewZoom (event, gestureState, zoomableViewEventObject) {
    setCurrentZoom(zoomableViewEventObject.zoomLevel)
  }

  return (
    <View style={styles.container}>

      <View style={styles.zoomableWrapper}>
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          zoomEnabled
          maxZoom={30}
          minZoom={0.8}
          zoomStep={0.25}
          initialZoom={1}
          bindToBorders
          style={styles.zoomView}
          onZoomAfter={setNewZoom}
        >
          <Image
            style={styles.image}
            source={require('../assets/course_1/markcubanpixelated_large.png')}
          />
        </ReactNativeZoomableView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  zoomableWrapper: {
    flex: 1,
    overflow: 'hidden'
  },
  zoomView: {
    padding: 10
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: '100%',
    height: '80%'
  }
})
