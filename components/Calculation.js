import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Platform, Dimensions } from 'react-native'
import Draggable from 'react-native-draggable'

export default function Calculation ({ setCalculations, imageXOffset, imageYOffset }) {
  // location of the draggable filter (x,y) coordinates
  const [dragX, setDragX] = useState(0)
  const [dragY, setDragY] = useState(0)

  // distance of draggable filter from target
  const [xDist, setXDist] = useState(100)
  const [yDist, setYDist] = useState(100)

  // height and width of image (used to perform calculations for target of draggable filter)
  const imageWidth = Dimensions.get('window').width / 1.5
  const imageHeight = Dimensions.get('window').height / 3

  // dimensions of the draggable container (used for responsiveness to different screen sizes)
  const [dragContainerDim, setDragContainerDim] = useState({ width: 0, height: 0, x: 0, y: 0 })

  /* Invert the distance between the filter and its target. The smaller the distance the higher the 'calculations' because calculations become more complex (attention cascade.) Also, round to the nearest integer and then min with a large number because sometimes inversion can cause division by a very small number (and thus grow to infinity). */

  useEffect(() => {
    setCalculations(Math.round((Math.min(100389197, Math.max(((1 / (xDist + yDist) * 50000) ** 2), 1829)) / 100) ** 1.4).toLocaleString('en'))
  })

  return (

    <View style={styles.container}>

      {/* View that contains an image and a draggable filter ron top of it */}
      <View
        style={styles.dragContainer} onLayout={(event) => {
          // get dimensions of container and
          const { x, y, width, height } = event.nativeEvent.layout
          setDragContainerDim({ width: width, height: height, x: x, y: y })
        }}
      >

        {/* main image of face */}
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={require('../assets/obama_face_img.png')}
        />

        {/* Draggable filter */}
        <Draggable
          imageSource={require('../assets/red_box.png')}
          // size of draggable filter for android
          renderSize={130}
          // original starting point of the filter on the image (top left corner)
          x={dragContainerDim.width / 2 - imageWidth / 2}
          y={dragContainerDim.height / 2 - imageHeight / 2}
          /* set the minimum and maximum bounds where the draggable item can go to the bounds of the actual image */
          maxX={dragContainerDim.width / 2 + imageWidth / 2}
          minX={dragContainerDim.width / 2 - imageWidth / 2}
          minY={dragContainerDim.height / 2 - imageHeight / 2}
          maxY={dragContainerDim.height / 2 + imageHeight / 2}
          /* set the draggable filter's state location when the user releases the filter. Calculate the distance between the filter and the nose bridge (where the filter 'similarity' is highest) */
          onDragRelease={(e) => {
            setDragX(e.nativeEvent.pageX - imageXOffset)
            setDragY(e.nativeEvent.pageY - imageYOffset)
            // target of filter is near the middle of the image (nose bridge)
            setXDist(Math.abs(dragContainerDim.width / 1.6 - dragX))
            setYDist(Math.abs(dragContainerDim.height / 1.7 - dragY))
          }}
          animatedViewProps={{ opacity: 0.3 }}
        >
          {
            /* When using ios, you can use the children parameter to have more customization over the filter image */
            (Platform.OS === 'ios' || Platform.OS === 'web')
              ? (<Image style={ styles.filterImage } source={require('../assets/red_box.png')} />)
              : null
          }
        </Draggable>

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
    height: Dimensions.get('window').width / 3.3,
  }

})
