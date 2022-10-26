// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HomeButton from '../../../components/HomeButton'
import colors from '../../../config/colors'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 4 Section 3 Screen 4: Section 3 NN Lesson End')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4Sect3End ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>4/4</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.title]}>Congrats!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>You've now completed a brief introduction to neural networks</Text>
        <Text style={styles.text}>Let's review what we learned</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Course4Review')
        }}
      >
        <View style={styles.returnButton}>
          <Text style={styles.returnText}>
            Review
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: 35,
    textAlign: 'right',
    paddingVertical: 30
  },
  text: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 30
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  returnButton: {
    marginTop: 150,
    backgroundColor: '#0f89ce',
    height: height / 10,
    width: width / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  returnText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
