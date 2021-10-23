// Since brighter pixels are higher in value, and darker pixels are lower in value

import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2Contrast2 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.information}>
          <Text style={styles.textFont}>Since brighter pixels are higher in value, and darker pixels are lower in value,</Text>
        </View>
        <View>
          <Image style={styles.image} source={require('../../assets/pixelContrast1.png')} />
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont}>we can find their difference to get the contrast.</Text>
        </View>

        <View style={styles.footerButtons}>
          <LessonButton navigation={navigation} nextScreen='Course2Contrast1' buttonColor='#8976C2' buttonText='Back' />
          <LessonButton navigation={navigation} nextScreen='Course2Contrast3' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>
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

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: height / -18
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 27
  },

  image: {
    resizeMode: 'contain',
    width: width / 1.2,
    height: width / 1.2,
    marginLeft: width / -60,
    marginBottom: width / -10
  },

  footerButtons: {
    marginTop: 125,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
