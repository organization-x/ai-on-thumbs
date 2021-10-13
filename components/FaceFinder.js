// To show computers how facial recognition is done, tap on all the faces in the picture below.

import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


export default function FaceFinder () {  
  const [numFaces, setNumFaces] = React.useState(0);
  const [disableTopLeft, setDisableTopLeft] = React.useState(false);
  const [disableBottomLeft, setDisableBottomLeft] = React.useState(false);
  const [disableBottomRight, setDisableBottomRight] = React.useState(false);
  const [disableTopRight, setDisableTopRight] = React.useState(false);

  return (
      <View style = {styles.container}>
        <View style = {styles.rowContainer}>
            <TouchableOpacity 
            onPress = {() => 
            setNumFaces(numFaces + 1),
            setDisableTopLeft(true)
            }  
            disabled ={disableTopLeft} 
            >
            <Image style = {styles.image} source = {require('../../assets/course_1/treeface.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => setNumFaces(numFaces + 1)} >
            <Image style = {styles.image} source = {require('../../assets/course_1/memeface.png')} />
            </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}>
            <TouchableOpacity onPress = {() => setNumFaces(numFaces + 1)} disabled ={true}>
            <Image style = {styles.image} source = {require('../../assets/course_1/moonface.png')} />
            </TouchableOpacity >
            <TouchableOpacity>
            <Image style = {styles.image} source = {require('../../assets/course_1/veggieface.png')} />
            </TouchableOpacity>
        </View>
        <Text style ={styles.text}> There are {numFaces} clicked </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 15,
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    marginBottom: '40%',
    fontSize: 22
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: 90,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})