// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'

import colors from '../../../config/colors'
import HomeButton from '../../../components/HomeButton'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4RWInteractiveIncorrect ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Not quite... Amazon’s NN would select the soccer ball based on John’s interests
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This is a simple example, but a neural network{' '}
            <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
              can do this on a much larger scale
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.footerButtons, { marginTop: 50 }]}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Course4RWInteractive') }}
          underlayColor='#fff'
          activeOpacity={0.3}
        >
          <View style={styles.submitBox}>
            <Text style={styles.submitText}>
              Try Again
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
  submitBox: {
    backgroundColor: '#1fbd67',
    height: height / 20,
    width: width * 0.85,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textBox: {
    backgroundColor: '#0f89ce',
    height: height * 0.25,
    width: width * 0.85,
    borderRadius: 15,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  number: {
    fontFamily: 'AppleSDGothicNeo-Light',
    color: 'white',
    fontSize: 35,
    textAlign: 'right',
    paddingVertical: 30
  },
  text: {
    fontFamily: 'AppleSDGothicNeo-Light',
    color: 'white',
    fontSize: 35,
    textAlign: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 90
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
