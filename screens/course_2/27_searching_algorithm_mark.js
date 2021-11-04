// Let’s say we find what we think are some noses in a photo. 

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2SearchingAlgorithmMark ({ navigation }) {
  const [upperScreenText, setUpperScreenText] = React.useState("Let’s say we find what we think are some noses in a photo.")
  const [lowerScreenText, setLowerScreenText] = React.useState(' Tap the squares where the computer should look for ears, eyes and mouths!')

  const [isVisibleArray, setIsVisibleArray] = React.useState([
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false])

  const greenSquares = [5,6,7,8,9,10,13]
  const redSquares = [0,1,2,3,4,11,12,14,15]

  // console.log("test")

  const handlePress = (square) => {
    console.log("index",square)
    setIsVisibleArray(isVisibleArray.map((_,i)=>i===square))
  }

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.container}>

        <View style={styles.information}>
          <Text style={styles.textFont}>{upperScreenText}</Text>
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont2}>{lowerScreenText}</Text>
        </View>


        <View style={styles.grid}>


        {isVisibleArray.map((isVisible,index)=>(
          <View key={index} style={[styles.gridButton, isVisible && greenSquares.includes(index)?styles.greenSquare : styles.redSquare]}>
            <TouchableOpacity onPress={() => handlePress(index)}>
              {/* <Image style={styles.grid} source={require('../../assets/markcubanandwife.png')} /> */}
            </TouchableOpacity>

          </View>
        ))}

        </View>
   

        <View style={styles.footerButtons}>
          <LessonButton navigation={navigation} nextScreen='Course2GettingHangAlgorithms' buttonColor='#8976C2' buttonText='Back' />
          <LessonButton navigation={navigation} nextScreen='Course2Congrats' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>

        <StatusBar style='auto' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    zIndex: 1
  },

  gridButton: {
    backgroundColor: '#D9D9D9',
    height: 75,
    width: 75,
    borderWidth: 1,
  },

  greenSquare: {
    backgroundColor: 'green',
  },

  redSquare: {
    backgroundColor: 'red',
  },

  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 30
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },

  textFont2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 25
  },

  // grid: {
  //   resizeMode: 'contain',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: width / 1.2,
  //   height: width / 1.2,
  //   position: 'absolute',
  //   zIndex: 2
  // },


  footerButtons: {
    marginTop: height / 2,
    marginBottom: height / 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
