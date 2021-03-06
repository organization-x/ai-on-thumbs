import React from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
Analytics.setCurrentScreen('Course 2 Screen 18.2: Draggable Completed Screen')

export default function Course2DraggableCompleted ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.topText}>Drag and release the filter around the face to find a matching pixel pattern.</Text>
        <View style={styles.image}>
          <Image
            style={(width <= 400) ? { width: width / 1.63, height: width / 1.63, borderRadius: 7 } : { width: width / 2, height: width / 2, borderRadius: 7 }}
            source={require('../../assets/course_2/markcuban_hybrid_with_filter.png')}
          />
        </View>
        <Text style={styles.secondText}>This is a great time to celebrate with our computer, since we both can now recognize important facial features!!</Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2DraggableFilter' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton
          navigation={navigation}
          nextScreen='Course2DraggableExplanation'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Continue'
          actOpacity={1}
        />
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
  topText: {
    marginTop: height / 20,
    padding: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold',
    marginBottom: height / 25
  },
  secondText: {
    marginTop: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: height / 34
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
