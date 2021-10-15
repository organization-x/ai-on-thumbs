import React, { useRef } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

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
            source={require('../assets/high-def-assets/markcubanpixelated_large.png')}
          />
        </ReactNativeZoomableView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  explanation: {
    backgroundColor: '#6f80ff',
    paddingTop: 48,
    paddingBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  title_text: {
    fontSize: 20,
    color: '#fff'
  },
  zoomableWrapper: {
    flex: 1,
    overflow: 'hidden'
  },
  zoomView: {
    padding: 10,
    backgroundColor: 'transparent'
  },
  image: {
    resizeMode: 'contain',
    marginBottom: 0,
    flex: 1,
    width: '100%',
    height: '80%'
  },
  caption: {
    alignSelf: 'center',
    fontSize: 10,
    color: '#444'
  }
})
