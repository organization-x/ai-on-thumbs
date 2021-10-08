// Pending Deletion

import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import LessonHeader from '../components/LessonHeader'
import ActionButton from '../components/ActionButton'
import ParagraphBox from '../components/ParagraphBox'
import * as Linking from 'expo-linking'
import { LinearGradient } from 'expo-linear-gradient'

export default function Ad ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>

      <LessonHeader style={styles.left_align}>You Completed the Course!</LessonHeader>

      <Image style={styles.logo} source={require('../assets/ai-on-thumbs-logo.png')} />

      <ParagraphBox text='AI Camp teaches students about coding, AI, and tech internships. Build your own AI Product with a team and deploy it into the real world with AI instructors.' />

      <View style={styles.buttonView}>
        <ActionButton
          style={styles.button1}
          onPress={() => Linking.openURL('https://ai-camp.org')}
          title='Learn More'
        />

        <ActionButton
          style={styles.button2}
          onPress={() => navigation.navigate('Courses')}
          title='Home'
        />
      </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  left_align: {
    alignSelf: 'flex-start',
    marginVertical: 5
  },
  logo: {
    height: '30%',
    marginVertical: 20
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 20
  },
  button1: {
    width: '45%',
    maxHeight: '90%'
  },
  button2: {
    width: '45%',
    maxHeight: '90%'
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center'
  }
})
