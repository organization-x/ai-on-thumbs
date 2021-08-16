import React, { useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  PanResponder,
  Animated
} from 'react-native'

// component takes 6 args
// src (req): source of normal image
// magSrc (req): source of image to be viewed glass
// mag (opt): x of magnification
// width (opt): width of component
// height (opt): height of component
// radius (opt): radius of the glass

export default function MagnifyGlass ({ src, magSrc, mag = 1, radius = 40 }) {
  // dynamically adjust width and height
  const [width, setWidth] = useState(120)
  const [height, setHeight] = useState(120)

  // coordinates to place glass in center
  const centerX = width / 2 - radius - 3
  const centerY = height / 2 - radius - 3

  // relative coord for glass img to align it with the normal img instead of the glass's coords
  const magCenterX = -1 * ((width / 2) * mag - radius)
  const magCenterY = -1 * ((height / 2) * mag - radius)

  // shifts the background image of the glass opposite to the glass's movement
  const [shiftX, setShiftX] = useState(magCenterX)
  const [shiftY, setShiftY] = useState(magCenterY)

  // tracks the glass's coordinates
  const pan = useRef(new Animated.ValueXY({ x: centerX, y: centerY })).current

  // uses panResponder api to track dragging movementss
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        // prevents onMove event if the touch is only a tap
        return Math.abs(gestureState.dx) >= 1 || Math.abs(gestureState.dy) >= 1
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        })
      },
      onPanResponderMove: (event, gesture) => {
        // set the shift for the glass
        pan.x.setValue(gesture.dx)
        pan.y.setValue(gesture.dy)
        // move the pixel img in opposite direction for effect
        setShiftX(shiftX - gesture.dx * mag)
        setShiftY(shiftY - gesture.dy * mag)
      },
      onPanResponderRelease: () => {
        pan.flattenOffset()

        // reset image and glass to center position
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: centerX, y: centerY }, useNativeDriver: false } // Back to zero
        ).start()
        setShiftX(magCenterX)
        setShiftY(magCenterY)
      }
    })
  ).current

  // for glass's movements
  const panStyle = { transform: [{ translateX: pan.x }, { translateY: pan.y }] }

  // for size of images and glass
  const zoomImgDimension = {
    width: width * mag,
    height: height * mag,
    top: shiftY,
    left: shiftX
  }

  const glassDimension = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius
  }

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout
    setWidth(width)
    setHeight(height)
  }

  return (
    // component container
    <View onLayout={onLayout} style={[styles.magContainer]}>

      {/* background image */}
      <Image
        style={styles.normalImage}
        source={src}
      />

      {/* magnifying glass */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[panStyle, styles.glass, glassDimension]}
      >
        {/* image in glass */}
        <Image
          style={[styles.zoomImage, zoomImgDimension]}
          source={magSrc}
        />

      </Animated.View>
    </View>

  )
}

const styles = StyleSheet.create({
  magContainer: {
    position: 'relative',
    flex: 1
  },
  normalImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
    zIndex: -1
  },
  zoomImage: {
    position: 'relative',
    resizeMode: 'cover',
    zIndex: 10
  },
  glass: {
    borderColor: 'white',
    borderWidth: 3,
    zIndex: 20,
    overflow: 'hidden',
    position: 'absolute'
  }
})
