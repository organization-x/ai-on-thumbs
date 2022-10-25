import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
import { symbol } from 'prop-types'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 1 Screen 2: Face Finder Screen')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course4page2_12 ({ navigation }) {


  const [inputdog, setInputDog] = React.useState("     e.g. #1-4     ")
  const [inputblanket, setInputBlanket] = React.useState("     e.g. #1-4     ")
  const [inputguitar, setInputGuitar] = React.useState("     e.g. #1-4     ")
  const [inputfloppydisc, setInputFloppyDisc] = React.useState("     e.g. #1-4     ")

  const [numItemsTyped, setNumItemsTyped] = React.useState(0);
  const [requireguessDog, setrequireguessDog] = React.useState(true);
  const [requireguessBlanket, setrequireguessBlanket] = React.useState(true);
  const [requireguessGuitar, setrequireguessGuitar] = React.useState(true);
  const [requireguessFloppyDisc, setrequireguessFloppyDisc] = React.useState(true);
  
  const [lowerScreenText, setLowerScreenText] = React.useState("Type your guess for every item! (i.e. 1 for dog if you think that dog matches with 1)")
  
  
  const handleInput = (num, value) => {
    if (num == 1) {
      setInputDog(value)
      setNumItemsTyped(numItemsTyped + 1)
      console.log(numItemsTyped)
      setrequireguessDog(false)
      console.log(requireguessDog)
    } else if (num == 2) {
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
    } else if (num == 4) {
      setInputFloppyDisc(value)
      setNumItemsTyped(numItemsTyped + 1)
      console.log(numItemsTyped)
      setrequireguessFloppyDisc(false)
      console.log(requireguessFloppyDisc)
    }
  }

  const buttonPressable = (requireguessDog, requireguessFloppyDisc, requireguessBlanket, requireguessGuitar) => {
    if (numItemsTyped == 4) {
    // if (requireguessDog == false && requireguessFloppyDisc == false && requireguessGuitar && requireguessBlanket) {
        navigation.navigate('Course4page2_13')
    } else {
        // set bottom text to "require more inputs or something"
        setLowerScreenText("You need to enter at least one more guess before moving on!")
    }
  }

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
  )

  return (
    
    
    <DismissKeyboard>
      <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>12/16</Text>
      </View>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
              <View style={styles.rectangle}>
                  <Image style={styles.image} source={require('../../assets/course_4/dog.png')} />
              </View>
              
              <TextInput
                  editable={requireguessDog}
                  style={styles.input}
                  placeholder={inputdog}
                  clearTextOnFocus
                  onChangeText={(value) => handleInput(1, value)}
                  keyboardType="numeric"
              />
          </View>
          <View style={styles.rowContainer}>
              <View style={styles.rectangle}>
                  <Image style={styles.image} source={require('../../assets/course_4/blanket.png')} />
              </View>
              <TextInput
                      editable={requireguessBlanket}
                      style={styles.input}
                      placeholder={inputblanket}
                      clearTextOnFocus
                      onChangeText={(value) => handleInput(2, value)}
                      keyboardType="numeric"
                  />
              </View>
          <View style={styles.rowContainer}>
              <View style={styles.rectangle}>
                  <Image style={styles.image} source={require('../../assets/course_4/guitar.png')} />
              </View>
              <TextInput
                      editable={requireguessGuitar}
                      style={styles.input}
                      
                      placeholder={inputguitar}
                      clearTextOnFocus
                  
                      onChangeText={(value) => handleInput(3, value)}
                      keyboardType="numeric"
                  />
          </View>
          <View style={styles.rowContainer}>
              <View style={styles.rectangle}>
                  <Image style={styles.image} source={require('../../assets/course_4/floppydisc.png')} />
              </View>
              <TextInput
                      editable={requireguessFloppyDisc}
                      style={styles.input}
                      
                      placeholder={inputfloppydisc}
                      clearTextOnFocus
                      
                      onChangeText={(value) => handleInput(4, value)}
                      keyboardType="numeric"
                  />
          </View>
              <Text style={styles.textlower}>{lowerScreenText}</Text>
              <TouchableOpacity
                  onPress={() => buttonPressable(requireguessDog, requireguessFloppyDisc, requireguessBlanket, requireguessGuitar)}
                  underlayColor='#fff'
                  activeOpacity={0.3}
              >
                  <View style={styles.submitBox}>
                          <Text style={styles.submitText}>
                              Submit
                          </Text>
                  </View>
              </TouchableOpacity>
        </View
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
    width: "50%",
    height: "78%",
    alignItems: "center",
    marginBottom: height / 5,
    justifyContent: "center"
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
    backgroundColor: "#1fbd67",
    height: height/20,
    width: width*0.85,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50
  },
  submitText: {
    fontFamily: "AppleSDGothicNeo-Light",
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: "bold"
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
    borderColor: "#1fbd67",
    height: "65%",
    margin: 12,
    borderWidth: 1,
    padding: 5,
    color: 'white'
  },
  textlower: {
    marginBottom: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
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
  },
})
