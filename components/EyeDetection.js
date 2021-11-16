import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, Platform, Dimensions } from 'react-native'
import Draggable from 'react-native-draggable'

export default function EyeDetection ({ found, setFound, setFilterText, imageXOffset, imageYOffset }) {
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

  useEffect(() => {
    if (Math.round(1 / xDist * 100) >= 4 && Math.round((1 / yDist * 100)) >= 6) {
      setFilterText('The filter matches up closest to the eyes because they form a horizontal line!')
      setInitialX(dragContainerDim.width / 2.5)
      setInitialY(Dimensions.get('window').height > 800 ? dragContainerDim.height / 7.8 : dragContainerDim.height / 14)
      setFound(true)
    } else {
      setInitialX(dragContainerDim.width / 2 - imageWidth / 2)
      setInitialY(dragContainerDim.height / 2 - imageHeight / 2)
      setFilterText('The filter has still not matched with the correct facial feature')
    }
  })

  const [initialX, setInitialX] = useState()
  const [initialY, setInitialY] = useState()

  const [shouldRender, setshouldRender] = React.useState(true)

  React.useEffect(() => {
    setshouldRender(false)
    setTimeout(() => setshouldRender(true), 5)
  }, [initialX, initialY])

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

        {
        shouldRender
        /* Draggable filter */
          ? <Draggable
              imageSource={require('../assets/course_2/horizontal_filter.png')}
              animatedViewProps={{ opacity: 0.5 }}
            // size of draggable filter for android
              renderSize={50}
            // original starting point of the filter on the image (top left corner)
              x={initialX}
              y={initialY}
              disabled={found}
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
                setXDist(Math.abs(dragContainerDim.width / 1.78 - dragX))
                setYDist(Math.abs(dragContainerDim.height / 2.5 - dragY))
              }}
            >

            {
              /* When using ios, you can use the children parameter to have more customization over the filter image */
              (Platform.OS === 'ios' || Platform.OS === 'web')
                ? (<Image style={styles.filterImage} source={require('../assets/course_2/horizontal_filter.png')} />)
                : null
              }
            </Draggable>
          : null
        }

      </View>

      <Text style={styles.paragraph}>
        Current Similarity Match:
        {
          Math.min(Math.round(1 / (xDist + yDist) * 200), 100)
        }
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'center',
    paddingTop: 15,
    padding: 8
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
    width: Dimensions.get('window').width / 4.7,
    height: Dimensions.get('window').width / 4.7
  }
})
