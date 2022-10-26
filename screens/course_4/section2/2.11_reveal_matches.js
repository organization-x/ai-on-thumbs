import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 1 Screen 2: Face Finder Screen')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course4page2_11 ({ navigation }) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_11';

  // const [inputdog, setInputDog] = React.useState("     e.g. #1-4     ")
  // const [inputblanket, setInputBlanket] = React.useState("     e.g. #1-4     ")
  // const [inputguitar, setInputGuitar] = React.useState("     e.g. #1-4     ")
  // const [inputfloppydisc, setInputFloppyDisc] = React.useState("     e.g. #1-4     ")

  // const [numItemsTyped, setNumItemsTyped] = React.useState(0);
  // const [requireguessDog, setrequireguessDog] = React.useState(true);
  // const [requireguessBlanket, setrequireguessBlanket] = React.useState(true);
  // const [requireguessGuitar, setrequireguessGuitar] = React.useState(true);
  // const [requireguessFloppyDisc, setrequireguessFloppyDisc] = React.useState(true);
  
  

  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <HomeButton navigation={navigation}/>
          <Text style={styles.number}>8/13</Text>
      </View>
        <View style={styles.rowcontainer}>
          <Text style={styles.bigText}>Here are the actual matches! Make sure to remember them for the next screen...</Text>
        </View>
        <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
                <Image style={styles.image} source={require('../../../assets/course_4/dog.png')} />
            </View>
            
            <View style={styles.rectangle}>
              <Text style={styles.number}>2</Text>
            </View>
            
        </View>
        <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
                <Image style={styles.image} source={require('../../../assets/course_4/blanket.png')} />
            </View>
            <View style={styles.rectangle}>
              <Text style={styles.number}>4</Text>
            </View>

        </View>
        <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
                <Image style={styles.image} source={require('../../../assets/course_4/guitar.png')} />
            </View>
            <View style={styles.rectangle}>
              <Text style={styles.number}>3</Text>
            </View>
            
        </View>
        <View style={styles.rowContainer}>
            <View style={styles.rectangle}>
                <Image style={styles.image} source={require('../../../assets/course_4/floppydisc.png')} />
            </View>
            <View style={styles.rectangle}>
              <Text style={styles.number}>1</Text>
            </View>
            
        </View>
          <View style={styles.footerButtons}>
            <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
        </View>
    </View>

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
    width: "45%",
    height: "78%",
    alignItems: "center",
    marginBottom: height / 5,
    justifyContent: "center",
    margin:5
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
  footerButtons: {
    marginBottom: 20,
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
