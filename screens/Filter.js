import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import Draggable from 'react-native-draggable';

export default function Filter({navigation}){

    const [dragX, setDragX] = useState(0);
    const [dragY, setDragY] = useState(0);
    const [xDist, setXDist] = useState(100);
    const [yDist, setYDist] = useState(100);

    return (
        
        <View style={styles.container}>

            {/*title of screen*/}
            <Text style={styles.paragraph}>Filter on Image</Text>

            {/*View that contains an image and a draggable filter ron top of it*/}
            <View style={styles.dragContainer}>

                <Image style={{width: 300, height: 200}} source={require('../assets/grayscale_face_image.jpg')}/>

                {/*Draggable filter*/}
                <Draggable 
                imageSource={require('../assets/filter_drawing (1).png')} 

                renderSize={35} 

                /*set the minimum and maximum bounds where the draggable item can go to the bounds of the actual image */
                maxX={230} minX={0} minY={0} maxY={150} 

                /*set the draggable filter's state location when the user releases the filter. Calculate the distance between the filter and the nose bridge (where the filter 'similarity' is highest) */
                onDragRelease={(e) => {setDragX(e.nativeEvent.locationX), 
                                    setDragY(e.nativeEvent.locationY), 
                                    setXDist(Math.abs(40-dragX), 
                                    setYDist(Math.abs(27-dragY)))}} 

                /*When using ios, you can use the children parameter to have more customization over the image */
                children={   Platform.OS==="ios" || "web"  ?    (<Image style={{width: 70, height: 50, position:"absolute"}} source={require('../assets/filter_drawing (1).png')}/>) : null}

                />

            </View>
            
            {/*Invert the distance between the filter and its target. The smaller the distance the higher the 'similarity' Also, round to the nearest integer and then min with 100 because sometimes inversion can cause division by a very small number (and thus grow to infinity) */}
            <Text style={styles.paragraph}>
                Current Similarity Match:
                {
                Math.min(Math.round(1/xDist*100 + 1/yDist * 100), 100)
                }
            </Text>
            
            {/*If the inverted distance is lower than a certain threshold, then display the answer (which the user got correct) */}
            <Text style={styles.paragraph}>
                {
                (Math.round(1/xDist*100 + 1/yDist * 100))>20 ? "The filter matches up closest to the nose bridge because it is a vertical line!" : ""
                }
            </Text>

        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});