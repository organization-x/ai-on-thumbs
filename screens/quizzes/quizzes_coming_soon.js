import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import colors from '../../config/colors'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function ComingSoon ({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.interactive}>
        <Text style={styles.text}>Quizzes for all four lessons are on the way!</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Courses')
        }}
      >
        <View style={styles.returnButton}>
          <Text style={styles.returnText}>
            Return to courses
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background

  },
  number: {
    fontSize: 28,
    color: 'white',
    textAlign: 'right'
  },
  box: {
    backgroundColor: colors.primary,
    color: 'white',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 45,
    textAlign: 'center'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 48,
    width: '100%',
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: '100%',
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
  },
  returnButton: {
    marginTop: 150,
    backgroundColor: '#0f89ce',
    height: height / 10,
    width: width / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 100
  },
  returnText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold'
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
