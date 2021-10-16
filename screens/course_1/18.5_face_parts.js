// Our faces have some unique features that stand out and make them recognizable.

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import ImageMapper from 'react-native-image-mapper'

const height = Dimensions.get('window').height

export default function Course1FaceParts2 ({navigation}) {
  const [lowerScreenText, setLowerScreenText] = React.useState(' ')
  const [upperScreenText, setUpperScreenText] = React.useState('Tap to identify which features you think are important to recognize a face.')
  const [selectedAreaId, setSelectedAreaId] = React.useState([])
  const imageSource = require('../../assets/course_1/markcubanface.png')
  const areaMap = [
    {  
      id: '0', 
      name: "left eye", 
      shape: "rectangle", 
      x2: 130, 
      y2: 110, 
      x1: 100, 
      y1: 80,  
      fill: 'rgba(0,255,0,0.4)'
    },
    {  
      id: '1', 
      name: "right eye", 
      shape: "rectangle", 
      x2: 175, 
      y2: 105, 
      x1: 145, 
      y1: 75,  
      fill: 'rgba(0,255,0,0.4)'
    },
    {  
      id: '2', 
      name: "nose", 
      shape: "rectangle", 
      x2: 152, 
      y2: 128, 
      x1: 125, 
      y1: 80,  
      fill: 'rgba(0,0,255,0.4)'
    },
    {  
      id: '3', 
      name: "mouth", 
      shape: "rectangle", 
      x2: 170, 
      y2: 155, 
      x1: 115, 
      y1: 130,  
      fill: 'rgba(255,0,0,0.4)'
    },
    {  
      id: '4', 
      name: "right ear", 
      shape: "rectangle", 
      x2: 225, 
      y2: 135, 
      x1: 195, 
      y1: 80,  
      fill: 'rgba(255,255,0,0.4)'
    },
    {  
      id: '5', 
      name: "left ear", 
      shape: "rectangle", 
      x2: 105, 
      y2: 145, 
      x1: 80, 
      y1: 90,  
      fill: 'rgba(255,255,0,0.4)'
    },
  ]

  const handlePress = (item, idx, event) => {
    const indexInState = selectedAreaId.indexOf(item.id);
    if (indexInState !== -1){
      setSelectedAreaId([...selectedAreaId.slice(0, indexInState),
                        ...selectedAreaId.slice(indexInState + 1)])
      if (idx === 0){
        setLowerScreenText('You have unselected the left eye. Please be sure to reselect it.')
      }else if (idx === 1){
        setLowerScreenText('You have unselected the right eye. Please be sure to reselect it.')
      }else if (idx === 2){
        setLowerScreenText('You have unselected the nose. Please be sure to reselect it.')
      }else if (idx === 3){
        setLowerScreenText('You have unselected the mouth. Please be sure to reselect it.')
      }else if (idx === 4){
        setLowerScreenText('You have unselected the right ear. Please be sure to reselect it.')
      }else if (idx === 5){
        setLowerScreenText('You have unselected the left ear. Please be sure to reselect it.')
      }
      setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
    }else{
      setSelectedAreaId([...selectedAreaId, item.id])
      if (selectedAreaId.length === 5){
        setUpperScreenText('\n Eyes + Nose + Ears + Mouth = Face! \n')
        setLowerScreenText('It turns out computers use these important facial features to detect a face, just like we do! \n\n Tap to continue.')
      }else {
        if (idx === 0){
          setLowerScreenText('Yes, the left eye is important in recognizing a face. Have you found the other eye?')
          setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
        }else if (idx === 1){
          setLowerScreenText('Yes, the right eye is important in recognizing a face.')
          setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
        }else if (idx === 2){
          setLowerScreenText('Noses are important! Good job.')
          setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
        }else if (idx === 3){
          setLowerScreenText('Mouths sure are important parts of a face.')
          setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
        }else if (idx === 4){
          setLowerScreenText('Yes, the right ear is important.')
          setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
        }else if (idx === 5){
          setLowerScreenText('Yes, the left ear is important.')
          setUpperScreenText('Tap to identify which features you think are important to recognize a face.')
        }
      }
    }
  }
  
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
    <Text style={styles.bigText}>{upperScreenText} </Text>
    <View style={styles.interactive}>
      <ImageMapper 
        imgSource={imageSource} 
        imgMap={areaMap} 
        imgHeight={300} 
        imgWidth={300} 
        onPress={(item, idx, event) => handlePress(item, idx, event)}
        selectedAreaId = {selectedAreaId}
        multiselect={true}
        />
    </View>
    <View style={styles.interactive}>
      <Text style={styles.text}> {lowerScreenText} </Text>
    </View>
    <View style={styles.footerButtons}>
      <LessonButton navigation={navigation} nextScreen='Course1FaceParts' buttonColor='#8976C2' buttonText='Back' />
      <LessonButton navigation={navigation} nextScreen='Course1Congrats' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
    </View>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  interactive: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'black',
    marginTop: height/8,
    marginBottom: '5%',
    fontSize: height/40
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: height/35,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})