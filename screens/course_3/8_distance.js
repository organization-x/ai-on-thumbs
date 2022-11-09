// Distance is how we measure how far apart houses are.

import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import colors from '../../config/colors'
import LessonButton from '../../components/LessonButton'

const height = Dimensions.get('window').height

export default function Course3Distance ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.boldText}>Distance is how we measure how far apart houses are.</Text>
        <Text style={styles.text}>Let's take another look at the role it plays!</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIncorrect'
          buttonColor='#8976C2'
          buttonText='Back'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3Neighborhoods'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Keep going!'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
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
    fontWeight: 'bold'
  },
  boldText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: '800'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
