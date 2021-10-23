// Notice how the more similar the brightness is,

import React from 'react'
import { StyleSheet, Text, View, Image } from  'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'
import LessonHeader from '../../components/LessonHeader'
import { Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast3 ({navigation}) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.container}>
        <View>
          <LessonHeader style={styles.header}>Remember:</LessonHeader>
        </View>
      <View style={styles.information}>
        <Text style={styles.textFont}>Brighter pixels are higher in value and darker pixels are lower in value.</Text>
      </View>
      
      <View>
      <Image style={styles.image} source={require('../../assets/pixelContrast2.png')}/>
      </View>

      <View style={styles.information2}>
        <Text style={styles.textFont2}>Notice how the more similar the brightness is, the less contrast there is between the pixels!</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2Contrast2' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2ContrastMCQ' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
  },

  header: {
    textAlign: 'center',
    marginBottom: height / 50,
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27,
  },

  textFont2: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27,
    fontWeight: 'bold',
  },

  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 1.2,
    height: width / 1.2,
    marginLeft: -5,
    marginTop: -30,
    marginBottom: -30,
  },

  footerButtons: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

