import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

export default function Zoom () {
  return (
    <View style={styles.container}>
      
      <View style={styles.zoomableWrapper}>
        <ReactNativeZoomableView
          zoomEnabled
          maxZoom={30}
          minZoom={0.8}
          zoomStep={0.25}
          initialZoom={1}
          bindToBorders
          style={styles.zoomView}
        >
          <Image
            style={styles.image}
            source={require('../assets/image.png')}
          />
        </ReactNativeZoomableView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
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
    overflow: 'hidden',
    flex: 1
  },
  zoomView: {
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    marginBottom: 10,
    height: '80%',
    flex: 1,
    width: '100%'
  },
  caption: {
    alignSelf: 'center',
    fontSize: 10,
    color: '#444'
  }
})
