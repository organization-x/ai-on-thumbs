import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
// import * as Analytics from 'expo-firebase-analytics'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
// Analytics.setCurrentScreen('Quiz 3 Start')
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.startButton}>
    <Text style={styles.startButtonText}>{title}</Text>
  </TouchableOpacity>
)

export default function Quiz3Start ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>KNN Quiz I</Text>
        <Text style={styles.subText}>2 Questions</Text>
      </View>
      <AppButton
        title="Let's Get Started!"
        onPress={() => navigation.navigate('Quiz3Question1')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1FBD67',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width / 100
  },
  titleText: {
    marginBottom: height / 40,
    fontWeight: '500',
    fontSize:  width / 12,
    textAlign: 'center',
    color: '#FFF'
  },
  subText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width / 14,
    textAlign: 'center',
    color: '#FFF'
  },
  startButton: {
    marginBottom: height / 20,
    backgroundColor: '#0f89ce',
    height: height / 10,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  startButtonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: height / 30,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
