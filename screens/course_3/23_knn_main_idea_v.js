// Red Group, Blue Group, Yellow Group

import React from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 23: KNN Main Idea V')


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course3KNNMainIdeaV ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={styles.interactive}>
        <Image style={styles.image} source={require('../../assets/course_3/KNNVisualization.png')}/>
        <Text style={styles.text}>In this example, we have a red group, a blue group, and a yellow group.</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3KNNMainIdeaIV' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course3KNNMainIdeaVI' buttonColor={['#32B59D', '#3AC55B']} buttonText="Next" />
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
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    transform: [

      { translateY: - height * 0.10 },

    ],
  },
  boldText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 40,
    fontWeight: '800'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    width: width / 0.9,
  }
})
