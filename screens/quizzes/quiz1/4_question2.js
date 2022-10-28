import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Quiz1Question2 ({ navigation }) {
  const [selected, setSelected] = React.useState(0)
  const [answerStyle1, setStyle1] = React.useState('#D9D9D9')
  const [answerStyle2, setStyle2] = React.useState('#D9D9D9')
  const [answerStyle3, setStyle3] = React.useState('#D9D9D9')
  const [answerStyle4, setStyle4] = React.useState('#D9D9D9')
  const optionPress = (selected) => {
    setSelected(selected)
    setStyle1(selected === 1 ? '#1FBD67' : '#D9D9D9')
    setStyle2(selected === 2 ? '#1FBD67' : '#D9D9D9')
    setStyle3(selected === 3 ? '#1FBD67' : '#D9D9D9')
    setStyle4(selected === 4 ? '#1FBD67' : '#D9D9D9')
    global.q1q2Choice = selected
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Facial Recognition Quiz I</Text>
      </View>
      <Text style={styles.question}>
        #2. How do computers interpret photos?
      </Text>
      <View style={styles.answerContainer}>
        {/* answer option 1 */}
        <TouchableOpacity onPress={() => optionPress(1)}>
          <View style={[styles.answer, { backgroundColor: answerStyle1 }]}>
            <Text style={styles.answerText}>
              They interpret the numerical values of each pixel
            </Text>
          </View>
        </TouchableOpacity>
        {/* answer option 2 */}
        <TouchableOpacity onPress={() => optionPress(2)}>
          <View style={[styles.answer, { backgroundColor: answerStyle2 }]}>
            <Text style={styles.answerText}>
              They compare the photo to a database of photos it has
            </Text>
          </View>
        </TouchableOpacity>
        {/* answer option 3 */}
        <TouchableOpacity onPress={() => optionPress(3)}>
          <View style={[styles.answer, { backgroundColor: answerStyle3 }]}>
            <Text style={styles.answerText}>
              They interpret photos through the colors of each pixel
            </Text>
          </View>
        </TouchableOpacity>
        {/* answer option 4 */}
        <TouchableOpacity onPress={() => optionPress(4)}>
          <View style={[styles.answer, { backgroundColor: answerStyle4 }]}>
            <Text style={styles.answerText}>
              They interpret the text value of each pixel
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (selected > 0) {
            navigation.navigate(
              selected === 1 ? 'Quiz1Question3' : 'Quiz1Question2Wrong'
            )
          }
        }}
      >
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
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
    marginBottom: height / 20
  },
  question: {
    color: 'white',
    fontWeight: '500',
    fontSize: 30,
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
    fontSize: 15,
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
    fontSize: 25,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
  }
})
