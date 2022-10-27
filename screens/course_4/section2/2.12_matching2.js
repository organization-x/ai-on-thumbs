import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import colors from '../../../config/colors'
import HomeButton from '../../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 4 Screen 10 Section 2: Backpropagation Matching Round 2')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course4Rematch ({ navigation }) {
  const [inputdog, setInputDog] = React.useState('     e.g. #1-4     ')
  const [inputblanket, setInputBlanket] = React.useState('     e.g. #1-4     ')
  const [inputguitar, setInputGuitar] = React.useState('     e.g. #1-4     ')
  const [inputfloppydisc, setInputFloppyDisc] = React.useState('     e.g. #1-4     ')

  const [numItemsTyped, setNumItemsTyped] = React.useState(0)
  const [requireguessDog, setrequireguessDog] = React.useState(true)
  const [requireguessBlanket, setrequireguessBlanket] = React.useState(true)
  const [requireguessGuitar, setrequireguessGuitar] = React.useState(true)
  const [requireguessFloppyDisc, setrequireguessFloppyDisc] = React.useState(true)

  const [lowerScreenText, setLowerScreenText] = React.useState('Type your guess for every item! (Ex: Type 1 in the box across from the dog if you think dog and 1 are a match!)')

  const handleInput = (num, value) => {
    if (num === 1) {
      setInputDog(value)
      setNumItemsTyped(numItemsTyped + 1)
      console.log(numItemsTyped)
      setrequireguessDog(false)
      console.log(requireguessDog)
    } else if (num === 2) {
      setInputBlanket(value)
      setNumItemsTyped(numItemsTyped + 1)
      console.log(numItemsTyped)
      setrequireguessBlanket(false)
      console.log(requireguessBlanket)
    } else if (num === 3) {
      setInputGuitar(value)
      setNumItemsTyped(numItemsTyped + 1)
      console.log(numItemsTyped)
      setrequireguessGuitar(false)
      console.log(requireguessGuitar)
    } else if (num === 4) {
      setInputFloppyDisc(value)
      setNumItemsTyped(numItemsTyped + 1)
      console.log(numItemsTyped)
      setrequireguessFloppyDisc(false)
      console.log(requireguessFloppyDisc)
    }
  }

  const buttonPressable = (numItemsTyped) => {
    if (numItemsTyped === 4) {
      navigation.navigate('Course4BPInteractiveCongrats')
    } else {
      setLowerScreenText('You need to enter at least one more guess before moving on!')
    }
  }

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (

    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.top}>
          <HomeButton navigation={navigation} />
          <Text style={styles.number}>10/14</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
              <Image style={styles.image} source={require('../../../assets/course_4/dog.png')} />
            </View>

            <TextInput
              editable={requireguessDog}
              style={styles.input}
              placeholder={inputdog}
              clearTextOnFocus
              onChangeText={(value) => handleInput(1, value)}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
              <Image style={styles.image} source={require('../../../assets/course_4/blanket.png')} />
            </View>
            <TextInput
              editable={requireguessBlanket}
              style={styles.input}
              placeholder={inputblanket}
              clearTextOnFocus
              onChangeText={(value) => handleInput(2, value)}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
              <Image style={styles.image} source={require('../../../assets/course_4/guitar.png')} />
            </View>
            <TextInput
              editable={requireguessGuitar}
              style={styles.input}
              placeholder={inputguitar}
              clearTextOnFocus
              onChangeText={(value) => handleInput(3, value)}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
              <Image style={styles.image} source={require('../../../assets/course_4/floppydisc.png')} />
            </View>
            <TextInput
              editable={requireguessFloppyDisc}
              style={styles.input}
              placeholder={inputfloppydisc}
              clearTextOnFocus
              onChangeText={(value) => handleInput(4, value)}
              keyboardType='numeric'
            />
          </View>
          <Text style={styles.textlower}>{lowerScreenText}</Text>
          <TouchableOpacity
            onPress={() => buttonPressable(numItemsTyped)}
            underlayColor='#fff'
            activeOpacity={0.3}
          >
            <View style={styles.submitBox}>
              <Text style={styles.submitText}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboard>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  rowContainer: {
    flex: 1.5,
    marginTop: 40,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  rectangle: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '50%',
    height: '90%',
    alignItems: 'center',
    marginBottom: height / 5,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    marginTop: '0%',
    fontSize: height / 40,
    fontWeight: 'bold'
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
    fontFamily: 'AppleSDGothicNeo-Light',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '15%',
    marginBottom: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold'
  },
  input: {
    borderRadius: 10,
    borderColor: '#1fbd67',
    height: '65%',
    margin: 12,
    borderWidth: 1,
    padding: 5,
    color: 'white'
  },
  textlower: {
    marginBottom: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  footerButtons: {
    marginTop: 60,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
  }
})
