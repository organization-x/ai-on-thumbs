import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import colors from '../../../config/colors'
// import * as Analytics from 'expo-firebase-analytics'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
// Analytics.setCurrentScreen('Quiz 2 Score')
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.returnButton}>
    <Text style={styles.returnButtonText}>{title}</Text>
  </TouchableOpacity>
)

export default function Quiz2Score ({ navigation }) {
  let correct = 0
  /* calculate how many questions the user got correct */
  if (global.q2q1Choice === 1) {
    correct++
  }
  if (global.q2q2Choice === 2) {
    correct++
  }

  const total = 2
  const score = correct / total
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Facial Recognition Quiz II</Text>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Image source={require('../../../assets/quizzes/score_icon.png')} style={styles.image} />
          <Text style={styles.congratsText}>Congrats!</Text>
          <Text style={styles.scoreText}>{Math.floor(score * 100)}% Score</Text>
          <Text style={styles.resultsText}>
            You correctly answered{' '}
            <Text style={[styles.resultsText, { color: '#1FBD67' }]}>
              {correct}
            </Text>
            {' '}out of{' '}
            <Text style={[styles.resultsText, { color: '#0f89ce' }]}>
              {total} questions
            </Text>
          </Text>
        </View>
      </View>
      <AppButton
        title='Return to quizzes'
        onPress={() => navigation.navigate('QuizzesScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: width / 100
  },
  headerText: {
    borderRadius: 15,
    fontSize: width / 14,
    color: 'white'
  },
  headerBackground: {
    width,
    height: height / 10,
    backgroundColor: '#1FBD67',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height / 10
  },
  returnButton: {
    marginBottom: height / 20,
    backgroundColor: '#0f89ce',
    height: height / 10,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  returnButtonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF'
  },
  scoreContainer: {
    flex: 1
  },
  scoreBox: {
    width: width / 1.2,
    height: height / 1.75,
    backgroundColor: '#D9D9D9',
    borderRadius: 25
  },
  image: {
    resizeMode: 'contain',
    height: width / 2.5,
    width: width / 2.5,
    aspectRatio: 1,
    alignSelf: 'center',
    marginBottom: height / 100
  },
  congratsText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: height / 30,
    textAlign: 'center'
  },
  scoreText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: height / 10,
    textAlign: 'center',
    color: '#1FBD67'
  },
  resultsText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: height / 30,
    textAlign: 'center'
  }
})
