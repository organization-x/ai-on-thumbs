import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { useRoute } from '@react-navigation/native'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Quiz2Question2Wrong ({ navigation }) {
  const route = useRoute()
  const correctAnswer = 2
  const incorrectAnswer = route.params.selected

  const textColor1 = incorrectAnswer === 1 ? 'white' : ''
  const textColor2 = incorrectAnswer === 2 ? 'white' : ''
  const textColor3 = incorrectAnswer === 3 ? 'white' : ''

  const answerStyle1 =
    correctAnswer === 1
      ? '#1FBD67'
      : incorrectAnswer === 1
        ? '#BD1F1F'
        : '#D9D9D9'
  const answerStyle2 =
    correctAnswer === 2
      ? '#1FBD67'
      : incorrectAnswer === 2
        ? '#BD1F1F'
        : '#D9D9D9'
  const answerStyle3 =
    correctAnswer === 3
      ? '#1FBD67'
      : incorrectAnswer === 3
        ? '#BD1F1F'
        : '#D9D9D9'

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Facial Recognition Quiz II</Text>
      </View>
      <Text style={styles.question}>
        Close, but answer #{correctAnswer} is correct.
      </Text>
      <View style={styles.answerContainer}>
        {/* answer option 1 */}
        <View style={[styles.answer, { backgroundColor: answerStyle1 }]}>
          <Text style={[styles.answerText, { color: textColor1 }]}>
            The computer looks for parts of facial features
          </Text>
        </View>
        {/* answer option 2 */}
        <View style={[styles.answer, { backgroundColor: answerStyle2 }]}>
          <Text style={[styles.answerText, { color: textColor2 }]}>
            The computer scans for pixel patterns of facial features in the photo such as nose, eyes, and ears
          </Text>
        </View>
        {/* answer option 3 */}
        <View style={[styles.answer, { backgroundColor: answerStyle3 }]}>
          <Text style={[styles.answerText, { color: textColor3 }]}>
            The computer finds images of human face in the internet and compares similarity
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Quiz2Score')
        }}
      >
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Keep Going!</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
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
    marginBottom: height / 20
  },
  question: {
    color: 'white',
    fontWeight: '500',
    fontSize: height / 30,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 20
  },
  answer: {
    marginBottom: height / 40,
    backgroundColor: '#D9D9D9',
    height: height / 10,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    alignSelf: 'center',
    padding: width / 50
  },
  answerText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: height / 50,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  answerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  submitButton: {
    marginBottom: height / 20,
    backgroundColor: '#1fbd67',
    height: height / 10,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  submitButtonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: height / 30,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
  }
})
