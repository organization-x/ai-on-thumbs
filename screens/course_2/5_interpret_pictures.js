// Now that we know how computers interpret photos

import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'

import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height

export default function Course2InterpretPictures ({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/stock/objectregbackground.png')} style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.textFont}>Now that we know how computers interpret photos, we will learn a popular face detection strategy.</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2Review3' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2OceanNumbers' buttonColor={['#32B59D', '#3AC55B']} buttonText="I'm Ready!" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  information: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: height / 24
  },

  textFont: {
    marginTop: 100,
    color: 'white',
    textAlign: 'center',
    fontSize: height / 16,
    fontWeight: 'bold'
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
