import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import Draggable from 'react-native-draggable';

export default function Filter(){
  
  //location of the draggable filter (x,y) coordinates
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);

  //distance of draggable filter from target
  const [xDist, setXDist] = useState(100);
  const [yDist, setYDist] = useState(100);

  //height and width of image (used to perform calculations for target of draggable filter)
  const [imageWidth, setImageWidth] = useState(300);
  const [imageHeight, setImageHeight] = useState(200);

  //dimensions of the draggable container (used for responsiveness to different screen sizes)
  const [dragContainerDim, setDragContainerDim] = useState({width: 0, height: 0, x: 0, y: 0});

  return (
      
    <View style={styles.container}>

      {/*title of screen*/}
      <Text style={styles.paragraph}>Filter on Image</Text>

      {/*View that contains an image and a draggable filter ron top of it*/}
      <View style={styles.dragContainer} onLayout={(event) => {

        //get dimensions of container and
        let {x, y, width, height} = event.nativeEvent.layout;
        setDragContainerDim({width: width, height: height, x: x, y: y});
        
      }}>

        {/* main image of face */}
        <Image style={{width: imageWidth, height: imageHeight}} source={require('../assets/grayscale_face_image.jpg')}/>

        {/*Draggable filter*/}
        <Draggable 

          imageSource={require('../assets/filter_drawing.png')} 

          //size of draggable filter for android
          renderSize={35} 

          //original starting point of the filter on the image (top left corner)
          x={dragContainerDim["width"]/2-imageWidth/2}
          y={dragContainerDim["height"]/2-imageHeight/2}

          /*set the minimum and maximum bounds where the draggable item can go to the bounds of the actual image */
          maxX={dragContainerDim["width"]/2+imageWidth/2} 
          minX={dragContainerDim["width"]/2-imageWidth/2} 
          minY={dragContainerDim["height"]/2-imageHeight/2} 
          maxY={dragContainerDim["height"]/2+imageHeight/2}

          /*set the draggable filter's state location when the user releases the filter. Calculate the distance between the filter and the nose bridge (where the filter 'similarity' is highest) */
          onDragRelease={(e) => {
            setDragX(e.nativeEvent.pageX), 
            setDragY(e.nativeEvent.pageY), 

            //target of filter is near the middle of the image (nose bridge)
            setXDist(Math.abs(dragContainerDim["width"]/2-dragX)), 
            setYDist(Math.abs(dragContainerDim["height"]/1.1-dragY))
          }} 

          /*When using ios, you can use the children parameter to have more customization over the filter image */
          children={   Platform.OS==="ios" || "web"  ?    (<Image style={{width: 70, height: 50}} source={require('../assets/filter_drawing.png')}/>) : null}

        />

      </View>
      
      {/*Invert the distance between the filter and its target. The smaller the distance the higher the 'similarity' Also, round to the nearest integer and then min with 100 because sometimes inversion can cause division by a very small number (and thus grow to infinity) */}

      <Text style={styles.paragraph}>
        Current Similarity Match:
        {
          Math.min(Math.round(1/(xDist+yDist) * 200), 100)
        }
      </Text>
      
      {/*If the inverted distance is lower than a certain threshold for both x and y coordinates, then display the answer (which the user got correct) */}
      <Text style={styles.paragraph}>
        {
          (Math.round(1/xDist*100)>5 && Math.round((1/yDist * 100))>5) ? "The filter matches up closest to the nose bridge because it is a vertical line!" : ""
        }
      </Text>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dragContainer: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
});