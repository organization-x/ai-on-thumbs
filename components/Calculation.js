import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Image, Platform, Dimensions, Animated } from 'react-native'
import Draggable from 'react-native-draggable'
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView'

export default function Calculation ({ calculations, setCalculations, imageXOffset, imageYOffset }) {
  const moveToCoords = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

  useEffect(() => {
    function startZoom () {
      setCalculations(0)
      let currentZoom = 0
      function startAnim () {
        Animated.sequence([
          Animated.delay(30)
        ]).start(() => {
          zoomableViewRef.current?.zoomBy(0.03)
          zoomableViewRef.current?.moveTo(10, 10)
          currentZoom += 0.03
          if (currentZoom >= 2) {
            return
          }
          startAnim()
        })
      }
      startAnim()
    }
    Animated.delay(600).start(() => {
      startZoom()
      Animated.sequence([
        Animated.delay(4000),
        Animated.timing(
          moveToCoords,
          {
            toValue: { x: imageWidth * 8, y: 0 },
            duration: 8000,
            useNativeDriver: true
          }
        )
      ]).start(() => {
        let currentZoom = 2
        function endAnim () {
          Animated.sequence([
            Animated.delay(5)
          ]).start(() => {
            zoomableViewRef.current?.zoomBy(-0.03)
            currentZoom -= 0.03
            if (currentZoom <= 0) {
              moveToCoords.removeAllListeners()
              setCalculations(0)
              return
            }
            endAnim()
          })
        }
        endAnim()
      })
    })
  }, [moveToCoords])

  const zoomableViewRef = useRef(null)

  let tenth = 0
  moveToCoords.addListener((value) => {
    tenth += 1
    if ((tenth % 100) === 0) {
      setCalculations(Math.round(((1 / Math.abs(1000 - value.x) ** 1.5) * 10000000000)))
    }

    zoomableViewRef.current?.moveTo(value.x % imageWidth, Number.parseInt(value.x / (imageWidth)) * 100 - 300)
  })

  // height and width of image (used to perform calculations for target of draggable filter)
  const imageWidth = Dimensions.get('window').width / 1.5
  const imageHeight = Dimensions.get('window').height / 3

  // dimensions of the draggable container (used for responsiveness to different screen sizes)
  const [dragContainerDim, setDragContainerDim] = useState({ width: 0, height: 0, x: 0, y: 0 })

  return (

    <View style={styles.container}>

      {/* View that contains an image and a draggable filter ron top of it */}
      <View
        style={styles.dragContainer} onLayout={(event) => {
          // get dimensions of container and
          const { x, y, width, height } = event.nativeEvent.layout
          setDragContainerDim({ width, height, x, y })
        }}
      >

        <View style={[styles.zoomableWrapper, { width: imageWidth, height: imageHeight }]}>
          {/* main image of face */}
          <ReactNativeZoomableView
            ref={zoomableViewRef}
            zoomEnabled={false}
            maxZoom={30}
            minZoom={1}
            zoomStep={0.25}
            initialZoom={1}
            bindToBorders
            style={styles.zoomView}
          >
            <Image
              style={{ width: imageWidth, height: imageHeight }}
              source={require('../assets/obama_pixelated_medium.png')}
            />
          </ReactNativeZoomableView>
          {/* Draggable filter */}
          <Draggable
            imageSource={require('../assets/red_box.png')}
          // size of draggable filter for android
            renderSize={130}
            disabled
          // original starting point of the filter on the image (top left corner)
            x={(dragContainerDim.width / 4.3)}
            y={(dragContainerDim.height / 4.5)}
          /* set the minimum and maximum bounds where the draggable item can go to the bounds of the actual image */
            maxX={dragContainerDim.width / 2 + imageWidth / 2}
            minX={dragContainerDim.width / 2 - imageWidth / 2}
            minY={dragContainerDim.height / 2 - imageHeight / 2}
            maxY={dragContainerDim.height / 2 + imageHeight / 2}
            animatedViewProps={{ opacity: 0.3 }}
          >
            {
            /* When using ios, you can use the children parameter to have more customization over the filter image */
            (Platform.OS === 'ios' || Platform.OS === 'web')
              ? (<Image style={styles.filterImage} source={require('../assets/red_box.png')} />)
              : null
          }
          </Draggable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'center'
  },
  paragraph: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dragContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  equation: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  filterImage: {
    width: Dimensions.get('window').width / 3.9,
    height: Dimensions.get('window').width / 3.3
  },
  zoomView: {
    padding: 10,
    backgroundColor: 'transparent'
  },
  zoomableWrapper: {
    overflow: 'hidden'
  }

})
