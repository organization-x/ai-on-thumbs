// Review 4

import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import LessonHeader from '../../components/LessonHeader'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course4Review ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <LessonHeader style={styles.header}>Algorithm Review</LessonHeader>

        <View style={styles.number}>
          <Text style={styles.numberFont}>1</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Neural networks mimic the human brain and are made up of different layers of nodes.</Text>
        </View>

        <View styles={styles.number}>
          <Text style={styles.numberFont}>2</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>They take in information as numbers and peform calculations at each node.</Text>
        </View>

        <View style={styles.number}>
          <Text style={styles.numberFont}>3</Text>
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont}>It then compares its output to the correct answer and corrects itself through backpropagation.</Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course4Sect3End' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4End' buttonColor={['#32B59D', '#3AC55B']} buttonText='Awesome!' />
      </View>

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40,
    backgroundColor: '#202020'
  },

  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    textAlign: 'center',
    marginBottom: 10
  },

  number: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  numberFont: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 14,
    fontWeight: 'bold',
    opacity: 0.5
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10
  },
  information3: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 12
  },
  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 35
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
