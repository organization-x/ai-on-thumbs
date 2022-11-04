import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import colors from '../../../config/colors'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.returnButton}>
    <Text style={styles.returnButtonText}>{title}</Text>
  </TouchableOpacity>
)

export default function Quiz4Score ({ navigation }) {
  let correct = 0
  /* calculate how many questions the user got correct */
  if (global.q4q1Choice === 2) {
    correct++
  }
  if (global.q4q2Choice === 1) {
    correct++
  }
  if (global.q4q3Choice === 2) {
    correct++
  }

  const total = 3
  const score = correct / total
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>NN Quiz I</Text>
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
    justifyContent: 'center'
  },
  headerText: {
    borderRadius: 15,
    fontSize: 30,
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
    padding: width / 30,
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
    fontSize: 40,
    textAlign: 'center'
  },
  scoreText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 60,
    textAlign: 'center',
    color: '#1FBD67'
  },
  resultsText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center'
  }
})
